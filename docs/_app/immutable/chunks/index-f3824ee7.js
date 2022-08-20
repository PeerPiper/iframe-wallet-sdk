var js_cookie = { exports: {} };
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
(function(module, exports) {
  (function(factory) {
    var registeredInModuleLoader;
    {
      module.exports = factory();
      registeredInModuleLoader = true;
    }
    if (!registeredInModuleLoader) {
      var OldCookies = window.Cookies;
      var api = window.Cookies = factory();
      api.noConflict = function() {
        window.Cookies = OldCookies;
        return api;
      };
    }
  })(function() {
    function extend() {
      var i = 0;
      var result = {};
      for (; i < arguments.length; i++) {
        var attributes = arguments[i];
        for (var key in attributes) {
          result[key] = attributes[key];
        }
      }
      return result;
    }
    function decode(s) {
      return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function init(converter) {
      function api() {
      }
      function set2(key, value, attributes) {
        if (typeof document === "undefined") {
          return;
        }
        attributes = extend({
          path: "/"
        }, api.defaults, attributes);
        if (typeof attributes.expires === "number") {
          attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e5);
        }
        attributes.expires = attributes.expires ? attributes.expires.toUTCString() : "";
        try {
          var result = JSON.stringify(value);
          if (/^[\{\[]/.test(result)) {
            value = result;
          }
        } catch (e) {
        }
        value = converter.write ? converter.write(value, key) : encodeURIComponent(String(value)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);
        key = encodeURIComponent(String(key)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
        var stringifiedAttributes = "";
        for (var attributeName in attributes) {
          if (!attributes[attributeName]) {
            continue;
          }
          stringifiedAttributes += "; " + attributeName;
          if (attributes[attributeName] === true) {
            continue;
          }
          stringifiedAttributes += "=" + attributes[attributeName].split(";")[0];
        }
        return document.cookie = key + "=" + value + stringifiedAttributes;
      }
      function get2(key, json) {
        if (typeof document === "undefined") {
          return;
        }
        var jar = {};
        var cookies = document.cookie ? document.cookie.split("; ") : [];
        var i = 0;
        for (; i < cookies.length; i++) {
          var parts = cookies[i].split("=");
          var cookie = parts.slice(1).join("=");
          if (!json && cookie.charAt(0) === '"') {
            cookie = cookie.slice(1, -1);
          }
          try {
            var name = decode(parts[0]);
            cookie = (converter.read || converter)(cookie, name) || decode(cookie);
            if (json) {
              try {
                cookie = JSON.parse(cookie);
              } catch (e) {
              }
            }
            jar[name] = cookie;
            if (key === name) {
              break;
            }
          } catch (e) {
          }
        }
        return key ? jar[key] : jar;
      }
      api.set = set2;
      api.get = function(key) {
        return get2(key, false);
      };
      api.getJSON = function(key) {
        return get2(key, true);
      };
      api.remove = function(key, attributes) {
        set2(key, "", extend(attributes, {
          expires: -1
        }));
      };
      api.defaults = {};
      api.withConverter = init;
      return api;
    }
    return init(function() {
    });
  });
})(js_cookie);
const Cookies = js_cookie.exports;
const DEFAULT_COOKIE_TTL = 365;
const CROSS_ORIGIN_IFRAME = amIInsideACrossOriginIframe();
const DEFAULT_SECURE = CROSS_ORIGIN_IFRAME ? true : false;
const DEFAULT_SAMESITE = CROSS_ORIGIN_IFRAME ? "None" : "Lax";
function amIInsideACrossOriginIframe() {
  try {
    return !Boolean(window.top.location.href);
  } catch (err) {
    return true;
  }
}
class CookieStore {
  constructor({
    ttl = DEFAULT_COOKIE_TTL,
    secure = DEFAULT_SECURE,
    sameSite = DEFAULT_SAMESITE
  } = {}) {
    this.ttl = ttl;
    this.secure = secure;
    this.sameSite = sameSite;
    return (async () => this)();
  }
  async get(key) {
    const value = Cookies.get(key);
    return typeof value === "string" ? value : void 0;
  }
  async set(key, value) {
    Cookies.set(key, value, this._constructCookieParams());
  }
  async remove(key) {
    Cookies.remove(key, this._constructCookieParams());
  }
  _constructCookieParams() {
    return {
      expires: this.ttl,
      secure: this.secure,
      sameSite: this.sameSite
    };
  }
}
class Store {
  constructor(dbName = "keyval-store", storeName = "keyval") {
    this.storeName = storeName;
    this._dbp = new Promise((resolve, reject) => {
      const openreq = indexedDB.open(dbName, 1);
      openreq.onerror = () => reject(openreq.error);
      openreq.onsuccess = () => resolve(openreq.result);
      openreq.onupgradeneeded = () => {
        openreq.result.createObjectStore(storeName);
      };
    });
  }
  _withIDBStore(type, callback) {
    return this._dbp.then((db) => new Promise((resolve, reject) => {
      const transaction = db.transaction(this.storeName, type);
      transaction.oncomplete = () => resolve();
      transaction.onabort = transaction.onerror = () => reject(transaction.error);
      callback(transaction.objectStore(this.storeName));
    }));
  }
}
let store;
function getDefaultStore() {
  if (!store)
    store = new Store();
  return store;
}
function get(key, store2 = getDefaultStore()) {
  let req;
  return store2._withIDBStore("readonly", (store3) => {
    req = store3.get(key);
  }).then(() => req.result);
}
function set(key, value, store2 = getDefaultStore()) {
  return store2._withIDBStore("readwrite", (store3) => {
    store3.put(value, key);
  });
}
function del(key, store2 = getDefaultStore()) {
  return store2._withIDBStore("readwrite", (store3) => {
    store3.delete(key);
  });
}
const DEFAULT_DATABASE_NAME = "ImmortalDB";
const DEFAULT_STORE_NAME = "key-value-pairs";
class IndexedDbStore {
  constructor(dbName = DEFAULT_DATABASE_NAME, storeName = DEFAULT_STORE_NAME) {
    this.store = new Store(dbName, storeName);
    return (async () => {
      try {
        await this.store._dbp;
      } catch (err) {
        if (err.name === "SecurityError") {
          return null;
        } else {
          throw err;
        }
      }
      return this;
    })();
  }
  async get(key) {
    const value = await get(key, this.store);
    return typeof value === "string" ? value : void 0;
  }
  async set(key, value) {
    await set(key, value, this.store);
  }
  async remove(key) {
    await del(key, this.store);
  }
}
class StorageApiWrapper {
  constructor(store2) {
    this.store = store2;
    return (async () => this)();
  }
  async get(key) {
    const value = this.store.getItem(key);
    return typeof value === "string" ? value : void 0;
  }
  async set(key, value) {
    this.store.setItem(key, value);
  }
  async remove(key) {
    this.store.removeItem(key);
  }
}
class LocalStorageStore extends StorageApiWrapper {
  constructor() {
    super(window.localStorage);
  }
}
class SessionStorageStore extends StorageApiWrapper {
  constructor() {
    super(window.sessionStorage);
  }
}
const cl = console.log;
const DEFAULT_KEY_PREFIX = "_immortal|";
const WINDOW_IS_DEFINED = typeof window !== "undefined";
const DEFAULT_STORES = [CookieStore];
try {
  if (WINDOW_IS_DEFINED && window.indexedDB) {
    DEFAULT_STORES.push(IndexedDbStore);
  }
} catch (err) {
}
try {
  if (WINDOW_IS_DEFINED && window.localStorage) {
    DEFAULT_STORES.push(LocalStorageStore);
  }
} catch (err) {
}
function arrayGet(arr, index, _default = null) {
  if (index in arr) {
    return arr[index];
  }
  return _default;
}
function countUniques(iterable) {
  const m = /* @__PURE__ */ new Map();
  let eles = iterable.slice();
  for (const ele of eles) {
    let count = 0;
    for (const obj of eles) {
      if (ele === obj) {
        count += 1;
      }
    }
    if (count > 0) {
      m.set(ele, count);
      eles = eles.filter((obj) => obj !== ele);
    }
  }
  return m;
}
class ImmortalStorage {
  constructor(stores = DEFAULT_STORES) {
    this.stores = [];
    this.onReady = (async () => {
      this.stores = (await Promise.all(
        stores.map(async (StoreClassOrInstance) => {
          if (typeof StoreClassOrInstance === "object") {
            return StoreClassOrInstance;
          } else {
            try {
              return await new StoreClassOrInstance();
            } catch (err) {
              return null;
            }
          }
        })
      )).filter(Boolean);
    })();
  }
  async get(key, _default = null) {
    await this.onReady;
    const prefixedKey = `${DEFAULT_KEY_PREFIX}${key}`;
    const values = await Promise.all(
      this.stores.map(async (store2) => {
        try {
          return await store2.get(prefixedKey);
        } catch (err) {
          cl(err);
        }
      })
    );
    const counted = Array.from(countUniques(values).entries());
    counted.sort((a, b) => a[1] <= b[1]);
    let value;
    const [firstValue, firstCount] = arrayGet(counted, 0, [void 0, 0]);
    const [secondValue, secondCount] = arrayGet(counted, 1, [void 0, 0]);
    if (firstCount > secondCount || firstCount === secondCount && firstValue !== void 0) {
      value = firstValue;
    } else {
      value = secondValue;
    }
    if (value !== void 0) {
      await this.set(key, value);
      return value;
    } else {
      await this.remove(key);
      return _default;
    }
  }
  async set(key, value) {
    await this.onReady;
    key = `${DEFAULT_KEY_PREFIX}${key}`;
    await Promise.all(
      this.stores.map(async (store2) => {
        try {
          await store2.set(key, value);
        } catch (err) {
          cl(err);
        }
      })
    );
    return value;
  }
  async remove(key) {
    await this.onReady;
    key = `${DEFAULT_KEY_PREFIX}${key}`;
    await Promise.all(
      this.stores.map(async (store2) => {
        try {
          await store2.remove(key);
        } catch (err) {
          cl(err);
        }
      })
    );
  }
}
const ImmortalDB = new ImmortalStorage();
export {
  CookieStore,
  DEFAULT_KEY_PREFIX,
  DEFAULT_STORES,
  ImmortalDB,
  ImmortalStorage,
  IndexedDbStore,
  LocalStorageStore,
  SessionStorageStore
};
//# sourceMappingURL=index-f3824ee7.js.map
