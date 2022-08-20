import { N as NativeEventType, M as MessageType, R as Resolution, a as NativeErrorName, E as ErrorCode, h as handlers } from "./index-4da2393d.js";
import { C, I, g, b, c, h, l } from "./index-4da2393d.js";
import "./index-f765a89f.js";
import "./preload-helper-cc76a931.js";
const createDestructor = (localName, log) => {
  const callbacks = [];
  let destroyed = false;
  return {
    destroy(error) {
      if (!destroyed) {
        destroyed = true;
        log(`${localName}: Destroying connection`);
        callbacks.forEach((callback) => {
          callback(error);
        });
      }
    },
    onDestroy(callback) {
      destroyed ? callback() : callbacks.push(callback);
    }
  };
};
const createLogger = (debug) => {
  return (...args) => {
    if (debug) {
      console.log("[Penpal]", ...args);
    }
  };
};
const serializeError = ({ name, message, stack }) => ({
  name,
  message,
  stack
});
const deserializeError = (obj) => {
  const deserializedError = new Error();
  Object.keys(obj).forEach((key) => deserializedError[key] = obj[key]);
  return deserializedError;
};
const connectCallReceiver = (info, serializedMethods, log) => {
  const { localName, local, remote, originForSending, originForReceiving } = info;
  let destroyed = false;
  const handleMessageEvent = (event) => {
    if (event.source !== remote || event.data.penpal !== MessageType.Call) {
      return;
    }
    if (originForReceiving !== "*" && event.origin !== originForReceiving) {
      log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
      return;
    }
    const callMessage = event.data;
    const { methodName, args, id: id2 } = callMessage;
    log(`${localName}: Received ${methodName}() call`);
    const createPromiseHandler = (resolution) => {
      return (returnValue) => {
        log(`${localName}: Sending ${methodName}() reply`);
        if (destroyed) {
          log(`${localName}: Unable to send ${methodName}() reply due to destroyed connection`);
          return;
        }
        const message = {
          penpal: MessageType.Reply,
          id: id2,
          resolution,
          returnValue
        };
        if (resolution === Resolution.Rejected && returnValue instanceof Error) {
          message.returnValue = serializeError(returnValue);
          message.returnValueIsError = true;
        }
        try {
          remote.postMessage(message, originForSending);
        } catch (err) {
          if (err.name === NativeErrorName.DataCloneError) {
            const errorReplyMessage = {
              penpal: MessageType.Reply,
              id: id2,
              resolution: Resolution.Rejected,
              returnValue: serializeError(err),
              returnValueIsError: true
            };
            remote.postMessage(errorReplyMessage, originForSending);
          }
          throw err;
        }
      };
    };
    new Promise((resolve) => resolve(serializedMethods[methodName].apply(serializedMethods, args))).then(createPromiseHandler(Resolution.Fulfilled), createPromiseHandler(Resolution.Rejected));
  };
  local.addEventListener(NativeEventType.Message, handleMessageEvent);
  return () => {
    destroyed = true;
    local.removeEventListener(NativeEventType.Message, handleMessageEvent);
  };
};
let id = 0;
const generateId = () => ++id;
const KEY_PATH_DELIMITER = ".";
const keyPathToSegments = (keyPath) => keyPath ? keyPath.split(KEY_PATH_DELIMITER) : [];
const segmentsToKeyPath = (segments) => segments.join(KEY_PATH_DELIMITER);
const createKeyPath = (key, prefix) => {
  const segments = keyPathToSegments(prefix || "");
  segments.push(key);
  return segmentsToKeyPath(segments);
};
const setAtKeyPath = (subject, keyPath, value) => {
  const segments = keyPathToSegments(keyPath);
  segments.reduce((prevSubject, key, idx) => {
    if (typeof prevSubject[key] === "undefined") {
      prevSubject[key] = {};
    }
    if (idx === segments.length - 1) {
      prevSubject[key] = value;
    }
    return prevSubject[key];
  }, subject);
  return subject;
};
const serializeMethods = (methods, prefix) => {
  const flattenedMethods = {};
  Object.keys(methods).forEach((key) => {
    const value = methods[key];
    const keyPath = createKeyPath(key, prefix);
    if (typeof value === "object") {
      Object.assign(flattenedMethods, serializeMethods(value, keyPath));
    }
    if (typeof value === "function") {
      flattenedMethods[keyPath] = value;
    }
  });
  return flattenedMethods;
};
const deserializeMethods = (flattenedMethods) => {
  const methods = {};
  for (const keyPath in flattenedMethods) {
    setAtKeyPath(methods, keyPath, flattenedMethods[keyPath]);
  }
  return methods;
};
const connectCallSender = (callSender, info, methodKeyPaths, destroyConnection, log) => {
  const { localName, local, remote, originForSending, originForReceiving } = info;
  let destroyed = false;
  log(`${localName}: Connecting call sender`);
  const createMethodProxy = (methodName) => {
    return (...args) => {
      log(`${localName}: Sending ${methodName}() call`);
      let iframeRemoved;
      try {
        if (remote.closed) {
          iframeRemoved = true;
        }
      } catch (e) {
        iframeRemoved = true;
      }
      if (iframeRemoved) {
        destroyConnection();
      }
      if (destroyed) {
        const error = new Error(`Unable to send ${methodName}() call due to destroyed connection`);
        error.code = ErrorCode.ConnectionDestroyed;
        throw error;
      }
      return new Promise((resolve, reject) => {
        const id2 = generateId();
        const handleMessageEvent = (event) => {
          if (event.source !== remote || event.data.penpal !== MessageType.Reply || event.data.id !== id2) {
            return;
          }
          if (originForReceiving !== "*" && event.origin !== originForReceiving) {
            log(`${localName} received message from origin ${event.origin} which did not match expected origin ${originForReceiving}`);
            return;
          }
          const replyMessage = event.data;
          log(`${localName}: Received ${methodName}() reply`);
          local.removeEventListener(NativeEventType.Message, handleMessageEvent);
          let returnValue = replyMessage.returnValue;
          if (replyMessage.returnValueIsError) {
            returnValue = deserializeError(returnValue);
          }
          (replyMessage.resolution === Resolution.Fulfilled ? resolve : reject)(returnValue);
        };
        local.addEventListener(NativeEventType.Message, handleMessageEvent);
        const callMessage = {
          penpal: MessageType.Call,
          id: id2,
          methodName,
          args
        };
        remote.postMessage(callMessage, originForSending);
      });
    };
  };
  const flattenedMethods = methodKeyPaths.reduce((api, name) => {
    api[name] = createMethodProxy(name);
    return api;
  }, {});
  Object.assign(callSender, deserializeMethods(flattenedMethods));
  return () => {
    destroyed = true;
  };
};
const startConnectionTimeout = (timeout, callback) => {
  let timeoutId;
  if (timeout !== void 0) {
    timeoutId = window.setTimeout(() => {
      const error = new Error(`Connection timed out after ${timeout}ms`);
      error.code = ErrorCode.ConnectionTimeout;
      callback(error);
    }, timeout);
  }
  return () => {
    clearTimeout(timeoutId);
  };
};
const handleSynAckMessageFactory = (parentOrigin, serializedMethods, destructor, log) => {
  const { destroy, onDestroy } = destructor;
  return (event) => {
    let originQualifies = parentOrigin instanceof RegExp ? parentOrigin.test(event.origin) : parentOrigin === "*" || parentOrigin === event.origin;
    if (!originQualifies) {
      log(`Child: Handshake - Received SYN-ACK from origin ${event.origin} which did not match expected origin ${parentOrigin}`);
      return;
    }
    log("Child: Handshake - Received SYN-ACK, responding with ACK");
    const originForSending = event.origin === "null" ? "*" : event.origin;
    const ackMessage = {
      penpal: MessageType.Ack,
      methodNames: Object.keys(serializedMethods)
    };
    window.parent.postMessage(ackMessage, originForSending);
    const info = {
      localName: "Child",
      local: window,
      remote: window.parent,
      originForSending,
      originForReceiving: event.origin
    };
    const destroyCallReceiver = connectCallReceiver(info, serializedMethods, log);
    onDestroy(destroyCallReceiver);
    const callSender = {};
    const destroyCallSender = connectCallSender(callSender, info, event.data.methodNames, destroy, log);
    onDestroy(destroyCallSender);
    return callSender;
  };
};
const areGlobalsAccessible = () => {
  try {
    clearTimeout();
  } catch (e) {
    return false;
  }
  return true;
};
const connectToParent = (options = {}) => {
  const { parentOrigin = "*", methods = {}, timeout, debug = false } = options;
  const log = createLogger(debug);
  const destructor = createDestructor("Child", log);
  const { destroy, onDestroy } = destructor;
  const serializedMethods = serializeMethods(methods);
  const handleSynAckMessage = handleSynAckMessageFactory(parentOrigin, serializedMethods, destructor, log);
  const sendSynMessage = () => {
    log("Child: Handshake - Sending SYN");
    const synMessage = { penpal: MessageType.Syn };
    const parentOriginForSyn = parentOrigin instanceof RegExp ? "*" : parentOrigin;
    window.parent.postMessage(synMessage, parentOriginForSyn);
  };
  const promise = new Promise((resolve, reject) => {
    const stopConnectionTimeout = startConnectionTimeout(timeout, destroy);
    const handleMessage = (event) => {
      if (!areGlobalsAccessible()) {
        return;
      }
      if (event.source !== parent || !event.data) {
        return;
      }
      if (event.data.penpal === MessageType.SynAck) {
        const callSender = handleSynAckMessage(event);
        if (callSender) {
          window.removeEventListener(NativeEventType.Message, handleMessage);
          stopConnectionTimeout();
          resolve(callSender);
        }
      }
    };
    window.addEventListener(NativeEventType.Message, handleMessage);
    sendSynMessage();
    onDestroy((error) => {
      window.removeEventListener(NativeEventType.Message, handleMessage);
      if (error) {
        reject(error);
      }
    });
  });
  return {
    promise,
    destroy() {
      destroy();
    }
  };
};
class Connection {
  constructor() {
  }
  async init(optHandlers) {
    const connection = connectToParent({
      methods: {
        ...handlers,
        ...optHandlers
      }
    });
    const parent2 = await connection.promise;
    return parent2;
  }
}
export {
  C as CONSTANTS,
  Connection,
  I as FrontEnd,
  g as generateMnemonic,
  b as generateRsaJwk,
  c as getLoadedKeys,
  h as handlers,
  l as loadSecrets
};
//# sourceMappingURL=index-858fc21b.js.map
