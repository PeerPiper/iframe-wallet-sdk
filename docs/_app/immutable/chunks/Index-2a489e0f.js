import { b as base64Js, a as buffer$3 } from "./index-683c0cee.js";
import { e as events$1 } from "./events-24eb7459.js";
import { _ as __vitePreload } from "./preload-helper-6b8a655d.js";
import { S as SvelteComponent, i as init$1, s as safe_not_equal, l as element, m as claim_element, n as children, h as detach, p as attr, q as set_style, K as add_render_callback, b as insert_hydration, L as add_resize_listener, f as transition_in, g as group_outros, t as transition_out, d as check_outros, o as onMount, F as create_slot, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, M as listen, N as prevent_default, O as is_function, P as component_subscribe, Q as set_store_value, R as globals, e as empty, w as create_component, x as claim_component, y as mount_component, B as destroy_component, r as text, u as claim_text, v as set_data, T as bubble, a as space, c as claim_space, E as noop$2 } from "./index-95820fb8.js";
import { w as writable } from "./index-6ab0de96.js";
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  var f2 = n.default;
  if (typeof f2 == "function") {
    var a = function() {
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
let wasm$1;
const heap = new Array(32).fill(void 0);
heap.push(void 0, null, true, false);
function getObject(idx) {
  return heap[idx];
}
let heap_next = heap.length;
function dropObject(idx) {
  if (idx < 36)
    return;
  heap[idx] = heap_next;
  heap_next = idx;
}
function takeObject(idx) {
  const ret = getObject(idx);
  dropObject(idx);
  return ret;
}
let WASM_VECTOR_LEN = 0;
let cachegetUint8Memory0 = null;
function getUint8Memory0() {
  if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm$1.memory.buffer) {
    cachegetUint8Memory0 = new Uint8Array(wasm$1.memory.buffer);
  }
  return cachegetUint8Memory0;
}
let cachedTextEncoder = new TextEncoder("utf-8");
const encodeString = typeof cachedTextEncoder.encodeInto === "function" ? function(arg, view) {
  return cachedTextEncoder.encodeInto(arg, view);
} : function(arg, view) {
  const buf = cachedTextEncoder.encode(arg);
  view.set(buf);
  return {
    read: arg.length,
    written: buf.length
  };
};
function passStringToWasm0(arg, malloc, realloc) {
  if (realloc === void 0) {
    const buf = cachedTextEncoder.encode(arg);
    const ptr2 = malloc(buf.length);
    getUint8Memory0().subarray(ptr2, ptr2 + buf.length).set(buf);
    WASM_VECTOR_LEN = buf.length;
    return ptr2;
  }
  let len = arg.length;
  let ptr = malloc(len);
  const mem = getUint8Memory0();
  let offset = 0;
  for (; offset < len; offset++) {
    const code2 = arg.charCodeAt(offset);
    if (code2 > 127)
      break;
    mem[ptr + offset] = code2;
  }
  if (offset !== len) {
    if (offset !== 0) {
      arg = arg.slice(offset);
    }
    ptr = realloc(ptr, len, len = offset + arg.length * 3);
    const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
    const ret = encodeString(arg, view);
    offset += ret.written;
  }
  WASM_VECTOR_LEN = offset;
  return ptr;
}
function isLikeNone(x) {
  return x === void 0 || x === null;
}
let cachegetInt32Memory0 = null;
function getInt32Memory0() {
  if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm$1.memory.buffer) {
    cachegetInt32Memory0 = new Int32Array(wasm$1.memory.buffer);
  }
  return cachegetInt32Memory0;
}
let cachedTextDecoder = new TextDecoder("utf-8", {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
function addHeapObject(obj2) {
  if (heap_next === heap.length)
    heap.push(heap.length + 1);
  const idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj2;
  return idx;
}
let cachegetFloat64Memory0 = null;
function getFloat64Memory0() {
  if (cachegetFloat64Memory0 === null || cachegetFloat64Memory0.buffer !== wasm$1.memory.buffer) {
    cachegetFloat64Memory0 = new Float64Array(wasm$1.memory.buffer);
  }
  return cachegetFloat64Memory0;
}
function debugString(val) {
  const type = typeof val;
  if (type == "number" || type == "boolean" || val == null) {
    return `${val}`;
  }
  if (type == "string") {
    return `"${val}"`;
  }
  if (type == "symbol") {
    const description2 = val.description;
    if (description2 == null) {
      return "Symbol";
    } else {
      return `Symbol(${description2})`;
    }
  }
  if (type == "function") {
    const name2 = val.name;
    if (typeof name2 == "string" && name2.length > 0) {
      return `Function(${name2})`;
    } else {
      return "Function";
    }
  }
  if (Array.isArray(val)) {
    const length2 = val.length;
    let debug2 = "[";
    if (length2 > 0) {
      debug2 += debugString(val[0]);
    }
    for (let i = 1; i < length2; i++) {
      debug2 += ", " + debugString(val[i]);
    }
    debug2 += "]";
    return debug2;
  }
  const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
  let className;
  if (builtInMatches.length > 1) {
    className = builtInMatches[1];
  } else {
    return toString.call(val);
  }
  if (className == "Object") {
    try {
      return "Object(" + JSON.stringify(val) + ")";
    } catch (_) {
      return "Object";
    }
  }
  if (val instanceof Error) {
    return `${val.name}: ${val.message}
${val.stack}`;
  }
  return className;
}
function generate_mnemonic() {
  var ret = wasm$1.generate_mnemonic();
  return takeObject(ret);
}
function seed_to_proxcryptor(seed) {
  var ret = wasm$1.seed_to_proxcryptor(addHeapObject(seed));
  return Proxcryptor.__wrap(ret);
}
function mnemonic_to_proxcryptor(mnemonic_str) {
  var ptr0 = passStringToWasm0(
    mnemonic_str,
    wasm$1.__wbindgen_malloc,
    wasm$1.__wbindgen_realloc
  );
  var len0 = WASM_VECTOR_LEN;
  var ret = wasm$1.mnemonic_to_proxcryptor(ptr0, len0);
  return Proxcryptor.__wrap(ret);
}
function generate_ed25519_keypair() {
  var ret = wasm$1.generate_ed25519_keypair();
  return SimpleKeypair.__wrap(ret);
}
function passArray8ToWasm0(arg, malloc) {
  const ptr = malloc(arg.length * 1);
  getUint8Memory0().set(arg, ptr / 1);
  WASM_VECTOR_LEN = arg.length;
  return ptr;
}
function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
function sign$1(secret_key_bytes, message) {
  try {
    const retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);
    var ptr0 = passArray8ToWasm0(message, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    wasm$1.sign(retptr, addHeapObject(secret_key_bytes), ptr0, len0);
    var r0 = getInt32Memory0()[retptr / 4 + 0];
    var r1 = getInt32Memory0()[retptr / 4 + 1];
    var v1 = getArrayU8FromWasm0(r0, r1).slice();
    wasm$1.__wbindgen_free(r0, r1 * 1);
    return v1;
  } finally {
    wasm$1.__wbindgen_add_to_stack_pointer(16);
  }
}
function verify(public_key, message, signature2) {
  var ret = wasm$1.verify(
    addHeapObject(public_key),
    addHeapObject(message),
    addHeapObject(signature2)
  );
  return ret !== 0;
}
function generate_ed25519_keypair_from_seed(secret2) {
  var ret = wasm$1.generate_ed25519_keypair_from_seed(addHeapObject(secret2));
  return SimpleKeypair.__wrap(ret);
}
function re_encrypt(target_keypair, encrypted_message, re_key) {
  var ret = wasm$1.re_encrypt(
    addHeapObject(target_keypair),
    addHeapObject(encrypted_message),
    addHeapObject(re_key)
  );
  return takeObject(ret);
}
function handleError(f2, args) {
  try {
    return f2.apply(this, args);
  } catch (e) {
    wasm$1.__wbindgen_exn_store(addHeapObject(e));
  }
}
class Proxcryptor {
  static __wrap(ptr) {
    const obj2 = Object.create(Proxcryptor.prototype);
    obj2.ptr = ptr;
    return obj2;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_proxcryptor_free(ptr);
  }
  static new(secret2) {
    var ret = wasm$1.proxcryptor_new(addHeapObject(secret2));
    return Proxcryptor.__wrap(ret);
  }
  public_key() {
    var ret = wasm$1.proxcryptor_public_key(this.ptr);
    return takeObject(ret);
  }
  public_key_base58() {
    var ret = wasm$1.proxcryptor_public_key_base58(this.ptr);
    return takeObject(ret);
  }
  public_key_jwk() {
    var ret = wasm$1.proxcryptor_public_key_jwk(this.ptr);
    return takeObject(ret);
  }
  self_encrypt(data2, tag) {
    var ptr0 = passArray8ToWasm0(data2, wasm$1.__wbindgen_malloc);
    var len0 = WASM_VECTOR_LEN;
    var ptr1 = passStringToWasm0(
      tag,
      wasm$1.__wbindgen_malloc,
      wasm$1.__wbindgen_realloc
    );
    var len1 = WASM_VECTOR_LEN;
    var ret = wasm$1.proxcryptor_self_encrypt(
      this.ptr,
      ptr0,
      len0,
      ptr1,
      len1
    );
    return takeObject(ret);
  }
  self_decrypt(encrypted_message) {
    var ret = wasm$1.proxcryptor_self_decrypt(
      this.ptr,
      addHeapObject(encrypted_message)
    );
    return takeObject(ret);
  }
  generate_re_key(public_key, tag) {
    var ptr0 = passStringToWasm0(
      tag,
      wasm$1.__wbindgen_malloc,
      wasm$1.__wbindgen_realloc
    );
    var len0 = WASM_VECTOR_LEN;
    var ret = wasm$1.proxcryptor_generate_re_key(
      this.ptr,
      addHeapObject(public_key),
      ptr0,
      len0
    );
    return takeObject(ret);
  }
  re_decrypt(rem) {
    var ret = wasm$1.proxcryptor_re_decrypt(this.ptr, addHeapObject(rem));
    return takeObject(ret);
  }
  sign(msg) {
    try {
      const retptr = wasm$1.__wbindgen_add_to_stack_pointer(-16);
      var ptr0 = passArray8ToWasm0(msg, wasm$1.__wbindgen_malloc);
      var len0 = WASM_VECTOR_LEN;
      wasm$1.proxcryptor_sign(retptr, this.ptr, ptr0, len0);
      var r0 = getInt32Memory0()[retptr / 4 + 0];
      var r1 = getInt32Memory0()[retptr / 4 + 1];
      var v1 = getArrayU8FromWasm0(r0, r1).slice();
      wasm$1.__wbindgen_free(r0, r1 * 1);
      return v1;
    } finally {
      wasm$1.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class SimpleKeypair {
  static __wrap(ptr) {
    const obj2 = Object.create(SimpleKeypair.prototype);
    obj2.ptr = ptr;
    return obj2;
  }
  __destroy_into_raw() {
    const ptr = this.ptr;
    this.ptr = 0;
    return ptr;
  }
  free() {
    const ptr = this.__destroy_into_raw();
    wasm$1.__wbg_simplekeypair_free(ptr);
  }
  public() {
    var ret = wasm$1.simplekeypair_public(this.ptr);
    return takeObject(ret);
  }
  secret() {
    var ret = wasm$1.simplekeypair_secret(this.ptr);
    return takeObject(ret);
  }
}
async function load(module, imports) {
  if (typeof Response === "function" && module instanceof Response) {
    if (typeof WebAssembly.instantiateStreaming === "function") {
      try {
        return await WebAssembly.instantiateStreaming(module, imports);
      } catch (e) {
        if (module.headers.get("Content-Type") != "application/wasm") {
          console.warn(
            "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
            e
          );
        } else {
          throw e;
        }
      }
    }
    const bytes = await module.arrayBuffer();
    return await WebAssembly.instantiate(bytes, imports);
  } else {
    const instance2 = await WebAssembly.instantiate(module, imports);
    if (instance2 instanceof WebAssembly.Instance) {
      return { instance: instance2, module };
    } else {
      return instance2;
    }
  }
}
async function init(input) {
  const imports = {};
  imports.wbg = {};
  imports.wbg.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
  };
  imports.wbg.__wbg_log_2d3255d249750bce = function(arg0, arg1) {
    console.log(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
    const obj2 = getObject(arg1);
    var ret = typeof obj2 === "string" ? obj2 : void 0;
    var ptr0 = isLikeNone(ret) ? 0 : passStringToWasm0(
      ret,
      wasm$1.__wbindgen_malloc,
      wasm$1.__wbindgen_realloc
    );
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  };
  imports.wbg.__wbindgen_is_object = function(arg0) {
    const val = getObject(arg0);
    var ret = typeof val === "object" && val !== null;
    return ret;
  };
  imports.wbg.__wbindgen_json_parse = function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_is_null = function(arg0) {
    var ret = getObject(arg0) === null;
    return ret;
  };
  imports.wbg.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === void 0;
    return ret;
  };
  imports.wbg.__wbindgen_boolean_get = function(arg0) {
    const v = getObject(arg0);
    var ret = typeof v === "boolean" ? v ? 1 : 0 : 2;
    return ret;
  };
  imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
    const obj2 = getObject(arg1);
    var ret = typeof obj2 === "number" ? obj2 : void 0;
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
  };
  imports.wbg.__wbindgen_object_clone_ref = function(arg0) {
    var ret = getObject(arg0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_get_2d1407dba3452350 = function(arg0, arg1) {
    var ret = getObject(arg0)[takeObject(arg1)];
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_getRandomValues_98117e9a7e993920 = function() {
    return handleError(function(arg0, arg1) {
      getObject(arg0).getRandomValues(getObject(arg1));
    }, arguments);
  };
  imports.wbg.__wbg_randomFillSync_64cc7d048f228ca8 = function() {
    return handleError(function(arg0, arg1, arg2) {
      getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
    }, arguments);
  };
  imports.wbg.__wbg_process_2f24d6544ea7b200 = function(arg0) {
    var ret = getObject(arg0).process;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_versions_6164651e75405d4a = function(arg0) {
    var ret = getObject(arg0).versions;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_node_4b517d861cbcb3bc = function(arg0) {
    var ret = getObject(arg0).node;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_is_string = function(arg0) {
    var ret = typeof getObject(arg0) === "string";
    return ret;
  };
  imports.wbg.__wbg_modulerequire_3440a4bcf44437db = function() {
    return handleError(function(arg0, arg1) {
      var ret = module.require(getStringFromWasm0(arg0, arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_crypto_98fc271021c7d2ad = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_msCrypto_a2cdb043d2bfe57f = function(arg0) {
    var ret = getObject(arg0).msCrypto;
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_is_function = function(arg0) {
    var ret = typeof getObject(arg0) === "function";
    return ret;
  };
  imports.wbg.__wbg_newnoargs_be86524d73f67598 = function(arg0, arg1) {
    var ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_next_c4151d46d5fa7097 = function(arg0) {
    var ret = getObject(arg0).next;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_next_7720502039b96d00 = function() {
    return handleError(function(arg0) {
      var ret = getObject(arg0).next();
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_done_b06cf0578e89ff68 = function(arg0) {
    var ret = getObject(arg0).done;
    return ret;
  };
  imports.wbg.__wbg_value_e74a542443d92451 = function(arg0) {
    var ret = getObject(arg0).value;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_iterator_4fc4ce93e6b92958 = function() {
    var ret = Symbol.iterator;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_get_4d0f21c2f823742e = function() {
    return handleError(function(arg0, arg1) {
      var ret = Reflect.get(getObject(arg0), getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_call_888d259a5fefc347 = function() {
    return handleError(function(arg0, arg1) {
      var ret = getObject(arg0).call(getObject(arg1));
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
    var ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_isArray_eb7ad55f2da67dde = function(arg0) {
    var ret = Array.isArray(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_instanceof_ArrayBuffer_764b6d4119231cb3 = function(arg0) {
    var ret = getObject(arg0) instanceof ArrayBuffer;
    return ret;
  };
  imports.wbg.__wbg_values_364ae56c608e6824 = function(arg0) {
    var ret = getObject(arg0).values();
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_342a24ca698edd87 = function(arg0, arg1) {
    var ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_isSafeInteger_0dfc6d38b7184f06 = function(arg0) {
    var ret = Number.isSafeInteger(getObject(arg0));
    return ret;
  };
  imports.wbg.__wbg_self_c6fbdfc2918d5e58 = function() {
    return handleError(function() {
      var ret = self.self;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_window_baec038b5ab35c54 = function() {
    return handleError(function() {
      var ret = window.window;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_globalThis_3f735a5746d41fbd = function() {
    return handleError(function() {
      var ret = globalThis.globalThis;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_global_1bc0b39582740e95 = function() {
    return handleError(function() {
      var ret = globalThis.global;
      return addHeapObject(ret);
    }, arguments);
  };
  imports.wbg.__wbg_buffer_397eaa4d72ee94dd = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_new_a7ce447f15ff496f = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_set_969ad0a60e51d320 = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
  };
  imports.wbg.__wbg_length_1eb8fc608a0d4cdb = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
  };
  imports.wbg.__wbg_instanceof_Uint8Array_08a1f3a179095e76 = function(arg0) {
    var ret = getObject(arg0) instanceof Uint8Array;
    return ret;
  };
  imports.wbg.__wbg_newwithlength_929232475839a482 = function(arg0) {
    var ret = new Uint8Array(arg0 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbg_subarray_8b658422a224f479 = function(arg0, arg1, arg2) {
    var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
  };
  imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(
      ret,
      wasm$1.__wbindgen_malloc,
      wasm$1.__wbindgen_realloc
    );
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
  };
  imports.wbg.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
  };
  imports.wbg.__wbindgen_memory = function() {
    var ret = wasm$1.memory;
    return addHeapObject(ret);
  };
  if (typeof input === "string" || typeof Request === "function" && input instanceof Request || typeof URL === "function" && input instanceof URL) {
    input = fetch(input);
  }
  const { instance: instance2, module } = await load(await input, imports);
  wasm$1 = instance2.exports;
  init.__wbindgen_wasm_module = module;
  return wasm$1;
}
var exports$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  generate_mnemonic,
  seed_to_proxcryptor,
  mnemonic_to_proxcryptor,
  generate_ed25519_keypair,
  sign: sign$1,
  verify,
  generate_ed25519_keypair_from_seed,
  re_encrypt,
  Proxcryptor,
  SimpleKeypair,
  default: init
});
const base64codes = [
  62,
  0,
  0,
  0,
  63,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  0,
  0,
  0,
  0,
  0,
  0,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51
];
function getBase64Code(charCode) {
  return base64codes[charCode - 43];
}
function base64_decode(str) {
  let missingOctets = str.endsWith("==") ? 2 : str.endsWith("=") ? 1 : 0;
  let n = str.length;
  let result = new Uint8Array(3 * (n / 4));
  let buffer2;
  for (let i = 0, j = 0; i < n; i += 4, j += 3) {
    buffer2 = getBase64Code(str.charCodeAt(i)) << 18 | getBase64Code(str.charCodeAt(i + 1)) << 12 | getBase64Code(str.charCodeAt(i + 2)) << 6 | getBase64Code(str.charCodeAt(i + 3));
    result[j] = buffer2 >> 16;
    result[j + 1] = buffer2 >> 8 & 255;
    result[j + 2] = buffer2 & 255;
  }
  return result.subarray(0, result.length - missingOctets);
}
const wasm_code = base64_decode(
);
var wasm = async () => {
  await init(wasm_code);
  return exports$1;
};
const getWallet = async () => wasm();
var base64$2 = {};
var __extends = commonjsGlobal && commonjsGlobal.__extends || function() {
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2)
        if (b2.hasOwnProperty(p))
          d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  return function(d, b) {
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
Object.defineProperty(base64$2, "__esModule", { value: true });
var INVALID_BYTE = 256;
var Coder$1 = function() {
  function Coder2(_paddingCharacter) {
    if (_paddingCharacter === void 0) {
      _paddingCharacter = "=";
    }
    this._paddingCharacter = _paddingCharacter;
  }
  Coder2.prototype.encodedLength = function(length2) {
    if (!this._paddingCharacter) {
      return (length2 * 8 + 5) / 6 | 0;
    }
    return (length2 + 2) / 3 * 4 | 0;
  };
  Coder2.prototype.encode = function(data2) {
    var out = "";
    var i = 0;
    for (; i < data2.length - 2; i += 3) {
      var c = data2[i] << 16 | data2[i + 1] << 8 | data2[i + 2];
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      out += this._encodeByte(c >>> 1 * 6 & 63);
      out += this._encodeByte(c >>> 0 * 6 & 63);
    }
    var left = data2.length - i;
    if (left > 0) {
      var c = data2[i] << 16 | (left === 2 ? data2[i + 1] << 8 : 0);
      out += this._encodeByte(c >>> 3 * 6 & 63);
      out += this._encodeByte(c >>> 2 * 6 & 63);
      if (left === 2) {
        out += this._encodeByte(c >>> 1 * 6 & 63);
      } else {
        out += this._paddingCharacter || "";
      }
      out += this._paddingCharacter || "";
    }
    return out;
  };
  Coder2.prototype.maxDecodedLength = function(length2) {
    if (!this._paddingCharacter) {
      return (length2 * 6 + 7) / 8 | 0;
    }
    return length2 / 4 * 3 | 0;
  };
  Coder2.prototype.decodedLength = function(s2) {
    return this.maxDecodedLength(s2.length - this._getPaddingLength(s2));
  };
  Coder2.prototype.decode = function(s2) {
    if (s2.length === 0) {
      return new Uint8Array(0);
    }
    var paddingLength = this._getPaddingLength(s2);
    var length2 = s2.length - paddingLength;
    var out = new Uint8Array(this.maxDecodedLength(length2));
    var op = 0;
    var i = 0;
    var haveBad = 0;
    var v0 = 0, v1 = 0, v2 = 0, v3 = 0;
    for (; i < length2 - 4; i += 4) {
      v0 = this._decodeChar(s2.charCodeAt(i + 0));
      v1 = this._decodeChar(s2.charCodeAt(i + 1));
      v2 = this._decodeChar(s2.charCodeAt(i + 2));
      v3 = this._decodeChar(s2.charCodeAt(i + 3));
      out[op++] = v0 << 2 | v1 >>> 4;
      out[op++] = v1 << 4 | v2 >>> 2;
      out[op++] = v2 << 6 | v3;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
      haveBad |= v2 & INVALID_BYTE;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (i < length2 - 1) {
      v0 = this._decodeChar(s2.charCodeAt(i));
      v1 = this._decodeChar(s2.charCodeAt(i + 1));
      out[op++] = v0 << 2 | v1 >>> 4;
      haveBad |= v0 & INVALID_BYTE;
      haveBad |= v1 & INVALID_BYTE;
    }
    if (i < length2 - 2) {
      v2 = this._decodeChar(s2.charCodeAt(i + 2));
      out[op++] = v1 << 4 | v2 >>> 2;
      haveBad |= v2 & INVALID_BYTE;
    }
    if (i < length2 - 3) {
      v3 = this._decodeChar(s2.charCodeAt(i + 3));
      out[op++] = v2 << 6 | v3;
      haveBad |= v3 & INVALID_BYTE;
    }
    if (haveBad !== 0) {
      throw new Error("Base64Coder: incorrect characters for decoding");
    }
    return out;
  };
  Coder2.prototype._encodeByte = function(b) {
    var result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 43;
    result += 62 - b >>> 8 & 62 - 43 - 63 + 47;
    return String.fromCharCode(result);
  };
  Coder2.prototype._decodeChar = function(c) {
    var result = INVALID_BYTE;
    result += (42 - c & c - 44) >>> 8 & -INVALID_BYTE + c - 43 + 62;
    result += (46 - c & c - 48) >>> 8 & -INVALID_BYTE + c - 47 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  };
  Coder2.prototype._getPaddingLength = function(s2) {
    var paddingLength = 0;
    if (this._paddingCharacter) {
      for (var i = s2.length - 1; i >= 0; i--) {
        if (s2[i] !== this._paddingCharacter) {
          break;
        }
        paddingLength++;
      }
      if (s2.length < 4 || paddingLength > 2) {
        throw new Error("Base64Coder: incorrect padding");
      }
    }
    return paddingLength;
  };
  return Coder2;
}();
base64$2.Coder = Coder$1;
var stdCoder = new Coder$1();
function encode$a(data2) {
  return stdCoder.encode(data2);
}
var encode_1$1 = base64$2.encode = encode$a;
function decode$7(s2) {
  return stdCoder.decode(s2);
}
var decode_1 = base64$2.decode = decode$7;
var URLSafeCoder = function(_super) {
  __extends(URLSafeCoder2, _super);
  function URLSafeCoder2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  URLSafeCoder2.prototype._encodeByte = function(b) {
    var result = b;
    result += 65;
    result += 25 - b >>> 8 & 0 - 65 - 26 + 97;
    result += 51 - b >>> 8 & 26 - 97 - 52 + 48;
    result += 61 - b >>> 8 & 52 - 48 - 62 + 45;
    result += 62 - b >>> 8 & 62 - 45 - 63 + 95;
    return String.fromCharCode(result);
  };
  URLSafeCoder2.prototype._decodeChar = function(c) {
    var result = INVALID_BYTE;
    result += (44 - c & c - 46) >>> 8 & -INVALID_BYTE + c - 45 + 62;
    result += (94 - c & c - 96) >>> 8 & -INVALID_BYTE + c - 95 + 63;
    result += (47 - c & c - 58) >>> 8 & -INVALID_BYTE + c - 48 + 52;
    result += (64 - c & c - 91) >>> 8 & -INVALID_BYTE + c - 65 + 0;
    result += (96 - c & c - 123) >>> 8 & -INVALID_BYTE + c - 97 + 26;
    return result;
  };
  return URLSafeCoder2;
}(Coder$1);
base64$2.URLSafeCoder = URLSafeCoder;
var urlSafeCoder = new URLSafeCoder();
function encodeURLSafe(data2) {
  return urlSafeCoder.encode(data2);
}
base64$2.encodeURLSafe = encodeURLSafe;
function decodeURLSafe(s2) {
  return urlSafeCoder.decode(s2);
}
base64$2.decodeURLSafe = decodeURLSafe;
base64$2.encodedLength = function(length2) {
  return stdCoder.encodedLength(length2);
};
base64$2.maxDecodedLength = function(length2) {
  return stdCoder.maxDecodedLength(length2);
};
base64$2.decodedLength = function(s2) {
  return stdCoder.decodedLength(s2);
};
async function deepHash$3(data2) {
  if (Array.isArray(data2)) {
    const tag2 = concatBuffers$2([
      stringToBuffer$2("list"),
      stringToBuffer$2(data2.length.toString())
    ]);
    return await deepHashChunks$1(data2, await crypto.subtle.digest("SHA-384", tag2));
  }
  const tag = concatBuffers$2([
    stringToBuffer$2("blob"),
    stringToBuffer$2(data2.byteLength.toString())
  ]);
  const taggedHash = concatBuffers$2([
    await crypto.subtle.digest("SHA-384", tag),
    await crypto.subtle.digest("SHA-384", data2)
  ]);
  return await crypto.subtle.digest("SHA-384", taggedHash);
}
async function deepHashChunks$1(chunks2, acc) {
  if (chunks2.length < 1) {
    return acc;
  }
  const hashPair = concatBuffers$2([acc, await deepHash$3(chunks2[0])]);
  const newAcc = await crypto.subtle.digest("SHA-384", hashPair);
  return await deepHashChunks$1(chunks2.slice(1), newAcc);
}
var bignumber = { exports: {} };
(function(module) {
  (function(globalObject) {
    var BigNumber2, isNumeric = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i, mathceil = Math.ceil, mathfloor = Math.floor, bignumberError = "[BigNumber Error] ", tooManyDigits = bignumberError + "Number primitive has more than 15 significant digits: ", BASE = 1e14, LOG_BASE = 14, MAX_SAFE_INTEGER2 = 9007199254740991, POWS_TEN = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], SQRT_BASE = 1e7, MAX = 1e9;
    function clone2(configObject) {
      var div, convertBase, parseNumeric, P = BigNumber3.prototype = { constructor: BigNumber3, toString: null, valueOf: null }, ONE2 = new BigNumber3(1), DECIMAL_PLACES = 20, ROUNDING_MODE = 4, TO_EXP_NEG = -7, TO_EXP_POS = 21, MIN_EXP = -1e7, MAX_EXP = 1e7, CRYPTO = false, MODULO_MODE = 1, POW_PRECISION = 0, FORMAT = {
        prefix: "",
        groupSize: 3,
        secondaryGroupSize: 0,
        groupSeparator: ",",
        decimalSeparator: ".",
        fractionGroupSize: 0,
        fractionGroupSeparator: "\xA0",
        suffix: ""
      }, ALPHABET2 = "0123456789abcdefghijklmnopqrstuvwxyz", alphabetHasNormalDecimalDigits = true;
      function BigNumber3(v, b) {
        var alphabet2, c, caseChanged, e, i, isNum, len, str, x = this;
        if (!(x instanceof BigNumber3))
          return new BigNumber3(v, b);
        if (b == null) {
          if (v && v._isBigNumber === true) {
            x.s = v.s;
            if (!v.c || v.e > MAX_EXP) {
              x.c = x.e = null;
            } else if (v.e < MIN_EXP) {
              x.c = [x.e = 0];
            } else {
              x.e = v.e;
              x.c = v.c.slice();
            }
            return;
          }
          if ((isNum = typeof v == "number") && v * 0 == 0) {
            x.s = 1 / v < 0 ? (v = -v, -1) : 1;
            if (v === ~~v) {
              for (e = 0, i = v; i >= 10; i /= 10, e++)
                ;
              if (e > MAX_EXP) {
                x.c = x.e = null;
              } else {
                x.e = e;
                x.c = [v];
              }
              return;
            }
            str = String(v);
          } else {
            if (!isNumeric.test(str = String(v)))
              return parseNumeric(x, str, isNum);
            x.s = str.charCodeAt(0) == 45 ? (str = str.slice(1), -1) : 1;
          }
          if ((e = str.indexOf(".")) > -1)
            str = str.replace(".", "");
          if ((i = str.search(/e/i)) > 0) {
            if (e < 0)
              e = i;
            e += +str.slice(i + 1);
            str = str.substring(0, i);
          } else if (e < 0) {
            e = str.length;
          }
        } else {
          intCheck(b, 2, ALPHABET2.length, "Base");
          if (b == 10 && alphabetHasNormalDecimalDigits) {
            x = new BigNumber3(v);
            return round(x, DECIMAL_PLACES + x.e + 1, ROUNDING_MODE);
          }
          str = String(v);
          if (isNum = typeof v == "number") {
            if (v * 0 != 0)
              return parseNumeric(x, str, isNum, b);
            x.s = 1 / v < 0 ? (str = str.slice(1), -1) : 1;
            if (BigNumber3.DEBUG && str.replace(/^0\.0*|\./, "").length > 15) {
              throw Error(tooManyDigits + v);
            }
          } else {
            x.s = str.charCodeAt(0) === 45 ? (str = str.slice(1), -1) : 1;
          }
          alphabet2 = ALPHABET2.slice(0, b);
          e = i = 0;
          for (len = str.length; i < len; i++) {
            if (alphabet2.indexOf(c = str.charAt(i)) < 0) {
              if (c == ".") {
                if (i > e) {
                  e = len;
                  continue;
                }
              } else if (!caseChanged) {
                if (str == str.toUpperCase() && (str = str.toLowerCase()) || str == str.toLowerCase() && (str = str.toUpperCase())) {
                  caseChanged = true;
                  i = -1;
                  e = 0;
                  continue;
                }
              }
              return parseNumeric(x, String(v), isNum, b);
            }
          }
          isNum = false;
          str = convertBase(str, b, 10, x.s);
          if ((e = str.indexOf(".")) > -1)
            str = str.replace(".", "");
          else
            e = str.length;
        }
        for (i = 0; str.charCodeAt(i) === 48; i++)
          ;
        for (len = str.length; str.charCodeAt(--len) === 48; )
          ;
        if (str = str.slice(i, ++len)) {
          len -= i;
          if (isNum && BigNumber3.DEBUG && len > 15 && (v > MAX_SAFE_INTEGER2 || v !== mathfloor(v))) {
            throw Error(tooManyDigits + x.s * v);
          }
          if ((e = e - i - 1) > MAX_EXP) {
            x.c = x.e = null;
          } else if (e < MIN_EXP) {
            x.c = [x.e = 0];
          } else {
            x.e = e;
            x.c = [];
            i = (e + 1) % LOG_BASE;
            if (e < 0)
              i += LOG_BASE;
            if (i < len) {
              if (i)
                x.c.push(+str.slice(0, i));
              for (len -= LOG_BASE; i < len; ) {
                x.c.push(+str.slice(i, i += LOG_BASE));
              }
              i = LOG_BASE - (str = str.slice(i)).length;
            } else {
              i -= len;
            }
            for (; i--; str += "0")
              ;
            x.c.push(+str);
          }
        } else {
          x.c = [x.e = 0];
        }
      }
      BigNumber3.clone = clone2;
      BigNumber3.ROUND_UP = 0;
      BigNumber3.ROUND_DOWN = 1;
      BigNumber3.ROUND_CEIL = 2;
      BigNumber3.ROUND_FLOOR = 3;
      BigNumber3.ROUND_HALF_UP = 4;
      BigNumber3.ROUND_HALF_DOWN = 5;
      BigNumber3.ROUND_HALF_EVEN = 6;
      BigNumber3.ROUND_HALF_CEIL = 7;
      BigNumber3.ROUND_HALF_FLOOR = 8;
      BigNumber3.EUCLID = 9;
      BigNumber3.config = BigNumber3.set = function(obj2) {
        var p, v;
        if (obj2 != null) {
          if (typeof obj2 == "object") {
            if (obj2.hasOwnProperty(p = "DECIMAL_PLACES")) {
              v = obj2[p];
              intCheck(v, 0, MAX, p);
              DECIMAL_PLACES = v;
            }
            if (obj2.hasOwnProperty(p = "ROUNDING_MODE")) {
              v = obj2[p];
              intCheck(v, 0, 8, p);
              ROUNDING_MODE = v;
            }
            if (obj2.hasOwnProperty(p = "EXPONENTIAL_AT")) {
              v = obj2[p];
              if (v && v.pop) {
                intCheck(v[0], -MAX, 0, p);
                intCheck(v[1], 0, MAX, p);
                TO_EXP_NEG = v[0];
                TO_EXP_POS = v[1];
              } else {
                intCheck(v, -MAX, MAX, p);
                TO_EXP_NEG = -(TO_EXP_POS = v < 0 ? -v : v);
              }
            }
            if (obj2.hasOwnProperty(p = "RANGE")) {
              v = obj2[p];
              if (v && v.pop) {
                intCheck(v[0], -MAX, -1, p);
                intCheck(v[1], 1, MAX, p);
                MIN_EXP = v[0];
                MAX_EXP = v[1];
              } else {
                intCheck(v, -MAX, MAX, p);
                if (v) {
                  MIN_EXP = -(MAX_EXP = v < 0 ? -v : v);
                } else {
                  throw Error(bignumberError + p + " cannot be zero: " + v);
                }
              }
            }
            if (obj2.hasOwnProperty(p = "CRYPTO")) {
              v = obj2[p];
              if (v === !!v) {
                if (v) {
                  if (typeof crypto != "undefined" && crypto && (crypto.getRandomValues || crypto.randomBytes)) {
                    CRYPTO = v;
                  } else {
                    CRYPTO = !v;
                    throw Error(bignumberError + "crypto unavailable");
                  }
                } else {
                  CRYPTO = v;
                }
              } else {
                throw Error(bignumberError + p + " not true or false: " + v);
              }
            }
            if (obj2.hasOwnProperty(p = "MODULO_MODE")) {
              v = obj2[p];
              intCheck(v, 0, 9, p);
              MODULO_MODE = v;
            }
            if (obj2.hasOwnProperty(p = "POW_PRECISION")) {
              v = obj2[p];
              intCheck(v, 0, MAX, p);
              POW_PRECISION = v;
            }
            if (obj2.hasOwnProperty(p = "FORMAT")) {
              v = obj2[p];
              if (typeof v == "object")
                FORMAT = v;
              else
                throw Error(bignumberError + p + " not an object: " + v);
            }
            if (obj2.hasOwnProperty(p = "ALPHABET")) {
              v = obj2[p];
              if (typeof v == "string" && !/^.?$|[+\-.\s]|(.).*\1/.test(v)) {
                alphabetHasNormalDecimalDigits = v.slice(0, 10) == "0123456789";
                ALPHABET2 = v;
              } else {
                throw Error(bignumberError + p + " invalid: " + v);
              }
            }
          } else {
            throw Error(bignumberError + "Object expected: " + obj2);
          }
        }
        return {
          DECIMAL_PLACES,
          ROUNDING_MODE,
          EXPONENTIAL_AT: [TO_EXP_NEG, TO_EXP_POS],
          RANGE: [MIN_EXP, MAX_EXP],
          CRYPTO,
          MODULO_MODE,
          POW_PRECISION,
          FORMAT,
          ALPHABET: ALPHABET2
        };
      };
      BigNumber3.isBigNumber = function(v) {
        if (!v || v._isBigNumber !== true)
          return false;
        if (!BigNumber3.DEBUG)
          return true;
        var i, n, c = v.c, e = v.e, s2 = v.s;
        out:
          if ({}.toString.call(c) == "[object Array]") {
            if ((s2 === 1 || s2 === -1) && e >= -MAX && e <= MAX && e === mathfloor(e)) {
              if (c[0] === 0) {
                if (e === 0 && c.length === 1)
                  return true;
                break out;
              }
              i = (e + 1) % LOG_BASE;
              if (i < 1)
                i += LOG_BASE;
              if (String(c[0]).length == i) {
                for (i = 0; i < c.length; i++) {
                  n = c[i];
                  if (n < 0 || n >= BASE || n !== mathfloor(n))
                    break out;
                }
                if (n !== 0)
                  return true;
              }
            }
          } else if (c === null && e === null && (s2 === null || s2 === 1 || s2 === -1)) {
            return true;
          }
        throw Error(bignumberError + "Invalid BigNumber: " + v);
      };
      BigNumber3.maximum = BigNumber3.max = function() {
        return maxOrMin(arguments, P.lt);
      };
      BigNumber3.minimum = BigNumber3.min = function() {
        return maxOrMin(arguments, P.gt);
      };
      BigNumber3.random = function() {
        var pow2_53 = 9007199254740992;
        var random53bitInt = Math.random() * pow2_53 & 2097151 ? function() {
          return mathfloor(Math.random() * pow2_53);
        } : function() {
          return (Math.random() * 1073741824 | 0) * 8388608 + (Math.random() * 8388608 | 0);
        };
        return function(dp) {
          var a, b, e, k, v, i = 0, c = [], rand2 = new BigNumber3(ONE2);
          if (dp == null)
            dp = DECIMAL_PLACES;
          else
            intCheck(dp, 0, MAX);
          k = mathceil(dp / LOG_BASE);
          if (CRYPTO) {
            if (crypto.getRandomValues) {
              a = crypto.getRandomValues(new Uint32Array(k *= 2));
              for (; i < k; ) {
                v = a[i] * 131072 + (a[i + 1] >>> 11);
                if (v >= 9e15) {
                  b = crypto.getRandomValues(new Uint32Array(2));
                  a[i] = b[0];
                  a[i + 1] = b[1];
                } else {
                  c.push(v % 1e14);
                  i += 2;
                }
              }
              i = k / 2;
            } else if (crypto.randomBytes) {
              a = crypto.randomBytes(k *= 7);
              for (; i < k; ) {
                v = (a[i] & 31) * 281474976710656 + a[i + 1] * 1099511627776 + a[i + 2] * 4294967296 + a[i + 3] * 16777216 + (a[i + 4] << 16) + (a[i + 5] << 8) + a[i + 6];
                if (v >= 9e15) {
                  crypto.randomBytes(7).copy(a, i);
                } else {
                  c.push(v % 1e14);
                  i += 7;
                }
              }
              i = k / 7;
            } else {
              CRYPTO = false;
              throw Error(bignumberError + "crypto unavailable");
            }
          }
          if (!CRYPTO) {
            for (; i < k; ) {
              v = random53bitInt();
              if (v < 9e15)
                c[i++] = v % 1e14;
            }
          }
          k = c[--i];
          dp %= LOG_BASE;
          if (k && dp) {
            v = POWS_TEN[LOG_BASE - dp];
            c[i] = mathfloor(k / v) * v;
          }
          for (; c[i] === 0; c.pop(), i--)
            ;
          if (i < 0) {
            c = [e = 0];
          } else {
            for (e = -1; c[0] === 0; c.splice(0, 1), e -= LOG_BASE)
              ;
            for (i = 1, v = c[0]; v >= 10; v /= 10, i++)
              ;
            if (i < LOG_BASE)
              e -= LOG_BASE - i;
          }
          rand2.e = e;
          rand2.c = c;
          return rand2;
        };
      }();
      BigNumber3.sum = function() {
        var i = 1, args = arguments, sum = new BigNumber3(args[0]);
        for (; i < args.length; )
          sum = sum.plus(args[i++]);
        return sum;
      };
      convertBase = function() {
        var decimal = "0123456789";
        function toBaseOut(str, baseIn, baseOut, alphabet2) {
          var j, arr = [0], arrL, i = 0, len = str.length;
          for (; i < len; ) {
            for (arrL = arr.length; arrL--; arr[arrL] *= baseIn)
              ;
            arr[0] += alphabet2.indexOf(str.charAt(i++));
            for (j = 0; j < arr.length; j++) {
              if (arr[j] > baseOut - 1) {
                if (arr[j + 1] == null)
                  arr[j + 1] = 0;
                arr[j + 1] += arr[j] / baseOut | 0;
                arr[j] %= baseOut;
              }
            }
          }
          return arr.reverse();
        }
        return function(str, baseIn, baseOut, sign7, callerIsToString) {
          var alphabet2, d, e, k, r2, x, xc, y, i = str.indexOf("."), dp = DECIMAL_PLACES, rm = ROUNDING_MODE;
          if (i >= 0) {
            k = POW_PRECISION;
            POW_PRECISION = 0;
            str = str.replace(".", "");
            y = new BigNumber3(baseIn);
            x = y.pow(str.length - i);
            POW_PRECISION = k;
            y.c = toBaseOut(
              toFixedPoint(coeffToString(x.c), x.e, "0"),
              10,
              baseOut,
              decimal
            );
            y.e = y.c.length;
          }
          xc = toBaseOut(str, baseIn, baseOut, callerIsToString ? (alphabet2 = ALPHABET2, decimal) : (alphabet2 = decimal, ALPHABET2));
          e = k = xc.length;
          for (; xc[--k] == 0; xc.pop())
            ;
          if (!xc[0])
            return alphabet2.charAt(0);
          if (i < 0) {
            --e;
          } else {
            x.c = xc;
            x.e = e;
            x.s = sign7;
            x = div(x, y, dp, rm, baseOut);
            xc = x.c;
            r2 = x.r;
            e = x.e;
          }
          d = e + dp + 1;
          i = xc[d];
          k = baseOut / 2;
          r2 = r2 || d < 0 || xc[d + 1] != null;
          r2 = rm < 4 ? (i != null || r2) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : i > k || i == k && (rm == 4 || r2 || rm == 6 && xc[d - 1] & 1 || rm == (x.s < 0 ? 8 : 7));
          if (d < 1 || !xc[0]) {
            str = r2 ? toFixedPoint(alphabet2.charAt(1), -dp, alphabet2.charAt(0)) : alphabet2.charAt(0);
          } else {
            xc.length = d;
            if (r2) {
              for (--baseOut; ++xc[--d] > baseOut; ) {
                xc[d] = 0;
                if (!d) {
                  ++e;
                  xc = [1].concat(xc);
                }
              }
            }
            for (k = xc.length; !xc[--k]; )
              ;
            for (i = 0, str = ""; i <= k; str += alphabet2.charAt(xc[i++]))
              ;
            str = toFixedPoint(str, e, alphabet2.charAt(0));
          }
          return str;
        };
      }();
      div = function() {
        function multiply(x, k, base3) {
          var m, temp, xlo, xhi, carry = 0, i = x.length, klo = k % SQRT_BASE, khi = k / SQRT_BASE | 0;
          for (x = x.slice(); i--; ) {
            xlo = x[i] % SQRT_BASE;
            xhi = x[i] / SQRT_BASE | 0;
            m = khi * xlo + xhi * klo;
            temp = klo * xlo + m % SQRT_BASE * SQRT_BASE + carry;
            carry = (temp / base3 | 0) + (m / SQRT_BASE | 0) + khi * xhi;
            x[i] = temp % base3;
          }
          if (carry)
            x = [carry].concat(x);
          return x;
        }
        function compare3(a, b, aL, bL) {
          var i, cmp;
          if (aL != bL) {
            cmp = aL > bL ? 1 : -1;
          } else {
            for (i = cmp = 0; i < aL; i++) {
              if (a[i] != b[i]) {
                cmp = a[i] > b[i] ? 1 : -1;
                break;
              }
            }
          }
          return cmp;
        }
        function subtract(a, b, aL, base3) {
          var i = 0;
          for (; aL--; ) {
            a[aL] -= i;
            i = a[aL] < b[aL] ? 1 : 0;
            a[aL] = i * base3 + a[aL] - b[aL];
          }
          for (; !a[0] && a.length > 1; a.splice(0, 1))
            ;
        }
        return function(x, y, dp, rm, base3) {
          var cmp, e, i, more, n, prod, prodL, q, qc, rem, remL, rem0, xi, xL, yc0, yL, yz, s2 = x.s == y.s ? 1 : -1, xc = x.c, yc = y.c;
          if (!xc || !xc[0] || !yc || !yc[0]) {
            return new BigNumber3(
              !x.s || !y.s || (xc ? yc && xc[0] == yc[0] : !yc) ? NaN : xc && xc[0] == 0 || !yc ? s2 * 0 : s2 / 0
            );
          }
          q = new BigNumber3(s2);
          qc = q.c = [];
          e = x.e - y.e;
          s2 = dp + e + 1;
          if (!base3) {
            base3 = BASE;
            e = bitFloor(x.e / LOG_BASE) - bitFloor(y.e / LOG_BASE);
            s2 = s2 / LOG_BASE | 0;
          }
          for (i = 0; yc[i] == (xc[i] || 0); i++)
            ;
          if (yc[i] > (xc[i] || 0))
            e--;
          if (s2 < 0) {
            qc.push(1);
            more = true;
          } else {
            xL = xc.length;
            yL = yc.length;
            i = 0;
            s2 += 2;
            n = mathfloor(base3 / (yc[0] + 1));
            if (n > 1) {
              yc = multiply(yc, n, base3);
              xc = multiply(xc, n, base3);
              yL = yc.length;
              xL = xc.length;
            }
            xi = yL;
            rem = xc.slice(0, yL);
            remL = rem.length;
            for (; remL < yL; rem[remL++] = 0)
              ;
            yz = yc.slice();
            yz = [0].concat(yz);
            yc0 = yc[0];
            if (yc[1] >= base3 / 2)
              yc0++;
            do {
              n = 0;
              cmp = compare3(yc, rem, yL, remL);
              if (cmp < 0) {
                rem0 = rem[0];
                if (yL != remL)
                  rem0 = rem0 * base3 + (rem[1] || 0);
                n = mathfloor(rem0 / yc0);
                if (n > 1) {
                  if (n >= base3)
                    n = base3 - 1;
                  prod = multiply(yc, n, base3);
                  prodL = prod.length;
                  remL = rem.length;
                  while (compare3(prod, rem, prodL, remL) == 1) {
                    n--;
                    subtract(prod, yL < prodL ? yz : yc, prodL, base3);
                    prodL = prod.length;
                    cmp = 1;
                  }
                } else {
                  if (n == 0) {
                    cmp = n = 1;
                  }
                  prod = yc.slice();
                  prodL = prod.length;
                }
                if (prodL < remL)
                  prod = [0].concat(prod);
                subtract(rem, prod, remL, base3);
                remL = rem.length;
                if (cmp == -1) {
                  while (compare3(yc, rem, yL, remL) < 1) {
                    n++;
                    subtract(rem, yL < remL ? yz : yc, remL, base3);
                    remL = rem.length;
                  }
                }
              } else if (cmp === 0) {
                n++;
                rem = [0];
              }
              qc[i++] = n;
              if (rem[0]) {
                rem[remL++] = xc[xi] || 0;
              } else {
                rem = [xc[xi]];
                remL = 1;
              }
            } while ((xi++ < xL || rem[0] != null) && s2--);
            more = rem[0] != null;
            if (!qc[0])
              qc.splice(0, 1);
          }
          if (base3 == BASE) {
            for (i = 1, s2 = qc[0]; s2 >= 10; s2 /= 10, i++)
              ;
            round(q, dp + (q.e = i + e * LOG_BASE - 1) + 1, rm, more);
          } else {
            q.e = e;
            q.r = +more;
          }
          return q;
        };
      }();
      function format(n, i, rm, id2) {
        var c0, e, ne, len, str;
        if (rm == null)
          rm = ROUNDING_MODE;
        else
          intCheck(rm, 0, 8);
        if (!n.c)
          return n.toString();
        c0 = n.c[0];
        ne = n.e;
        if (i == null) {
          str = coeffToString(n.c);
          str = id2 == 1 || id2 == 2 && (ne <= TO_EXP_NEG || ne >= TO_EXP_POS) ? toExponential(str, ne) : toFixedPoint(str, ne, "0");
        } else {
          n = round(new BigNumber3(n), i, rm);
          e = n.e;
          str = coeffToString(n.c);
          len = str.length;
          if (id2 == 1 || id2 == 2 && (i <= e || e <= TO_EXP_NEG)) {
            for (; len < i; str += "0", len++)
              ;
            str = toExponential(str, e);
          } else {
            i -= ne;
            str = toFixedPoint(str, e, "0");
            if (e + 1 > len) {
              if (--i > 0)
                for (str += "."; i--; str += "0")
                  ;
            } else {
              i += e - len;
              if (i > 0) {
                if (e + 1 == len)
                  str += ".";
                for (; i--; str += "0")
                  ;
              }
            }
          }
        }
        return n.s < 0 && c0 ? "-" + str : str;
      }
      function maxOrMin(args, method) {
        var n, i = 1, m = new BigNumber3(args[0]);
        for (; i < args.length; i++) {
          n = new BigNumber3(args[i]);
          if (!n.s) {
            m = n;
            break;
          } else if (method.call(m, n)) {
            m = n;
          }
        }
        return m;
      }
      function normalise(n, c, e) {
        var i = 1, j = c.length;
        for (; !c[--j]; c.pop())
          ;
        for (j = c[0]; j >= 10; j /= 10, i++)
          ;
        if ((e = i + e * LOG_BASE - 1) > MAX_EXP) {
          n.c = n.e = null;
        } else if (e < MIN_EXP) {
          n.c = [n.e = 0];
        } else {
          n.e = e;
          n.c = c;
        }
        return n;
      }
      parseNumeric = function() {
        var basePrefix = /^(-?)0([xbo])(?=\w[\w.]*$)/i, dotAfter = /^([^.]+)\.$/, dotBefore = /^\.([^.]+)$/, isInfinityOrNaN = /^-?(Infinity|NaN)$/, whitespaceOrPlus = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
        return function(x, str, isNum, b) {
          var base3, s2 = isNum ? str : str.replace(whitespaceOrPlus, "");
          if (isInfinityOrNaN.test(s2)) {
            x.s = isNaN(s2) ? null : s2 < 0 ? -1 : 1;
          } else {
            if (!isNum) {
              s2 = s2.replace(basePrefix, function(m, p1, p2) {
                base3 = (p2 = p2.toLowerCase()) == "x" ? 16 : p2 == "b" ? 2 : 8;
                return !b || b == base3 ? p1 : m;
              });
              if (b) {
                base3 = b;
                s2 = s2.replace(dotAfter, "$1").replace(dotBefore, "0.$1");
              }
              if (str != s2)
                return new BigNumber3(s2, base3);
            }
            if (BigNumber3.DEBUG) {
              throw Error(bignumberError + "Not a" + (b ? " base " + b : "") + " number: " + str);
            }
            x.s = null;
          }
          x.c = x.e = null;
        };
      }();
      function round(x, sd, rm, r2) {
        var d, i, j, k, n, ni, rd, xc = x.c, pows10 = POWS_TEN;
        if (xc) {
          out: {
            for (d = 1, k = xc[0]; k >= 10; k /= 10, d++)
              ;
            i = sd - d;
            if (i < 0) {
              i += LOG_BASE;
              j = sd;
              n = xc[ni = 0];
              rd = n / pows10[d - j - 1] % 10 | 0;
            } else {
              ni = mathceil((i + 1) / LOG_BASE);
              if (ni >= xc.length) {
                if (r2) {
                  for (; xc.length <= ni; xc.push(0))
                    ;
                  n = rd = 0;
                  d = 1;
                  i %= LOG_BASE;
                  j = i - LOG_BASE + 1;
                } else {
                  break out;
                }
              } else {
                n = k = xc[ni];
                for (d = 1; k >= 10; k /= 10, d++)
                  ;
                i %= LOG_BASE;
                j = i - LOG_BASE + d;
                rd = j < 0 ? 0 : n / pows10[d - j - 1] % 10 | 0;
              }
            }
            r2 = r2 || sd < 0 || xc[ni + 1] != null || (j < 0 ? n : n % pows10[d - j - 1]);
            r2 = rm < 4 ? (rd || r2) && (rm == 0 || rm == (x.s < 0 ? 3 : 2)) : rd > 5 || rd == 5 && (rm == 4 || r2 || rm == 6 && (i > 0 ? j > 0 ? n / pows10[d - j] : 0 : xc[ni - 1]) % 10 & 1 || rm == (x.s < 0 ? 8 : 7));
            if (sd < 1 || !xc[0]) {
              xc.length = 0;
              if (r2) {
                sd -= x.e + 1;
                xc[0] = pows10[(LOG_BASE - sd % LOG_BASE) % LOG_BASE];
                x.e = -sd || 0;
              } else {
                xc[0] = x.e = 0;
              }
              return x;
            }
            if (i == 0) {
              xc.length = ni;
              k = 1;
              ni--;
            } else {
              xc.length = ni + 1;
              k = pows10[LOG_BASE - i];
              xc[ni] = j > 0 ? mathfloor(n / pows10[d - j] % pows10[j]) * k : 0;
            }
            if (r2) {
              for (; ; ) {
                if (ni == 0) {
                  for (i = 1, j = xc[0]; j >= 10; j /= 10, i++)
                    ;
                  j = xc[0] += k;
                  for (k = 1; j >= 10; j /= 10, k++)
                    ;
                  if (i != k) {
                    x.e++;
                    if (xc[0] == BASE)
                      xc[0] = 1;
                  }
                  break;
                } else {
                  xc[ni] += k;
                  if (xc[ni] != BASE)
                    break;
                  xc[ni--] = 0;
                  k = 1;
                }
              }
            }
            for (i = xc.length; xc[--i] === 0; xc.pop())
              ;
          }
          if (x.e > MAX_EXP) {
            x.c = x.e = null;
          } else if (x.e < MIN_EXP) {
            x.c = [x.e = 0];
          }
        }
        return x;
      }
      function valueOf(n) {
        var str, e = n.e;
        if (e === null)
          return n.toString();
        str = coeffToString(n.c);
        str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(str, e) : toFixedPoint(str, e, "0");
        return n.s < 0 ? "-" + str : str;
      }
      P.absoluteValue = P.abs = function() {
        var x = new BigNumber3(this);
        if (x.s < 0)
          x.s = 1;
        return x;
      };
      P.comparedTo = function(y, b) {
        return compare2(this, new BigNumber3(y, b));
      };
      P.decimalPlaces = P.dp = function(dp, rm) {
        var c, n, v, x = this;
        if (dp != null) {
          intCheck(dp, 0, MAX);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(new BigNumber3(x), dp + x.e + 1, rm);
        }
        if (!(c = x.c))
          return null;
        n = ((v = c.length - 1) - bitFloor(this.e / LOG_BASE)) * LOG_BASE;
        if (v = c[v])
          for (; v % 10 == 0; v /= 10, n--)
            ;
        if (n < 0)
          n = 0;
        return n;
      };
      P.dividedBy = P.div = function(y, b) {
        return div(this, new BigNumber3(y, b), DECIMAL_PLACES, ROUNDING_MODE);
      };
      P.dividedToIntegerBy = P.idiv = function(y, b) {
        return div(this, new BigNumber3(y, b), 0, 1);
      };
      P.exponentiatedBy = P.pow = function(n, m) {
        var half, isModExp, i, k, more, nIsBig, nIsNeg, nIsOdd, y, x = this;
        n = new BigNumber3(n);
        if (n.c && !n.isInteger()) {
          throw Error(bignumberError + "Exponent not an integer: " + valueOf(n));
        }
        if (m != null)
          m = new BigNumber3(m);
        nIsBig = n.e > 14;
        if (!x.c || !x.c[0] || x.c[0] == 1 && !x.e && x.c.length == 1 || !n.c || !n.c[0]) {
          y = new BigNumber3(Math.pow(+valueOf(x), nIsBig ? 2 - isOdd(n) : +valueOf(n)));
          return m ? y.mod(m) : y;
        }
        nIsNeg = n.s < 0;
        if (m) {
          if (m.c ? !m.c[0] : !m.s)
            return new BigNumber3(NaN);
          isModExp = !nIsNeg && x.isInteger() && m.isInteger();
          if (isModExp)
            x = x.mod(m);
        } else if (n.e > 9 && (x.e > 0 || x.e < -1 || (x.e == 0 ? x.c[0] > 1 || nIsBig && x.c[1] >= 24e7 : x.c[0] < 8e13 || nIsBig && x.c[0] <= 9999975e7))) {
          k = x.s < 0 && isOdd(n) ? -0 : 0;
          if (x.e > -1)
            k = 1 / k;
          return new BigNumber3(nIsNeg ? 1 / k : k);
        } else if (POW_PRECISION) {
          k = mathceil(POW_PRECISION / LOG_BASE + 2);
        }
        if (nIsBig) {
          half = new BigNumber3(0.5);
          if (nIsNeg)
            n.s = 1;
          nIsOdd = isOdd(n);
        } else {
          i = Math.abs(+valueOf(n));
          nIsOdd = i % 2;
        }
        y = new BigNumber3(ONE2);
        for (; ; ) {
          if (nIsOdd) {
            y = y.times(x);
            if (!y.c)
              break;
            if (k) {
              if (y.c.length > k)
                y.c.length = k;
            } else if (isModExp) {
              y = y.mod(m);
            }
          }
          if (i) {
            i = mathfloor(i / 2);
            if (i === 0)
              break;
            nIsOdd = i % 2;
          } else {
            n = n.times(half);
            round(n, n.e + 1, 1);
            if (n.e > 14) {
              nIsOdd = isOdd(n);
            } else {
              i = +valueOf(n);
              if (i === 0)
                break;
              nIsOdd = i % 2;
            }
          }
          x = x.times(x);
          if (k) {
            if (x.c && x.c.length > k)
              x.c.length = k;
          } else if (isModExp) {
            x = x.mod(m);
          }
        }
        if (isModExp)
          return y;
        if (nIsNeg)
          y = ONE2.div(y);
        return m ? y.mod(m) : k ? round(y, POW_PRECISION, ROUNDING_MODE, more) : y;
      };
      P.integerValue = function(rm) {
        var n = new BigNumber3(this);
        if (rm == null)
          rm = ROUNDING_MODE;
        else
          intCheck(rm, 0, 8);
        return round(n, n.e + 1, rm);
      };
      P.isEqualTo = P.eq = function(y, b) {
        return compare2(this, new BigNumber3(y, b)) === 0;
      };
      P.isFinite = function() {
        return !!this.c;
      };
      P.isGreaterThan = P.gt = function(y, b) {
        return compare2(this, new BigNumber3(y, b)) > 0;
      };
      P.isGreaterThanOrEqualTo = P.gte = function(y, b) {
        return (b = compare2(this, new BigNumber3(y, b))) === 1 || b === 0;
      };
      P.isInteger = function() {
        return !!this.c && bitFloor(this.e / LOG_BASE) > this.c.length - 2;
      };
      P.isLessThan = P.lt = function(y, b) {
        return compare2(this, new BigNumber3(y, b)) < 0;
      };
      P.isLessThanOrEqualTo = P.lte = function(y, b) {
        return (b = compare2(this, new BigNumber3(y, b))) === -1 || b === 0;
      };
      P.isNaN = function() {
        return !this.s;
      };
      P.isNegative = function() {
        return this.s < 0;
      };
      P.isPositive = function() {
        return this.s > 0;
      };
      P.isZero = function() {
        return !!this.c && this.c[0] == 0;
      };
      P.minus = function(y, b) {
        var i, j, t, xLTy, x = this, a = x.s;
        y = new BigNumber3(y, b);
        b = y.s;
        if (!a || !b)
          return new BigNumber3(NaN);
        if (a != b) {
          y.s = -b;
          return x.plus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
          if (!xc || !yc)
            return xc ? (y.s = -b, y) : new BigNumber3(yc ? x : NaN);
          if (!xc[0] || !yc[0]) {
            return yc[0] ? (y.s = -b, y) : new BigNumber3(xc[0] ? x : ROUNDING_MODE == 3 ? -0 : 0);
          }
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        if (a = xe - ye) {
          if (xLTy = a < 0) {
            a = -a;
            t = xc;
          } else {
            ye = xe;
            t = yc;
          }
          t.reverse();
          for (b = a; b--; t.push(0))
            ;
          t.reverse();
        } else {
          j = (xLTy = (a = xc.length) < (b = yc.length)) ? a : b;
          for (a = b = 0; b < j; b++) {
            if (xc[b] != yc[b]) {
              xLTy = xc[b] < yc[b];
              break;
            }
          }
        }
        if (xLTy)
          t = xc, xc = yc, yc = t, y.s = -y.s;
        b = (j = yc.length) - (i = xc.length);
        if (b > 0)
          for (; b--; xc[i++] = 0)
            ;
        b = BASE - 1;
        for (; j > a; ) {
          if (xc[--j] < yc[j]) {
            for (i = j; i && !xc[--i]; xc[i] = b)
              ;
            --xc[i];
            xc[j] += BASE;
          }
          xc[j] -= yc[j];
        }
        for (; xc[0] == 0; xc.splice(0, 1), --ye)
          ;
        if (!xc[0]) {
          y.s = ROUNDING_MODE == 3 ? -1 : 1;
          y.c = [y.e = 0];
          return y;
        }
        return normalise(y, xc, ye);
      };
      P.modulo = P.mod = function(y, b) {
        var q, s2, x = this;
        y = new BigNumber3(y, b);
        if (!x.c || !y.s || y.c && !y.c[0]) {
          return new BigNumber3(NaN);
        } else if (!y.c || x.c && !x.c[0]) {
          return new BigNumber3(x);
        }
        if (MODULO_MODE == 9) {
          s2 = y.s;
          y.s = 1;
          q = div(x, y, 0, 3);
          y.s = s2;
          q.s *= s2;
        } else {
          q = div(x, y, 0, MODULO_MODE);
        }
        y = x.minus(q.times(y));
        if (!y.c[0] && MODULO_MODE == 1)
          y.s = x.s;
        return y;
      };
      P.multipliedBy = P.times = function(y, b) {
        var c, e, i, j, k, m, xcL, xlo, xhi, ycL, ylo, yhi, zc, base3, sqrtBase, x = this, xc = x.c, yc = (y = new BigNumber3(y, b)).c;
        if (!xc || !yc || !xc[0] || !yc[0]) {
          if (!x.s || !y.s || xc && !xc[0] && !yc || yc && !yc[0] && !xc) {
            y.c = y.e = y.s = null;
          } else {
            y.s *= x.s;
            if (!xc || !yc) {
              y.c = y.e = null;
            } else {
              y.c = [0];
              y.e = 0;
            }
          }
          return y;
        }
        e = bitFloor(x.e / LOG_BASE) + bitFloor(y.e / LOG_BASE);
        y.s *= x.s;
        xcL = xc.length;
        ycL = yc.length;
        if (xcL < ycL)
          zc = xc, xc = yc, yc = zc, i = xcL, xcL = ycL, ycL = i;
        for (i = xcL + ycL, zc = []; i--; zc.push(0))
          ;
        base3 = BASE;
        sqrtBase = SQRT_BASE;
        for (i = ycL; --i >= 0; ) {
          c = 0;
          ylo = yc[i] % sqrtBase;
          yhi = yc[i] / sqrtBase | 0;
          for (k = xcL, j = i + k; j > i; ) {
            xlo = xc[--k] % sqrtBase;
            xhi = xc[k] / sqrtBase | 0;
            m = yhi * xlo + xhi * ylo;
            xlo = ylo * xlo + m % sqrtBase * sqrtBase + zc[j] + c;
            c = (xlo / base3 | 0) + (m / sqrtBase | 0) + yhi * xhi;
            zc[j--] = xlo % base3;
          }
          zc[j] = c;
        }
        if (c) {
          ++e;
        } else {
          zc.splice(0, 1);
        }
        return normalise(y, zc, e);
      };
      P.negated = function() {
        var x = new BigNumber3(this);
        x.s = -x.s || null;
        return x;
      };
      P.plus = function(y, b) {
        var t, x = this, a = x.s;
        y = new BigNumber3(y, b);
        b = y.s;
        if (!a || !b)
          return new BigNumber3(NaN);
        if (a != b) {
          y.s = -b;
          return x.minus(y);
        }
        var xe = x.e / LOG_BASE, ye = y.e / LOG_BASE, xc = x.c, yc = y.c;
        if (!xe || !ye) {
          if (!xc || !yc)
            return new BigNumber3(a / 0);
          if (!xc[0] || !yc[0])
            return yc[0] ? y : new BigNumber3(xc[0] ? x : a * 0);
        }
        xe = bitFloor(xe);
        ye = bitFloor(ye);
        xc = xc.slice();
        if (a = xe - ye) {
          if (a > 0) {
            ye = xe;
            t = yc;
          } else {
            a = -a;
            t = xc;
          }
          t.reverse();
          for (; a--; t.push(0))
            ;
          t.reverse();
        }
        a = xc.length;
        b = yc.length;
        if (a - b < 0)
          t = yc, yc = xc, xc = t, b = a;
        for (a = 0; b; ) {
          a = (xc[--b] = xc[b] + yc[b] + a) / BASE | 0;
          xc[b] = BASE === xc[b] ? 0 : xc[b] % BASE;
        }
        if (a) {
          xc = [a].concat(xc);
          ++ye;
        }
        return normalise(y, xc, ye);
      };
      P.precision = P.sd = function(sd, rm) {
        var c, n, v, x = this;
        if (sd != null && sd !== !!sd) {
          intCheck(sd, 1, MAX);
          if (rm == null)
            rm = ROUNDING_MODE;
          else
            intCheck(rm, 0, 8);
          return round(new BigNumber3(x), sd, rm);
        }
        if (!(c = x.c))
          return null;
        v = c.length - 1;
        n = v * LOG_BASE + 1;
        if (v = c[v]) {
          for (; v % 10 == 0; v /= 10, n--)
            ;
          for (v = c[0]; v >= 10; v /= 10, n++)
            ;
        }
        if (sd && x.e + 1 > n)
          n = x.e + 1;
        return n;
      };
      P.shiftedBy = function(k) {
        intCheck(k, -MAX_SAFE_INTEGER2, MAX_SAFE_INTEGER2);
        return this.times("1e" + k);
      };
      P.squareRoot = P.sqrt = function() {
        var m, n, r2, rep, t, x = this, c = x.c, s2 = x.s, e = x.e, dp = DECIMAL_PLACES + 4, half = new BigNumber3("0.5");
        if (s2 !== 1 || !c || !c[0]) {
          return new BigNumber3(!s2 || s2 < 0 && (!c || c[0]) ? NaN : c ? x : 1 / 0);
        }
        s2 = Math.sqrt(+valueOf(x));
        if (s2 == 0 || s2 == 1 / 0) {
          n = coeffToString(c);
          if ((n.length + e) % 2 == 0)
            n += "0";
          s2 = Math.sqrt(+n);
          e = bitFloor((e + 1) / 2) - (e < 0 || e % 2);
          if (s2 == 1 / 0) {
            n = "5e" + e;
          } else {
            n = s2.toExponential();
            n = n.slice(0, n.indexOf("e") + 1) + e;
          }
          r2 = new BigNumber3(n);
        } else {
          r2 = new BigNumber3(s2 + "");
        }
        if (r2.c[0]) {
          e = r2.e;
          s2 = e + dp;
          if (s2 < 3)
            s2 = 0;
          for (; ; ) {
            t = r2;
            r2 = half.times(t.plus(div(x, t, dp, 1)));
            if (coeffToString(t.c).slice(0, s2) === (n = coeffToString(r2.c)).slice(0, s2)) {
              if (r2.e < e)
                --s2;
              n = n.slice(s2 - 3, s2 + 1);
              if (n == "9999" || !rep && n == "4999") {
                if (!rep) {
                  round(t, t.e + DECIMAL_PLACES + 2, 0);
                  if (t.times(t).eq(x)) {
                    r2 = t;
                    break;
                  }
                }
                dp += 4;
                s2 += 4;
                rep = 1;
              } else {
                if (!+n || !+n.slice(1) && n.charAt(0) == "5") {
                  round(r2, r2.e + DECIMAL_PLACES + 2, 1);
                  m = !r2.times(r2).eq(x);
                }
                break;
              }
            }
          }
        }
        return round(r2, r2.e + DECIMAL_PLACES + 1, ROUNDING_MODE, m);
      };
      P.toExponential = function(dp, rm) {
        if (dp != null) {
          intCheck(dp, 0, MAX);
          dp++;
        }
        return format(this, dp, rm, 1);
      };
      P.toFixed = function(dp, rm) {
        if (dp != null) {
          intCheck(dp, 0, MAX);
          dp = dp + this.e + 1;
        }
        return format(this, dp, rm);
      };
      P.toFormat = function(dp, rm, format2) {
        var str, x = this;
        if (format2 == null) {
          if (dp != null && rm && typeof rm == "object") {
            format2 = rm;
            rm = null;
          } else if (dp && typeof dp == "object") {
            format2 = dp;
            dp = rm = null;
          } else {
            format2 = FORMAT;
          }
        } else if (typeof format2 != "object") {
          throw Error(bignumberError + "Argument not an object: " + format2);
        }
        str = x.toFixed(dp, rm);
        if (x.c) {
          var i, arr = str.split("."), g1 = +format2.groupSize, g2 = +format2.secondaryGroupSize, groupSeparator = format2.groupSeparator || "", intPart = arr[0], fractionPart = arr[1], isNeg = x.s < 0, intDigits = isNeg ? intPart.slice(1) : intPart, len = intDigits.length;
          if (g2)
            i = g1, g1 = g2, g2 = i, len -= i;
          if (g1 > 0 && len > 0) {
            i = len % g1 || g1;
            intPart = intDigits.substr(0, i);
            for (; i < len; i += g1)
              intPart += groupSeparator + intDigits.substr(i, g1);
            if (g2 > 0)
              intPart += groupSeparator + intDigits.slice(i);
            if (isNeg)
              intPart = "-" + intPart;
          }
          str = fractionPart ? intPart + (format2.decimalSeparator || "") + ((g2 = +format2.fractionGroupSize) ? fractionPart.replace(
            new RegExp("\\d{" + g2 + "}\\B", "g"),
            "$&" + (format2.fractionGroupSeparator || "")
          ) : fractionPart) : intPart;
        }
        return (format2.prefix || "") + str + (format2.suffix || "");
      };
      P.toFraction = function(md) {
        var d, d0, d1, d2, e, exp, n, n0, n1, q, r2, s2, x = this, xc = x.c;
        if (md != null) {
          n = new BigNumber3(md);
          if (!n.isInteger() && (n.c || n.s !== 1) || n.lt(ONE2)) {
            throw Error(bignumberError + "Argument " + (n.isInteger() ? "out of range: " : "not an integer: ") + valueOf(n));
          }
        }
        if (!xc)
          return new BigNumber3(x);
        d = new BigNumber3(ONE2);
        n1 = d0 = new BigNumber3(ONE2);
        d1 = n0 = new BigNumber3(ONE2);
        s2 = coeffToString(xc);
        e = d.e = s2.length - x.e - 1;
        d.c[0] = POWS_TEN[(exp = e % LOG_BASE) < 0 ? LOG_BASE + exp : exp];
        md = !md || n.comparedTo(d) > 0 ? e > 0 ? d : n1 : n;
        exp = MAX_EXP;
        MAX_EXP = 1 / 0;
        n = new BigNumber3(s2);
        n0.c[0] = 0;
        for (; ; ) {
          q = div(n, d, 0, 1);
          d2 = d0.plus(q.times(d1));
          if (d2.comparedTo(md) == 1)
            break;
          d0 = d1;
          d1 = d2;
          n1 = n0.plus(q.times(d2 = n1));
          n0 = d2;
          d = n.minus(q.times(d2 = d));
          n = d2;
        }
        d2 = div(md.minus(d0), d1, 0, 1);
        n0 = n0.plus(d2.times(n1));
        d0 = d0.plus(d2.times(d1));
        n0.s = n1.s = x.s;
        e = e * 2;
        r2 = div(n1, d1, e, ROUNDING_MODE).minus(x).abs().comparedTo(
          div(n0, d0, e, ROUNDING_MODE).minus(x).abs()
        ) < 1 ? [n1, d1] : [n0, d0];
        MAX_EXP = exp;
        return r2;
      };
      P.toNumber = function() {
        return +valueOf(this);
      };
      P.toPrecision = function(sd, rm) {
        if (sd != null)
          intCheck(sd, 1, MAX);
        return format(this, sd, rm, 2);
      };
      P.toString = function(b) {
        var str, n = this, s2 = n.s, e = n.e;
        if (e === null) {
          if (s2) {
            str = "Infinity";
            if (s2 < 0)
              str = "-" + str;
          } else {
            str = "NaN";
          }
        } else {
          if (b == null) {
            str = e <= TO_EXP_NEG || e >= TO_EXP_POS ? toExponential(coeffToString(n.c), e) : toFixedPoint(coeffToString(n.c), e, "0");
          } else if (b === 10 && alphabetHasNormalDecimalDigits) {
            n = round(new BigNumber3(n), DECIMAL_PLACES + e + 1, ROUNDING_MODE);
            str = toFixedPoint(coeffToString(n.c), n.e, "0");
          } else {
            intCheck(b, 2, ALPHABET2.length, "Base");
            str = convertBase(toFixedPoint(coeffToString(n.c), e, "0"), 10, b, s2, true);
          }
          if (s2 < 0 && n.c[0])
            str = "-" + str;
        }
        return str;
      };
      P.valueOf = P.toJSON = function() {
        return valueOf(this);
      };
      P._isBigNumber = true;
      if (configObject != null)
        BigNumber3.set(configObject);
      return BigNumber3;
    }
    function bitFloor(n) {
      var i = n | 0;
      return n > 0 || n === i ? i : i - 1;
    }
    function coeffToString(a) {
      var s2, z, i = 1, j = a.length, r2 = a[0] + "";
      for (; i < j; ) {
        s2 = a[i++] + "";
        z = LOG_BASE - s2.length;
        for (; z--; s2 = "0" + s2)
          ;
        r2 += s2;
      }
      for (j = r2.length; r2.charCodeAt(--j) === 48; )
        ;
      return r2.slice(0, j + 1 || 1);
    }
    function compare2(x, y) {
      var a, b, xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
      if (!i || !j)
        return null;
      a = xc && !xc[0];
      b = yc && !yc[0];
      if (a || b)
        return a ? b ? 0 : -j : i;
      if (i != j)
        return i;
      a = i < 0;
      b = k == l;
      if (!xc || !yc)
        return b ? 0 : !xc ^ a ? 1 : -1;
      if (!b)
        return k > l ^ a ? 1 : -1;
      j = (k = xc.length) < (l = yc.length) ? k : l;
      for (i = 0; i < j; i++)
        if (xc[i] != yc[i])
          return xc[i] > yc[i] ^ a ? 1 : -1;
      return k == l ? 0 : k > l ^ a ? 1 : -1;
    }
    function intCheck(n, min, max, name2) {
      if (n < min || n > max || n !== mathfloor(n)) {
        throw Error(bignumberError + (name2 || "Argument") + (typeof n == "number" ? n < min || n > max ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(n));
      }
    }
    function isOdd(n) {
      var k = n.c.length - 1;
      return bitFloor(n.e / LOG_BASE) == k && n.c[k] % 2 != 0;
    }
    function toExponential(str, e) {
      return (str.length > 1 ? str.charAt(0) + "." + str.slice(1) : str) + (e < 0 ? "e" : "e+") + e;
    }
    function toFixedPoint(str, e, z) {
      var len, zs;
      if (e < 0) {
        for (zs = z + "."; ++e; zs += z)
          ;
        str = zs + str;
      } else {
        len = str.length;
        if (++e > len) {
          for (zs = z, e -= len; --e; zs += z)
            ;
          str += zs;
        } else if (e < len) {
          str = str.slice(0, e) + "." + str.slice(e);
        }
      }
      return str;
    }
    BigNumber2 = clone2();
    BigNumber2["default"] = BigNumber2.BigNumber = BigNumber2;
    if (module.exports) {
      module.exports = BigNumber2;
    } else {
      if (!globalObject) {
        globalObject = typeof self != "undefined" && self ? self : window;
      }
      globalObject.BigNumber = BigNumber2;
    }
  })(commonjsGlobal);
})(bignumber);
const BigNumber$1 = bignumber.exports;
function concatBuffers$2(buffers) {
  let total_length = 0;
  for (let i = 0; i < buffers.length; i++) {
    total_length += buffers[i].byteLength;
  }
  let temp = new Uint8Array(total_length);
  let offset = 0;
  temp.set(new Uint8Array(buffers[0]), offset);
  offset += buffers[0].byteLength;
  for (let i = 1; i < buffers.length; i++) {
    temp.set(new Uint8Array(buffers[i]), offset);
    offset += buffers[i].byteLength;
  }
  return temp;
}
function b64UrlToString$2(b64UrlString) {
  let buffer2 = b64UrlToBuffer$2(b64UrlString);
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = require("util").TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer2);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer2);
}
function bufferToString$2(buffer2) {
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = require("util").TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer2);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer2);
}
function stringToBuffer$2(string) {
  if (typeof TextEncoder == "undefined") {
    const TextEncoder2 = require("util").TextEncoder;
    return new TextEncoder2().encode(string);
  }
  return new TextEncoder().encode(string);
}
function stringToB64Url$2(string) {
  return bufferTob64Url$2(stringToBuffer$2(string));
}
function b64UrlToBuffer$2(b64UrlString) {
  return new Uint8Array(decode_1(b64UrlDecode$2(b64UrlString)));
}
function bufferTob64$2(buffer2) {
  return encode_1$1(new Uint8Array(buffer2));
}
function bufferTob64Url$2(buffer2) {
  return b64UrlEncode$2(bufferTob64$2(buffer2));
}
function b64UrlEncode$2(b64UrlString) {
  return b64UrlString.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
function b64UrlDecode$2(b64UrlString) {
  b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
  let padding2;
  b64UrlString.length % 4 == 0 ? padding2 = 0 : padding2 = 4 - b64UrlString.length % 4;
  return b64UrlString.concat("=".repeat(padding2));
}
class BaseObject {
  get(field, options) {
    if (!Object.getOwnPropertyNames(this).includes(field)) {
      throw new Error(`Field "${field}" is not a property of the Arweave Transaction class.`);
    }
    if (this[field] instanceof Uint8Array) {
      if (options && options.decode && options.string) {
        return bufferToString$2(this[field]);
      }
      if (options && options.decode && !options.string) {
        return this[field];
      }
      return bufferTob64Url$2(this[field]);
    }
    if (options && options.decode == true) {
      if (options && options.string) {
        return b64UrlToString$2(this[field]);
      }
      return b64UrlToBuffer$2(this[field]);
    }
    return this[field];
  }
}
class Tag extends BaseObject {
  constructor(name2, value, decode5 = false) {
    super();
    this.name = name2;
    this.value = value;
  }
}
class Transaction extends BaseObject {
  constructor(attributes = {}) {
    super();
    this.format = 2;
    this.id = "";
    this.last_tx = "";
    this.owner = "";
    this.tags = [];
    this.target = "";
    this.quantity = "0";
    this.data_size = "0";
    this.data = new Uint8Array();
    this.data_root = "";
    this.reward = "0";
    this.signature = "";
    Object.assign(this, attributes);
    if (typeof this.data === "string") {
      this.data = b64UrlToBuffer$2(this.data);
    }
    if (attributes.tags) {
      this.tags = attributes.tags.map((tag) => {
        return new Tag(tag.name, tag.value);
      });
    }
  }
  addTag(name2, value) {
    this.tags.push(new Tag(stringToB64Url$2(name2), stringToB64Url$2(value)));
  }
  toJSON() {
    return {
      format: this.format,
      id: this.id,
      last_tx: this.last_tx,
      owner: this.owner,
      tags: this.tags,
      target: this.target,
      quantity: this.quantity,
      data: bufferTob64Url$2(this.data),
      data_size: this.data_size,
      data_root: this.data_root,
      data_tree: this.data_tree,
      reward: this.reward,
      signature: this.signature
    };
  }
  setOwner(owner) {
    this.owner = owner;
  }
  setSignature({
    id: id2,
    owner,
    reward,
    tags: tags2,
    signature: signature2
  }) {
    this.id = id2;
    this.owner = owner;
    if (reward)
      this.reward = reward;
    if (tags2)
      this.tags = tags2;
    this.signature = signature2;
  }
  async prepareChunks(data2) {
    if (!this.chunks && data2.byteLength > 0) {
      this.chunks = await generateTransactionChunks(data2);
      this.data_root = bufferTob64Url$2(this.chunks.data_root);
    }
    if (!this.chunks && data2.byteLength === 0) {
      this.chunks = {
        chunks: [],
        data_root: new Uint8Array(),
        proofs: []
      };
      this.data_root = "";
    }
  }
  getChunk(idx, data2) {
    if (!this.chunks) {
      throw new Error(`Chunks have not been prepared`);
    }
    const proof = this.chunks.proofs[idx];
    const chunk = this.chunks.chunks[idx];
    return {
      data_root: this.data_root,
      data_size: this.data_size,
      data_path: bufferTob64Url$2(proof.proof),
      offset: proof.offset.toString(),
      chunk: bufferTob64Url$2(data2.slice(chunk.minByteRange, chunk.maxByteRange))
    };
  }
  async getSignatureData() {
    switch (this.format) {
      case 1:
        let tags2 = this.tags.reduce((accumulator, tag) => {
          return concatBuffers$2([
            accumulator,
            tag.get("name", { decode: true, string: false }),
            tag.get("value", { decode: true, string: false })
          ]);
        }, new Uint8Array());
        return concatBuffers$2([
          this.get("owner", { decode: true, string: false }),
          this.get("target", { decode: true, string: false }),
          this.get("data", { decode: true, string: false }),
          stringToBuffer$2(this.quantity),
          stringToBuffer$2(this.reward),
          this.get("last_tx", { decode: true, string: false }),
          tags2
        ]);
      case 2:
        if (!this.data_root) {
          await this.prepareChunks(this.data);
        }
        const tagList = this.tags.map((tag) => [
          tag.get("name", { decode: true, string: false }),
          tag.get("value", { decode: true, string: false })
        ]);
        return await deepHash$3([
          stringToBuffer$2(this.format.toString()),
          this.get("owner", { decode: true, string: false }),
          this.get("target", { decode: true, string: false }),
          stringToBuffer$2(this.quantity),
          stringToBuffer$2(this.reward),
          this.get("last_tx", { decode: true, string: false }),
          tagList,
          stringToBuffer$2(this.data_size),
          this.get("data_root", { decode: true, string: false })
        ]);
      default:
        throw new Error(`Unexpected transaction format: ${this.format}`);
    }
  }
}
var web = {};
var common$6 = {};
var ar = {};
Object.defineProperty(ar, "__esModule", { value: true });
const bignumber_js_1 = bignumber.exports;
class Ar {
  constructor() {
    this.BigNum = (value, decimals) => {
      let instance2 = bignumber_js_1.BigNumber.clone({ DECIMAL_PLACES: decimals });
      return new instance2(value);
    };
  }
  winstonToAr(winstonString, { formatted = false, decimals = 12, trim: trim2 = true } = {}) {
    let number = this.stringToBigNum(winstonString, decimals).shiftedBy(-12);
    return formatted ? number.toFormat(decimals) : number.toFixed(decimals);
  }
  arToWinston(arString, { formatted = false } = {}) {
    let number = this.stringToBigNum(arString).shiftedBy(12);
    return formatted ? number.toFormat() : number.toFixed(0);
  }
  compare(winstonStringA, winstonStringB) {
    let a = this.stringToBigNum(winstonStringA);
    let b = this.stringToBigNum(winstonStringB);
    return a.comparedTo(b);
  }
  isEqual(winstonStringA, winstonStringB) {
    return this.compare(winstonStringA, winstonStringB) === 0;
  }
  isLessThan(winstonStringA, winstonStringB) {
    let a = this.stringToBigNum(winstonStringA);
    let b = this.stringToBigNum(winstonStringB);
    return a.isLessThan(b);
  }
  isGreaterThan(winstonStringA, winstonStringB) {
    let a = this.stringToBigNum(winstonStringA);
    let b = this.stringToBigNum(winstonStringB);
    return a.isGreaterThan(b);
  }
  add(winstonStringA, winstonStringB) {
    let a = this.stringToBigNum(winstonStringA);
    this.stringToBigNum(winstonStringB);
    return a.plus(winstonStringB).toFixed(0);
  }
  sub(winstonStringA, winstonStringB) {
    let a = this.stringToBigNum(winstonStringA);
    this.stringToBigNum(winstonStringB);
    return a.minus(winstonStringB).toFixed(0);
  }
  stringToBigNum(stringValue, decimalPlaces = 12) {
    return this.BigNum(stringValue, decimalPlaces);
  }
}
ar.default = Ar;
var api$2 = {};
var axios$5 = { exports: {} };
var axios$4 = { exports: {} };
var bind$5 = function bind(fn, thisArg) {
  return function wrap2() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};
var bind$4 = bind$5;
var toString$3 = Object.prototype.toString;
var kindOf = function(cache) {
  return function(thing) {
    var str = toString$3.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
}(/* @__PURE__ */ Object.create(null));
function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}
function isArray$1(val) {
  return Array.isArray(val);
}
function isUndefined$1(val) {
  return typeof val === "undefined";
}
function isBuffer$1(val) {
  return val !== null && !isUndefined$1(val) && val.constructor !== null && !isUndefined$1(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
var isArrayBuffer$1 = kindOfTest("ArrayBuffer");
function isArrayBufferView$1(val) {
  var result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer$1(val.buffer);
  }
  return result;
}
function isString$1(val) {
  return typeof val === "string";
}
function isNumber$1(val) {
  return typeof val === "number";
}
function isObject$1(val) {
  return val !== null && typeof val === "object";
}
function isPlainObject$1(val) {
  if (kindOf(val) !== "object") {
    return false;
  }
  var prototype2 = Object.getPrototypeOf(val);
  return prototype2 === null || prototype2 === Object.prototype;
}
var isDate$1 = kindOfTest("Date");
var isFile$1 = kindOfTest("File");
var isBlob$1 = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
function isFunction$1(val) {
  return toString$3.call(val) === "[object Function]";
}
function isStream$2(val) {
  return isObject$1(val) && isFunction$1(val.pipe);
}
function isFormData$1(thing) {
  var pattern = "[object FormData]";
  return thing && (typeof FormData === "function" && thing instanceof FormData || toString$3.call(thing) === pattern || isFunction$1(thing.toString) && thing.toString() === pattern);
}
var isURLSearchParams$1 = kindOfTest("URLSearchParams");
function trim$1(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
function isStandardBrowserEnv$1() {
  if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
    return false;
  }
  return typeof window !== "undefined" && typeof document !== "undefined";
}
function forEach$1(obj2, fn) {
  if (obj2 === null || typeof obj2 === "undefined") {
    return;
  }
  if (typeof obj2 !== "object") {
    obj2 = [obj2];
  }
  if (isArray$1(obj2)) {
    for (var i = 0, l = obj2.length; i < l; i++) {
      fn.call(null, obj2[i], i, obj2);
    }
  } else {
    for (var key3 in obj2) {
      if (Object.prototype.hasOwnProperty.call(obj2, key3)) {
        fn.call(null, obj2[key3], key3, obj2);
      }
    }
  }
}
function merge$1() {
  var result = {};
  function assignValue(val, key3) {
    if (isPlainObject$1(result[key3]) && isPlainObject$1(val)) {
      result[key3] = merge$1(result[key3], val);
    } else if (isPlainObject$1(val)) {
      result[key3] = merge$1({}, val);
    } else if (isArray$1(val)) {
      result[key3] = val.slice();
    } else {
      result[key3] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach$1(arguments[i], assignValue);
  }
  return result;
}
function extend$1(a, b, thisArg) {
  forEach$1(b, function assignValue(val, key3) {
    if (thisArg && typeof val === "function") {
      a[key3] = bind$4(val, thisArg);
    } else {
      a[key3] = val;
    }
  });
  return a;
}
function stripBOM$1(content) {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
}
function inherits$w(constructor, superConstructor, props, descriptors2) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}
function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};
  destObj = destObj || {};
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
}
function endsWith$1(str, searchString, position) {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}
function toArray$2(thing) {
  if (!thing)
    return null;
  var i = thing.length;
  if (isUndefined$1(i))
    return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}
var isTypedArray$1 = function(TypedArray) {
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
}(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
var utils$S = {
  isArray: isArray$1,
  isArrayBuffer: isArrayBuffer$1,
  isBuffer: isBuffer$1,
  isFormData: isFormData$1,
  isArrayBufferView: isArrayBufferView$1,
  isString: isString$1,
  isNumber: isNumber$1,
  isObject: isObject$1,
  isPlainObject: isPlainObject$1,
  isUndefined: isUndefined$1,
  isDate: isDate$1,
  isFile: isFile$1,
  isBlob: isBlob$1,
  isFunction: isFunction$1,
  isStream: isStream$2,
  isURLSearchParams: isURLSearchParams$1,
  isStandardBrowserEnv: isStandardBrowserEnv$1,
  forEach: forEach$1,
  merge: merge$1,
  extend: extend$1,
  trim: trim$1,
  stripBOM: stripBOM$1,
  inherits: inherits$w,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith: endsWith$1,
  toArray: toArray$2,
  isTypedArray: isTypedArray$1,
  isFileList
};
var utils$R = utils$S;
function encode$9(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
var buildURL$3 = function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils$R.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    utils$R.forEach(params, function serialize2(val, key3) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (utils$R.isArray(val)) {
        key3 = key3 + "[]";
      } else {
        val = [val];
      }
      utils$R.forEach(val, function parseValue(v) {
        if (utils$R.isDate(v)) {
          v = v.toISOString();
        } else if (utils$R.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode$9(key3) + "=" + encode$9(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
};
var utils$Q = utils$S;
function InterceptorManager$3() {
  this.handlers = [];
}
InterceptorManager$3.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled,
    rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};
InterceptorManager$3.prototype.eject = function eject(id2) {
  if (this.handlers[id2]) {
    this.handlers[id2] = null;
  }
};
InterceptorManager$3.prototype.forEach = function forEach(fn) {
  utils$Q.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};
var InterceptorManager_1$1 = InterceptorManager$3;
var utils$P = utils$S;
var normalizeHeaderName$3 = function normalizeHeaderName(headers, normalizedName) {
  utils$P.forEach(headers, function processHeader(value, name2) {
    if (name2 !== normalizedName && name2.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name2];
    }
  });
};
var utils$O = utils$S;
function AxiosError$2(message, code2, config2, request3, response) {
  Error.call(this);
  this.message = message;
  this.name = "AxiosError";
  code2 && (this.code = code2);
  config2 && (this.config = config2);
  request3 && (this.request = request3);
  response && (this.response = response);
}
utils$O.inherits(AxiosError$2, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError$2.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED"
].forEach(function(code2) {
  descriptors[code2] = { value: code2 };
});
Object.defineProperties(AxiosError$2, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError$2.from = function(error3, code2, config2, request3, response, customProps) {
  var axiosError = Object.create(prototype);
  utils$O.toFlatObject(error3, axiosError, function filter(obj2) {
    return obj2 !== Error.prototype;
  });
  AxiosError$2.call(axiosError, error3.message, code2, config2, request3, response);
  axiosError.name = error3.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_1 = AxiosError$2;
var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};
var utils$N = utils$S;
function toFormData$1(obj2, formData) {
  formData = formData || new FormData();
  var stack = [];
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils$N.isDate(value)) {
      return value.toISOString();
    }
    if (utils$N.isArrayBuffer(value) || utils$N.isTypedArray(value)) {
      return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function build(data2, parentKey) {
    if (utils$N.isPlainObject(data2) || utils$N.isArray(data2)) {
      if (stack.indexOf(data2) !== -1) {
        throw Error("Circular reference detected in " + parentKey);
      }
      stack.push(data2);
      utils$N.forEach(data2, function each(value, key3) {
        if (utils$N.isUndefined(value))
          return;
        var fullKey = parentKey ? parentKey + "." + key3 : key3;
        var arr;
        if (value && !parentKey && typeof value === "object") {
          if (utils$N.endsWith(key3, "{}")) {
            value = JSON.stringify(value);
          } else if (utils$N.endsWith(key3, "[]") && (arr = utils$N.toArray(value))) {
            arr.forEach(function(el) {
              !utils$N.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }
        build(value, fullKey);
      });
      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data2));
    }
  }
  build(obj2);
  return formData;
}
var toFormData_1 = toFormData$1;
var settle$1;
var hasRequiredSettle$1;
function requireSettle$1() {
  if (hasRequiredSettle$1)
    return settle$1;
  hasRequiredSettle$1 = 1;
  var AxiosError2 = AxiosError_1;
  settle$1 = function settle2(resolve, reject, response) {
    var validateStatus3 = response.config.validateStatus;
    if (!response.status || !validateStatus3 || validateStatus3(response.status)) {
      resolve(response);
    } else {
      reject(new AxiosError2(
        "Request failed with status code " + response.status,
        [AxiosError2.ERR_BAD_REQUEST, AxiosError2.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
        response.config,
        response.request,
        response
      ));
    }
  };
  return settle$1;
}
var cookies$1;
var hasRequiredCookies$1;
function requireCookies$1() {
  if (hasRequiredCookies$1)
    return cookies$1;
  hasRequiredCookies$1 = 1;
  var utils2 = utils$S;
  cookies$1 = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
    return {
      write: function write(name2, value, expires, path3, domain, secure) {
        var cookie = [];
        cookie.push(name2 + "=" + encodeURIComponent(value));
        if (utils2.isNumber(expires)) {
          cookie.push("expires=" + new Date(expires).toGMTString());
        }
        if (utils2.isString(path3)) {
          cookie.push("path=" + path3);
        }
        if (utils2.isString(domain)) {
          cookie.push("domain=" + domain);
        }
        if (secure === true) {
          cookie.push("secure");
        }
        document.cookie = cookie.join("; ");
      },
      read: function read2(name2) {
        var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name2 + ")=([^;]*)"));
        return match ? decodeURIComponent(match[3]) : null;
      },
      remove: function remove(name2) {
        this.write(name2, "", Date.now() - 864e5);
      }
    };
  }() : function nonStandardBrowserEnv() {
    return {
      write: function write() {
      },
      read: function read2() {
        return null;
      },
      remove: function remove() {
      }
    };
  }();
  return cookies$1;
}
var isAbsoluteURL$2 = function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};
var combineURLs$2 = function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};
var isAbsoluteURL$1 = isAbsoluteURL$2;
var combineURLs$1 = combineURLs$2;
var buildFullPath$2 = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL$1(requestedURL)) {
    return combineURLs$1(baseURL, requestedURL);
  }
  return requestedURL;
};
var parseHeaders$1;
var hasRequiredParseHeaders$1;
function requireParseHeaders$1() {
  if (hasRequiredParseHeaders$1)
    return parseHeaders$1;
  hasRequiredParseHeaders$1 = 1;
  var utils2 = utils$S;
  var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
  ];
  parseHeaders$1 = function parseHeaders2(headers) {
    var parsed = {};
    var key3;
    var val;
    var i;
    if (!headers) {
      return parsed;
    }
    utils2.forEach(headers.split("\n"), function parser2(line) {
      i = line.indexOf(":");
      key3 = utils2.trim(line.substr(0, i)).toLowerCase();
      val = utils2.trim(line.substr(i + 1));
      if (key3) {
        if (parsed[key3] && ignoreDuplicateOf.indexOf(key3) >= 0) {
          return;
        }
        if (key3 === "set-cookie") {
          parsed[key3] = (parsed[key3] ? parsed[key3] : []).concat([val]);
        } else {
          parsed[key3] = parsed[key3] ? parsed[key3] + ", " + val : val;
        }
      }
    });
    return parsed;
  };
  return parseHeaders$1;
}
var isURLSameOrigin$1;
var hasRequiredIsURLSameOrigin$1;
function requireIsURLSameOrigin$1() {
  if (hasRequiredIsURLSameOrigin$1)
    return isURLSameOrigin$1;
  hasRequiredIsURLSameOrigin$1 = 1;
  var utils2 = utils$S;
  isURLSameOrigin$1 = utils2.isStandardBrowserEnv() ? function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    function resolveURL(url) {
      var href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin2(requestURL) {
      var parsed = utils2.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }() : function nonStandardBrowserEnv() {
    return function isURLSameOrigin2() {
      return true;
    };
  }();
  return isURLSameOrigin$1;
}
var CanceledError_1;
var hasRequiredCanceledError;
function requireCanceledError() {
  if (hasRequiredCanceledError)
    return CanceledError_1;
  hasRequiredCanceledError = 1;
  var AxiosError2 = AxiosError_1;
  var utils2 = utils$S;
  function CanceledError2(message) {
    AxiosError2.call(this, message == null ? "canceled" : message, AxiosError2.ERR_CANCELED);
    this.name = "CanceledError";
  }
  utils2.inherits(CanceledError2, AxiosError2, {
    __CANCEL__: true
  });
  CanceledError_1 = CanceledError2;
  return CanceledError_1;
}
var parseProtocol;
var hasRequiredParseProtocol;
function requireParseProtocol() {
  if (hasRequiredParseProtocol)
    return parseProtocol;
  hasRequiredParseProtocol = 1;
  parseProtocol = function parseProtocol2(url) {
    var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
    return match && match[1] || "";
  };
  return parseProtocol;
}
var xhr$1;
var hasRequiredXhr$1;
function requireXhr$1() {
  if (hasRequiredXhr$1)
    return xhr$1;
  hasRequiredXhr$1 = 1;
  var utils2 = utils$S;
  var settle2 = requireSettle$1();
  var cookies2 = requireCookies$1();
  var buildURL4 = buildURL$3;
  var buildFullPath3 = buildFullPath$2;
  var parseHeaders2 = requireParseHeaders$1();
  var isURLSameOrigin2 = requireIsURLSameOrigin$1();
  var transitionalDefaults2 = transitional;
  var AxiosError2 = AxiosError_1;
  var CanceledError2 = requireCanceledError();
  var parseProtocol2 = requireParseProtocol();
  xhr$1 = function xhrAdapter(config2) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
      var requestData = config2.data;
      var requestHeaders = config2.headers;
      var responseType = config2.responseType;
      var onCanceled;
      function done2() {
        if (config2.cancelToken) {
          config2.cancelToken.unsubscribe(onCanceled);
        }
        if (config2.signal) {
          config2.signal.removeEventListener("abort", onCanceled);
        }
      }
      if (utils2.isFormData(requestData) && utils2.isStandardBrowserEnv()) {
        delete requestHeaders["Content-Type"];
      }
      var request3 = new XMLHttpRequest();
      if (config2.auth) {
        var username = config2.auth.username || "";
        var password = config2.auth.password ? unescape(encodeURIComponent(config2.auth.password)) : "";
        requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
      }
      var fullPath = buildFullPath3(config2.baseURL, config2.url);
      request3.open(config2.method.toUpperCase(), buildURL4(fullPath, config2.params, config2.paramsSerializer), true);
      request3.timeout = config2.timeout;
      function onloadend() {
        if (!request3) {
          return;
        }
        var responseHeaders = "getAllResponseHeaders" in request3 ? parseHeaders2(request3.getAllResponseHeaders()) : null;
        var responseData = !responseType || responseType === "text" || responseType === "json" ? request3.responseText : request3.response;
        var response = {
          data: responseData,
          status: request3.status,
          statusText: request3.statusText,
          headers: responseHeaders,
          config: config2,
          request: request3
        };
        settle2(function _resolve(value) {
          resolve(value);
          done2();
        }, function _reject(err) {
          reject(err);
          done2();
        }, response);
        request3 = null;
      }
      if ("onloadend" in request3) {
        request3.onloadend = onloadend;
      } else {
        request3.onreadystatechange = function handleLoad() {
          if (!request3 || request3.readyState !== 4) {
            return;
          }
          if (request3.status === 0 && !(request3.responseURL && request3.responseURL.indexOf("file:") === 0)) {
            return;
          }
          setTimeout(onloadend);
        };
      }
      request3.onabort = function handleAbort() {
        if (!request3) {
          return;
        }
        reject(new AxiosError2("Request aborted", AxiosError2.ECONNABORTED, config2, request3));
        request3 = null;
      };
      request3.onerror = function handleError2() {
        reject(new AxiosError2("Network Error", AxiosError2.ERR_NETWORK, config2, request3, request3));
        request3 = null;
      };
      request3.ontimeout = function handleTimeout() {
        var timeoutErrorMessage = config2.timeout ? "timeout of " + config2.timeout + "ms exceeded" : "timeout exceeded";
        var transitional4 = config2.transitional || transitionalDefaults2;
        if (config2.timeoutErrorMessage) {
          timeoutErrorMessage = config2.timeoutErrorMessage;
        }
        reject(new AxiosError2(
          timeoutErrorMessage,
          transitional4.clarifyTimeoutError ? AxiosError2.ETIMEDOUT : AxiosError2.ECONNABORTED,
          config2,
          request3
        ));
        request3 = null;
      };
      if (utils2.isStandardBrowserEnv()) {
        var xsrfValue = (config2.withCredentials || isURLSameOrigin2(fullPath)) && config2.xsrfCookieName ? cookies2.read(config2.xsrfCookieName) : void 0;
        if (xsrfValue) {
          requestHeaders[config2.xsrfHeaderName] = xsrfValue;
        }
      }
      if ("setRequestHeader" in request3) {
        utils2.forEach(requestHeaders, function setRequestHeader(val, key3) {
          if (typeof requestData === "undefined" && key3.toLowerCase() === "content-type") {
            delete requestHeaders[key3];
          } else {
            request3.setRequestHeader(key3, val);
          }
        });
      }
      if (!utils2.isUndefined(config2.withCredentials)) {
        request3.withCredentials = !!config2.withCredentials;
      }
      if (responseType && responseType !== "json") {
        request3.responseType = config2.responseType;
      }
      if (typeof config2.onDownloadProgress === "function") {
        request3.addEventListener("progress", config2.onDownloadProgress);
      }
      if (typeof config2.onUploadProgress === "function" && request3.upload) {
        request3.upload.addEventListener("progress", config2.onUploadProgress);
      }
      if (config2.cancelToken || config2.signal) {
        onCanceled = function(cancel) {
          if (!request3) {
            return;
          }
          reject(!cancel || cancel && cancel.type ? new CanceledError2() : cancel);
          request3.abort();
          request3 = null;
        };
        config2.cancelToken && config2.cancelToken.subscribe(onCanceled);
        if (config2.signal) {
          config2.signal.aborted ? onCanceled() : config2.signal.addEventListener("abort", onCanceled);
        }
      }
      if (!requestData) {
        requestData = null;
      }
      var protocol = parseProtocol2(fullPath);
      if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
        reject(new AxiosError2("Unsupported protocol " + protocol + ":", AxiosError2.ERR_BAD_REQUEST, config2));
        return;
      }
      request3.send(requestData);
    });
  };
  return xhr$1;
}
var _null;
var hasRequired_null;
function require_null() {
  if (hasRequired_null)
    return _null;
  hasRequired_null = 1;
  _null = null;
  return _null;
}
var utils$M = utils$S;
var normalizeHeaderName$2 = normalizeHeaderName$3;
var AxiosError$1 = AxiosError_1;
var transitionalDefaults = transitional;
var toFormData = toFormData_1;
var DEFAULT_CONTENT_TYPE$1 = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset$1(headers, value) {
  if (!utils$M.isUndefined(headers) && utils$M.isUndefined(headers["Content-Type"])) {
    headers["Content-Type"] = value;
  }
}
function getDefaultAdapter$1() {
  var adapter;
  if (typeof XMLHttpRequest !== "undefined") {
    adapter = requireXhr$1();
  } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
    adapter = requireXhr$1();
  }
  return adapter;
}
function stringifySafely$1(rawValue, parser2, encoder) {
  if (utils$M.isString(rawValue)) {
    try {
      (parser2 || JSON.parse)(rawValue);
      return utils$M.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults$7 = {
  transitional: transitionalDefaults,
  adapter: getDefaultAdapter$1(),
  transformRequest: [function transformRequest(data2, headers) {
    normalizeHeaderName$2(headers, "Accept");
    normalizeHeaderName$2(headers, "Content-Type");
    if (utils$M.isFormData(data2) || utils$M.isArrayBuffer(data2) || utils$M.isBuffer(data2) || utils$M.isStream(data2) || utils$M.isFile(data2) || utils$M.isBlob(data2)) {
      return data2;
    }
    if (utils$M.isArrayBufferView(data2)) {
      return data2.buffer;
    }
    if (utils$M.isURLSearchParams(data2)) {
      setContentTypeIfUnset$1(headers, "application/x-www-form-urlencoded;charset=utf-8");
      return data2.toString();
    }
    var isObjectPayload = utils$M.isObject(data2);
    var contentType = headers && headers["Content-Type"];
    var isFileList2;
    if ((isFileList2 = utils$M.isFileList(data2)) || isObjectPayload && contentType === "multipart/form-data") {
      var _FormData = this.env && this.env.FormData;
      return toFormData(isFileList2 ? { "files[]": data2 } : data2, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === "application/json") {
      setContentTypeIfUnset$1(headers, "application/json");
      return stringifySafely$1(data2);
    }
    return data2;
  }],
  transformResponse: [function transformResponse(data2) {
    var transitional4 = this.transitional || defaults$7.transitional;
    var silentJSONParsing = transitional4 && transitional4.silentJSONParsing;
    var forcedJSONParsing = transitional4 && transitional4.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
    if (strictJSONParsing || forcedJSONParsing && utils$M.isString(data2) && data2.length) {
      try {
        return JSON.parse(data2);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError$1.from(e, AxiosError$1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data2;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: require_null()
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*"
    }
  }
};
utils$M.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
  defaults$7.headers[method] = {};
});
utils$M.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  defaults$7.headers[method] = utils$M.merge(DEFAULT_CONTENT_TYPE$1);
});
var defaults_1$1 = defaults$7;
var utils$L = utils$S;
var defaults$6 = defaults_1$1;
var transformData$3 = function transformData(data2, headers, fns) {
  var context = this || defaults$6;
  utils$L.forEach(fns, function transform(fn) {
    data2 = fn.call(context, data2, headers);
  });
  return data2;
};
var isCancel$3;
var hasRequiredIsCancel$1;
function requireIsCancel$1() {
  if (hasRequiredIsCancel$1)
    return isCancel$3;
  hasRequiredIsCancel$1 = 1;
  isCancel$3 = function isCancel2(value) {
    return !!(value && value.__CANCEL__);
  };
  return isCancel$3;
}
var utils$K = utils$S;
var transformData$2 = transformData$3;
var isCancel$2 = requireIsCancel$1();
var defaults$5 = defaults_1$1;
var CanceledError = requireCanceledError();
function throwIfCancellationRequested$1(config2) {
  if (config2.cancelToken) {
    config2.cancelToken.throwIfRequested();
  }
  if (config2.signal && config2.signal.aborted) {
    throw new CanceledError();
  }
}
var dispatchRequest$3 = function dispatchRequest(config2) {
  throwIfCancellationRequested$1(config2);
  config2.headers = config2.headers || {};
  config2.data = transformData$2.call(
    config2,
    config2.data,
    config2.headers,
    config2.transformRequest
  );
  config2.headers = utils$K.merge(
    config2.headers.common || {},
    config2.headers[config2.method] || {},
    config2.headers
  );
  utils$K.forEach(
    ["delete", "get", "head", "post", "put", "patch", "common"],
    function cleanHeaderConfig(method) {
      delete config2.headers[method];
    }
  );
  var adapter = config2.adapter || defaults$5.adapter;
  return adapter(config2).then(function onAdapterResolution(response) {
    throwIfCancellationRequested$1(config2);
    response.data = transformData$2.call(
      config2,
      response.data,
      response.headers,
      config2.transformResponse
    );
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel$2(reason)) {
      throwIfCancellationRequested$1(config2);
      if (reason && reason.response) {
        reason.response.data = transformData$2.call(
          config2,
          reason.response.data,
          reason.response.headers,
          config2.transformResponse
        );
      }
    }
    return Promise.reject(reason);
  });
};
var utils$J = utils$S;
var mergeConfig$5 = function mergeConfig(config1, config2) {
  config2 = config2 || {};
  var config3 = {};
  function getMergedValue(target, source) {
    if (utils$J.isPlainObject(target) && utils$J.isPlainObject(source)) {
      return utils$J.merge(target, source);
    } else if (utils$J.isPlainObject(source)) {
      return utils$J.merge({}, source);
    } else if (utils$J.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(prop) {
    if (!utils$J.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils$J.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function valueFromConfig2(prop) {
    if (!utils$J.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    }
  }
  function defaultToConfig2(prop) {
    if (!utils$J.isUndefined(config2[prop])) {
      return getMergedValue(void 0, config2[prop]);
    } else if (!utils$J.isUndefined(config1[prop])) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(void 0, config1[prop]);
    }
  }
  var mergeMap = {
    "url": valueFromConfig2,
    "method": valueFromConfig2,
    "data": valueFromConfig2,
    "baseURL": defaultToConfig2,
    "transformRequest": defaultToConfig2,
    "transformResponse": defaultToConfig2,
    "paramsSerializer": defaultToConfig2,
    "timeout": defaultToConfig2,
    "timeoutMessage": defaultToConfig2,
    "withCredentials": defaultToConfig2,
    "adapter": defaultToConfig2,
    "responseType": defaultToConfig2,
    "xsrfCookieName": defaultToConfig2,
    "xsrfHeaderName": defaultToConfig2,
    "onUploadProgress": defaultToConfig2,
    "onDownloadProgress": defaultToConfig2,
    "decompress": defaultToConfig2,
    "maxContentLength": defaultToConfig2,
    "maxBodyLength": defaultToConfig2,
    "beforeRedirect": defaultToConfig2,
    "transport": defaultToConfig2,
    "httpAgent": defaultToConfig2,
    "httpsAgent": defaultToConfig2,
    "cancelToken": defaultToConfig2,
    "socketPath": defaultToConfig2,
    "responseEncoding": defaultToConfig2,
    "validateStatus": mergeDirectKeys
  };
  utils$J.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge2 = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge2(prop);
    utils$J.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config3[prop] = configValue);
  });
  return config3;
};
var data;
var hasRequiredData;
function requireData() {
  if (hasRequiredData)
    return data;
  hasRequiredData = 1;
  data = {
    "version": "0.27.2"
  };
  return data;
}
var VERSION = requireData().version;
var AxiosError = AxiosError_1;
var validators$3 = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
  validators$3[type] = function validator2(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings$1 = {};
validators$3.transitional = function transitional2(validator2, version2, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return function(value, opt, opts) {
    if (validator2 === false) {
      throw new AxiosError(
        formatMessage(opt, " has been removed" + (version2 ? " in " + version2 : "")),
        AxiosError.ERR_DEPRECATED
      );
    }
    if (version2 && !deprecatedWarnings$1[opt]) {
      deprecatedWarnings$1[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version2 + " and will be removed in the near future"
        )
      );
    }
    return validator2 ? validator2(value, opt, opts) : true;
  };
};
function assertOptions$1(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
  }
  var keys2 = Object.keys(options);
  var i = keys2.length;
  while (i-- > 0) {
    var opt = keys2[i];
    var validator2 = schema[opt];
    if (validator2) {
      var value = options[opt];
      var result = value === void 0 || validator2(value, opt, options);
      if (result !== true) {
        throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
    }
  }
}
var validator$3 = {
  assertOptions: assertOptions$1,
  validators: validators$3
};
var utils$I = utils$S;
var buildURL$2 = buildURL$3;
var InterceptorManager$2 = InterceptorManager_1$1;
var dispatchRequest$2 = dispatchRequest$3;
var mergeConfig$4 = mergeConfig$5;
var buildFullPath$1 = buildFullPath$2;
var validator$2 = validator$3;
var validators$2 = validator$2.validators;
function Axios$3(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager$2(),
    response: new InterceptorManager$2()
  };
}
Axios$3.prototype.request = function request(configOrUrl, config2) {
  if (typeof configOrUrl === "string") {
    config2 = config2 || {};
    config2.url = configOrUrl;
  } else {
    config2 = configOrUrl || {};
  }
  config2 = mergeConfig$4(this.defaults, config2);
  if (config2.method) {
    config2.method = config2.method.toLowerCase();
  } else if (this.defaults.method) {
    config2.method = this.defaults.method.toLowerCase();
  } else {
    config2.method = "get";
  }
  var transitional4 = config2.transitional;
  if (transitional4 !== void 0) {
    validator$2.assertOptions(transitional4, {
      silentJSONParsing: validators$2.transitional(validators$2.boolean),
      forcedJSONParsing: validators$2.transitional(validators$2.boolean),
      clarifyTimeoutError: validators$2.transitional(validators$2.boolean)
    }, false);
  }
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config2) === false) {
      return;
    }
    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });
  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });
  var promise;
  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest$2, void 0];
    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);
    promise = Promise.resolve(config2);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    return promise;
  }
  var newConfig = config2;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error3) {
      onRejected(error3);
      break;
    }
  }
  try {
    promise = dispatchRequest$2(newConfig);
  } catch (error3) {
    return Promise.reject(error3);
  }
  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }
  return promise;
};
Axios$3.prototype.getUri = function getUri(config2) {
  config2 = mergeConfig$4(this.defaults, config2);
  var fullPath = buildFullPath$1(config2.baseURL, config2.url);
  return buildURL$2(fullPath, config2.params, config2.paramsSerializer);
};
utils$I.forEach(["delete", "get", "head", "options"], function forEachMethodNoData2(method) {
  Axios$3.prototype[method] = function(url, config2) {
    return this.request(mergeConfig$4(config2 || {}, {
      method,
      url,
      data: (config2 || {}).data
    }));
  };
});
utils$I.forEach(["post", "put", "patch"], function forEachMethodWithData2(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data2, config2) {
      return this.request(mergeConfig$4(config2 || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data: data2
      }));
    };
  }
  Axios$3.prototype[method] = generateHTTPMethod();
  Axios$3.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_1$1 = Axios$3;
var CancelToken_1$1;
var hasRequiredCancelToken$1;
function requireCancelToken$1() {
  if (hasRequiredCancelToken$1)
    return CancelToken_1$1;
  hasRequiredCancelToken$1 = 1;
  var CanceledError2 = requireCanceledError();
  function CancelToken(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    var resolvePromise2;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise2 = resolve;
    });
    var token = this;
    this.promise.then(function(cancel) {
      if (!token._listeners)
        return;
      var i;
      var l = token._listeners.length;
      for (i = 0; i < l; i++) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = function(onfulfilled) {
      var _resolve;
      var promise = new Promise(function(resolve) {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError2(message);
      resolvePromise2(token.reason);
    });
  }
  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  };
  CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    var index2 = this._listeners.indexOf(listener);
    if (index2 !== -1) {
      this._listeners.splice(index2, 1);
    }
  };
  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  };
  CancelToken_1$1 = CancelToken;
  return CancelToken_1$1;
}
var spread$1;
var hasRequiredSpread$1;
function requireSpread$1() {
  if (hasRequiredSpread$1)
    return spread$1;
  hasRequiredSpread$1 = 1;
  spread$1 = function spread2(callback) {
    return function wrap2(arr) {
      return callback.apply(null, arr);
    };
  };
  return spread$1;
}
var isAxiosError$1;
var hasRequiredIsAxiosError$1;
function requireIsAxiosError$1() {
  if (hasRequiredIsAxiosError$1)
    return isAxiosError$1;
  hasRequiredIsAxiosError$1 = 1;
  var utils2 = utils$S;
  isAxiosError$1 = function isAxiosError2(payload) {
    return utils2.isObject(payload) && payload.isAxiosError === true;
  };
  return isAxiosError$1;
}
var utils$H = utils$S;
var bind$3 = bind$5;
var Axios$2 = Axios_1$1;
var mergeConfig$3 = mergeConfig$5;
var defaults$4 = defaults_1$1;
function createInstance$1(defaultConfig) {
  var context = new Axios$2(defaultConfig);
  var instance2 = bind$3(Axios$2.prototype.request, context);
  utils$H.extend(instance2, Axios$2.prototype, context);
  utils$H.extend(instance2, context);
  instance2.create = function create5(instanceConfig) {
    return createInstance$1(mergeConfig$3(defaultConfig, instanceConfig));
  };
  return instance2;
}
var axios$3 = createInstance$1(defaults$4);
axios$3.Axios = Axios$2;
axios$3.CanceledError = requireCanceledError();
axios$3.CancelToken = requireCancelToken$1();
axios$3.isCancel = requireIsCancel$1();
axios$3.VERSION = requireData().version;
axios$3.toFormData = toFormData_1;
axios$3.AxiosError = AxiosError_1;
axios$3.Cancel = axios$3.CanceledError;
axios$3.all = function all(promises) {
  return Promise.all(promises);
};
axios$3.spread = requireSpread$1();
axios$3.isAxiosError = requireIsAxiosError$1();
axios$4.exports = axios$3;
axios$4.exports.default = axios$3;
(function(module) {
  module.exports = axios$4.exports;
})(axios$5);
Object.defineProperty(api$2, "__esModule", { value: true });
const axios_1 = axios$5.exports;
class Api {
  constructor(config2) {
    this.METHOD_GET = "GET";
    this.METHOD_POST = "POST";
    this.applyConfig(config2);
  }
  applyConfig(config2) {
    this.config = this.mergeDefaults(config2);
  }
  getConfig() {
    return this.config;
  }
  mergeDefaults(config2) {
    const protocol = config2.protocol || "http";
    const port = config2.port || (protocol === "https" ? 443 : 80);
    return {
      host: config2.host || "127.0.0.1",
      protocol,
      port,
      timeout: config2.timeout || 2e4,
      logging: config2.logging || false,
      logger: config2.logger || console.log,
      network: config2.network
    };
  }
  async get(endpoint, config2) {
    try {
      return await this.request().get(endpoint, config2);
    } catch (error3) {
      if (error3.response && error3.response.status) {
        return error3.response;
      }
      throw error3;
    }
  }
  async post(endpoint, body, config2) {
    try {
      return await this.request().post(endpoint, body, config2);
    } catch (error3) {
      if (error3.response && error3.response.status) {
        return error3.response;
      }
      throw error3;
    }
  }
  request() {
    const headers = {};
    if (this.config.network) {
      headers["x-network"] = this.config.network;
    }
    let instance2 = axios_1.default.create({
      baseURL: `${this.config.protocol}://${this.config.host}:${this.config.port}`,
      timeout: this.config.timeout,
      maxContentLength: 1024 * 1024 * 512,
      headers
    });
    if (this.config.logging) {
      instance2.interceptors.request.use((request3) => {
        this.config.logger(`Requesting: ${request3.baseURL}/${request3.url}`);
        return request3;
      });
      instance2.interceptors.response.use((response) => {
        this.config.logger(`Response:   ${response.config.url} - ${response.status}`);
        return response;
      });
    }
    return instance2;
  }
}
api$2.default = Api;
var webcryptoDriver = {};
var utils$G = {};
var util$5 = {};
var types$4 = {};
var shams$1;
var hasRequiredShams$1;
function requireShams$1() {
  if (hasRequiredShams$1)
    return shams$1;
  hasRequiredShams$1 = 1;
  shams$1 = function hasSymbols2() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
      return false;
    }
    if (typeof Symbol.iterator === "symbol") {
      return true;
    }
    var obj2 = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
      return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
      return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
      return false;
    }
    var symVal = 42;
    obj2[sym] = symVal;
    for (sym in obj2) {
      return false;
    }
    if (typeof Object.keys === "function" && Object.keys(obj2).length !== 0) {
      return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj2).length !== 0) {
      return false;
    }
    var syms = Object.getOwnPropertySymbols(obj2);
    if (syms.length !== 1 || syms[0] !== sym) {
      return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj2, sym)) {
      return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
      var descriptor = Object.getOwnPropertyDescriptor(obj2, sym);
      if (descriptor.value !== symVal || descriptor.enumerable !== true) {
        return false;
      }
    }
    return true;
  };
  return shams$1;
}
var shams;
var hasRequiredShams;
function requireShams() {
  if (hasRequiredShams)
    return shams;
  hasRequiredShams = 1;
  var hasSymbols2 = requireShams$1();
  shams = function hasToStringTagShams() {
    return hasSymbols2() && !!Symbol.toStringTag;
  };
  return shams;
}
var hasSymbols;
var hasRequiredHasSymbols;
function requireHasSymbols() {
  if (hasRequiredHasSymbols)
    return hasSymbols;
  hasRequiredHasSymbols = 1;
  var origSymbol = typeof Symbol !== "undefined" && Symbol;
  var hasSymbolSham = requireShams$1();
  hasSymbols = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
      return false;
    }
    if (typeof Symbol !== "function") {
      return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
      return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
      return false;
    }
    return hasSymbolSham();
  };
  return hasSymbols;
}
var implementation$3;
var hasRequiredImplementation$3;
function requireImplementation$3() {
  if (hasRequiredImplementation$3)
    return implementation$3;
  hasRequiredImplementation$3 = 1;
  var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
  var slice = Array.prototype.slice;
  var toStr = Object.prototype.toString;
  var funcType = "[object Function]";
  implementation$3 = function bind4(that) {
    var target = this;
    if (typeof target !== "function" || toStr.call(target) !== funcType) {
      throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
      if (this instanceof bound) {
        var result = target.apply(
          this,
          args.concat(slice.call(arguments))
        );
        if (Object(result) === result) {
          return result;
        }
        return this;
      } else {
        return target.apply(
          that,
          args.concat(slice.call(arguments))
        );
      }
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
      boundArgs.push("$" + i);
    }
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
      var Empty = function Empty2() {
      };
      Empty.prototype = target.prototype;
      bound.prototype = new Empty();
      Empty.prototype = null;
    }
    return bound;
  };
  return implementation$3;
}
var functionBind;
var hasRequiredFunctionBind;
function requireFunctionBind() {
  if (hasRequiredFunctionBind)
    return functionBind;
  hasRequiredFunctionBind = 1;
  var implementation2 = requireImplementation$3();
  functionBind = Function.prototype.bind || implementation2;
  return functionBind;
}
var src$3;
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc)
    return src$3;
  hasRequiredSrc = 1;
  var bind4 = requireFunctionBind();
  src$3 = bind4.call(Function.call, Object.prototype.hasOwnProperty);
  return src$3;
}
var getIntrinsic;
var hasRequiredGetIntrinsic;
function requireGetIntrinsic() {
  if (hasRequiredGetIntrinsic)
    return getIntrinsic;
  hasRequiredGetIntrinsic = 1;
  var undefined$1;
  var $SyntaxError = SyntaxError;
  var $Function = Function;
  var $TypeError = TypeError;
  var getEvalledConstructor = function(expressionSyntax) {
    try {
      return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {
    }
  };
  var $gOPD = Object.getOwnPropertyDescriptor;
  if ($gOPD) {
    try {
      $gOPD({}, "");
    } catch (e) {
      $gOPD = null;
    }
  }
  var throwTypeError = function() {
    throw new $TypeError();
  };
  var ThrowTypeError = $gOPD ? function() {
    try {
      arguments.callee;
      return throwTypeError;
    } catch (calleeThrows) {
      try {
        return $gOPD(arguments, "callee").get;
      } catch (gOPDthrows) {
        return throwTypeError;
      }
    }
  }() : throwTypeError;
  var hasSymbols2 = requireHasSymbols()();
  var getProto = Object.getPrototypeOf || function(x) {
    return x.__proto__;
  };
  var needsEval = {};
  var TypedArray = typeof Uint8Array === "undefined" ? undefined$1 : getProto(Uint8Array);
  var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined$1 : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined$1 : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols2 ? getProto([][Symbol.iterator]()) : undefined$1,
    "%AsyncFromSyncIteratorPrototype%": undefined$1,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined$1 : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined$1 : BigInt,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined$1 : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined$1 : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined$1 : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined$1 : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined$1 : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined$1 : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined$1 : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols2 ? getProto(getProto([][Symbol.iterator]())) : undefined$1,
    "%JSON%": typeof JSON === "object" ? JSON : undefined$1,
    "%Map%": typeof Map === "undefined" ? undefined$1 : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols2 ? undefined$1 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined$1 : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined$1 : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined$1 : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined$1 : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols2 ? undefined$1 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined$1 : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols2 ? getProto(""[Symbol.iterator]()) : undefined$1,
    "%Symbol%": hasSymbols2 ? Symbol : undefined$1,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined$1 : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined$1 : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined$1 : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined$1 : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined$1 : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined$1 : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined$1 : WeakSet
  };
  var doEval = function doEval2(name2) {
    var value;
    if (name2 === "%AsyncFunction%") {
      value = getEvalledConstructor("async function () {}");
    } else if (name2 === "%GeneratorFunction%") {
      value = getEvalledConstructor("function* () {}");
    } else if (name2 === "%AsyncGeneratorFunction%") {
      value = getEvalledConstructor("async function* () {}");
    } else if (name2 === "%AsyncGenerator%") {
      var fn = doEval2("%AsyncGeneratorFunction%");
      if (fn) {
        value = fn.prototype;
      }
    } else if (name2 === "%AsyncIteratorPrototype%") {
      var gen = doEval2("%AsyncGenerator%");
      if (gen) {
        value = getProto(gen.prototype);
      }
    }
    INTRINSICS[name2] = value;
    return value;
  };
  var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
    "%ArrayPrototype%": ["Array", "prototype"],
    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
    "%ArrayProto_values%": ["Array", "prototype", "values"],
    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
    "%BooleanPrototype%": ["Boolean", "prototype"],
    "%DataViewPrototype%": ["DataView", "prototype"],
    "%DatePrototype%": ["Date", "prototype"],
    "%ErrorPrototype%": ["Error", "prototype"],
    "%EvalErrorPrototype%": ["EvalError", "prototype"],
    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
    "%FunctionPrototype%": ["Function", "prototype"],
    "%Generator%": ["GeneratorFunction", "prototype"],
    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
    "%JSONParse%": ["JSON", "parse"],
    "%JSONStringify%": ["JSON", "stringify"],
    "%MapPrototype%": ["Map", "prototype"],
    "%NumberPrototype%": ["Number", "prototype"],
    "%ObjectPrototype%": ["Object", "prototype"],
    "%ObjProto_toString%": ["Object", "prototype", "toString"],
    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
    "%PromisePrototype%": ["Promise", "prototype"],
    "%PromiseProto_then%": ["Promise", "prototype", "then"],
    "%Promise_all%": ["Promise", "all"],
    "%Promise_reject%": ["Promise", "reject"],
    "%Promise_resolve%": ["Promise", "resolve"],
    "%RangeErrorPrototype%": ["RangeError", "prototype"],
    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
    "%RegExpPrototype%": ["RegExp", "prototype"],
    "%SetPrototype%": ["Set", "prototype"],
    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
    "%StringPrototype%": ["String", "prototype"],
    "%SymbolPrototype%": ["Symbol", "prototype"],
    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
    "%TypeErrorPrototype%": ["TypeError", "prototype"],
    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
    "%URIErrorPrototype%": ["URIError", "prototype"],
    "%WeakMapPrototype%": ["WeakMap", "prototype"],
    "%WeakSetPrototype%": ["WeakSet", "prototype"]
  };
  var bind4 = requireFunctionBind();
  var hasOwn = requireSrc();
  var $concat = bind4.call(Function.call, Array.prototype.concat);
  var $spliceApply = bind4.call(Function.apply, Array.prototype.splice);
  var $replace = bind4.call(Function.call, String.prototype.replace);
  var $strSlice = bind4.call(Function.call, String.prototype.slice);
  var $exec = bind4.call(Function.call, RegExp.prototype.exec);
  var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
  var reEscapeChar = /\\(\\)?/g;
  var stringToPath = function stringToPath2(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
      throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
      result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
  };
  var getBaseIntrinsic = function getBaseIntrinsic2(name2, allowMissing) {
    var intrinsicName = name2;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
      alias = LEGACY_ALIASES[intrinsicName];
      intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
      var value = INTRINSICS[intrinsicName];
      if (value === needsEval) {
        value = doEval(intrinsicName);
      }
      if (typeof value === "undefined" && !allowMissing) {
        throw new $TypeError("intrinsic " + name2 + " exists, but is not available. Please file an issue!");
      }
      return {
        alias,
        name: intrinsicName,
        value
      };
    }
    throw new $SyntaxError("intrinsic " + name2 + " does not exist!");
  };
  getIntrinsic = function GetIntrinsic(name2, allowMissing) {
    if (typeof name2 !== "string" || name2.length === 0) {
      throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
      throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/g, name2) === null) {
      throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name2);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
      intrinsicBaseName = alias[0];
      $spliceApply(parts, $concat([0, 1], alias));
    }
    for (var i = 1, isOwn = true; i < parts.length; i += 1) {
      var part = parts[i];
      var first = $strSlice(part, 0, 1);
      var last = $strSlice(part, -1);
      if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
        throw new $SyntaxError("property names with quotes must have matching quotes");
      }
      if (part === "constructor" || !isOwn) {
        skipFurtherCaching = true;
      }
      intrinsicBaseName += "." + part;
      intrinsicRealName = "%" + intrinsicBaseName + "%";
      if (hasOwn(INTRINSICS, intrinsicRealName)) {
        value = INTRINSICS[intrinsicRealName];
      } else if (value != null) {
        if (!(part in value)) {
          if (!allowMissing) {
            throw new $TypeError("base intrinsic for " + name2 + " exists, but the property is not available.");
          }
          return void 0;
        }
        if ($gOPD && i + 1 >= parts.length) {
          var desc = $gOPD(value, part);
          isOwn = !!desc;
          if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
            value = desc.get;
          } else {
            value = value[part];
          }
        } else {
          isOwn = hasOwn(value, part);
          value = value[part];
        }
        if (isOwn && !skipFurtherCaching) {
          INTRINSICS[intrinsicRealName] = value;
        }
      }
    }
    return value;
  };
  return getIntrinsic;
}
var callBind = { exports: {} };
var hasRequiredCallBind;
function requireCallBind() {
  if (hasRequiredCallBind)
    return callBind.exports;
  hasRequiredCallBind = 1;
  (function(module) {
    var bind4 = requireFunctionBind();
    var GetIntrinsic = requireGetIntrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind4.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module.exports = function callBind2(originalFunction) {
      var func = $reflectApply(bind4, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind4, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module.exports, "apply", { value: applyBind });
    } else {
      module.exports.apply = applyBind;
    }
  })(callBind);
  return callBind.exports;
}
var callBound;
var hasRequiredCallBound;
function requireCallBound() {
  if (hasRequiredCallBound)
    return callBound;
  hasRequiredCallBound = 1;
  var GetIntrinsic = requireGetIntrinsic();
  var callBind2 = requireCallBind();
  var $indexOf = callBind2(GetIntrinsic("String.prototype.indexOf"));
  callBound = function callBoundIntrinsic(name2, allowMissing) {
    var intrinsic = GetIntrinsic(name2, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name2, ".prototype.") > -1) {
      return callBind2(intrinsic);
    }
    return intrinsic;
  };
  return callBound;
}
var isArguments$1;
var hasRequiredIsArguments$1;
function requireIsArguments$1() {
  if (hasRequiredIsArguments$1)
    return isArguments$1;
  hasRequiredIsArguments$1 = 1;
  var hasToStringTag = requireShams()();
  var callBound2 = requireCallBound();
  var $toString = callBound2("Object.prototype.toString");
  var isStandardArguments = function isArguments2(value) {
    if (hasToStringTag && value && typeof value === "object" && Symbol.toStringTag in value) {
      return false;
    }
    return $toString(value) === "[object Arguments]";
  };
  var isLegacyArguments = function isArguments2(value) {
    if (isStandardArguments(value)) {
      return true;
    }
    return value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && $toString(value) !== "[object Array]" && $toString(value.callee) === "[object Function]";
  };
  var supportsStandardArguments = function() {
    return isStandardArguments(arguments);
  }();
  isStandardArguments.isLegacyArguments = isLegacyArguments;
  isArguments$1 = supportsStandardArguments ? isStandardArguments : isLegacyArguments;
  return isArguments$1;
}
var isGeneratorFunction;
var hasRequiredIsGeneratorFunction;
function requireIsGeneratorFunction() {
  if (hasRequiredIsGeneratorFunction)
    return isGeneratorFunction;
  hasRequiredIsGeneratorFunction = 1;
  var toStr = Object.prototype.toString;
  var fnToStr = Function.prototype.toString;
  var isFnRegex = /^\s*(?:function)?\*/;
  var hasToStringTag = requireShams()();
  var getProto = Object.getPrototypeOf;
  var getGeneratorFunc = function() {
    if (!hasToStringTag) {
      return false;
    }
    try {
      return Function("return function*() {}")();
    } catch (e) {
    }
  };
  var GeneratorFunction;
  isGeneratorFunction = function isGeneratorFunction2(fn) {
    if (typeof fn !== "function") {
      return false;
    }
    if (isFnRegex.test(fnToStr.call(fn))) {
      return true;
    }
    if (!hasToStringTag) {
      var str = toStr.call(fn);
      return str === "[object GeneratorFunction]";
    }
    if (!getProto) {
      return false;
    }
    if (typeof GeneratorFunction === "undefined") {
      var generatorFunc = getGeneratorFunc();
      GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
    }
    return getProto(fn) === GeneratorFunction;
  };
  return isGeneratorFunction;
}
var isCallable;
var hasRequiredIsCallable;
function requireIsCallable() {
  if (hasRequiredIsCallable)
    return isCallable;
  hasRequiredIsCallable = 1;
  var fnToStr = Function.prototype.toString;
  var reflectApply = typeof Reflect === "object" && Reflect !== null && Reflect.apply;
  var badArrayLike;
  var isCallableMarker;
  if (typeof reflectApply === "function" && typeof Object.defineProperty === "function") {
    try {
      badArrayLike = Object.defineProperty({}, "length", {
        get: function() {
          throw isCallableMarker;
        }
      });
      isCallableMarker = {};
      reflectApply(function() {
        throw 42;
      }, null, badArrayLike);
    } catch (_) {
      if (_ !== isCallableMarker) {
        reflectApply = null;
      }
    }
  } else {
    reflectApply = null;
  }
  var constructorRegex = /^\s*class\b/;
  var isES6ClassFn = function isES6ClassFunction(value) {
    try {
      var fnStr = fnToStr.call(value);
      return constructorRegex.test(fnStr);
    } catch (e) {
      return false;
    }
  };
  var tryFunctionObject = function tryFunctionToStr(value) {
    try {
      if (isES6ClassFn(value)) {
        return false;
      }
      fnToStr.call(value);
      return true;
    } catch (e) {
      return false;
    }
  };
  var toStr = Object.prototype.toString;
  var fnClass = "[object Function]";
  var genClass = "[object GeneratorFunction]";
  var hasToStringTag = typeof Symbol === "function" && !!Symbol.toStringTag;
  var documentDotAll = typeof document === "object" && typeof document.all === "undefined" && document.all !== void 0 ? document.all : {};
  isCallable = reflectApply ? function isCallable2(value) {
    if (value === documentDotAll) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    if (typeof value === "function" && !value.prototype) {
      return true;
    }
    try {
      reflectApply(value, null, badArrayLike);
    } catch (e) {
      if (e !== isCallableMarker) {
        return false;
      }
    }
    return !isES6ClassFn(value);
  } : function isCallable2(value) {
    if (value === documentDotAll) {
      return true;
    }
    if (!value) {
      return false;
    }
    if (typeof value !== "function" && typeof value !== "object") {
      return false;
    }
    if (typeof value === "function" && !value.prototype) {
      return true;
    }
    if (hasToStringTag) {
      return tryFunctionObject(value);
    }
    if (isES6ClassFn(value)) {
      return false;
    }
    var strClass = toStr.call(value);
    return strClass === fnClass || strClass === genClass;
  };
  return isCallable;
}
var forEach_1;
var hasRequiredForEach;
function requireForEach() {
  if (hasRequiredForEach)
    return forEach_1;
  hasRequiredForEach = 1;
  var isCallable2 = requireIsCallable();
  var toStr = Object.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var forEachArray = function forEachArray2(array, iterator, receiver) {
    for (var i = 0, len = array.length; i < len; i++) {
      if (hasOwnProperty.call(array, i)) {
        if (receiver == null) {
          iterator(array[i], i, array);
        } else {
          iterator.call(receiver, array[i], i, array);
        }
      }
    }
  };
  var forEachString = function forEachString2(string, iterator, receiver) {
    for (var i = 0, len = string.length; i < len; i++) {
      if (receiver == null) {
        iterator(string.charAt(i), i, string);
      } else {
        iterator.call(receiver, string.charAt(i), i, string);
      }
    }
  };
  var forEachObject = function forEachObject2(object, iterator, receiver) {
    for (var k in object) {
      if (hasOwnProperty.call(object, k)) {
        if (receiver == null) {
          iterator(object[k], k, object);
        } else {
          iterator.call(receiver, object[k], k, object);
        }
      }
    }
  };
  var forEach4 = function forEach5(list, iterator, thisArg) {
    if (!isCallable2(iterator)) {
      throw new TypeError("iterator must be a function");
    }
    var receiver;
    if (arguments.length >= 3) {
      receiver = thisArg;
    }
    if (toStr.call(list) === "[object Array]") {
      forEachArray(list, iterator, receiver);
    } else if (typeof list === "string") {
      forEachString(list, iterator, receiver);
    } else {
      forEachObject(list, iterator, receiver);
    }
  };
  forEach_1 = forEach4;
  return forEach_1;
}
var availableTypedArrays;
var hasRequiredAvailableTypedArrays;
function requireAvailableTypedArrays() {
  if (hasRequiredAvailableTypedArrays)
    return availableTypedArrays;
  hasRequiredAvailableTypedArrays = 1;
  var possibleNames = [
    "BigInt64Array",
    "BigUint64Array",
    "Float32Array",
    "Float64Array",
    "Int16Array",
    "Int32Array",
    "Int8Array",
    "Uint16Array",
    "Uint32Array",
    "Uint8Array",
    "Uint8ClampedArray"
  ];
  var g = typeof globalThis === "undefined" ? globalThis : globalThis;
  availableTypedArrays = function availableTypedArrays2() {
    var out = [];
    for (var i = 0; i < possibleNames.length; i++) {
      if (typeof g[possibleNames[i]] === "function") {
        out[out.length] = possibleNames[i];
      }
    }
    return out;
  };
  return availableTypedArrays;
}
var getOwnPropertyDescriptor;
var hasRequiredGetOwnPropertyDescriptor;
function requireGetOwnPropertyDescriptor() {
  if (hasRequiredGetOwnPropertyDescriptor)
    return getOwnPropertyDescriptor;
  hasRequiredGetOwnPropertyDescriptor = 1;
  var GetIntrinsic = requireGetIntrinsic();
  var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
  if ($gOPD) {
    try {
      $gOPD([], "length");
    } catch (e) {
      $gOPD = null;
    }
  }
  getOwnPropertyDescriptor = $gOPD;
  return getOwnPropertyDescriptor;
}
var isTypedArray;
var hasRequiredIsTypedArray;
function requireIsTypedArray() {
  if (hasRequiredIsTypedArray)
    return isTypedArray;
  hasRequiredIsTypedArray = 1;
  var forEach4 = requireForEach();
  var availableTypedArrays2 = requireAvailableTypedArrays();
  var callBound2 = requireCallBound();
  var $toString = callBound2("Object.prototype.toString");
  var hasToStringTag = requireShams()();
  var g = typeof globalThis === "undefined" ? globalThis : globalThis;
  var typedArrays = availableTypedArrays2();
  var $indexOf = callBound2("Array.prototype.indexOf", true) || function indexOf(array, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i] === value) {
        return i;
      }
    }
    return -1;
  };
  var $slice = callBound2("String.prototype.slice");
  var toStrTags = {};
  var gOPD = requireGetOwnPropertyDescriptor();
  var getPrototypeOf = Object.getPrototypeOf;
  if (hasToStringTag && gOPD && getPrototypeOf) {
    forEach4(typedArrays, function(typedArray) {
      var arr = new g[typedArray]();
      if (Symbol.toStringTag in arr) {
        var proto2 = getPrototypeOf(arr);
        var descriptor = gOPD(proto2, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf(proto2);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays(value) {
    var anyTrue = false;
    forEach4(toStrTags, function(getter, typedArray) {
      if (!anyTrue) {
        try {
          anyTrue = getter.call(value) === typedArray;
        } catch (e) {
        }
      }
    });
    return anyTrue;
  };
  isTypedArray = function isTypedArray2(value) {
    if (!value || typeof value !== "object") {
      return false;
    }
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
      var tag = $slice($toString(value), 8, -1);
      return $indexOf(typedArrays, tag) > -1;
    }
    if (!gOPD) {
      return false;
    }
    return tryTypedArrays(value);
  };
  return isTypedArray;
}
var whichTypedArray;
var hasRequiredWhichTypedArray;
function requireWhichTypedArray() {
  if (hasRequiredWhichTypedArray)
    return whichTypedArray;
  hasRequiredWhichTypedArray = 1;
  var forEach4 = requireForEach();
  var availableTypedArrays2 = requireAvailableTypedArrays();
  var callBound2 = requireCallBound();
  var $toString = callBound2("Object.prototype.toString");
  var hasToStringTag = requireShams()();
  var g = typeof globalThis === "undefined" ? globalThis : globalThis;
  var typedArrays = availableTypedArrays2();
  var $slice = callBound2("String.prototype.slice");
  var toStrTags = {};
  var gOPD = requireGetOwnPropertyDescriptor();
  var getPrototypeOf = Object.getPrototypeOf;
  if (hasToStringTag && gOPD && getPrototypeOf) {
    forEach4(typedArrays, function(typedArray) {
      if (typeof g[typedArray] === "function") {
        var arr = new g[typedArray]();
        if (Symbol.toStringTag in arr) {
          var proto2 = getPrototypeOf(arr);
          var descriptor = gOPD(proto2, Symbol.toStringTag);
          if (!descriptor) {
            var superProto = getPrototypeOf(proto2);
            descriptor = gOPD(superProto, Symbol.toStringTag);
          }
          toStrTags[typedArray] = descriptor.get;
        }
      }
    });
  }
  var tryTypedArrays = function tryAllTypedArrays(value) {
    var foundName = false;
    forEach4(toStrTags, function(getter, typedArray) {
      if (!foundName) {
        try {
          var name2 = getter.call(value);
          if (name2 === typedArray) {
            foundName = name2;
          }
        } catch (e) {
        }
      }
    });
    return foundName;
  };
  var isTypedArray2 = requireIsTypedArray();
  whichTypedArray = function whichTypedArray2(value) {
    if (!isTypedArray2(value)) {
      return false;
    }
    if (!hasToStringTag || !(Symbol.toStringTag in value)) {
      return $slice($toString(value), 8, -1);
    }
    return tryTypedArrays(value);
  };
  return whichTypedArray;
}
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes)
    return types$4;
  hasRequiredTypes = 1;
  (function(exports2) {
    var isArgumentsObject = requireIsArguments$1();
    var isGeneratorFunction2 = requireIsGeneratorFunction();
    var whichTypedArray2 = requireWhichTypedArray();
    var isTypedArray2 = requireIsTypedArray();
    function uncurryThis(f2) {
      return f2.call.bind(f2);
    }
    var BigIntSupported = typeof BigInt !== "undefined";
    var SymbolSupported = typeof Symbol !== "undefined";
    var ObjectToString = uncurryThis(Object.prototype.toString);
    var numberValue = uncurryThis(Number.prototype.valueOf);
    var stringValue = uncurryThis(String.prototype.valueOf);
    var booleanValue = uncurryThis(Boolean.prototype.valueOf);
    if (BigIntSupported) {
      var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
    }
    if (SymbolSupported) {
      var symbolValue = uncurryThis(Symbol.prototype.valueOf);
    }
    function checkBoxedPrimitive(value, prototypeValueOf) {
      if (typeof value !== "object") {
        return false;
      }
      try {
        prototypeValueOf(value);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports2.isArgumentsObject = isArgumentsObject;
    exports2.isGeneratorFunction = isGeneratorFunction2;
    exports2.isTypedArray = isTypedArray2;
    function isPromise(input) {
      return typeof Promise !== "undefined" && input instanceof Promise || input !== null && typeof input === "object" && typeof input.then === "function" && typeof input.catch === "function";
    }
    exports2.isPromise = isPromise;
    function isArrayBufferView2(value) {
      if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
        return ArrayBuffer.isView(value);
      }
      return isTypedArray2(value) || isDataView(value);
    }
    exports2.isArrayBufferView = isArrayBufferView2;
    function isUint8Array2(value) {
      return whichTypedArray2(value) === "Uint8Array";
    }
    exports2.isUint8Array = isUint8Array2;
    function isUint8ClampedArray(value) {
      return whichTypedArray2(value) === "Uint8ClampedArray";
    }
    exports2.isUint8ClampedArray = isUint8ClampedArray;
    function isUint16Array(value) {
      return whichTypedArray2(value) === "Uint16Array";
    }
    exports2.isUint16Array = isUint16Array;
    function isUint32Array(value) {
      return whichTypedArray2(value) === "Uint32Array";
    }
    exports2.isUint32Array = isUint32Array;
    function isInt8Array(value) {
      return whichTypedArray2(value) === "Int8Array";
    }
    exports2.isInt8Array = isInt8Array;
    function isInt16Array(value) {
      return whichTypedArray2(value) === "Int16Array";
    }
    exports2.isInt16Array = isInt16Array;
    function isInt32Array(value) {
      return whichTypedArray2(value) === "Int32Array";
    }
    exports2.isInt32Array = isInt32Array;
    function isFloat32Array(value) {
      return whichTypedArray2(value) === "Float32Array";
    }
    exports2.isFloat32Array = isFloat32Array;
    function isFloat64Array(value) {
      return whichTypedArray2(value) === "Float64Array";
    }
    exports2.isFloat64Array = isFloat64Array;
    function isBigInt64Array(value) {
      return whichTypedArray2(value) === "BigInt64Array";
    }
    exports2.isBigInt64Array = isBigInt64Array;
    function isBigUint64Array(value) {
      return whichTypedArray2(value) === "BigUint64Array";
    }
    exports2.isBigUint64Array = isBigUint64Array;
    function isMapToString(value) {
      return ObjectToString(value) === "[object Map]";
    }
    isMapToString.working = typeof Map !== "undefined" && isMapToString(/* @__PURE__ */ new Map());
    function isMap(value) {
      if (typeof Map === "undefined") {
        return false;
      }
      return isMapToString.working ? isMapToString(value) : value instanceof Map;
    }
    exports2.isMap = isMap;
    function isSetToString(value) {
      return ObjectToString(value) === "[object Set]";
    }
    isSetToString.working = typeof Set !== "undefined" && isSetToString(/* @__PURE__ */ new Set());
    function isSet(value) {
      if (typeof Set === "undefined") {
        return false;
      }
      return isSetToString.working ? isSetToString(value) : value instanceof Set;
    }
    exports2.isSet = isSet;
    function isWeakMapToString(value) {
      return ObjectToString(value) === "[object WeakMap]";
    }
    isWeakMapToString.working = typeof WeakMap !== "undefined" && isWeakMapToString(/* @__PURE__ */ new WeakMap());
    function isWeakMap(value) {
      if (typeof WeakMap === "undefined") {
        return false;
      }
      return isWeakMapToString.working ? isWeakMapToString(value) : value instanceof WeakMap;
    }
    exports2.isWeakMap = isWeakMap;
    function isWeakSetToString(value) {
      return ObjectToString(value) === "[object WeakSet]";
    }
    isWeakSetToString.working = typeof WeakSet !== "undefined" && isWeakSetToString(/* @__PURE__ */ new WeakSet());
    function isWeakSet(value) {
      return isWeakSetToString(value);
    }
    exports2.isWeakSet = isWeakSet;
    function isArrayBufferToString(value) {
      return ObjectToString(value) === "[object ArrayBuffer]";
    }
    isArrayBufferToString.working = typeof ArrayBuffer !== "undefined" && isArrayBufferToString(new ArrayBuffer());
    function isArrayBuffer2(value) {
      if (typeof ArrayBuffer === "undefined") {
        return false;
      }
      return isArrayBufferToString.working ? isArrayBufferToString(value) : value instanceof ArrayBuffer;
    }
    exports2.isArrayBuffer = isArrayBuffer2;
    function isDataViewToString(value) {
      return ObjectToString(value) === "[object DataView]";
    }
    isDataViewToString.working = typeof ArrayBuffer !== "undefined" && typeof DataView !== "undefined" && isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1));
    function isDataView(value) {
      if (typeof DataView === "undefined") {
        return false;
      }
      return isDataViewToString.working ? isDataViewToString(value) : value instanceof DataView;
    }
    exports2.isDataView = isDataView;
    var SharedArrayBufferCopy = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : void 0;
    function isSharedArrayBufferToString(value) {
      return ObjectToString(value) === "[object SharedArrayBuffer]";
    }
    function isSharedArrayBuffer(value) {
      if (typeof SharedArrayBufferCopy === "undefined") {
        return false;
      }
      if (typeof isSharedArrayBufferToString.working === "undefined") {
        isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
      }
      return isSharedArrayBufferToString.working ? isSharedArrayBufferToString(value) : value instanceof SharedArrayBufferCopy;
    }
    exports2.isSharedArrayBuffer = isSharedArrayBuffer;
    function isAsyncFunction(value) {
      return ObjectToString(value) === "[object AsyncFunction]";
    }
    exports2.isAsyncFunction = isAsyncFunction;
    function isMapIterator(value) {
      return ObjectToString(value) === "[object Map Iterator]";
    }
    exports2.isMapIterator = isMapIterator;
    function isSetIterator(value) {
      return ObjectToString(value) === "[object Set Iterator]";
    }
    exports2.isSetIterator = isSetIterator;
    function isGeneratorObject(value) {
      return ObjectToString(value) === "[object Generator]";
    }
    exports2.isGeneratorObject = isGeneratorObject;
    function isWebAssemblyCompiledModule(value) {
      return ObjectToString(value) === "[object WebAssembly.Module]";
    }
    exports2.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;
    function isNumberObject(value) {
      return checkBoxedPrimitive(value, numberValue);
    }
    exports2.isNumberObject = isNumberObject;
    function isStringObject(value) {
      return checkBoxedPrimitive(value, stringValue);
    }
    exports2.isStringObject = isStringObject;
    function isBooleanObject(value) {
      return checkBoxedPrimitive(value, booleanValue);
    }
    exports2.isBooleanObject = isBooleanObject;
    function isBigIntObject(value) {
      return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
    }
    exports2.isBigIntObject = isBigIntObject;
    function isSymbolObject(value) {
      return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
    }
    exports2.isSymbolObject = isSymbolObject;
    function isBoxedPrimitive(value) {
      return isNumberObject(value) || isStringObject(value) || isBooleanObject(value) || isBigIntObject(value) || isSymbolObject(value);
    }
    exports2.isBoxedPrimitive = isBoxedPrimitive;
    function isAnyArrayBuffer(value) {
      return typeof Uint8Array !== "undefined" && (isArrayBuffer2(value) || isSharedArrayBuffer(value));
    }
    exports2.isAnyArrayBuffer = isAnyArrayBuffer;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(method) {
      Object.defineProperty(exports2, method, {
        enumerable: false,
        value: function() {
          throw new Error(method + " is not supported in userland");
        }
      });
    });
  })(types$4);
  return types$4;
}
var isBufferBrowser;
var hasRequiredIsBufferBrowser;
function requireIsBufferBrowser() {
  if (hasRequiredIsBufferBrowser)
    return isBufferBrowser;
  hasRequiredIsBufferBrowser = 1;
  isBufferBrowser = function isBuffer2(arg) {
    return arg && typeof arg === "object" && typeof arg.copy === "function" && typeof arg.fill === "function" && typeof arg.readUInt8 === "function";
  };
  return isBufferBrowser;
}
var inherits_browser$1 = { exports: {} };
var hasRequiredInherits_browser;
function requireInherits_browser() {
  if (hasRequiredInherits_browser)
    return inherits_browser$1.exports;
  hasRequiredInherits_browser = 1;
  if (typeof Object.create === "function") {
    inherits_browser$1.exports = function inherits2(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
          constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
      }
    };
  } else {
    inherits_browser$1.exports = function inherits2(ctor, superCtor) {
      if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {
        };
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
      }
    };
  }
  return inherits_browser$1.exports;
}
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil)
    return util$5;
  hasRequiredUtil = 1;
  (function(exports2) {
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(obj2) {
      var keys2 = Object.keys(obj2);
      var descriptors2 = {};
      for (var i = 0; i < keys2.length; i++) {
        descriptors2[keys2[i]] = Object.getOwnPropertyDescriptor(obj2, keys2[i]);
      }
      return descriptors2;
    };
    var formatRegExp = /%[sdj%]/g;
    exports2.format = function(f2) {
      if (!isString2(f2)) {
        var objects = [];
        for (var i = 0; i < arguments.length; i++) {
          objects.push(inspect9(arguments[i]));
        }
        return objects.join(" ");
      }
      var i = 1;
      var args = arguments;
      var len = args.length;
      var str = String(f2).replace(formatRegExp, function(x2) {
        if (x2 === "%%")
          return "%";
        if (i >= len)
          return x2;
        switch (x2) {
          case "%s":
            return String(args[i++]);
          case "%d":
            return Number(args[i++]);
          case "%j":
            try {
              return JSON.stringify(args[i++]);
            } catch (_) {
              return "[Circular]";
            }
          default:
            return x2;
        }
      });
      for (var x = args[i]; i < len; x = args[++i]) {
        if (isNull(x) || !isObject2(x)) {
          str += " " + x;
        } else {
          str += " " + inspect9(x);
        }
      }
      return str;
    };
    exports2.deprecate = function(fn, msg) {
      if (typeof process !== "undefined" && process.noDeprecation === true) {
        return fn;
      }
      if (typeof process === "undefined") {
        return function() {
          return exports2.deprecate(fn, msg).apply(this, arguments);
        };
      }
      var warned = false;
      function deprecated() {
        if (!warned) {
          if (process.throwDeprecation) {
            throw new Error(msg);
          } else if (process.traceDeprecation) {
            console.trace(msg);
          } else {
            console.error(msg);
          }
          warned = true;
        }
        return fn.apply(this, arguments);
      }
      return deprecated;
    };
    var debugs = {};
    var debugEnvRegex = /^$/;
    if ({}.NODE_DEBUG) {
      var debugEnv = {}.NODE_DEBUG;
      debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase();
      debugEnvRegex = new RegExp("^" + debugEnv + "$", "i");
    }
    exports2.debuglog = function(set) {
      set = set.toUpperCase();
      if (!debugs[set]) {
        if (debugEnvRegex.test(set)) {
          var pid = process.pid;
          debugs[set] = function() {
            var msg = exports2.format.apply(exports2, arguments);
            console.error("%s %d: %s", set, pid, msg);
          };
        } else {
          debugs[set] = function() {
          };
        }
      }
      return debugs[set];
    };
    function inspect9(obj2, opts) {
      var ctx = {
        seen: [],
        stylize: stylizeNoColor
      };
      if (arguments.length >= 3)
        ctx.depth = arguments[2];
      if (arguments.length >= 4)
        ctx.colors = arguments[3];
      if (isBoolean(opts)) {
        ctx.showHidden = opts;
      } else if (opts) {
        exports2._extend(ctx, opts);
      }
      if (isUndefined2(ctx.showHidden))
        ctx.showHidden = false;
      if (isUndefined2(ctx.depth))
        ctx.depth = 2;
      if (isUndefined2(ctx.colors))
        ctx.colors = false;
      if (isUndefined2(ctx.customInspect))
        ctx.customInspect = true;
      if (ctx.colors)
        ctx.stylize = stylizeWithColor;
      return formatValue(ctx, obj2, ctx.depth);
    }
    exports2.inspect = inspect9;
    inspect9.colors = {
      "bold": [1, 22],
      "italic": [3, 23],
      "underline": [4, 24],
      "inverse": [7, 27],
      "white": [37, 39],
      "grey": [90, 39],
      "black": [30, 39],
      "blue": [34, 39],
      "cyan": [36, 39],
      "green": [32, 39],
      "magenta": [35, 39],
      "red": [31, 39],
      "yellow": [33, 39]
    };
    inspect9.styles = {
      "special": "cyan",
      "number": "yellow",
      "boolean": "yellow",
      "undefined": "grey",
      "null": "bold",
      "string": "green",
      "date": "magenta",
      "regexp": "red"
    };
    function stylizeWithColor(str, styleType) {
      var style = inspect9.styles[styleType];
      if (style) {
        return "\x1B[" + inspect9.colors[style][0] + "m" + str + "\x1B[" + inspect9.colors[style][1] + "m";
      } else {
        return str;
      }
    }
    function stylizeNoColor(str, styleType) {
      return str;
    }
    function arrayToHash(array) {
      var hash3 = {};
      array.forEach(function(val, idx) {
        hash3[val] = true;
      });
      return hash3;
    }
    function formatValue(ctx, value, recurseTimes) {
      if (ctx.customInspect && value && isFunction2(value.inspect) && value.inspect !== exports2.inspect && !(value.constructor && value.constructor.prototype === value)) {
        var ret = value.inspect(recurseTimes, ctx);
        if (!isString2(ret)) {
          ret = formatValue(ctx, ret, recurseTimes);
        }
        return ret;
      }
      var primitive = formatPrimitive(ctx, value);
      if (primitive) {
        return primitive;
      }
      var keys2 = Object.keys(value);
      var visibleKeys = arrayToHash(keys2);
      if (ctx.showHidden) {
        keys2 = Object.getOwnPropertyNames(value);
      }
      if (isError3(value) && (keys2.indexOf("message") >= 0 || keys2.indexOf("description") >= 0)) {
        return formatError(value);
      }
      if (keys2.length === 0) {
        if (isFunction2(value)) {
          var name2 = value.name ? ": " + value.name : "";
          return ctx.stylize("[Function" + name2 + "]", "special");
        }
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        }
        if (isDate2(value)) {
          return ctx.stylize(Date.prototype.toString.call(value), "date");
        }
        if (isError3(value)) {
          return formatError(value);
        }
      }
      var base3 = "", array = false, braces = ["{", "}"];
      if (isArray2(value)) {
        array = true;
        braces = ["[", "]"];
      }
      if (isFunction2(value)) {
        var n = value.name ? ": " + value.name : "";
        base3 = " [Function" + n + "]";
      }
      if (isRegExp(value)) {
        base3 = " " + RegExp.prototype.toString.call(value);
      }
      if (isDate2(value)) {
        base3 = " " + Date.prototype.toUTCString.call(value);
      }
      if (isError3(value)) {
        base3 = " " + formatError(value);
      }
      if (keys2.length === 0 && (!array || value.length == 0)) {
        return braces[0] + base3 + braces[1];
      }
      if (recurseTimes < 0) {
        if (isRegExp(value)) {
          return ctx.stylize(RegExp.prototype.toString.call(value), "regexp");
        } else {
          return ctx.stylize("[Object]", "special");
        }
      }
      ctx.seen.push(value);
      var output;
      if (array) {
        output = formatArray(ctx, value, recurseTimes, visibleKeys, keys2);
      } else {
        output = keys2.map(function(key3) {
          return formatProperty(ctx, value, recurseTimes, visibleKeys, key3, array);
        });
      }
      ctx.seen.pop();
      return reduceToSingleString(output, base3, braces);
    }
    function formatPrimitive(ctx, value) {
      if (isUndefined2(value))
        return ctx.stylize("undefined", "undefined");
      if (isString2(value)) {
        var simple = "'" + JSON.stringify(value).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return ctx.stylize(simple, "string");
      }
      if (isNumber2(value))
        return ctx.stylize("" + value, "number");
      if (isBoolean(value))
        return ctx.stylize("" + value, "boolean");
      if (isNull(value))
        return ctx.stylize("null", "null");
    }
    function formatError(value) {
      return "[" + Error.prototype.toString.call(value) + "]";
    }
    function formatArray(ctx, value, recurseTimes, visibleKeys, keys2) {
      var output = [];
      for (var i = 0, l = value.length; i < l; ++i) {
        if (hasOwnProperty(value, String(i))) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            String(i),
            true
          ));
        } else {
          output.push("");
        }
      }
      keys2.forEach(function(key3) {
        if (!key3.match(/^\d+$/)) {
          output.push(formatProperty(
            ctx,
            value,
            recurseTimes,
            visibleKeys,
            key3,
            true
          ));
        }
      });
      return output;
    }
    function formatProperty(ctx, value, recurseTimes, visibleKeys, key3, array) {
      var name2, str, desc;
      desc = Object.getOwnPropertyDescriptor(value, key3) || { value: value[key3] };
      if (desc.get) {
        if (desc.set) {
          str = ctx.stylize("[Getter/Setter]", "special");
        } else {
          str = ctx.stylize("[Getter]", "special");
        }
      } else {
        if (desc.set) {
          str = ctx.stylize("[Setter]", "special");
        }
      }
      if (!hasOwnProperty(visibleKeys, key3)) {
        name2 = "[" + key3 + "]";
      }
      if (!str) {
        if (ctx.seen.indexOf(desc.value) < 0) {
          if (isNull(recurseTimes)) {
            str = formatValue(ctx, desc.value, null);
          } else {
            str = formatValue(ctx, desc.value, recurseTimes - 1);
          }
          if (str.indexOf("\n") > -1) {
            if (array) {
              str = str.split("\n").map(function(line) {
                return "  " + line;
              }).join("\n").substr(2);
            } else {
              str = "\n" + str.split("\n").map(function(line) {
                return "   " + line;
              }).join("\n");
            }
          }
        } else {
          str = ctx.stylize("[Circular]", "special");
        }
      }
      if (isUndefined2(name2)) {
        if (array && key3.match(/^\d+$/)) {
          return str;
        }
        name2 = JSON.stringify("" + key3);
        if (name2.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
          name2 = name2.substr(1, name2.length - 2);
          name2 = ctx.stylize(name2, "name");
        } else {
          name2 = name2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
          name2 = ctx.stylize(name2, "string");
        }
      }
      return name2 + ": " + str;
    }
    function reduceToSingleString(output, base3, braces) {
      var length2 = output.reduce(function(prev, cur) {
        if (cur.indexOf("\n") >= 0)
          ;
        return prev + cur.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      if (length2 > 60) {
        return braces[0] + (base3 === "" ? "" : base3 + "\n ") + " " + output.join(",\n  ") + " " + braces[1];
      }
      return braces[0] + base3 + " " + output.join(", ") + " " + braces[1];
    }
    exports2.types = requireTypes();
    function isArray2(ar2) {
      return Array.isArray(ar2);
    }
    exports2.isArray = isArray2;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports2.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports2.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports2.isNullOrUndefined = isNullOrUndefined;
    function isNumber2(arg) {
      return typeof arg === "number";
    }
    exports2.isNumber = isNumber2;
    function isString2(arg) {
      return typeof arg === "string";
    }
    exports2.isString = isString2;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports2.isSymbol = isSymbol;
    function isUndefined2(arg) {
      return arg === void 0;
    }
    exports2.isUndefined = isUndefined2;
    function isRegExp(re) {
      return isObject2(re) && objectToString(re) === "[object RegExp]";
    }
    exports2.isRegExp = isRegExp;
    exports2.types.isRegExp = isRegExp;
    function isObject2(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports2.isObject = isObject2;
    function isDate2(d) {
      return isObject2(d) && objectToString(d) === "[object Date]";
    }
    exports2.isDate = isDate2;
    exports2.types.isDate = isDate2;
    function isError3(e) {
      return isObject2(e) && (objectToString(e) === "[object Error]" || e instanceof Error);
    }
    exports2.isError = isError3;
    exports2.types.isNativeError = isError3;
    function isFunction2(arg) {
      return typeof arg === "function";
    }
    exports2.isFunction = isFunction2;
    function isPrimitive2(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || typeof arg === "undefined";
    }
    exports2.isPrimitive = isPrimitive2;
    exports2.isBuffer = requireIsBufferBrowser();
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
    function pad3(n) {
      return n < 10 ? "0" + n.toString(10) : n.toString(10);
    }
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    function timestamp() {
      var d = new Date();
      var time = [
        pad3(d.getHours()),
        pad3(d.getMinutes()),
        pad3(d.getSeconds())
      ].join(":");
      return [d.getDate(), months[d.getMonth()], time].join(" ");
    }
    exports2.log = function() {
      console.log("%s - %s", timestamp(), exports2.format.apply(exports2, arguments));
    };
    exports2.inherits = requireInherits_browser();
    exports2._extend = function(origin, add7) {
      if (!add7 || !isObject2(add7))
        return origin;
      var keys2 = Object.keys(add7);
      var i = keys2.length;
      while (i--) {
        origin[keys2[i]] = add7[keys2[i]];
      }
      return origin;
    };
    function hasOwnProperty(obj2, prop) {
      return Object.prototype.hasOwnProperty.call(obj2, prop);
    }
    var kCustomPromisifiedSymbol = typeof Symbol !== "undefined" ? Symbol("util.promisify.custom") : void 0;
    exports2.promisify = function promisify(original) {
      if (typeof original !== "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
        var fn = original[kCustomPromisifiedSymbol];
        if (typeof fn !== "function") {
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        }
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
        return fn;
      }
      function fn() {
        var promiseResolve, promiseReject;
        var promise = new Promise(function(resolve, reject) {
          promiseResolve = resolve;
          promiseReject = reject;
        });
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        args.push(function(err, value) {
          if (err) {
            promiseReject(err);
          } else {
            promiseResolve(value);
          }
        });
        try {
          original.apply(this, args);
        } catch (err) {
          promiseReject(err);
        }
        return promise;
      }
      Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
      if (kCustomPromisifiedSymbol)
        Object.defineProperty(fn, kCustomPromisifiedSymbol, {
          value: fn,
          enumerable: false,
          writable: false,
          configurable: true
        });
      return Object.defineProperties(
        fn,
        getOwnPropertyDescriptors(original)
      );
    };
    exports2.promisify.custom = kCustomPromisifiedSymbol;
    function callbackifyOnRejected(reason, cb) {
      if (!reason) {
        var newReason = new Error("Promise was rejected with a falsy value");
        newReason.reason = reason;
        reason = newReason;
      }
      return cb(reason);
    }
    function callbackify(original) {
      if (typeof original !== "function") {
        throw new TypeError('The "original" argument must be of type Function');
      }
      function callbackified() {
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
          args.push(arguments[i]);
        }
        var maybeCb = args.pop();
        if (typeof maybeCb !== "function") {
          throw new TypeError("The last argument must be of type Function");
        }
        var self2 = this;
        var cb = function() {
          return maybeCb.apply(self2, arguments);
        };
        original.apply(this, args).then(
          function(ret) {
            process.nextTick(cb.bind(null, null, ret));
          },
          function(rej) {
            process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
          }
        );
      }
      Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
      Object.defineProperties(
        callbackified,
        getOwnPropertyDescriptors(original)
      );
      return callbackified;
    }
    exports2.callbackify = callbackify;
  })(util$5);
  return util$5;
}
Object.defineProperty(utils$G, "__esModule", { value: true });
utils$G.b64UrlDecode = utils$G.b64UrlEncode = utils$G.bufferTob64Url = utils$G.bufferTob64 = utils$G.b64UrlToBuffer = utils$G.stringToB64Url = utils$G.stringToBuffer = utils$G.bufferToString = utils$G.b64UrlToString = utils$G.concatBuffers = void 0;
const B64js$1 = base64Js;
function concatBuffers$1(buffers) {
  let total_length = 0;
  for (let i = 0; i < buffers.length; i++) {
    total_length += buffers[i].byteLength;
  }
  let temp = new Uint8Array(total_length);
  let offset = 0;
  temp.set(new Uint8Array(buffers[0]), offset);
  offset += buffers[0].byteLength;
  for (let i = 1; i < buffers.length; i++) {
    temp.set(new Uint8Array(buffers[i]), offset);
    offset += buffers[i].byteLength;
  }
  return temp;
}
utils$G.concatBuffers = concatBuffers$1;
function b64UrlToString$1(b64UrlString) {
  let buffer2 = b64UrlToBuffer$1(b64UrlString);
  return bufferToString$1(buffer2);
}
utils$G.b64UrlToString = b64UrlToString$1;
function bufferToString$1(buffer2) {
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = requireUtil().TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer2);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer2);
}
utils$G.bufferToString = bufferToString$1;
function stringToBuffer$1(string) {
  if (typeof TextEncoder == "undefined") {
    const TextEncoder2 = requireUtil().TextEncoder;
    return new TextEncoder2().encode(string);
  }
  return new TextEncoder().encode(string);
}
utils$G.stringToBuffer = stringToBuffer$1;
function stringToB64Url$1(string) {
  return bufferTob64Url$1(stringToBuffer$1(string));
}
utils$G.stringToB64Url = stringToB64Url$1;
function b64UrlToBuffer$1(b64UrlString) {
  return new Uint8Array(B64js$1.toByteArray(b64UrlDecode$1(b64UrlString)));
}
utils$G.b64UrlToBuffer = b64UrlToBuffer$1;
function bufferTob64$1(buffer2) {
  return B64js$1.fromByteArray(new Uint8Array(buffer2));
}
utils$G.bufferTob64 = bufferTob64$1;
function bufferTob64Url$1(buffer2) {
  return b64UrlEncode$1(bufferTob64$1(buffer2));
}
utils$G.bufferTob64Url = bufferTob64Url$1;
function b64UrlEncode$1(b64UrlString) {
  return b64UrlString.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
utils$G.b64UrlEncode = b64UrlEncode$1;
function b64UrlDecode$1(b64UrlString) {
  b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
  let padding2;
  b64UrlString.length % 4 == 0 ? padding2 = 0 : padding2 = 4 - b64UrlString.length % 4;
  return b64UrlString.concat("=".repeat(padding2));
}
utils$G.b64UrlDecode = b64UrlDecode$1;
Object.defineProperty(webcryptoDriver, "__esModule", { value: true });
const ArweaveUtils$3 = utils$G;
class WebCryptoDriver {
  constructor() {
    this.keyLength = 4096;
    this.publicExponent = 65537;
    this.hashAlgorithm = "sha256";
    if (!this.detectWebCrypto()) {
      throw new Error("SubtleCrypto not available!");
    }
    this.driver = crypto.subtle;
  }
  async generateJWK() {
    let cryptoKey = await this.driver.generateKey({
      name: "RSA-PSS",
      modulusLength: 4096,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: {
        name: "SHA-256"
      }
    }, true, ["sign"]);
    let jwk = await this.driver.exportKey("jwk", cryptoKey.privateKey);
    return {
      kty: jwk.kty,
      e: jwk.e,
      n: jwk.n,
      d: jwk.d,
      p: jwk.p,
      q: jwk.q,
      dp: jwk.dp,
      dq: jwk.dq,
      qi: jwk.qi
    };
  }
  async sign(jwk, data2, { saltLength } = {}) {
    let signature2 = await this.driver.sign({
      name: "RSA-PSS",
      saltLength: 32
    }, await this.jwkToCryptoKey(jwk), data2);
    return new Uint8Array(signature2);
  }
  async hash(data2, algorithm = "SHA-256") {
    let digest10 = await this.driver.digest(algorithm, data2);
    return new Uint8Array(digest10);
  }
  async verify(publicModulus, data2, signature2) {
    const publicKey = {
      kty: "RSA",
      e: "AQAB",
      n: publicModulus
    };
    const key3 = await this.jwkToPublicCryptoKey(publicKey);
    const verifyWith32 = this.driver.verify({
      name: "RSA-PSS",
      saltLength: 32
    }, key3, signature2, data2);
    const verifyWith0 = this.driver.verify({
      name: "RSA-PSS",
      saltLength: 0
    }, key3, signature2, data2);
    return verifyWith32 || verifyWith0;
  }
  async jwkToCryptoKey(jwk) {
    return this.driver.importKey("jwk", jwk, {
      name: "RSA-PSS",
      hash: {
        name: "SHA-256"
      }
    }, false, ["sign"]);
  }
  async jwkToPublicCryptoKey(publicJwk) {
    return this.driver.importKey("jwk", publicJwk, {
      name: "RSA-PSS",
      hash: {
        name: "SHA-256"
      }
    }, false, ["verify"]);
  }
  detectWebCrypto() {
    if (typeof crypto === "undefined") {
      return false;
    }
    const subtle2 = crypto === null || crypto === void 0 ? void 0 : crypto.subtle;
    if (subtle2 === void 0) {
      return false;
    }
    const names2 = [
      "generateKey",
      "importKey",
      "exportKey",
      "digest",
      "sign"
    ];
    return names2.every((name2) => typeof subtle2[name2] === "function");
  }
  async encrypt(data2, key3, salt) {
    const initialKey = await this.driver.importKey("raw", typeof key3 == "string" ? ArweaveUtils$3.stringToBuffer(key3) : key3, {
      name: "PBKDF2",
      length: 32
    }, false, ["deriveKey"]);
    const derivedkey = await this.driver.deriveKey({
      name: "PBKDF2",
      salt: salt ? ArweaveUtils$3.stringToBuffer(salt) : ArweaveUtils$3.stringToBuffer("salt"),
      iterations: 1e5,
      hash: "SHA-256"
    }, initialKey, {
      name: "AES-CBC",
      length: 256
    }, false, ["encrypt", "decrypt"]);
    const iv = new Uint8Array(16);
    crypto.getRandomValues(iv);
    const encryptedData = await this.driver.encrypt({
      name: "AES-CBC",
      iv
    }, derivedkey, data2);
    return ArweaveUtils$3.concatBuffers([iv, encryptedData]);
  }
  async decrypt(encrypted, key3, salt) {
    const initialKey = await this.driver.importKey("raw", typeof key3 == "string" ? ArweaveUtils$3.stringToBuffer(key3) : key3, {
      name: "PBKDF2",
      length: 32
    }, false, ["deriveKey"]);
    const derivedkey = await this.driver.deriveKey({
      name: "PBKDF2",
      salt: salt ? ArweaveUtils$3.stringToBuffer(salt) : ArweaveUtils$3.stringToBuffer("salt"),
      iterations: 1e5,
      hash: "SHA-256"
    }, initialKey, {
      name: "AES-CBC",
      length: 256
    }, false, ["encrypt", "decrypt"]);
    const iv = encrypted.slice(0, 16);
    const data2 = await this.driver.decrypt({
      name: "AES-CBC",
      iv
    }, derivedkey, encrypted.slice(16));
    return ArweaveUtils$3.concatBuffers([data2]);
  }
}
webcryptoDriver.default = WebCryptoDriver;
var network = {};
Object.defineProperty(network, "__esModule", { value: true });
class Network {
  constructor(api2) {
    this.api = api2;
  }
  getInfo() {
    return this.api.get(`info`).then((response) => {
      return response.data;
    });
  }
  getPeers() {
    return this.api.get(`peers`).then((response) => {
      return response.data;
    });
  }
}
network.default = Network;
var transactions = {};
var error = {};
Object.defineProperty(error, "__esModule", { value: true });
error.getError = void 0;
class ArweaveError extends Error {
  constructor(type, optional2 = {}) {
    if (optional2.message) {
      super(optional2.message);
    } else {
      super();
    }
    this.type = type;
    this.response = optional2.response;
  }
  getType() {
    return this.type;
  }
}
error.default = ArweaveError;
function getError(resp) {
  let data2 = resp.data;
  if (typeof resp.data === "string") {
    try {
      data2 = JSON.parse(resp.data);
    } catch (e) {
    }
  }
  if (resp.data instanceof ArrayBuffer || resp.data instanceof Uint8Array) {
    try {
      data2 = JSON.parse(data2.toString());
    } catch (e) {
    }
  }
  return data2 ? data2.error || data2 : resp.statusText || "unknown";
}
error.getError = getError;
var transaction = {};
var deepHash$2 = {};
var hasRequiredDeepHash;
function requireDeepHash() {
  if (hasRequiredDeepHash)
    return deepHash$2;
  hasRequiredDeepHash = 1;
  Object.defineProperty(deepHash$2, "__esModule", { value: true });
  const common_1 = requireCommon();
  async function deepHash2(data2) {
    if (Array.isArray(data2)) {
      const tag2 = common_1.default.utils.concatBuffers([
        common_1.default.utils.stringToBuffer("list"),
        common_1.default.utils.stringToBuffer(data2.length.toString())
      ]);
      return await deepHashChunks2(data2, await common_1.default.crypto.hash(tag2, "SHA-384"));
    }
    const tag = common_1.default.utils.concatBuffers([
      common_1.default.utils.stringToBuffer("blob"),
      common_1.default.utils.stringToBuffer(data2.byteLength.toString())
    ]);
    const taggedHash = common_1.default.utils.concatBuffers([
      await common_1.default.crypto.hash(tag, "SHA-384"),
      await common_1.default.crypto.hash(data2, "SHA-384")
    ]);
    return await common_1.default.crypto.hash(taggedHash, "SHA-384");
  }
  deepHash$2.default = deepHash2;
  async function deepHashChunks2(chunks2, acc) {
    if (chunks2.length < 1) {
      return acc;
    }
    const hashPair = common_1.default.utils.concatBuffers([
      acc,
      await deepHash2(chunks2[0])
    ]);
    const newAcc = await common_1.default.crypto.hash(hashPair, "SHA-384");
    return await deepHashChunks2(chunks2.slice(1), newAcc);
  }
  return deepHash$2;
}
var merkle = {};
var hasRequiredMerkle;
function requireMerkle() {
  if (hasRequiredMerkle)
    return merkle;
  hasRequiredMerkle = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.debug = exports2.validatePath = exports2.arrayCompare = exports2.bufferToInt = exports2.intToBuffer = exports2.arrayFlatten = exports2.generateProofs = exports2.buildLayers = exports2.generateTransactionChunks = exports2.generateTree = exports2.computeRootHash = exports2.generateLeaves = exports2.chunkData = exports2.MIN_CHUNK_SIZE = exports2.MAX_CHUNK_SIZE = void 0;
    const common_1 = requireCommon();
    const utils_12 = utils$G;
    exports2.MAX_CHUNK_SIZE = 256 * 1024;
    exports2.MIN_CHUNK_SIZE = 32 * 1024;
    const NOTE_SIZE = 32;
    const HASH_SIZE = 32;
    async function chunkData(data2) {
      let chunks2 = [];
      let rest = data2;
      let cursor = 0;
      while (rest.byteLength >= exports2.MAX_CHUNK_SIZE) {
        let chunkSize = exports2.MAX_CHUNK_SIZE;
        let nextChunkSize = rest.byteLength - exports2.MAX_CHUNK_SIZE;
        if (nextChunkSize > 0 && nextChunkSize < exports2.MIN_CHUNK_SIZE) {
          chunkSize = Math.ceil(rest.byteLength / 2);
        }
        const chunk = rest.slice(0, chunkSize);
        const dataHash = await common_1.default.crypto.hash(chunk);
        cursor += chunk.byteLength;
        chunks2.push({
          dataHash,
          minByteRange: cursor - chunk.byteLength,
          maxByteRange: cursor
        });
        rest = rest.slice(chunkSize);
      }
      chunks2.push({
        dataHash: await common_1.default.crypto.hash(rest),
        minByteRange: cursor,
        maxByteRange: cursor + rest.byteLength
      });
      return chunks2;
    }
    exports2.chunkData = chunkData;
    async function generateLeaves(chunks2) {
      return Promise.all(chunks2.map(async ({ dataHash, minByteRange, maxByteRange }) => {
        return {
          type: "leaf",
          id: await hash3(await Promise.all([hash3(dataHash), hash3(intToBuffer2(maxByteRange))])),
          dataHash,
          minByteRange,
          maxByteRange
        };
      }));
    }
    exports2.generateLeaves = generateLeaves;
    async function computeRootHash(data2) {
      const rootNode = await generateTree(data2);
      return rootNode.id;
    }
    exports2.computeRootHash = computeRootHash;
    async function generateTree(data2) {
      const rootNode = await buildLayers(await generateLeaves(await chunkData(data2)));
      return rootNode;
    }
    exports2.generateTree = generateTree;
    async function generateTransactionChunks2(data2) {
      const chunks2 = await chunkData(data2);
      const leaves = await generateLeaves(chunks2);
      const root = await buildLayers(leaves);
      const proofs = await generateProofs(root);
      const lastChunk = chunks2.slice(-1)[0];
      if (lastChunk.maxByteRange - lastChunk.minByteRange === 0) {
        chunks2.splice(chunks2.length - 1, 1);
        proofs.splice(proofs.length - 1, 1);
      }
      return {
        data_root: root.id,
        chunks: chunks2,
        proofs
      };
    }
    exports2.generateTransactionChunks = generateTransactionChunks2;
    async function buildLayers(nodes, level = 0) {
      if (nodes.length < 2) {
        const root = nodes[0];
        return root;
      }
      const nextLayer = [];
      for (let i = 0; i < nodes.length; i += 2) {
        nextLayer.push(await hashBranch(nodes[i], nodes[i + 1]));
      }
      return buildLayers(nextLayer, level + 1);
    }
    exports2.buildLayers = buildLayers;
    function generateProofs(root) {
      const proofs = resolveBranchProofs(root);
      if (!Array.isArray(proofs)) {
        return [proofs];
      }
      return arrayFlatten(proofs);
    }
    exports2.generateProofs = generateProofs;
    function resolveBranchProofs(node2, proof = new Uint8Array(), depth = 0) {
      if (node2.type == "leaf") {
        return {
          offset: node2.maxByteRange - 1,
          proof: (0, utils_12.concatBuffers)([
            proof,
            node2.dataHash,
            intToBuffer2(node2.maxByteRange)
          ])
        };
      }
      if (node2.type == "branch") {
        const partialProof = (0, utils_12.concatBuffers)([
          proof,
          node2.leftChild.id,
          node2.rightChild.id,
          intToBuffer2(node2.byteRange)
        ]);
        return [
          resolveBranchProofs(node2.leftChild, partialProof, depth + 1),
          resolveBranchProofs(node2.rightChild, partialProof, depth + 1)
        ];
      }
      throw new Error(`Unexpected node type`);
    }
    function arrayFlatten(input) {
      const flat2 = [];
      input.forEach((item) => {
        if (Array.isArray(item)) {
          flat2.push(...arrayFlatten(item));
        } else {
          flat2.push(item);
        }
      });
      return flat2;
    }
    exports2.arrayFlatten = arrayFlatten;
    async function hashBranch(left, right) {
      if (!right) {
        return left;
      }
      let branch = {
        type: "branch",
        id: await hash3([
          await hash3(left.id),
          await hash3(right.id),
          await hash3(intToBuffer2(left.maxByteRange))
        ]),
        byteRange: left.maxByteRange,
        maxByteRange: right.maxByteRange,
        leftChild: left,
        rightChild: right
      };
      return branch;
    }
    async function hash3(data2) {
      if (Array.isArray(data2)) {
        data2 = common_1.default.utils.concatBuffers(data2);
      }
      return new Uint8Array(await common_1.default.crypto.hash(data2));
    }
    function intToBuffer2(note) {
      const buffer2 = new Uint8Array(NOTE_SIZE);
      for (var i = buffer2.length - 1; i >= 0; i--) {
        var byte = note % 256;
        buffer2[i] = byte;
        note = (note - byte) / 256;
      }
      return buffer2;
    }
    exports2.intToBuffer = intToBuffer2;
    function bufferToInt(buffer2) {
      let value = 0;
      for (var i = 0; i < buffer2.length; i++) {
        value *= 256;
        value += buffer2[i];
      }
      return value;
    }
    exports2.bufferToInt = bufferToInt;
    const arrayCompare = (a, b) => a.every((value, index2) => b[index2] === value);
    exports2.arrayCompare = arrayCompare;
    async function validatePath(id2, dest, leftBound, rightBound, path3) {
      if (rightBound <= 0) {
        return false;
      }
      if (dest >= rightBound) {
        return validatePath(id2, 0, rightBound - 1, rightBound, path3);
      }
      if (dest < 0) {
        return validatePath(id2, 0, 0, rightBound, path3);
      }
      if (path3.length == HASH_SIZE + NOTE_SIZE) {
        const pathData = path3.slice(0, HASH_SIZE);
        const endOffsetBuffer = path3.slice(pathData.length, pathData.length + NOTE_SIZE);
        const pathDataHash = await hash3([
          await hash3(pathData),
          await hash3(endOffsetBuffer)
        ]);
        let result = (0, exports2.arrayCompare)(id2, pathDataHash);
        if (result) {
          return {
            offset: rightBound - 1,
            leftBound,
            rightBound,
            chunkSize: rightBound - leftBound
          };
        }
        return false;
      }
      const left = path3.slice(0, HASH_SIZE);
      const right = path3.slice(left.length, left.length + HASH_SIZE);
      const offsetBuffer = path3.slice(left.length + right.length, left.length + right.length + NOTE_SIZE);
      const offset = bufferToInt(offsetBuffer);
      const remainder = path3.slice(left.length + right.length + offsetBuffer.length);
      const pathHash = await hash3([
        await hash3(left),
        await hash3(right),
        await hash3(offsetBuffer)
      ]);
      if ((0, exports2.arrayCompare)(id2, pathHash)) {
        if (dest < offset) {
          return await validatePath(left, dest, leftBound, Math.min(rightBound, offset), remainder);
        }
        return await validatePath(right, dest, Math.max(leftBound, offset), rightBound, remainder);
      }
      return false;
    }
    exports2.validatePath = validatePath;
    async function debug2(proof, output = "") {
      if (proof.byteLength < 1) {
        return output;
      }
      const left = proof.slice(0, HASH_SIZE);
      const right = proof.slice(left.length, left.length + HASH_SIZE);
      const offsetBuffer = proof.slice(left.length + right.length, left.length + right.length + NOTE_SIZE);
      const offset = bufferToInt(offsetBuffer);
      const remainder = proof.slice(left.length + right.length + offsetBuffer.length);
      const pathHash = await hash3([
        await hash3(left),
        await hash3(right),
        await hash3(offsetBuffer)
      ]);
      const updatedOutput = `${output}
${JSON.stringify(Buffer.from(left))},${JSON.stringify(Buffer.from(right))},${offset} => ${JSON.stringify(pathHash)}`;
      return debug2(remainder, updatedOutput);
    }
    exports2.debug = debug2;
  })(merkle);
  return merkle;
}
var hasRequiredTransaction;
function requireTransaction() {
  if (hasRequiredTransaction)
    return transaction;
  hasRequiredTransaction = 1;
  Object.defineProperty(transaction, "__esModule", { value: true });
  transaction.Tag = void 0;
  const ArweaveUtils2 = utils$G;
  const deepHash_12 = requireDeepHash();
  const merkle_1 = requireMerkle();
  class BaseObject2 {
    get(field, options) {
      if (!Object.getOwnPropertyNames(this).includes(field)) {
        throw new Error(`Field "${field}" is not a property of the Arweave Transaction class.`);
      }
      if (this[field] instanceof Uint8Array) {
        if (options && options.decode && options.string) {
          return ArweaveUtils2.bufferToString(this[field]);
        }
        if (options && options.decode && !options.string) {
          return this[field];
        }
        return ArweaveUtils2.bufferTob64Url(this[field]);
      }
      if (options && options.decode == true) {
        if (options && options.string) {
          return ArweaveUtils2.b64UrlToString(this[field]);
        }
        return ArweaveUtils2.b64UrlToBuffer(this[field]);
      }
      return this[field];
    }
  }
  class Tag2 extends BaseObject2 {
    constructor(name2, value, decode5 = false) {
      super();
      this.name = name2;
      this.value = value;
    }
  }
  transaction.Tag = Tag2;
  class Transaction2 extends BaseObject2 {
    constructor(attributes = {}) {
      super();
      this.format = 2;
      this.id = "";
      this.last_tx = "";
      this.owner = "";
      this.tags = [];
      this.target = "";
      this.quantity = "0";
      this.data_size = "0";
      this.data = new Uint8Array();
      this.data_root = "";
      this.reward = "0";
      this.signature = "";
      Object.assign(this, attributes);
      if (typeof this.data === "string") {
        this.data = ArweaveUtils2.b64UrlToBuffer(this.data);
      }
      if (attributes.tags) {
        this.tags = attributes.tags.map((tag) => {
          return new Tag2(tag.name, tag.value);
        });
      }
    }
    addTag(name2, value) {
      this.tags.push(new Tag2(ArweaveUtils2.stringToB64Url(name2), ArweaveUtils2.stringToB64Url(value)));
    }
    toJSON() {
      return {
        format: this.format,
        id: this.id,
        last_tx: this.last_tx,
        owner: this.owner,
        tags: this.tags,
        target: this.target,
        quantity: this.quantity,
        data: ArweaveUtils2.bufferTob64Url(this.data),
        data_size: this.data_size,
        data_root: this.data_root,
        data_tree: this.data_tree,
        reward: this.reward,
        signature: this.signature
      };
    }
    setOwner(owner) {
      this.owner = owner;
    }
    setSignature({ id: id2, owner, reward, tags: tags2, signature: signature2 }) {
      this.id = id2;
      this.owner = owner;
      if (reward)
        this.reward = reward;
      if (tags2)
        this.tags = tags2;
      this.signature = signature2;
    }
    async prepareChunks(data2) {
      if (!this.chunks && data2.byteLength > 0) {
        this.chunks = await (0, merkle_1.generateTransactionChunks)(data2);
        this.data_root = ArweaveUtils2.bufferTob64Url(this.chunks.data_root);
      }
      if (!this.chunks && data2.byteLength === 0) {
        this.chunks = {
          chunks: [],
          data_root: new Uint8Array(),
          proofs: []
        };
        this.data_root = "";
      }
    }
    getChunk(idx, data2) {
      if (!this.chunks) {
        throw new Error(`Chunks have not been prepared`);
      }
      const proof = this.chunks.proofs[idx];
      const chunk = this.chunks.chunks[idx];
      return {
        data_root: this.data_root,
        data_size: this.data_size,
        data_path: ArweaveUtils2.bufferTob64Url(proof.proof),
        offset: proof.offset.toString(),
        chunk: ArweaveUtils2.bufferTob64Url(data2.slice(chunk.minByteRange, chunk.maxByteRange))
      };
    }
    async getSignatureData() {
      switch (this.format) {
        case 1:
          let tags2 = this.tags.reduce((accumulator, tag) => {
            return ArweaveUtils2.concatBuffers([
              accumulator,
              tag.get("name", { decode: true, string: false }),
              tag.get("value", { decode: true, string: false })
            ]);
          }, new Uint8Array());
          return ArweaveUtils2.concatBuffers([
            this.get("owner", { decode: true, string: false }),
            this.get("target", { decode: true, string: false }),
            this.get("data", { decode: true, string: false }),
            ArweaveUtils2.stringToBuffer(this.quantity),
            ArweaveUtils2.stringToBuffer(this.reward),
            this.get("last_tx", { decode: true, string: false }),
            tags2
          ]);
        case 2:
          if (!this.data_root) {
            await this.prepareChunks(this.data);
          }
          const tagList = this.tags.map((tag) => [
            tag.get("name", { decode: true, string: false }),
            tag.get("value", { decode: true, string: false })
          ]);
          return await (0, deepHash_12.default)([
            ArweaveUtils2.stringToBuffer(this.format.toString()),
            this.get("owner", { decode: true, string: false }),
            this.get("target", { decode: true, string: false }),
            ArweaveUtils2.stringToBuffer(this.quantity),
            ArweaveUtils2.stringToBuffer(this.reward),
            this.get("last_tx", { decode: true, string: false }),
            tagList,
            ArweaveUtils2.stringToBuffer(this.data_size),
            this.get("data_root", { decode: true, string: false })
          ]);
        default:
          throw new Error(`Unexpected transaction format: ${this.format}`);
      }
    }
  }
  transaction.default = Transaction2;
  return transaction;
}
var transactionUploader = {};
var hasRequiredTransactionUploader;
function requireTransactionUploader() {
  if (hasRequiredTransactionUploader)
    return transactionUploader;
  hasRequiredTransactionUploader = 1;
  Object.defineProperty(transactionUploader, "__esModule", { value: true });
  transactionUploader.TransactionUploader = void 0;
  const transaction_1 = requireTransaction();
  const ArweaveUtils2 = utils$G;
  const error_12 = error;
  const merkle_1 = requireMerkle();
  const MAX_CHUNKS_IN_BODY = 1;
  const FATAL_CHUNK_UPLOAD_ERRORS = [
    "invalid_json",
    "chunk_too_big",
    "data_path_too_big",
    "offset_too_big",
    "data_size_too_big",
    "chunk_proof_ratio_not_attractive",
    "invalid_proof"
  ];
  const ERROR_DELAY = 1e3 * 40;
  class TransactionUploader {
    constructor(api2, transaction2) {
      this.api = api2;
      this.chunkIndex = 0;
      this.txPosted = false;
      this.lastRequestTimeEnd = 0;
      this.totalErrors = 0;
      this.lastResponseStatus = 0;
      this.lastResponseError = "";
      if (!transaction2.id) {
        throw new Error(`Transaction is not signed`);
      }
      if (!transaction2.chunks) {
        throw new Error(`Transaction chunks not prepared`);
      }
      this.data = transaction2.data;
      this.transaction = new transaction_1.default(Object.assign({}, transaction2, { data: new Uint8Array(0) }));
    }
    get isComplete() {
      return this.txPosted && this.chunkIndex === this.transaction.chunks.chunks.length;
    }
    get totalChunks() {
      return this.transaction.chunks.chunks.length;
    }
    get uploadedChunks() {
      return this.chunkIndex;
    }
    get pctComplete() {
      return Math.trunc(this.uploadedChunks / this.totalChunks * 100);
    }
    async uploadChunk(chunkIndex_) {
      if (this.isComplete) {
        throw new Error(`Upload is already complete`);
      }
      if (this.lastResponseError !== "") {
        this.totalErrors++;
      } else {
        this.totalErrors = 0;
      }
      if (this.totalErrors === 100) {
        throw new Error(`Unable to complete upload: ${this.lastResponseStatus}: ${this.lastResponseError}`);
      }
      let delay = this.lastResponseError === "" ? 0 : Math.max(this.lastRequestTimeEnd + ERROR_DELAY - Date.now(), ERROR_DELAY);
      if (delay > 0) {
        delay = delay - delay * Math.random() * 0.3;
        await new Promise((res) => setTimeout(res, delay));
      }
      this.lastResponseError = "";
      if (!this.txPosted) {
        await this.postTransaction();
        return;
      }
      if (chunkIndex_) {
        this.chunkIndex = chunkIndex_;
      }
      const chunk = this.transaction.getChunk(chunkIndex_ || this.chunkIndex, this.data);
      const chunkOk = await (0, merkle_1.validatePath)(this.transaction.chunks.data_root, parseInt(chunk.offset), 0, parseInt(chunk.data_size), ArweaveUtils2.b64UrlToBuffer(chunk.data_path));
      if (!chunkOk) {
        throw new Error(`Unable to validate chunk ${this.chunkIndex}`);
      }
      const resp = await this.api.post(`chunk`, this.transaction.getChunk(this.chunkIndex, this.data)).catch((e) => {
        console.error(e.message);
        return { status: -1, data: { error: e.message } };
      });
      this.lastRequestTimeEnd = Date.now();
      this.lastResponseStatus = resp.status;
      if (this.lastResponseStatus == 200) {
        this.chunkIndex++;
      } else {
        this.lastResponseError = (0, error_12.getError)(resp);
        if (FATAL_CHUNK_UPLOAD_ERRORS.includes(this.lastResponseError)) {
          throw new Error(`Fatal error uploading chunk ${this.chunkIndex}: ${this.lastResponseError}`);
        }
      }
    }
    static async fromSerialized(api2, serialized, data2) {
      if (!serialized || typeof serialized.chunkIndex !== "number" || typeof serialized.transaction !== "object") {
        throw new Error(`Serialized object does not match expected format.`);
      }
      var transaction2 = new transaction_1.default(serialized.transaction);
      if (!transaction2.chunks) {
        await transaction2.prepareChunks(data2);
      }
      const upload = new TransactionUploader(api2, transaction2);
      upload.chunkIndex = serialized.chunkIndex;
      upload.lastRequestTimeEnd = serialized.lastRequestTimeEnd;
      upload.lastResponseError = serialized.lastResponseError;
      upload.lastResponseStatus = serialized.lastResponseStatus;
      upload.txPosted = serialized.txPosted;
      upload.data = data2;
      if (upload.transaction.data_root !== serialized.transaction.data_root) {
        throw new Error(`Data mismatch: Uploader doesn't match provided data.`);
      }
      return upload;
    }
    static async fromTransactionId(api2, id2) {
      const resp = await api2.get(`tx/${id2}`);
      if (resp.status !== 200) {
        throw new Error(`Tx ${id2} not found: ${resp.status}`);
      }
      const transaction2 = resp.data;
      transaction2.data = new Uint8Array(0);
      const serialized = {
        txPosted: true,
        chunkIndex: 0,
        lastResponseError: "",
        lastRequestTimeEnd: 0,
        lastResponseStatus: 0,
        transaction: transaction2
      };
      return serialized;
    }
    toJSON() {
      return {
        chunkIndex: this.chunkIndex,
        transaction: this.transaction,
        lastRequestTimeEnd: this.lastRequestTimeEnd,
        lastResponseStatus: this.lastResponseStatus,
        lastResponseError: this.lastResponseError,
        txPosted: this.txPosted
      };
    }
    async postTransaction() {
      const uploadInBody = this.totalChunks <= MAX_CHUNKS_IN_BODY;
      if (uploadInBody) {
        this.transaction.data = this.data;
        const resp2 = await this.api.post(`tx`, this.transaction).catch((e) => {
          console.error(e);
          return { status: -1, data: { error: e.message } };
        });
        this.lastRequestTimeEnd = Date.now();
        this.lastResponseStatus = resp2.status;
        this.transaction.data = new Uint8Array(0);
        if (resp2.status >= 200 && resp2.status < 300) {
          this.txPosted = true;
          this.chunkIndex = MAX_CHUNKS_IN_BODY;
          return;
        }
        this.lastResponseError = (0, error_12.getError)(resp2);
        throw new Error(`Unable to upload transaction: ${resp2.status}, ${this.lastResponseError}`);
      }
      const resp = await this.api.post(`tx`, this.transaction);
      this.lastRequestTimeEnd = Date.now();
      this.lastResponseStatus = resp.status;
      if (!(resp.status >= 200 && resp.status < 300)) {
        this.lastResponseError = (0, error_12.getError)(resp);
        throw new Error(`Unable to upload transaction: ${resp.status}, ${this.lastResponseError}`);
      }
      this.txPosted = true;
    }
  }
  transactionUploader.TransactionUploader = TransactionUploader;
  return transactionUploader;
}
var hasRequiredTransactions;
function requireTransactions() {
  if (hasRequiredTransactions)
    return transactions;
  hasRequiredTransactions = 1;
  var __await = commonjsGlobal && commonjsGlobal.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  };
  var __asyncGenerator = commonjsGlobal && commonjsGlobal.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator)
      throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
      return this;
    }, i;
    function verb(n) {
      if (g[n])
        i[n] = function(v) {
          return new Promise(function(a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
    }
    function resume(n, v) {
      try {
        step(g[n](v));
      } catch (e) {
        settle2(q[0][3], e);
      }
    }
    function step(r2) {
      r2.value instanceof __await ? Promise.resolve(r2.value.v).then(fulfill, reject) : settle2(q[0][2], r2);
    }
    function fulfill(value) {
      resume("next", value);
    }
    function reject(value) {
      resume("throw", value);
    }
    function settle2(f2, v) {
      if (f2(v), q.shift(), q.length)
        resume(q[0][0], q[0][1]);
    }
  };
  Object.defineProperty(transactions, "__esModule", { value: true });
  const error_12 = error;
  const transaction_1 = requireTransaction();
  const ArweaveUtils2 = utils$G;
  const transaction_uploader_1 = requireTransactionUploader();
  class Transactions {
    constructor(api2, crypto2, chunks2) {
      this.api = api2;
      this.crypto = crypto2;
      this.chunks = chunks2;
    }
    getTransactionAnchor() {
      return this.api.get(`tx_anchor`, { transformResponse: [] }).then((response) => {
        return response.data;
      });
    }
    getPrice(byteSize, targetAddress) {
      let endpoint = targetAddress ? `price/${byteSize}/${targetAddress}` : `price/${byteSize}`;
      return this.api.get(endpoint, {
        transformResponse: [
          function(data2) {
            return data2;
          }
        ]
      }).then((response) => {
        return response.data;
      });
    }
    async get(id2) {
      const response = await this.api.get(`tx/${id2}`);
      if (response.status == 200) {
        const data_size = parseInt(response.data.data_size);
        if (response.data.format >= 2 && data_size > 0 && data_size <= 1024 * 1024 * 12) {
          const data2 = await this.getData(id2);
          return new transaction_1.default(Object.assign(Object.assign({}, response.data), { data: data2 }));
        }
        return new transaction_1.default(Object.assign(Object.assign({}, response.data), { format: response.data.format || 1 }));
      }
      if (response.status == 404) {
        throw new error_12.default("TX_NOT_FOUND");
      }
      if (response.status == 410) {
        throw new error_12.default("TX_FAILED");
      }
      throw new error_12.default("TX_INVALID");
    }
    fromRaw(attributes) {
      return new transaction_1.default(attributes);
    }
    async search(tagName, tagValue) {
      return this.api.post(`arql`, {
        op: "equals",
        expr1: tagName,
        expr2: tagValue
      }).then((response) => {
        if (!response.data) {
          return [];
        }
        return response.data;
      });
    }
    getStatus(id2) {
      return this.api.get(`tx/${id2}/status`).then((response) => {
        if (response.status == 200) {
          return {
            status: 200,
            confirmed: response.data
          };
        }
        return {
          status: response.status,
          confirmed: null
        };
      });
    }
    async getData(id2, options) {
      let data2 = void 0;
      try {
        data2 = await this.chunks.downloadChunkedData(id2);
      } catch (error3) {
        console.error(`Error while trying to download chunked data for ${id2}`);
        console.error(error3);
      }
      if (!data2) {
        console.warn(`Falling back to gateway cache for ${id2}`);
        try {
          data2 = (await this.api.get(`/${id2}`)).data;
        } catch (error3) {
          console.error(`Error while trying to download contiguous data from gateway cache for ${id2}`);
          console.error(error3);
        }
      }
      if (!data2) {
        throw new Error(`${id2} was not found!`);
      }
      if (options && options.decode && !options.string) {
        return data2;
      }
      if (options && options.decode && options.string) {
        return ArweaveUtils2.bufferToString(data2);
      }
      return ArweaveUtils2.bufferTob64Url(data2);
    }
    async sign(transaction2, jwk, options) {
      if (!jwk && (typeof window === "undefined" || !window.arweaveWallet)) {
        throw new Error(`A new Arweave transaction must provide the jwk parameter.`);
      } else if (!jwk || jwk === "use_wallet") {
        try {
          const existingPermissions = await window.arweaveWallet.getPermissions();
          if (!existingPermissions.includes("SIGN_TRANSACTION"))
            await window.arweaveWallet.connect(["SIGN_TRANSACTION"]);
        } catch (_a) {
        }
        const signedTransaction = await window.arweaveWallet.sign(transaction2, options);
        transaction2.setSignature({
          id: signedTransaction.id,
          owner: signedTransaction.owner,
          reward: signedTransaction.reward,
          tags: signedTransaction.tags,
          signature: signedTransaction.signature
        });
      } else {
        transaction2.setOwner(jwk.n);
        let dataToSign = await transaction2.getSignatureData();
        let rawSignature = await this.crypto.sign(jwk, dataToSign, options);
        let id2 = await this.crypto.hash(rawSignature);
        transaction2.setSignature({
          id: ArweaveUtils2.bufferTob64Url(id2),
          owner: jwk.n,
          signature: ArweaveUtils2.bufferTob64Url(rawSignature)
        });
      }
    }
    async verify(transaction2) {
      const signaturePayload = await transaction2.getSignatureData();
      const rawSignature = transaction2.get("signature", {
        decode: true,
        string: false
      });
      const expectedId = ArweaveUtils2.bufferTob64Url(await this.crypto.hash(rawSignature));
      if (transaction2.id !== expectedId) {
        throw new Error(`Invalid transaction signature or ID! The transaction ID doesn't match the expected SHA-256 hash of the signature.`);
      }
      return this.crypto.verify(transaction2.owner, signaturePayload, rawSignature);
    }
    async post(transaction2) {
      if (typeof transaction2 === "string") {
        transaction2 = new transaction_1.default(JSON.parse(transaction2));
      } else if (typeof transaction2.readInt32BE === "function") {
        transaction2 = new transaction_1.default(JSON.parse(transaction2.toString()));
      } else if (typeof transaction2 === "object" && !(transaction2 instanceof transaction_1.default)) {
        transaction2 = new transaction_1.default(transaction2);
      }
      if (!(transaction2 instanceof transaction_1.default)) {
        throw new Error(`Must be Transaction object`);
      }
      if (!transaction2.chunks) {
        await transaction2.prepareChunks(transaction2.data);
      }
      const uploader = await this.getUploader(transaction2, transaction2.data);
      try {
        while (!uploader.isComplete) {
          await uploader.uploadChunk();
        }
      } catch (e) {
        if (uploader.lastResponseStatus > 0) {
          return {
            status: uploader.lastResponseStatus,
            statusText: uploader.lastResponseError,
            data: {
              error: uploader.lastResponseError
            }
          };
        }
        throw e;
      }
      return {
        status: 200,
        statusText: "OK",
        data: {}
      };
    }
    async getUploader(upload, data2) {
      let uploader;
      if (data2 instanceof ArrayBuffer) {
        data2 = new Uint8Array(data2);
      }
      if (upload instanceof transaction_1.default) {
        if (!data2) {
          data2 = upload.data;
        }
        if (!(data2 instanceof Uint8Array)) {
          throw new Error("Data format is invalid");
        }
        if (!upload.chunks) {
          await upload.prepareChunks(data2);
        }
        uploader = new transaction_uploader_1.TransactionUploader(this.api, upload);
        if (!uploader.data || uploader.data.length === 0) {
          uploader.data = data2;
        }
      } else {
        if (typeof upload === "string") {
          upload = await transaction_uploader_1.TransactionUploader.fromTransactionId(this.api, upload);
        }
        if (!data2 || !(data2 instanceof Uint8Array)) {
          throw new Error(`Must provide data when resuming upload`);
        }
        uploader = await transaction_uploader_1.TransactionUploader.fromSerialized(this.api, upload, data2);
      }
      return uploader;
    }
    upload(upload, data2) {
      return __asyncGenerator(this, arguments, function* upload_1() {
        const uploader = yield __await(this.getUploader(upload, data2));
        while (!uploader.isComplete) {
          yield __await(uploader.uploadChunk());
          yield yield __await(uploader);
        }
        return yield __await(uploader);
      });
    }
  }
  transactions.default = Transactions;
  return transactions;
}
var wallets = {};
Object.defineProperty(wallets, "__esModule", { value: true });
const ArweaveUtils$2 = utils$G;
class Wallets {
  constructor(api2, crypto2) {
    this.api = api2;
    this.crypto = crypto2;
  }
  getBalance(address) {
    return this.api.get(`wallet/${address}/balance`, {
      transformResponse: [
        function(data2) {
          return data2;
        }
      ]
    }).then((response) => {
      return response.data;
    });
  }
  getLastTransactionID(address) {
    return this.api.get(`wallet/${address}/last_tx`).then((response) => {
      return response.data;
    });
  }
  generate() {
    return this.crypto.generateJWK();
  }
  async jwkToAddress(jwk) {
    if (!jwk || jwk === "use_wallet") {
      return this.getAddress();
    } else {
      return this.getAddress(jwk);
    }
  }
  async getAddress(jwk) {
    if (!jwk || jwk === "use_wallet") {
      try {
        await window.arweaveWallet.connect(["ACCESS_ADDRESS"]);
      } catch (_a) {
      }
      return window.arweaveWallet.getActiveAddress();
    } else {
      return this.ownerToAddress(jwk.n);
    }
  }
  async ownerToAddress(owner) {
    return ArweaveUtils$2.bufferTob64Url(await this.crypto.hash(ArweaveUtils$2.b64UrlToBuffer(owner)));
  }
}
wallets.default = Wallets;
var silo = {};
Object.defineProperty(silo, "__esModule", { value: true });
silo.SiloResource = void 0;
const ArweaveUtils$1 = utils$G;
class Silo {
  constructor(api2, crypto2, transactions2) {
    this.api = api2;
    this.crypto = crypto2;
    this.transactions = transactions2;
  }
  async get(siloURI) {
    if (!siloURI) {
      throw new Error(`No Silo URI specified`);
    }
    const resource = await this.parseUri(siloURI);
    const ids = await this.transactions.search("Silo-Name", resource.getAccessKey());
    if (ids.length == 0) {
      throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
    }
    const transaction2 = await this.transactions.get(ids[0]);
    if (!transaction2) {
      throw new Error(`No data could be found for the Silo URI: ${siloURI}`);
    }
    const encrypted = transaction2.get("data", { decode: true, string: false });
    return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
  }
  async readTransactionData(transaction2, siloURI) {
    if (!siloURI) {
      throw new Error(`No Silo URI specified`);
    }
    const resource = await this.parseUri(siloURI);
    const encrypted = transaction2.get("data", { decode: true, string: false });
    return this.crypto.decrypt(encrypted, resource.getEncryptionKey());
  }
  async parseUri(siloURI) {
    const parsed = siloURI.match(/^([a-z0-9-_]+)\.([0-9]+)/i);
    if (!parsed) {
      throw new Error(`Invalid Silo name, must be a name in the format of [a-z0-9]+.[0-9]+, e.g. 'bubble.7'`);
    }
    const siloName = parsed[1];
    const hashIterations = Math.pow(2, parseInt(parsed[2]));
    const digest10 = await this.hash(ArweaveUtils$1.stringToBuffer(siloName), hashIterations);
    const accessKey = ArweaveUtils$1.bufferTob64(digest10.slice(0, 15));
    const encryptionkey = await this.hash(digest10.slice(16, 31), 1);
    return new SiloResource(siloURI, accessKey, encryptionkey);
  }
  async hash(input, iterations) {
    let digest10 = await this.crypto.hash(input);
    for (let count = 0; count < iterations - 1; count++) {
      digest10 = await this.crypto.hash(digest10);
    }
    return digest10;
  }
}
silo.default = Silo;
class SiloResource {
  constructor(uri, accessKey, encryptionKey) {
    this.uri = uri;
    this.accessKey = accessKey;
    this.encryptionKey = encryptionKey;
  }
  getUri() {
    return this.uri;
  }
  getAccessKey() {
    return this.accessKey;
  }
  getEncryptionKey() {
    return this.encryptionKey;
  }
}
silo.SiloResource = SiloResource;
var chunks = {};
Object.defineProperty(chunks, "__esModule", { value: true });
const error_1$1 = error;
const ArweaveUtils = utils$G;
class Chunks {
  constructor(api2) {
    this.api = api2;
  }
  async getTransactionOffset(id2) {
    const resp = await this.api.get(`tx/${id2}/offset`);
    if (resp.status === 200) {
      return resp.data;
    }
    throw new Error(`Unable to get transaction offset: ${(0, error_1$1.getError)(resp)}`);
  }
  async getChunk(offset) {
    const resp = await this.api.get(`chunk/${offset}`);
    if (resp.status === 200) {
      return resp.data;
    }
    throw new Error(`Unable to get chunk: ${(0, error_1$1.getError)(resp)}`);
  }
  async getChunkData(offset) {
    const chunk = await this.getChunk(offset);
    const buf = ArweaveUtils.b64UrlToBuffer(chunk.chunk);
    return buf;
  }
  firstChunkOffset(offsetResponse) {
    return parseInt(offsetResponse.offset) - parseInt(offsetResponse.size) + 1;
  }
  async downloadChunkedData(id2) {
    const offsetResponse = await this.getTransactionOffset(id2);
    const size = parseInt(offsetResponse.size);
    const endOffset = parseInt(offsetResponse.offset);
    const startOffset = endOffset - size + 1;
    const data2 = new Uint8Array(size);
    let byte = 0;
    while (byte < size) {
      if (this.api.config.logging) {
        console.log(`[chunk] ${byte}/${size}`);
      }
      let chunkData;
      try {
        chunkData = await this.getChunkData(startOffset + byte);
      } catch (error3) {
        console.error(`[chunk] Failed to fetch chunk at offset ${startOffset + byte}`);
        console.error(`[chunk] This could indicate that the chunk wasn't uploaded or hasn't yet seeded properly to a particular gateway/node`);
      }
      if (chunkData) {
        data2.set(chunkData, byte);
        byte += chunkData.length;
      } else {
        throw new Error(`Couldn't complete data download at ${byte}/${size}`);
      }
    }
    return data2;
  }
}
chunks.default = Chunks;
var blocks = {};
Object.defineProperty(blocks, "__esModule", { value: true });
const error_1 = error;
class Blocks {
  constructor(api2, network2) {
    this.api = api2;
    this.network = network2;
  }
  async get(indepHash) {
    const response = await this.api.get(`${Blocks.ENDPOINT}${indepHash}`);
    if (response.status === 200) {
      return response.data;
    } else {
      if (response.status === 404) {
        throw new error_1.default("BLOCK_NOT_FOUND");
      } else {
        throw new Error(`Error while loading block data: ${response}`);
      }
    }
  }
  async getCurrent() {
    const { current } = await this.network.getInfo();
    return await this.get(current);
  }
}
blocks.default = Blocks;
Blocks.ENDPOINT = "block/hash/";
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon)
    return common$6;
  hasRequiredCommon = 1;
  Object.defineProperty(common$6, "__esModule", { value: true });
  const ar_1 = ar;
  const api_1 = api$2;
  const node_driver_1 = webcryptoDriver;
  const network_1 = network;
  const transactions_1 = requireTransactions();
  const wallets_1 = wallets;
  const transaction_1 = requireTransaction();
  const ArweaveUtils2 = utils$G;
  const silo_1 = silo;
  const chunks_1 = chunks;
  const blocks_1 = blocks;
  class Arweave2 {
    constructor(apiConfig) {
      this.api = new api_1.default(apiConfig);
      this.wallets = new wallets_1.default(this.api, Arweave2.crypto);
      this.chunks = new chunks_1.default(this.api);
      this.transactions = new transactions_1.default(this.api, Arweave2.crypto, this.chunks);
      this.silo = new silo_1.default(this.api, this.crypto, this.transactions);
      this.network = new network_1.default(this.api);
      this.blocks = new blocks_1.default(this.api, this.network);
      this.ar = new ar_1.default();
    }
    get crypto() {
      return Arweave2.crypto;
    }
    get utils() {
      return Arweave2.utils;
    }
    getConfig() {
      return {
        api: this.api.getConfig(),
        crypto: null
      };
    }
    async createTransaction(attributes, jwk) {
      const transaction2 = {};
      Object.assign(transaction2, attributes);
      if (!attributes.data && !(attributes.target && attributes.quantity)) {
        throw new Error(`A new Arweave transaction must have a 'data' value, or 'target' and 'quantity' values.`);
      }
      if (attributes.owner == void 0) {
        if (jwk && jwk !== "use_wallet") {
          transaction2.owner = jwk.n;
        }
      }
      if (attributes.last_tx == void 0) {
        transaction2.last_tx = await this.transactions.getTransactionAnchor();
      }
      if (typeof attributes.data === "string") {
        attributes.data = ArweaveUtils2.stringToBuffer(attributes.data);
      }
      if (attributes.data instanceof ArrayBuffer) {
        attributes.data = new Uint8Array(attributes.data);
      }
      if (attributes.data && !(attributes.data instanceof Uint8Array)) {
        throw new Error("Expected data to be a string, Uint8Array or ArrayBuffer");
      }
      if (attributes.reward == void 0) {
        const length2 = attributes.data ? attributes.data.byteLength : 0;
        transaction2.reward = await this.transactions.getPrice(length2, transaction2.target);
      }
      transaction2.data_root = "";
      transaction2.data_size = attributes.data ? attributes.data.byteLength.toString() : "0";
      transaction2.data = attributes.data || new Uint8Array(0);
      const createdTransaction = new transaction_1.default(transaction2);
      await createdTransaction.getSignatureData();
      return createdTransaction;
    }
    async createSiloTransaction(attributes, jwk, siloUri) {
      const transaction2 = {};
      Object.assign(transaction2, attributes);
      if (!attributes.data) {
        throw new Error(`Silo transactions must have a 'data' value`);
      }
      if (!siloUri) {
        throw new Error(`No Silo URI specified.`);
      }
      if (attributes.target || attributes.quantity) {
        throw new Error(`Silo transactions can only be used for storing data, sending AR to other wallets isn't supported.`);
      }
      if (attributes.owner == void 0) {
        if (!jwk || !jwk.n) {
          throw new Error(`A new Arweave transaction must either have an 'owner' attribute, or you must provide the jwk parameter.`);
        }
        transaction2.owner = jwk.n;
      }
      if (attributes.last_tx == void 0) {
        transaction2.last_tx = await this.transactions.getTransactionAnchor();
      }
      const siloResource = await this.silo.parseUri(siloUri);
      if (typeof attributes.data == "string") {
        const encrypted = await this.crypto.encrypt(ArweaveUtils2.stringToBuffer(attributes.data), siloResource.getEncryptionKey());
        transaction2.reward = await this.transactions.getPrice(encrypted.byteLength);
        transaction2.data = ArweaveUtils2.bufferTob64Url(encrypted);
      }
      if (attributes.data instanceof Uint8Array) {
        const encrypted = await this.crypto.encrypt(attributes.data, siloResource.getEncryptionKey());
        transaction2.reward = await this.transactions.getPrice(encrypted.byteLength);
        transaction2.data = ArweaveUtils2.bufferTob64Url(encrypted);
      }
      const siloTransaction = new transaction_1.default(transaction2);
      siloTransaction.addTag("Silo-Name", siloResource.getAccessKey());
      siloTransaction.addTag("Silo-Version", `0.1.0`);
      return siloTransaction;
    }
    arql(query) {
      return this.api.post("/arql", query).then((response) => response.data || []);
    }
  }
  common$6.default = Arweave2;
  Arweave2.crypto = new node_driver_1.default();
  Arweave2.utils = ArweaveUtils2;
  return common$6;
}
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0)
      k2 = k;
    o[k2] = m[k];
  });
  var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m)
      if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
        __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  const common_1 = requireCommon();
  common_1.default.init = function(apiConfig = {}) {
    function getDefaultConfig() {
      const defaults2 = {
        host: "arweave.net",
        port: 443,
        protocol: "https"
      };
      if (!window || !window.location || !window.location.protocol || !window.location.hostname) {
        return defaults2;
      }
      const currentProtocol = window.location.protocol.replace(":", "");
      const currentHost = window.location.hostname;
      const currentPort = window.location.port ? parseInt(window.location.port) : currentProtocol == "https" ? 443 : 80;
      const isLocal = ["localhost", "127.0.0.1"].includes(currentHost) || currentProtocol == "file";
      if (isLocal) {
        return defaults2;
      }
      return {
        host: currentHost,
        port: currentPort,
        protocol: currentProtocol
      };
    }
    const defaultConfig = getDefaultConfig();
    const protocol = apiConfig.protocol || defaultConfig.protocol;
    const host = apiConfig.host || defaultConfig.host;
    const port = apiConfig.port || defaultConfig.port;
    return new common_1.default(Object.assign(Object.assign({}, apiConfig), {
      host,
      protocol,
      port
    }));
  };
  window.Arweave = common_1.default;
  __exportStar(requireCommon(), exports2);
  exports2.default = common_1.default;
})(web);
const Arweave$1 = /* @__PURE__ */ getDefaultExportFromCjs(web);
var base64url$3 = { exports: {} };
var base64url$2 = {};
var padString$1 = {};
Object.defineProperty(padString$1, "__esModule", { value: true });
function padString(input) {
  var segmentLength = 4;
  var stringLength = input.length;
  var diff = stringLength % segmentLength;
  if (!diff) {
    return input;
  }
  var position = stringLength;
  var padLength = segmentLength - diff;
  var paddedStringLength = stringLength + padLength;
  var buffer2 = Buffer.alloc(paddedStringLength);
  buffer2.write(input);
  while (padLength--) {
    buffer2.write("=", position++);
  }
  return buffer2.toString();
}
padString$1.default = padString;
Object.defineProperty(base64url$2, "__esModule", { value: true });
var pad_string_1 = padString$1;
function encode$8(input, encoding) {
  if (encoding === void 0) {
    encoding = "utf8";
  }
  if (Buffer.isBuffer(input)) {
    return fromBase64(input.toString("base64"));
  }
  return fromBase64(Buffer.from(input, encoding).toString("base64"));
}
function decode$6(base64url2, encoding) {
  if (encoding === void 0) {
    encoding = "utf8";
  }
  return Buffer.from(toBase64(base64url2), "base64").toString(encoding);
}
function toBase64(base64url2) {
  base64url2 = base64url2.toString();
  return pad_string_1.default(base64url2).replace(/\-/g, "+").replace(/_/g, "/");
}
function fromBase64(base642) {
  return base642.replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
}
function toBuffer$4(base64url2) {
  return Buffer.from(toBase64(base64url2), "base64");
}
var base64url$1 = encode$8;
base64url$1.encode = encode$8;
base64url$1.decode = decode$6;
base64url$1.toBase64 = toBase64;
base64url$1.fromBase64 = fromBase64;
base64url$1.toBuffer = toBuffer$4;
base64url$2.default = base64url$1;
(function(module) {
  module.exports = base64url$2.default;
  module.exports.default = module.exports;
})(base64url$3);
const SIG_CONFIG = {
  [1]: {
    sigLength: 512,
    pubLength: 512,
    sigName: "arweave"
  },
  [2]: {
    sigLength: 64,
    pubLength: 32,
    sigName: "ed25519"
  },
  [3]: {
    sigLength: 65,
    pubLength: 65,
    sigName: "ethereum"
  },
  [4]: {
    sigLength: 64,
    pubLength: 32,
    sigName: "solana"
  }
};
class Rsa4096Pss$2 {
  constructor(_key, pk) {
    this._key = _key;
    this.pk = pk;
    this.signatureType = 1;
    this.ownerLength = SIG_CONFIG[1].pubLength;
    this.signatureLength = SIG_CONFIG[1].sigLength;
  }
  get publicKey() {
    return this._publicKey;
  }
  sign(message) {
    return [0];
  }
  static async verify(pk, message, signature2) {
    return null;
  }
}
class ArweaveSigner$2 extends Rsa4096Pss$2 {
  constructor(jwk) {
    super(null, jwk.n);
    this.jwk = jwk;
  }
  get publicKey() {
    return b64UrlToBuffer$2(this.pk);
  }
  sign(message) {
    return subtleSign(this.jwk, message);
  }
  static async verify(pk, message, signature2) {
    return await Arweave.crypto.verify(pk, message, signature2);
  }
}
var src$2 = {};
var arDataBundle = {};
var arDataBase = {};
var utils$F = {};
var __createBinding$4 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0)
    k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$4 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$4 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule)
    return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod)
      if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
        __createBinding$4(result, mod, k);
  }
  __setModuleDefault$4(result, mod);
  return result;
};
Object.defineProperty(utils$F, "__esModule", { value: true });
utils$F.b64UrlDecode = utils$F.b64UrlEncode = utils$F.bufferTob64Url = utils$F.bufferTob64 = utils$F.b64UrlToBuffer = utils$F.stringToB64Url = utils$F.stringToBuffer = utils$F.bufferToString = utils$F.b64UrlToString = utils$F.concatBuffers = void 0;
const B64js = __importStar$4(base64Js);
function concatBuffers(buffers) {
  let total_length = 0;
  for (let i = 0; i < buffers.length; i++) {
    total_length += buffers[i].byteLength;
  }
  let temp = new Uint8Array(total_length);
  let offset = 0;
  temp.set(new Uint8Array(buffers[0]), offset);
  offset += buffers[0].byteLength;
  for (let i = 1; i < buffers.length; i++) {
    temp.set(new Uint8Array(buffers[i]), offset);
    offset += buffers[i].byteLength;
  }
  return temp;
}
utils$F.concatBuffers = concatBuffers;
function b64UrlToString(b64UrlString) {
  let buffer2 = b64UrlToBuffer(b64UrlString);
  return bufferToString(buffer2);
}
utils$F.b64UrlToString = b64UrlToString;
function bufferToString(buffer2) {
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = requireUtil().TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer2);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer2);
}
utils$F.bufferToString = bufferToString;
function stringToBuffer(string) {
  if (typeof TextEncoder == "undefined") {
    const TextEncoder2 = requireUtil().TextEncoder;
    return new TextEncoder2().encode(string);
  }
  return new TextEncoder().encode(string);
}
utils$F.stringToBuffer = stringToBuffer;
function stringToB64Url(string) {
  return bufferTob64Url(stringToBuffer(string));
}
utils$F.stringToB64Url = stringToB64Url;
function b64UrlToBuffer(b64UrlString) {
  return new Uint8Array(B64js.toByteArray(b64UrlDecode(b64UrlString)));
}
utils$F.b64UrlToBuffer = b64UrlToBuffer;
function bufferTob64(buffer2) {
  return B64js.fromByteArray(new Uint8Array(buffer2));
}
utils$F.bufferTob64 = bufferTob64;
function bufferTob64Url(buffer2) {
  return b64UrlEncode(bufferTob64(buffer2));
}
utils$F.bufferTob64Url = bufferTob64Url;
function b64UrlEncode(b64UrlString) {
  return b64UrlString.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
utils$F.b64UrlEncode = b64UrlEncode;
function b64UrlDecode(b64UrlString) {
  b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
  let padding2;
  b64UrlString.length % 4 == 0 ? padding2 = 0 : padding2 = 4 - b64UrlString.length % 4;
  return b64UrlString.concat("=".repeat(padding2));
}
utils$F.b64UrlDecode = b64UrlDecode;
var utils$E = {};
Object.defineProperty(utils$E, "__esModule", { value: true });
utils$E.isBrowser = utils$E.arraybufferEqual = utils$E.byteArrayToLong = utils$E.longTo32ByteArray = utils$E.longTo16ByteArray = utils$E.shortTo2ByteArray = utils$E.longTo8ByteArray = void 0;
function longTo8ByteArray(long) {
  const byteArray = [0, 0, 0, 0, 0, 0, 0, 0];
  for (let index2 = 0; index2 < byteArray.length; index2++) {
    const byte = long & 255;
    byteArray[index2] = byte;
    long = (long - byte) / 256;
  }
  return Uint8Array.from(byteArray);
}
utils$E.longTo8ByteArray = longTo8ByteArray;
function shortTo2ByteArray(long) {
  if (long > (2 ^ 32 - 1))
    throw new Error("Short too long");
  const byteArray = [0, 0];
  for (let index2 = 0; index2 < byteArray.length; index2++) {
    const byte = long & 255;
    byteArray[index2] = byte;
    long = (long - byte) / 256;
  }
  return Uint8Array.from(byteArray);
}
utils$E.shortTo2ByteArray = shortTo2ByteArray;
function longTo16ByteArray(long) {
  const byteArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let index2 = 0; index2 < byteArray.length; index2++) {
    const byte = long & 255;
    byteArray[index2] = byte;
    long = (long - byte) / 256;
  }
  return byteArray;
}
utils$E.longTo16ByteArray = longTo16ByteArray;
function longTo32ByteArray(long) {
  const byteArray = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ];
  for (let index2 = 0; index2 < byteArray.length; index2++) {
    const byte = long & 255;
    byteArray[index2] = byte;
    long = (long - byte) / 256;
  }
  return Uint8Array.from(byteArray);
}
utils$E.longTo32ByteArray = longTo32ByteArray;
function byteArrayToLong(byteArray) {
  let value = 0;
  for (let i = byteArray.length - 1; i >= 0; i--) {
    value = value * 256 + byteArray[i];
  }
  return value;
}
utils$E.byteArrayToLong = byteArrayToLong;
function arraybufferEqual(buf1, buf2) {
  const _buf1 = buf1.buffer;
  const _buf2 = buf2.buffer;
  if (_buf1 === _buf2) {
    return true;
  }
  if (_buf1.byteLength !== _buf2.byteLength) {
    return false;
  }
  const view1 = new DataView(_buf1);
  const view2 = new DataView(_buf2);
  let i = _buf1.byteLength;
  while (i--) {
    if (view1.getUint8(i) !== view2.getUint8(i)) {
      return false;
    }
  }
  return true;
}
utils$E.arraybufferEqual = arraybufferEqual;
utils$E.isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined";
var deepHash$1 = {};
var cryptoBrowserify = {};
var browser$e = { exports: {} };
var safeBuffer$1 = { exports: {} };
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(module, exports2) {
  var buffer2 = buffer$3;
  var Buffer2 = buffer2.Buffer;
  function copyProps(src2, dst) {
    for (var key3 in src2) {
      dst[key3] = src2[key3];
    }
  }
  if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
    module.exports = buffer2;
  } else {
    copyProps(buffer2, exports2);
    exports2.Buffer = SafeBuffer;
  }
  function SafeBuffer(arg, encodingOrOffset, length2) {
    return Buffer2(arg, encodingOrOffset, length2);
  }
  SafeBuffer.prototype = Object.create(Buffer2.prototype);
  copyProps(Buffer2, SafeBuffer);
  SafeBuffer.from = function(arg, encodingOrOffset, length2) {
    if (typeof arg === "number") {
      throw new TypeError("Argument must not be a number");
    }
    return Buffer2(arg, encodingOrOffset, length2);
  };
  SafeBuffer.alloc = function(size, fill, encoding) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    var buf = Buffer2(size);
    if (fill !== void 0) {
      if (typeof encoding === "string") {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
    } else {
      buf.fill(0);
    }
    return buf;
  };
  SafeBuffer.allocUnsafe = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return Buffer2(size);
  };
  SafeBuffer.allocUnsafeSlow = function(size) {
    if (typeof size !== "number") {
      throw new TypeError("Argument must be a number");
    }
    return buffer2.SlowBuffer(size);
  };
})(safeBuffer$1, safeBuffer$1.exports);
var MAX_BYTES = 65536;
var MAX_UINT32 = 4294967295;
function oldBrowser$1() {
  throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
}
var Buffer$F = safeBuffer$1.exports.Buffer;
var crypto$4 = globalThis.crypto || globalThis.msCrypto;
if (crypto$4 && crypto$4.getRandomValues) {
  browser$e.exports = randomBytes$3;
} else {
  browser$e.exports = oldBrowser$1;
}
function randomBytes$3(size, cb) {
  if (size > MAX_UINT32)
    throw new RangeError("requested too many random bytes");
  var bytes = Buffer$F.allocUnsafe(size);
  if (size > 0) {
    if (size > MAX_BYTES) {
      for (var generated = 0; generated < size; generated += MAX_BYTES) {
        crypto$4.getRandomValues(bytes.slice(generated, generated + MAX_BYTES));
      }
    } else {
      crypto$4.getRandomValues(bytes);
    }
  }
  if (typeof cb === "function") {
    return process.nextTick(function() {
      cb(null, bytes);
    });
  }
  return bytes;
}
var readableBrowser = { exports: {} };
var streamBrowser = events$1.exports.EventEmitter;
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0$3 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var buffer_list;
var hasRequiredBuffer_list;
function requireBuffer_list() {
  if (hasRequiredBuffer_list)
    return buffer_list;
  hasRequiredBuffer_list = 1;
  function ownKeys(object, enumerableOnly) {
    var keys2 = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly)
        symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      keys2.push.apply(keys2, symbols);
    }
    return keys2;
  }
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function(key3) {
          _defineProperty(target, key3, source[key3]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function(key3) {
          Object.defineProperty(target, key3, Object.getOwnPropertyDescriptor(source, key3));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj2, key3, value) {
    if (key3 in obj2) {
      Object.defineProperty(obj2, key3, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj2[key3] = value;
    }
    return obj2;
  }
  function _classCallCheck(instance2, Constructor) {
    if (!(instance2 instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps)
      _defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  var _require = buffer$3, Buffer2 = _require.Buffer;
  var _require2 = require$$0$3, inspect9 = _require2.inspect;
  var custom = inspect9 && inspect9.custom || "inspect";
  function copyBuffer2(src2, target, offset) {
    Buffer2.prototype.copy.call(src2, target, offset);
  }
  buffer_list = /* @__PURE__ */ function() {
    function BufferList() {
      _classCallCheck(this, BufferList);
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    _createClass(BufferList, [{
      key: "push",
      value: function push(v) {
        var entry = {
          data: v,
          next: null
        };
        if (this.length > 0)
          this.tail.next = entry;
        else
          this.head = entry;
        this.tail = entry;
        ++this.length;
      }
    }, {
      key: "unshift",
      value: function unshift(v) {
        var entry = {
          data: v,
          next: this.head
        };
        if (this.length === 0)
          this.tail = entry;
        this.head = entry;
        ++this.length;
      }
    }, {
      key: "shift",
      value: function shift() {
        if (this.length === 0)
          return;
        var ret = this.head.data;
        if (this.length === 1)
          this.head = this.tail = null;
        else
          this.head = this.head.next;
        --this.length;
        return ret;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.head = this.tail = null;
        this.length = 0;
      }
    }, {
      key: "join",
      value: function join2(s2) {
        if (this.length === 0)
          return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next) {
          ret += s2 + p.data;
        }
        return ret;
      }
    }, {
      key: "concat",
      value: function concat2(n) {
        if (this.length === 0)
          return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer2(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      }
    }, {
      key: "consume",
      value: function consume(n, hasStrings) {
        var ret;
        if (n < this.head.data.length) {
          ret = this.head.data.slice(0, n);
          this.head.data = this.head.data.slice(n);
        } else if (n === this.head.data.length) {
          ret = this.shift();
        } else {
          ret = hasStrings ? this._getString(n) : this._getBuffer(n);
        }
        return ret;
      }
    }, {
      key: "first",
      value: function first() {
        return this.head.data;
      }
    }, {
      key: "_getString",
      value: function _getString(n) {
        var p = this.head;
        var c = 1;
        var ret = p.data;
        n -= ret.length;
        while (p = p.next) {
          var str = p.data;
          var nb = n > str.length ? str.length : n;
          if (nb === str.length)
            ret += str;
          else
            ret += str.slice(0, n);
          n -= nb;
          if (n === 0) {
            if (nb === str.length) {
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = str.slice(nb);
            }
            break;
          }
          ++c;
        }
        this.length -= c;
        return ret;
      }
    }, {
      key: "_getBuffer",
      value: function _getBuffer(n) {
        var ret = Buffer2.allocUnsafe(n);
        var p = this.head;
        var c = 1;
        p.data.copy(ret);
        n -= p.data.length;
        while (p = p.next) {
          var buf = p.data;
          var nb = n > buf.length ? buf.length : n;
          buf.copy(ret, ret.length - n, 0, nb);
          n -= nb;
          if (n === 0) {
            if (nb === buf.length) {
              ++c;
              if (p.next)
                this.head = p.next;
              else
                this.head = this.tail = null;
            } else {
              this.head = p;
              p.data = buf.slice(nb);
            }
            break;
          }
          ++c;
        }
        this.length -= c;
        return ret;
      }
    }, {
      key: custom,
      value: function value(_, options) {
        return inspect9(this, _objectSpread({}, options, {
          depth: 0,
          customInspect: false
        }));
      }
    }]);
    return BufferList;
  }();
  return buffer_list;
}
function destroy(err, cb) {
  var _this = this;
  var readableDestroyed = this._readableState && this._readableState.destroyed;
  var writableDestroyed = this._writableState && this._writableState.destroyed;
  if (readableDestroyed || writableDestroyed) {
    if (cb) {
      cb(err);
    } else if (err) {
      if (!this._writableState) {
        process.nextTick(emitErrorNT, this, err);
      } else if (!this._writableState.errorEmitted) {
        this._writableState.errorEmitted = true;
        process.nextTick(emitErrorNT, this, err);
      }
    }
    return this;
  }
  if (this._readableState) {
    this._readableState.destroyed = true;
  }
  if (this._writableState) {
    this._writableState.destroyed = true;
  }
  this._destroy(err || null, function(err2) {
    if (!cb && err2) {
      if (!_this._writableState) {
        process.nextTick(emitErrorAndCloseNT, _this, err2);
      } else if (!_this._writableState.errorEmitted) {
        _this._writableState.errorEmitted = true;
        process.nextTick(emitErrorAndCloseNT, _this, err2);
      } else {
        process.nextTick(emitCloseNT, _this);
      }
    } else if (cb) {
      process.nextTick(emitCloseNT, _this);
      cb(err2);
    } else {
      process.nextTick(emitCloseNT, _this);
    }
  });
  return this;
}
function emitErrorAndCloseNT(self2, err) {
  emitErrorNT(self2, err);
  emitCloseNT(self2);
}
function emitCloseNT(self2) {
  if (self2._writableState && !self2._writableState.emitClose)
    return;
  if (self2._readableState && !self2._readableState.emitClose)
    return;
  self2.emit("close");
}
function undestroy() {
  if (this._readableState) {
    this._readableState.destroyed = false;
    this._readableState.reading = false;
    this._readableState.ended = false;
    this._readableState.endEmitted = false;
  }
  if (this._writableState) {
    this._writableState.destroyed = false;
    this._writableState.ended = false;
    this._writableState.ending = false;
    this._writableState.finalCalled = false;
    this._writableState.prefinished = false;
    this._writableState.finished = false;
    this._writableState.errorEmitted = false;
  }
}
function emitErrorNT(self2, err) {
  self2.emit("error", err);
}
function errorOrDestroy(stream2, err) {
  var rState = stream2._readableState;
  var wState = stream2._writableState;
  if (rState && rState.autoDestroy || wState && wState.autoDestroy)
    stream2.destroy(err);
  else
    stream2.emit("error", err);
}
var destroy_1 = {
  destroy,
  undestroy,
  errorOrDestroy
};
var errorsBrowser = {};
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
var codes = {};
function createErrorType(code2, message, Base2) {
  if (!Base2) {
    Base2 = Error;
  }
  function getMessage(arg1, arg2, arg3) {
    if (typeof message === "string") {
      return message;
    } else {
      return message(arg1, arg2, arg3);
    }
  }
  var NodeError = /* @__PURE__ */ function(_Base) {
    _inheritsLoose(NodeError2, _Base);
    function NodeError2(arg1, arg2, arg3) {
      return _Base.call(this, getMessage(arg1, arg2, arg3)) || this;
    }
    return NodeError2;
  }(Base2);
  NodeError.prototype.name = Base2.name;
  NodeError.prototype.code = code2;
  codes[code2] = NodeError;
}
function oneOf(expected, thing) {
  if (Array.isArray(expected)) {
    var len = expected.length;
    expected = expected.map(function(i) {
      return String(i);
    });
    if (len > 2) {
      return "one of ".concat(thing, " ").concat(expected.slice(0, len - 1).join(", "), ", or ") + expected[len - 1];
    } else if (len === 2) {
      return "one of ".concat(thing, " ").concat(expected[0], " or ").concat(expected[1]);
    } else {
      return "of ".concat(thing, " ").concat(expected[0]);
    }
  } else {
    return "of ".concat(thing, " ").concat(String(expected));
  }
}
function startsWith(str, search, pos) {
  return str.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
}
function endsWith(str, search, this_len) {
  if (this_len === void 0 || this_len > str.length) {
    this_len = str.length;
  }
  return str.substring(this_len - search.length, this_len) === search;
}
function includes(str, search, start) {
  if (typeof start !== "number") {
    start = 0;
  }
  if (start + search.length > str.length) {
    return false;
  } else {
    return str.indexOf(search, start) !== -1;
  }
}
createErrorType("ERR_INVALID_OPT_VALUE", function(name2, value) {
  return 'The value "' + value + '" is invalid for option "' + name2 + '"';
}, TypeError);
createErrorType("ERR_INVALID_ARG_TYPE", function(name2, expected, actual) {
  var determiner;
  if (typeof expected === "string" && startsWith(expected, "not ")) {
    determiner = "must not be";
    expected = expected.replace(/^not /, "");
  } else {
    determiner = "must be";
  }
  var msg;
  if (endsWith(name2, " argument")) {
    msg = "The ".concat(name2, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  } else {
    var type = includes(name2, ".") ? "property" : "argument";
    msg = 'The "'.concat(name2, '" ').concat(type, " ").concat(determiner, " ").concat(oneOf(expected, "type"));
  }
  msg += ". Received type ".concat(typeof actual);
  return msg;
}, TypeError);
createErrorType("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
createErrorType("ERR_METHOD_NOT_IMPLEMENTED", function(name2) {
  return "The " + name2 + " method is not implemented";
});
createErrorType("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
createErrorType("ERR_STREAM_DESTROYED", function(name2) {
  return "Cannot call " + name2 + " after a stream was destroyed";
});
createErrorType("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
createErrorType("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
createErrorType("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
createErrorType("ERR_UNKNOWN_ENCODING", function(arg) {
  return "Unknown encoding: " + arg;
}, TypeError);
createErrorType("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
errorsBrowser.codes = codes;
var ERR_INVALID_OPT_VALUE = errorsBrowser.codes.ERR_INVALID_OPT_VALUE;
function highWaterMarkFrom(options, isDuplex, duplexKey) {
  return options.highWaterMark != null ? options.highWaterMark : isDuplex ? options[duplexKey] : null;
}
function getHighWaterMark(state2, options, duplexKey, isDuplex) {
  var hwm = highWaterMarkFrom(options, isDuplex, duplexKey);
  if (hwm != null) {
    if (!(isFinite(hwm) && Math.floor(hwm) === hwm) || hwm < 0) {
      var name2 = isDuplex ? duplexKey : "highWaterMark";
      throw new ERR_INVALID_OPT_VALUE(name2, hwm);
    }
    return Math.floor(hwm);
  }
  return state2.objectMode ? 16 : 16 * 1024;
}
var state = {
  getHighWaterMark
};
var browser$d = deprecate;
function deprecate(fn, msg) {
  if (config$1("noDeprecation")) {
    return fn;
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config$1("throwDeprecation")) {
        throw new Error(msg);
      } else if (config$1("traceDeprecation")) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
}
function config$1(name2) {
  try {
    if (!globalThis.localStorage)
      return false;
  } catch (_) {
    return false;
  }
  var val = globalThis.localStorage[name2];
  if (null == val)
    return false;
  return String(val).toLowerCase() === "true";
}
var _stream_writable;
var hasRequired_stream_writable;
function require_stream_writable() {
  if (hasRequired_stream_writable)
    return _stream_writable;
  hasRequired_stream_writable = 1;
  _stream_writable = Writable;
  function CorkedRequest(state2) {
    var _this = this;
    this.next = null;
    this.entry = null;
    this.finish = function() {
      onCorkedFinish(_this, state2);
    };
  }
  var Duplex2;
  Writable.WritableState = WritableState;
  var internalUtil = {
    deprecate: browser$d
  };
  var Stream2 = streamBrowser;
  var Buffer2 = buffer$3.Buffer;
  var OurUint8Array = globalThis.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj2) {
    return Buffer2.isBuffer(obj2) || obj2 instanceof OurUint8Array;
  }
  var destroyImpl = destroy_1;
  var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
  var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK2 = _require$codes2.ERR_MULTIPLE_CALLBACK, ERR_STREAM_CANNOT_PIPE = _require$codes2.ERR_STREAM_CANNOT_PIPE, ERR_STREAM_DESTROYED2 = _require$codes2.ERR_STREAM_DESTROYED, ERR_STREAM_NULL_VALUES = _require$codes2.ERR_STREAM_NULL_VALUES, ERR_STREAM_WRITE_AFTER_END = _require$codes2.ERR_STREAM_WRITE_AFTER_END, ERR_UNKNOWN_ENCODING = _require$codes2.ERR_UNKNOWN_ENCODING;
  var errorOrDestroy2 = destroyImpl.errorOrDestroy;
  requireInherits_browser()(Writable, Stream2);
  function nop() {
  }
  function WritableState(options, stream2, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream2 instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.writableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "writableHighWaterMark", isDuplex);
    this.finalCalled = false;
    this.needDrain = false;
    this.ending = false;
    this.ended = false;
    this.finished = false;
    this.destroyed = false;
    var noDecode = options.decodeStrings === false;
    this.decodeStrings = !noDecode;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.length = 0;
    this.writing = false;
    this.corked = 0;
    this.sync = true;
    this.bufferProcessing = false;
    this.onwrite = function(er) {
      onwrite(stream2, er);
    };
    this.writecb = null;
    this.writelen = 0;
    this.bufferedRequest = null;
    this.lastBufferedRequest = null;
    this.pendingcb = 0;
    this.prefinished = false;
    this.errorEmitted = false;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.bufferedRequestCount = 0;
    this.corkedRequestsFree = new CorkedRequest(this);
  }
  WritableState.prototype.getBuffer = function getBuffer() {
    var current = this.bufferedRequest;
    var out = [];
    while (current) {
      out.push(current);
      current = current.next;
    }
    return out;
  };
  (function() {
    try {
      Object.defineProperty(WritableState.prototype, "buffer", {
        get: internalUtil.deprecate(function writableStateBufferGetter() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch (_) {
    }
  })();
  var realHasInstance;
  if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
    realHasInstance = Function.prototype[Symbol.hasInstance];
    Object.defineProperty(Writable, Symbol.hasInstance, {
      value: function value(object) {
        if (realHasInstance.call(this, object))
          return true;
        if (this !== Writable)
          return false;
        return object && object._writableState instanceof WritableState;
      }
    });
  } else {
    realHasInstance = function realHasInstance2(object) {
      return object instanceof this;
    };
  }
  function Writable(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    var isDuplex = this instanceof Duplex2;
    if (!isDuplex && !realHasInstance.call(Writable, this))
      return new Writable(options);
    this._writableState = new WritableState(options, this, isDuplex);
    this.writable = true;
    if (options) {
      if (typeof options.write === "function")
        this._write = options.write;
      if (typeof options.writev === "function")
        this._writev = options.writev;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
      if (typeof options.final === "function")
        this._final = options.final;
    }
    Stream2.call(this);
  }
  Writable.prototype.pipe = function() {
    errorOrDestroy2(this, new ERR_STREAM_CANNOT_PIPE());
  };
  function writeAfterEnd(stream2, cb) {
    var er = new ERR_STREAM_WRITE_AFTER_END();
    errorOrDestroy2(stream2, er);
    process.nextTick(cb, er);
  }
  function validChunk(stream2, state2, chunk, cb) {
    var er;
    if (chunk === null) {
      er = new ERR_STREAM_NULL_VALUES();
    } else if (typeof chunk !== "string" && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer"], chunk);
    }
    if (er) {
      errorOrDestroy2(stream2, er);
      process.nextTick(cb, er);
      return false;
    }
    return true;
  }
  Writable.prototype.write = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    var ret = false;
    var isBuf = !state2.objectMode && _isUint8Array(chunk);
    if (isBuf && !Buffer2.isBuffer(chunk)) {
      chunk = _uint8ArrayToBuffer(chunk);
    }
    if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (isBuf)
      encoding = "buffer";
    else if (!encoding)
      encoding = state2.defaultEncoding;
    if (typeof cb !== "function")
      cb = nop;
    if (state2.ending)
      writeAfterEnd(this, cb);
    else if (isBuf || validChunk(this, state2, chunk, cb)) {
      state2.pendingcb++;
      ret = writeOrBuffer(this, state2, isBuf, chunk, encoding, cb);
    }
    return ret;
  };
  Writable.prototype.cork = function() {
    this._writableState.corked++;
  };
  Writable.prototype.uncork = function() {
    var state2 = this._writableState;
    if (state2.corked) {
      state2.corked--;
      if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest)
        clearBuffer(this, state2);
    }
  };
  Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
    if (typeof encoding === "string")
      encoding = encoding.toLowerCase();
    if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1))
      throw new ERR_UNKNOWN_ENCODING(encoding);
    this._writableState.defaultEncoding = encoding;
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableBuffer", {
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function decodeChunk(state2, chunk, encoding) {
    if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
      chunk = Buffer2.from(chunk, encoding);
    }
    return chunk;
  }
  Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  function writeOrBuffer(stream2, state2, isBuf, chunk, encoding, cb) {
    if (!isBuf) {
      var newChunk = decodeChunk(state2, chunk, encoding);
      if (chunk !== newChunk) {
        isBuf = true;
        encoding = "buffer";
        chunk = newChunk;
      }
    }
    var len = state2.objectMode ? 1 : chunk.length;
    state2.length += len;
    var ret = state2.length < state2.highWaterMark;
    if (!ret)
      state2.needDrain = true;
    if (state2.writing || state2.corked) {
      var last = state2.lastBufferedRequest;
      state2.lastBufferedRequest = {
        chunk,
        encoding,
        isBuf,
        callback: cb,
        next: null
      };
      if (last) {
        last.next = state2.lastBufferedRequest;
      } else {
        state2.bufferedRequest = state2.lastBufferedRequest;
      }
      state2.bufferedRequestCount += 1;
    } else {
      doWrite(stream2, state2, false, len, chunk, encoding, cb);
    }
    return ret;
  }
  function doWrite(stream2, state2, writev, len, chunk, encoding, cb) {
    state2.writelen = len;
    state2.writecb = cb;
    state2.writing = true;
    state2.sync = true;
    if (state2.destroyed)
      state2.onwrite(new ERR_STREAM_DESTROYED2("write"));
    else if (writev)
      stream2._writev(chunk, state2.onwrite);
    else
      stream2._write(chunk, encoding, state2.onwrite);
    state2.sync = false;
  }
  function onwriteError(stream2, state2, sync2, er, cb) {
    --state2.pendingcb;
    if (sync2) {
      process.nextTick(cb, er);
      process.nextTick(finishMaybe, stream2, state2);
      stream2._writableState.errorEmitted = true;
      errorOrDestroy2(stream2, er);
    } else {
      cb(er);
      stream2._writableState.errorEmitted = true;
      errorOrDestroy2(stream2, er);
      finishMaybe(stream2, state2);
    }
  }
  function onwriteStateUpdate(state2) {
    state2.writing = false;
    state2.writecb = null;
    state2.length -= state2.writelen;
    state2.writelen = 0;
  }
  function onwrite(stream2, er) {
    var state2 = stream2._writableState;
    var sync2 = state2.sync;
    var cb = state2.writecb;
    if (typeof cb !== "function")
      throw new ERR_MULTIPLE_CALLBACK2();
    onwriteStateUpdate(state2);
    if (er)
      onwriteError(stream2, state2, sync2, er, cb);
    else {
      var finished = needFinish(state2) || stream2.destroyed;
      if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
        clearBuffer(stream2, state2);
      }
      if (sync2) {
        process.nextTick(afterWrite, stream2, state2, finished, cb);
      } else {
        afterWrite(stream2, state2, finished, cb);
      }
    }
  }
  function afterWrite(stream2, state2, finished, cb) {
    if (!finished)
      onwriteDrain(stream2, state2);
    state2.pendingcb--;
    cb();
    finishMaybe(stream2, state2);
  }
  function onwriteDrain(stream2, state2) {
    if (state2.length === 0 && state2.needDrain) {
      state2.needDrain = false;
      stream2.emit("drain");
    }
  }
  function clearBuffer(stream2, state2) {
    state2.bufferProcessing = true;
    var entry = state2.bufferedRequest;
    if (stream2._writev && entry && entry.next) {
      var l = state2.bufferedRequestCount;
      var buffer2 = new Array(l);
      var holder = state2.corkedRequestsFree;
      holder.entry = entry;
      var count = 0;
      var allBuffers = true;
      while (entry) {
        buffer2[count] = entry;
        if (!entry.isBuf)
          allBuffers = false;
        entry = entry.next;
        count += 1;
      }
      buffer2.allBuffers = allBuffers;
      doWrite(stream2, state2, true, state2.length, buffer2, "", holder.finish);
      state2.pendingcb++;
      state2.lastBufferedRequest = null;
      if (holder.next) {
        state2.corkedRequestsFree = holder.next;
        holder.next = null;
      } else {
        state2.corkedRequestsFree = new CorkedRequest(state2);
      }
      state2.bufferedRequestCount = 0;
    } else {
      while (entry) {
        var chunk = entry.chunk;
        var encoding = entry.encoding;
        var cb = entry.callback;
        var len = state2.objectMode ? 1 : chunk.length;
        doWrite(stream2, state2, false, len, chunk, encoding, cb);
        entry = entry.next;
        state2.bufferedRequestCount--;
        if (state2.writing) {
          break;
        }
      }
      if (entry === null)
        state2.lastBufferedRequest = null;
    }
    state2.bufferedRequest = entry;
    state2.bufferProcessing = false;
  }
  Writable.prototype._write = function(chunk, encoding, cb) {
    cb(new ERR_METHOD_NOT_IMPLEMENTED2("_write()"));
  };
  Writable.prototype._writev = null;
  Writable.prototype.end = function(chunk, encoding, cb) {
    var state2 = this._writableState;
    if (typeof chunk === "function") {
      cb = chunk;
      chunk = null;
      encoding = null;
    } else if (typeof encoding === "function") {
      cb = encoding;
      encoding = null;
    }
    if (chunk !== null && chunk !== void 0)
      this.write(chunk, encoding);
    if (state2.corked) {
      state2.corked = 1;
      this.uncork();
    }
    if (!state2.ending)
      endWritable(this, state2, cb);
    return this;
  };
  Object.defineProperty(Writable.prototype, "writableLength", {
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function needFinish(state2) {
    return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
  }
  function callFinal(stream2, state2) {
    stream2._final(function(err) {
      state2.pendingcb--;
      if (err) {
        errorOrDestroy2(stream2, err);
      }
      state2.prefinished = true;
      stream2.emit("prefinish");
      finishMaybe(stream2, state2);
    });
  }
  function prefinish2(stream2, state2) {
    if (!state2.prefinished && !state2.finalCalled) {
      if (typeof stream2._final === "function" && !state2.destroyed) {
        state2.pendingcb++;
        state2.finalCalled = true;
        process.nextTick(callFinal, stream2, state2);
      } else {
        state2.prefinished = true;
        stream2.emit("prefinish");
      }
    }
  }
  function finishMaybe(stream2, state2) {
    var need = needFinish(state2);
    if (need) {
      prefinish2(stream2, state2);
      if (state2.pendingcb === 0) {
        state2.finished = true;
        stream2.emit("finish");
        if (state2.autoDestroy) {
          var rState = stream2._readableState;
          if (!rState || rState.autoDestroy && rState.endEmitted) {
            stream2.destroy();
          }
        }
      }
    }
    return need;
  }
  function endWritable(stream2, state2, cb) {
    state2.ending = true;
    finishMaybe(stream2, state2);
    if (cb) {
      if (state2.finished)
        process.nextTick(cb);
      else
        stream2.once("finish", cb);
    }
    state2.ended = true;
    stream2.writable = false;
  }
  function onCorkedFinish(corkReq, state2, err) {
    var entry = corkReq.entry;
    corkReq.entry = null;
    while (entry) {
      var cb = entry.callback;
      state2.pendingcb--;
      cb(err);
      entry = entry.next;
    }
    state2.corkedRequestsFree.next = corkReq;
  }
  Object.defineProperty(Writable.prototype, "destroyed", {
    enumerable: false,
    get: function get() {
      if (this._writableState === void 0) {
        return false;
      }
      return this._writableState.destroyed;
    },
    set: function set(value) {
      if (!this._writableState) {
        return;
      }
      this._writableState.destroyed = value;
    }
  });
  Writable.prototype.destroy = destroyImpl.destroy;
  Writable.prototype._undestroy = destroyImpl.undestroy;
  Writable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  return _stream_writable;
}
var _stream_duplex;
var hasRequired_stream_duplex;
function require_stream_duplex() {
  if (hasRequired_stream_duplex)
    return _stream_duplex;
  hasRequired_stream_duplex = 1;
  var objectKeys2 = Object.keys || function(obj2) {
    var keys3 = [];
    for (var key3 in obj2) {
      keys3.push(key3);
    }
    return keys3;
  };
  _stream_duplex = Duplex2;
  var Readable = require_stream_readable();
  var Writable = require_stream_writable();
  requireInherits_browser()(Duplex2, Readable);
  {
    var keys2 = objectKeys2(Writable.prototype);
    for (var v = 0; v < keys2.length; v++) {
      var method = keys2[v];
      if (!Duplex2.prototype[method])
        Duplex2.prototype[method] = Writable.prototype[method];
    }
  }
  function Duplex2(options) {
    if (!(this instanceof Duplex2))
      return new Duplex2(options);
    Readable.call(this, options);
    Writable.call(this, options);
    this.allowHalfOpen = true;
    if (options) {
      if (options.readable === false)
        this.readable = false;
      if (options.writable === false)
        this.writable = false;
      if (options.allowHalfOpen === false) {
        this.allowHalfOpen = false;
        this.once("end", onend);
      }
    }
  }
  Object.defineProperty(Duplex2.prototype, "writableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._writableState.highWaterMark;
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableBuffer", {
    enumerable: false,
    get: function get() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  Object.defineProperty(Duplex2.prototype, "writableLength", {
    enumerable: false,
    get: function get() {
      return this._writableState.length;
    }
  });
  function onend() {
    if (this._writableState.ended)
      return;
    process.nextTick(onEndNT, this);
  }
  function onEndNT(self2) {
    self2.end();
  }
  Object.defineProperty(Duplex2.prototype, "destroyed", {
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return false;
      }
      return this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function set(value) {
      if (this._readableState === void 0 || this._writableState === void 0) {
        return;
      }
      this._readableState.destroyed = value;
      this._writableState.destroyed = value;
    }
  });
  return _stream_duplex;
}
var string_decoder = {};
var Buffer$E = safeBuffer$1.exports.Buffer;
var isEncoding = Buffer$E.isEncoding || function(encoding) {
  encoding = "" + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function _normalizeEncoding(enc) {
  if (!enc)
    return "utf8";
  var retried;
  while (true) {
    switch (enc) {
      case "utf8":
      case "utf-8":
        return "utf8";
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return "utf16le";
      case "latin1":
      case "binary":
        return "latin1";
      case "base64":
      case "ascii":
      case "hex":
        return enc;
      default:
        if (retried)
          return;
        enc = ("" + enc).toLowerCase();
        retried = true;
    }
  }
}
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== "string" && (Buffer$E.isEncoding === isEncoding || !isEncoding(enc)))
    throw new Error("Unknown encoding: " + enc);
  return nenc || enc;
}
string_decoder.StringDecoder = StringDecoder$1;
function StringDecoder$1(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case "utf16le":
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case "utf8":
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case "base64":
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer$E.allocUnsafe(nb);
}
StringDecoder$1.prototype.write = function(buf) {
  if (buf.length === 0)
    return "";
  var r2;
  var i;
  if (this.lastNeed) {
    r2 = this.fillLast(buf);
    if (r2 === void 0)
      return "";
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length)
    return r2 ? r2 + this.text(buf, i) : this.text(buf, i);
  return r2 || "";
};
StringDecoder$1.prototype.end = utf8End;
StringDecoder$1.prototype.text = utf8Text;
StringDecoder$1.prototype.fillLast = function(buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};
function utf8CheckByte(byte) {
  if (byte <= 127)
    return 0;
  else if (byte >> 5 === 6)
    return 2;
  else if (byte >> 4 === 14)
    return 3;
  else if (byte >> 3 === 30)
    return 4;
  return byte >> 6 === 2 ? -1 : -2;
}
function utf8CheckIncomplete(self2, buf, i) {
  var j = buf.length - 1;
  if (j < i)
    return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0)
      self2.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2)
    return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0)
      self2.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2)
    return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2)
        nb = 0;
      else
        self2.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}
function utf8CheckExtraBytes(self2, buf, p) {
  if ((buf[0] & 192) !== 128) {
    self2.lastNeed = 0;
    return "\uFFFD";
  }
  if (self2.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 192) !== 128) {
      self2.lastNeed = 1;
      return "\uFFFD";
    }
    if (self2.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 192) !== 128) {
        self2.lastNeed = 2;
        return "\uFFFD";
      }
    }
  }
}
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r2 = utf8CheckExtraBytes(this, buf);
  if (r2 !== void 0)
    return r2;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed)
    return buf.toString("utf8", i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString("utf8", i, end);
}
function utf8End(buf) {
  var r2 = buf && buf.length ? this.write(buf) : "";
  if (this.lastNeed)
    return r2 + "\uFFFD";
  return r2;
}
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r2 = buf.toString("utf16le", i);
    if (r2) {
      var c = r2.charCodeAt(r2.length - 1);
      if (c >= 55296 && c <= 56319) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r2.slice(0, -1);
      }
    }
    return r2;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString("utf16le", i, buf.length - 1);
}
function utf16End(buf) {
  var r2 = buf && buf.length ? this.write(buf) : "";
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r2 + this.lastChar.toString("utf16le", 0, end);
  }
  return r2;
}
function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0)
    return buf.toString("base64", i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString("base64", i, buf.length - n);
}
function base64End(buf) {
  var r2 = buf && buf.length ? this.write(buf) : "";
  if (this.lastNeed)
    return r2 + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
  return r2;
}
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}
function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : "";
}
var ERR_STREAM_PREMATURE_CLOSE = errorsBrowser.codes.ERR_STREAM_PREMATURE_CLOSE;
function once$1(callback) {
  var called = false;
  return function() {
    if (called)
      return;
    called = true;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callback.apply(this, args);
  };
}
function noop$1() {
}
function isRequest$1(stream2) {
  return stream2.setHeader && typeof stream2.abort === "function";
}
function eos$1(stream2, opts, callback) {
  if (typeof opts === "function")
    return eos$1(stream2, null, opts);
  if (!opts)
    opts = {};
  callback = once$1(callback || noop$1);
  var readable = opts.readable || opts.readable !== false && stream2.readable;
  var writable2 = opts.writable || opts.writable !== false && stream2.writable;
  var onlegacyfinish = function onlegacyfinish2() {
    if (!stream2.writable)
      onfinish();
  };
  var writableEnded = stream2._writableState && stream2._writableState.finished;
  var onfinish = function onfinish2() {
    writable2 = false;
    writableEnded = true;
    if (!readable)
      callback.call(stream2);
  };
  var readableEnded = stream2._readableState && stream2._readableState.endEmitted;
  var onend = function onend2() {
    readable = false;
    readableEnded = true;
    if (!writable2)
      callback.call(stream2);
  };
  var onerror = function onerror2(err) {
    callback.call(stream2, err);
  };
  var onclose = function onclose2() {
    var err;
    if (readable && !readableEnded) {
      if (!stream2._readableState || !stream2._readableState.ended)
        err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream2, err);
    }
    if (writable2 && !writableEnded) {
      if (!stream2._writableState || !stream2._writableState.ended)
        err = new ERR_STREAM_PREMATURE_CLOSE();
      return callback.call(stream2, err);
    }
  };
  var onrequest = function onrequest2() {
    stream2.req.on("finish", onfinish);
  };
  if (isRequest$1(stream2)) {
    stream2.on("complete", onfinish);
    stream2.on("abort", onclose);
    if (stream2.req)
      onrequest();
    else
      stream2.on("request", onrequest);
  } else if (writable2 && !stream2._writableState) {
    stream2.on("end", onlegacyfinish);
    stream2.on("close", onlegacyfinish);
  }
  stream2.on("end", onend);
  stream2.on("finish", onfinish);
  if (opts.error !== false)
    stream2.on("error", onerror);
  stream2.on("close", onclose);
  return function() {
    stream2.removeListener("complete", onfinish);
    stream2.removeListener("abort", onclose);
    stream2.removeListener("request", onrequest);
    if (stream2.req)
      stream2.req.removeListener("finish", onfinish);
    stream2.removeListener("end", onlegacyfinish);
    stream2.removeListener("close", onlegacyfinish);
    stream2.removeListener("finish", onfinish);
    stream2.removeListener("end", onend);
    stream2.removeListener("error", onerror);
    stream2.removeListener("close", onclose);
  };
}
var endOfStream = eos$1;
var async_iterator;
var hasRequiredAsync_iterator;
function requireAsync_iterator() {
  if (hasRequiredAsync_iterator)
    return async_iterator;
  hasRequiredAsync_iterator = 1;
  var _Object$setPrototypeO;
  function _defineProperty(obj2, key3, value) {
    if (key3 in obj2) {
      Object.defineProperty(obj2, key3, { value, enumerable: true, configurable: true, writable: true });
    } else {
      obj2[key3] = value;
    }
    return obj2;
  }
  var finished = endOfStream;
  var kLastResolve = Symbol("lastResolve");
  var kLastReject = Symbol("lastReject");
  var kError = Symbol("error");
  var kEnded = Symbol("ended");
  var kLastPromise = Symbol("lastPromise");
  var kHandlePromise = Symbol("handlePromise");
  var kStream = Symbol("stream");
  function createIterResult(value, done2) {
    return {
      value,
      done: done2
    };
  }
  function readAndResolve(iter) {
    var resolve = iter[kLastResolve];
    if (resolve !== null) {
      var data2 = iter[kStream].read();
      if (data2 !== null) {
        iter[kLastPromise] = null;
        iter[kLastResolve] = null;
        iter[kLastReject] = null;
        resolve(createIterResult(data2, false));
      }
    }
  }
  function onReadable(iter) {
    process.nextTick(readAndResolve, iter);
  }
  function wrapForNext(lastPromise, iter) {
    return function(resolve, reject) {
      lastPromise.then(function() {
        if (iter[kEnded]) {
          resolve(createIterResult(void 0, true));
          return;
        }
        iter[kHandlePromise](resolve, reject);
      }, reject);
    };
  }
  var AsyncIteratorPrototype = Object.getPrototypeOf(function() {
  });
  var ReadableStreamAsyncIteratorPrototype = Object.setPrototypeOf((_Object$setPrototypeO = {
    get stream() {
      return this[kStream];
    },
    next: function next() {
      var _this = this;
      var error3 = this[kError];
      if (error3 !== null) {
        return Promise.reject(error3);
      }
      if (this[kEnded]) {
        return Promise.resolve(createIterResult(void 0, true));
      }
      if (this[kStream].destroyed) {
        return new Promise(function(resolve, reject) {
          process.nextTick(function() {
            if (_this[kError]) {
              reject(_this[kError]);
            } else {
              resolve(createIterResult(void 0, true));
            }
          });
        });
      }
      var lastPromise = this[kLastPromise];
      var promise;
      if (lastPromise) {
        promise = new Promise(wrapForNext(lastPromise, this));
      } else {
        var data2 = this[kStream].read();
        if (data2 !== null) {
          return Promise.resolve(createIterResult(data2, false));
        }
        promise = new Promise(this[kHandlePromise]);
      }
      this[kLastPromise] = promise;
      return promise;
    }
  }, _defineProperty(_Object$setPrototypeO, Symbol.asyncIterator, function() {
    return this;
  }), _defineProperty(_Object$setPrototypeO, "return", function _return() {
    var _this2 = this;
    return new Promise(function(resolve, reject) {
      _this2[kStream].destroy(null, function(err) {
        if (err) {
          reject(err);
          return;
        }
        resolve(createIterResult(void 0, true));
      });
    });
  }), _Object$setPrototypeO), AsyncIteratorPrototype);
  var createReadableStreamAsyncIterator = function createReadableStreamAsyncIterator2(stream2) {
    var _Object$create;
    var iterator = Object.create(ReadableStreamAsyncIteratorPrototype, (_Object$create = {}, _defineProperty(_Object$create, kStream, {
      value: stream2,
      writable: true
    }), _defineProperty(_Object$create, kLastResolve, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kLastReject, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kError, {
      value: null,
      writable: true
    }), _defineProperty(_Object$create, kEnded, {
      value: stream2._readableState.endEmitted,
      writable: true
    }), _defineProperty(_Object$create, kHandlePromise, {
      value: function value(resolve, reject) {
        var data2 = iterator[kStream].read();
        if (data2) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          resolve(createIterResult(data2, false));
        } else {
          iterator[kLastResolve] = resolve;
          iterator[kLastReject] = reject;
        }
      },
      writable: true
    }), _Object$create));
    iterator[kLastPromise] = null;
    finished(stream2, function(err) {
      if (err && err.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var reject = iterator[kLastReject];
        if (reject !== null) {
          iterator[kLastPromise] = null;
          iterator[kLastResolve] = null;
          iterator[kLastReject] = null;
          reject(err);
        }
        iterator[kError] = err;
        return;
      }
      var resolve = iterator[kLastResolve];
      if (resolve !== null) {
        iterator[kLastPromise] = null;
        iterator[kLastResolve] = null;
        iterator[kLastReject] = null;
        resolve(createIterResult(void 0, true));
      }
      iterator[kEnded] = true;
    });
    stream2.on("readable", onReadable.bind(null, iterator));
    return iterator;
  };
  async_iterator = createReadableStreamAsyncIterator;
  return async_iterator;
}
var fromBrowser;
var hasRequiredFromBrowser;
function requireFromBrowser() {
  if (hasRequiredFromBrowser)
    return fromBrowser;
  hasRequiredFromBrowser = 1;
  fromBrowser = function() {
    throw new Error("Readable.from is not available in the browser");
  };
  return fromBrowser;
}
var _stream_readable;
var hasRequired_stream_readable;
function require_stream_readable() {
  if (hasRequired_stream_readable)
    return _stream_readable;
  hasRequired_stream_readable = 1;
  _stream_readable = Readable;
  var Duplex2;
  Readable.ReadableState = ReadableState;
  events$1.exports.EventEmitter;
  var EElistenerCount = function EElistenerCount2(emitter, type) {
    return emitter.listeners(type).length;
  };
  var Stream2 = streamBrowser;
  var Buffer2 = buffer$3.Buffer;
  var OurUint8Array = globalThis.Uint8Array || function() {
  };
  function _uint8ArrayToBuffer(chunk) {
    return Buffer2.from(chunk);
  }
  function _isUint8Array(obj2) {
    return Buffer2.isBuffer(obj2) || obj2 instanceof OurUint8Array;
  }
  var debugUtil = require$$0$3;
  var debug2;
  if (debugUtil && debugUtil.debuglog) {
    debug2 = debugUtil.debuglog("stream");
  } else {
    debug2 = function debug3() {
    };
  }
  var BufferList = requireBuffer_list();
  var destroyImpl = destroy_1;
  var _require = state, getHighWaterMark2 = _require.getHighWaterMark;
  var _require$codes2 = errorsBrowser.codes, ERR_INVALID_ARG_TYPE = _require$codes2.ERR_INVALID_ARG_TYPE, ERR_STREAM_PUSH_AFTER_EOF = _require$codes2.ERR_STREAM_PUSH_AFTER_EOF, ERR_METHOD_NOT_IMPLEMENTED2 = _require$codes2.ERR_METHOD_NOT_IMPLEMENTED, ERR_STREAM_UNSHIFT_AFTER_END_EVENT = _require$codes2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  var StringDecoder2;
  var createReadableStreamAsyncIterator;
  var from2;
  requireInherits_browser()(Readable, Stream2);
  var errorOrDestroy2 = destroyImpl.errorOrDestroy;
  var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
  function prependListener(emitter, event, fn) {
    if (typeof emitter.prependListener === "function")
      return emitter.prependListener(event, fn);
    if (!emitter._events || !emitter._events[event])
      emitter.on(event, fn);
    else if (Array.isArray(emitter._events[event]))
      emitter._events[event].unshift(fn);
    else
      emitter._events[event] = [fn, emitter._events[event]];
  }
  function ReadableState(options, stream2, isDuplex) {
    Duplex2 = Duplex2 || require_stream_duplex();
    options = options || {};
    if (typeof isDuplex !== "boolean")
      isDuplex = stream2 instanceof Duplex2;
    this.objectMode = !!options.objectMode;
    if (isDuplex)
      this.objectMode = this.objectMode || !!options.readableObjectMode;
    this.highWaterMark = getHighWaterMark2(this, options, "readableHighWaterMark", isDuplex);
    this.buffer = new BufferList();
    this.length = 0;
    this.pipes = null;
    this.pipesCount = 0;
    this.flowing = null;
    this.ended = false;
    this.endEmitted = false;
    this.reading = false;
    this.sync = true;
    this.needReadable = false;
    this.emittedReadable = false;
    this.readableListening = false;
    this.resumeScheduled = false;
    this.paused = true;
    this.emitClose = options.emitClose !== false;
    this.autoDestroy = !!options.autoDestroy;
    this.destroyed = false;
    this.defaultEncoding = options.defaultEncoding || "utf8";
    this.awaitDrain = 0;
    this.readingMore = false;
    this.decoder = null;
    this.encoding = null;
    if (options.encoding) {
      if (!StringDecoder2)
        StringDecoder2 = string_decoder.StringDecoder;
      this.decoder = new StringDecoder2(options.encoding);
      this.encoding = options.encoding;
    }
  }
  function Readable(options) {
    Duplex2 = Duplex2 || require_stream_duplex();
    if (!(this instanceof Readable))
      return new Readable(options);
    var isDuplex = this instanceof Duplex2;
    this._readableState = new ReadableState(options, this, isDuplex);
    this.readable = true;
    if (options) {
      if (typeof options.read === "function")
        this._read = options.read;
      if (typeof options.destroy === "function")
        this._destroy = options.destroy;
    }
    Stream2.call(this);
  }
  Object.defineProperty(Readable.prototype, "destroyed", {
    enumerable: false,
    get: function get() {
      if (this._readableState === void 0) {
        return false;
      }
      return this._readableState.destroyed;
    },
    set: function set(value) {
      if (!this._readableState) {
        return;
      }
      this._readableState.destroyed = value;
    }
  });
  Readable.prototype.destroy = destroyImpl.destroy;
  Readable.prototype._undestroy = destroyImpl.undestroy;
  Readable.prototype._destroy = function(err, cb) {
    cb(err);
  };
  Readable.prototype.push = function(chunk, encoding) {
    var state2 = this._readableState;
    var skipChunkCheck;
    if (!state2.objectMode) {
      if (typeof chunk === "string") {
        encoding = encoding || state2.defaultEncoding;
        if (encoding !== state2.encoding) {
          chunk = Buffer2.from(chunk, encoding);
          encoding = "";
        }
        skipChunkCheck = true;
      }
    } else {
      skipChunkCheck = true;
    }
    return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
  };
  Readable.prototype.unshift = function(chunk) {
    return readableAddChunk(this, chunk, null, true, false);
  };
  function readableAddChunk(stream2, chunk, encoding, addToFront, skipChunkCheck) {
    debug2("readableAddChunk", chunk);
    var state2 = stream2._readableState;
    if (chunk === null) {
      state2.reading = false;
      onEofChunk(stream2, state2);
    } else {
      var er;
      if (!skipChunkCheck)
        er = chunkInvalid(state2, chunk);
      if (er) {
        errorOrDestroy2(stream2, er);
      } else if (state2.objectMode || chunk && chunk.length > 0) {
        if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
          chunk = _uint8ArrayToBuffer(chunk);
        }
        if (addToFront) {
          if (state2.endEmitted)
            errorOrDestroy2(stream2, new ERR_STREAM_UNSHIFT_AFTER_END_EVENT());
          else
            addChunk(stream2, state2, chunk, true);
        } else if (state2.ended) {
          errorOrDestroy2(stream2, new ERR_STREAM_PUSH_AFTER_EOF());
        } else if (state2.destroyed) {
          return false;
        } else {
          state2.reading = false;
          if (state2.decoder && !encoding) {
            chunk = state2.decoder.write(chunk);
            if (state2.objectMode || chunk.length !== 0)
              addChunk(stream2, state2, chunk, false);
            else
              maybeReadMore(stream2, state2);
          } else {
            addChunk(stream2, state2, chunk, false);
          }
        }
      } else if (!addToFront) {
        state2.reading = false;
        maybeReadMore(stream2, state2);
      }
    }
    return !state2.ended && (state2.length < state2.highWaterMark || state2.length === 0);
  }
  function addChunk(stream2, state2, chunk, addToFront) {
    if (state2.flowing && state2.length === 0 && !state2.sync) {
      state2.awaitDrain = 0;
      stream2.emit("data", chunk);
    } else {
      state2.length += state2.objectMode ? 1 : chunk.length;
      if (addToFront)
        state2.buffer.unshift(chunk);
      else
        state2.buffer.push(chunk);
      if (state2.needReadable)
        emitReadable(stream2);
    }
    maybeReadMore(stream2, state2);
  }
  function chunkInvalid(state2, chunk) {
    var er;
    if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
      er = new ERR_INVALID_ARG_TYPE("chunk", ["string", "Buffer", "Uint8Array"], chunk);
    }
    return er;
  }
  Readable.prototype.isPaused = function() {
    return this._readableState.flowing === false;
  };
  Readable.prototype.setEncoding = function(enc) {
    if (!StringDecoder2)
      StringDecoder2 = string_decoder.StringDecoder;
    var decoder = new StringDecoder2(enc);
    this._readableState.decoder = decoder;
    this._readableState.encoding = this._readableState.decoder.encoding;
    var p = this._readableState.buffer.head;
    var content = "";
    while (p !== null) {
      content += decoder.write(p.data);
      p = p.next;
    }
    this._readableState.buffer.clear();
    if (content !== "")
      this._readableState.buffer.push(content);
    this._readableState.length = content.length;
    return this;
  };
  var MAX_HWM = 1073741824;
  function computeNewHighWaterMark(n) {
    if (n >= MAX_HWM) {
      n = MAX_HWM;
    } else {
      n--;
      n |= n >>> 1;
      n |= n >>> 2;
      n |= n >>> 4;
      n |= n >>> 8;
      n |= n >>> 16;
      n++;
    }
    return n;
  }
  function howMuchToRead(n, state2) {
    if (n <= 0 || state2.length === 0 && state2.ended)
      return 0;
    if (state2.objectMode)
      return 1;
    if (n !== n) {
      if (state2.flowing && state2.length)
        return state2.buffer.head.data.length;
      else
        return state2.length;
    }
    if (n > state2.highWaterMark)
      state2.highWaterMark = computeNewHighWaterMark(n);
    if (n <= state2.length)
      return n;
    if (!state2.ended) {
      state2.needReadable = true;
      return 0;
    }
    return state2.length;
  }
  Readable.prototype.read = function(n) {
    debug2("read", n);
    n = parseInt(n, 10);
    var state2 = this._readableState;
    var nOrig = n;
    if (n !== 0)
      state2.emittedReadable = false;
    if (n === 0 && state2.needReadable && ((state2.highWaterMark !== 0 ? state2.length >= state2.highWaterMark : state2.length > 0) || state2.ended)) {
      debug2("read: emitReadable", state2.length, state2.ended);
      if (state2.length === 0 && state2.ended)
        endReadable(this);
      else
        emitReadable(this);
      return null;
    }
    n = howMuchToRead(n, state2);
    if (n === 0 && state2.ended) {
      if (state2.length === 0)
        endReadable(this);
      return null;
    }
    var doRead = state2.needReadable;
    debug2("need readable", doRead);
    if (state2.length === 0 || state2.length - n < state2.highWaterMark) {
      doRead = true;
      debug2("length less than watermark", doRead);
    }
    if (state2.ended || state2.reading) {
      doRead = false;
      debug2("reading or ended", doRead);
    } else if (doRead) {
      debug2("do read");
      state2.reading = true;
      state2.sync = true;
      if (state2.length === 0)
        state2.needReadable = true;
      this._read(state2.highWaterMark);
      state2.sync = false;
      if (!state2.reading)
        n = howMuchToRead(nOrig, state2);
    }
    var ret;
    if (n > 0)
      ret = fromList(n, state2);
    else
      ret = null;
    if (ret === null) {
      state2.needReadable = state2.length <= state2.highWaterMark;
      n = 0;
    } else {
      state2.length -= n;
      state2.awaitDrain = 0;
    }
    if (state2.length === 0) {
      if (!state2.ended)
        state2.needReadable = true;
      if (nOrig !== n && state2.ended)
        endReadable(this);
    }
    if (ret !== null)
      this.emit("data", ret);
    return ret;
  };
  function onEofChunk(stream2, state2) {
    debug2("onEofChunk");
    if (state2.ended)
      return;
    if (state2.decoder) {
      var chunk = state2.decoder.end();
      if (chunk && chunk.length) {
        state2.buffer.push(chunk);
        state2.length += state2.objectMode ? 1 : chunk.length;
      }
    }
    state2.ended = true;
    if (state2.sync) {
      emitReadable(stream2);
    } else {
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        state2.emittedReadable = true;
        emitReadable_(stream2);
      }
    }
  }
  function emitReadable(stream2) {
    var state2 = stream2._readableState;
    debug2("emitReadable", state2.needReadable, state2.emittedReadable);
    state2.needReadable = false;
    if (!state2.emittedReadable) {
      debug2("emitReadable", state2.flowing);
      state2.emittedReadable = true;
      process.nextTick(emitReadable_, stream2);
    }
  }
  function emitReadable_(stream2) {
    var state2 = stream2._readableState;
    debug2("emitReadable_", state2.destroyed, state2.length, state2.ended);
    if (!state2.destroyed && (state2.length || state2.ended)) {
      stream2.emit("readable");
      state2.emittedReadable = false;
    }
    state2.needReadable = !state2.flowing && !state2.ended && state2.length <= state2.highWaterMark;
    flow(stream2);
  }
  function maybeReadMore(stream2, state2) {
    if (!state2.readingMore) {
      state2.readingMore = true;
      process.nextTick(maybeReadMore_, stream2, state2);
    }
  }
  function maybeReadMore_(stream2, state2) {
    while (!state2.reading && !state2.ended && (state2.length < state2.highWaterMark || state2.flowing && state2.length === 0)) {
      var len = state2.length;
      debug2("maybeReadMore read 0");
      stream2.read(0);
      if (len === state2.length)
        break;
    }
    state2.readingMore = false;
  }
  Readable.prototype._read = function(n) {
    errorOrDestroy2(this, new ERR_METHOD_NOT_IMPLEMENTED2("_read()"));
  };
  Readable.prototype.pipe = function(dest, pipeOpts) {
    var src2 = this;
    var state2 = this._readableState;
    switch (state2.pipesCount) {
      case 0:
        state2.pipes = dest;
        break;
      case 1:
        state2.pipes = [state2.pipes, dest];
        break;
      default:
        state2.pipes.push(dest);
        break;
    }
    state2.pipesCount += 1;
    debug2("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
    var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
    var endFn = doEnd ? onend : unpipe;
    if (state2.endEmitted)
      process.nextTick(endFn);
    else
      src2.once("end", endFn);
    dest.on("unpipe", onunpipe);
    function onunpipe(readable, unpipeInfo) {
      debug2("onunpipe");
      if (readable === src2) {
        if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
          unpipeInfo.hasUnpiped = true;
          cleanup();
        }
      }
    }
    function onend() {
      debug2("onend");
      dest.end();
    }
    var ondrain = pipeOnDrain(src2);
    dest.on("drain", ondrain);
    var cleanedUp = false;
    function cleanup() {
      debug2("cleanup");
      dest.removeListener("close", onclose);
      dest.removeListener("finish", onfinish);
      dest.removeListener("drain", ondrain);
      dest.removeListener("error", onerror);
      dest.removeListener("unpipe", onunpipe);
      src2.removeListener("end", onend);
      src2.removeListener("end", unpipe);
      src2.removeListener("data", ondata);
      cleanedUp = true;
      if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain))
        ondrain();
    }
    src2.on("data", ondata);
    function ondata(chunk) {
      debug2("ondata");
      var ret = dest.write(chunk);
      debug2("dest.write", ret);
      if (ret === false) {
        if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
          debug2("false write response, pause", state2.awaitDrain);
          state2.awaitDrain++;
        }
        src2.pause();
      }
    }
    function onerror(er) {
      debug2("onerror", er);
      unpipe();
      dest.removeListener("error", onerror);
      if (EElistenerCount(dest, "error") === 0)
        errorOrDestroy2(dest, er);
    }
    prependListener(dest, "error", onerror);
    function onclose() {
      dest.removeListener("finish", onfinish);
      unpipe();
    }
    dest.once("close", onclose);
    function onfinish() {
      debug2("onfinish");
      dest.removeListener("close", onclose);
      unpipe();
    }
    dest.once("finish", onfinish);
    function unpipe() {
      debug2("unpipe");
      src2.unpipe(dest);
    }
    dest.emit("pipe", src2);
    if (!state2.flowing) {
      debug2("pipe resume");
      src2.resume();
    }
    return dest;
  };
  function pipeOnDrain(src2) {
    return function pipeOnDrainFunctionResult() {
      var state2 = src2._readableState;
      debug2("pipeOnDrain", state2.awaitDrain);
      if (state2.awaitDrain)
        state2.awaitDrain--;
      if (state2.awaitDrain === 0 && EElistenerCount(src2, "data")) {
        state2.flowing = true;
        flow(src2);
      }
    };
  }
  Readable.prototype.unpipe = function(dest) {
    var state2 = this._readableState;
    var unpipeInfo = {
      hasUnpiped: false
    };
    if (state2.pipesCount === 0)
      return this;
    if (state2.pipesCount === 1) {
      if (dest && dest !== state2.pipes)
        return this;
      if (!dest)
        dest = state2.pipes;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      if (dest)
        dest.emit("unpipe", this, unpipeInfo);
      return this;
    }
    if (!dest) {
      var dests = state2.pipes;
      var len = state2.pipesCount;
      state2.pipes = null;
      state2.pipesCount = 0;
      state2.flowing = false;
      for (var i = 0; i < len; i++) {
        dests[i].emit("unpipe", this, {
          hasUnpiped: false
        });
      }
      return this;
    }
    var index2 = indexOf(state2.pipes, dest);
    if (index2 === -1)
      return this;
    state2.pipes.splice(index2, 1);
    state2.pipesCount -= 1;
    if (state2.pipesCount === 1)
      state2.pipes = state2.pipes[0];
    dest.emit("unpipe", this, unpipeInfo);
    return this;
  };
  Readable.prototype.on = function(ev, fn) {
    var res = Stream2.prototype.on.call(this, ev, fn);
    var state2 = this._readableState;
    if (ev === "data") {
      state2.readableListening = this.listenerCount("readable") > 0;
      if (state2.flowing !== false)
        this.resume();
    } else if (ev === "readable") {
      if (!state2.endEmitted && !state2.readableListening) {
        state2.readableListening = state2.needReadable = true;
        state2.flowing = false;
        state2.emittedReadable = false;
        debug2("on readable", state2.length, state2.reading);
        if (state2.length) {
          emitReadable(this);
        } else if (!state2.reading) {
          process.nextTick(nReadingNextTick, this);
        }
      }
    }
    return res;
  };
  Readable.prototype.addListener = Readable.prototype.on;
  Readable.prototype.removeListener = function(ev, fn) {
    var res = Stream2.prototype.removeListener.call(this, ev, fn);
    if (ev === "readable") {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  Readable.prototype.removeAllListeners = function(ev) {
    var res = Stream2.prototype.removeAllListeners.apply(this, arguments);
    if (ev === "readable" || ev === void 0) {
      process.nextTick(updateReadableListening, this);
    }
    return res;
  };
  function updateReadableListening(self2) {
    var state2 = self2._readableState;
    state2.readableListening = self2.listenerCount("readable") > 0;
    if (state2.resumeScheduled && !state2.paused) {
      state2.flowing = true;
    } else if (self2.listenerCount("data") > 0) {
      self2.resume();
    }
  }
  function nReadingNextTick(self2) {
    debug2("readable nexttick read 0");
    self2.read(0);
  }
  Readable.prototype.resume = function() {
    var state2 = this._readableState;
    if (!state2.flowing) {
      debug2("resume");
      state2.flowing = !state2.readableListening;
      resume(this, state2);
    }
    state2.paused = false;
    return this;
  };
  function resume(stream2, state2) {
    if (!state2.resumeScheduled) {
      state2.resumeScheduled = true;
      process.nextTick(resume_, stream2, state2);
    }
  }
  function resume_(stream2, state2) {
    debug2("resume", state2.reading);
    if (!state2.reading) {
      stream2.read(0);
    }
    state2.resumeScheduled = false;
    stream2.emit("resume");
    flow(stream2);
    if (state2.flowing && !state2.reading)
      stream2.read(0);
  }
  Readable.prototype.pause = function() {
    debug2("call pause flowing=%j", this._readableState.flowing);
    if (this._readableState.flowing !== false) {
      debug2("pause");
      this._readableState.flowing = false;
      this.emit("pause");
    }
    this._readableState.paused = true;
    return this;
  };
  function flow(stream2) {
    var state2 = stream2._readableState;
    debug2("flow", state2.flowing);
    while (state2.flowing && stream2.read() !== null) {
    }
  }
  Readable.prototype.wrap = function(stream2) {
    var _this = this;
    var state2 = this._readableState;
    var paused = false;
    stream2.on("end", function() {
      debug2("wrapped end");
      if (state2.decoder && !state2.ended) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length)
          _this.push(chunk);
      }
      _this.push(null);
    });
    stream2.on("data", function(chunk) {
      debug2("wrapped data");
      if (state2.decoder)
        chunk = state2.decoder.write(chunk);
      if (state2.objectMode && (chunk === null || chunk === void 0))
        return;
      else if (!state2.objectMode && (!chunk || !chunk.length))
        return;
      var ret = _this.push(chunk);
      if (!ret) {
        paused = true;
        stream2.pause();
      }
    });
    for (var i in stream2) {
      if (this[i] === void 0 && typeof stream2[i] === "function") {
        this[i] = function methodWrap(method) {
          return function methodWrapReturnFunction() {
            return stream2[method].apply(stream2, arguments);
          };
        }(i);
      }
    }
    for (var n = 0; n < kProxyEvents.length; n++) {
      stream2.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
    }
    this._read = function(n2) {
      debug2("wrapped _read", n2);
      if (paused) {
        paused = false;
        stream2.resume();
      }
    };
    return this;
  };
  if (typeof Symbol === "function") {
    Readable.prototype[Symbol.asyncIterator] = function() {
      if (createReadableStreamAsyncIterator === void 0) {
        createReadableStreamAsyncIterator = requireAsync_iterator();
      }
      return createReadableStreamAsyncIterator(this);
    };
  }
  Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
    enumerable: false,
    get: function get() {
      return this._readableState.highWaterMark;
    }
  });
  Object.defineProperty(Readable.prototype, "readableBuffer", {
    enumerable: false,
    get: function get() {
      return this._readableState && this._readableState.buffer;
    }
  });
  Object.defineProperty(Readable.prototype, "readableFlowing", {
    enumerable: false,
    get: function get() {
      return this._readableState.flowing;
    },
    set: function set(state2) {
      if (this._readableState) {
        this._readableState.flowing = state2;
      }
    }
  });
  Readable._fromList = fromList;
  Object.defineProperty(Readable.prototype, "readableLength", {
    enumerable: false,
    get: function get() {
      return this._readableState.length;
    }
  });
  function fromList(n, state2) {
    if (state2.length === 0)
      return null;
    var ret;
    if (state2.objectMode)
      ret = state2.buffer.shift();
    else if (!n || n >= state2.length) {
      if (state2.decoder)
        ret = state2.buffer.join("");
      else if (state2.buffer.length === 1)
        ret = state2.buffer.first();
      else
        ret = state2.buffer.concat(state2.length);
      state2.buffer.clear();
    } else {
      ret = state2.buffer.consume(n, state2.decoder);
    }
    return ret;
  }
  function endReadable(stream2) {
    var state2 = stream2._readableState;
    debug2("endReadable", state2.endEmitted);
    if (!state2.endEmitted) {
      state2.ended = true;
      process.nextTick(endReadableNT, state2, stream2);
    }
  }
  function endReadableNT(state2, stream2) {
    debug2("endReadableNT", state2.endEmitted, state2.length);
    if (!state2.endEmitted && state2.length === 0) {
      state2.endEmitted = true;
      stream2.readable = false;
      stream2.emit("end");
      if (state2.autoDestroy) {
        var wState = stream2._writableState;
        if (!wState || wState.autoDestroy && wState.finished) {
          stream2.destroy();
        }
      }
    }
  }
  if (typeof Symbol === "function") {
    Readable.from = function(iterable, opts) {
      if (from2 === void 0) {
        from2 = requireFromBrowser();
      }
      return from2(Readable, iterable, opts);
    };
  }
  function indexOf(xs, x) {
    for (var i = 0, l = xs.length; i < l; i++) {
      if (xs[i] === x)
        return i;
    }
    return -1;
  }
  return _stream_readable;
}
var _stream_transform = Transform$9;
var _require$codes$1 = errorsBrowser.codes, ERR_METHOD_NOT_IMPLEMENTED = _require$codes$1.ERR_METHOD_NOT_IMPLEMENTED, ERR_MULTIPLE_CALLBACK = _require$codes$1.ERR_MULTIPLE_CALLBACK, ERR_TRANSFORM_ALREADY_TRANSFORMING = _require$codes$1.ERR_TRANSFORM_ALREADY_TRANSFORMING, ERR_TRANSFORM_WITH_LENGTH_0 = _require$codes$1.ERR_TRANSFORM_WITH_LENGTH_0;
var Duplex = require_stream_duplex();
requireInherits_browser()(Transform$9, Duplex);
function afterTransform(er, data2) {
  var ts = this._transformState;
  ts.transforming = false;
  var cb = ts.writecb;
  if (cb === null) {
    return this.emit("error", new ERR_MULTIPLE_CALLBACK());
  }
  ts.writechunk = null;
  ts.writecb = null;
  if (data2 != null)
    this.push(data2);
  cb(er);
  var rs = this._readableState;
  rs.reading = false;
  if (rs.needReadable || rs.length < rs.highWaterMark) {
    this._read(rs.highWaterMark);
  }
}
function Transform$9(options) {
  if (!(this instanceof Transform$9))
    return new Transform$9(options);
  Duplex.call(this, options);
  this._transformState = {
    afterTransform: afterTransform.bind(this),
    needTransform: false,
    transforming: false,
    writecb: null,
    writechunk: null,
    writeencoding: null
  };
  this._readableState.needReadable = true;
  this._readableState.sync = false;
  if (options) {
    if (typeof options.transform === "function")
      this._transform = options.transform;
    if (typeof options.flush === "function")
      this._flush = options.flush;
  }
  this.on("prefinish", prefinish);
}
function prefinish() {
  var _this = this;
  if (typeof this._flush === "function" && !this._readableState.destroyed) {
    this._flush(function(er, data2) {
      done(_this, er, data2);
    });
  } else {
    done(this, null, null);
  }
}
Transform$9.prototype.push = function(chunk, encoding) {
  this._transformState.needTransform = false;
  return Duplex.prototype.push.call(this, chunk, encoding);
};
Transform$9.prototype._transform = function(chunk, encoding, cb) {
  cb(new ERR_METHOD_NOT_IMPLEMENTED("_transform()"));
};
Transform$9.prototype._write = function(chunk, encoding, cb) {
  var ts = this._transformState;
  ts.writecb = cb;
  ts.writechunk = chunk;
  ts.writeencoding = encoding;
  if (!ts.transforming) {
    var rs = this._readableState;
    if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark)
      this._read(rs.highWaterMark);
  }
};
Transform$9.prototype._read = function(n) {
  var ts = this._transformState;
  if (ts.writechunk !== null && !ts.transforming) {
    ts.transforming = true;
    this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
  } else {
    ts.needTransform = true;
  }
};
Transform$9.prototype._destroy = function(err, cb) {
  Duplex.prototype._destroy.call(this, err, function(err2) {
    cb(err2);
  });
};
function done(stream2, er, data2) {
  if (er)
    return stream2.emit("error", er);
  if (data2 != null)
    stream2.push(data2);
  if (stream2._writableState.length)
    throw new ERR_TRANSFORM_WITH_LENGTH_0();
  if (stream2._transformState.transforming)
    throw new ERR_TRANSFORM_ALREADY_TRANSFORMING();
  return stream2.push(null);
}
var _stream_passthrough = PassThrough;
var Transform$8 = _stream_transform;
requireInherits_browser()(PassThrough, Transform$8);
function PassThrough(options) {
  if (!(this instanceof PassThrough))
    return new PassThrough(options);
  Transform$8.call(this, options);
}
PassThrough.prototype._transform = function(chunk, encoding, cb) {
  cb(null, chunk);
};
var eos;
function once(callback) {
  var called = false;
  return function() {
    if (called)
      return;
    called = true;
    callback.apply(void 0, arguments);
  };
}
var _require$codes = errorsBrowser.codes, ERR_MISSING_ARGS = _require$codes.ERR_MISSING_ARGS, ERR_STREAM_DESTROYED = _require$codes.ERR_STREAM_DESTROYED;
function noop(err) {
  if (err)
    throw err;
}
function isRequest(stream2) {
  return stream2.setHeader && typeof stream2.abort === "function";
}
function destroyer(stream2, reading, writing, callback) {
  callback = once(callback);
  var closed = false;
  stream2.on("close", function() {
    closed = true;
  });
  if (eos === void 0)
    eos = endOfStream;
  eos(stream2, {
    readable: reading,
    writable: writing
  }, function(err) {
    if (err)
      return callback(err);
    closed = true;
    callback();
  });
  var destroyed = false;
  return function(err) {
    if (closed)
      return;
    if (destroyed)
      return;
    destroyed = true;
    if (isRequest(stream2))
      return stream2.abort();
    if (typeof stream2.destroy === "function")
      return stream2.destroy();
    callback(err || new ERR_STREAM_DESTROYED("pipe"));
  };
}
function call(fn) {
  fn();
}
function pipe(from2, to) {
  return from2.pipe(to);
}
function popCallback(streams) {
  if (!streams.length)
    return noop;
  if (typeof streams[streams.length - 1] !== "function")
    return noop;
  return streams.pop();
}
function pipeline() {
  for (var _len = arguments.length, streams = new Array(_len), _key = 0; _key < _len; _key++) {
    streams[_key] = arguments[_key];
  }
  var callback = popCallback(streams);
  if (Array.isArray(streams[0]))
    streams = streams[0];
  if (streams.length < 2) {
    throw new ERR_MISSING_ARGS("streams");
  }
  var error3;
  var destroys = streams.map(function(stream2, i) {
    var reading = i < streams.length - 1;
    var writing = i > 0;
    return destroyer(stream2, reading, writing, function(err) {
      if (!error3)
        error3 = err;
      if (err)
        destroys.forEach(call);
      if (reading)
        return;
      destroys.forEach(call);
      callback(error3);
    });
  });
  return streams.reduce(pipe);
}
var pipeline_1 = pipeline;
(function(module, exports2) {
  exports2 = module.exports = require_stream_readable();
  exports2.Stream = exports2;
  exports2.Readable = exports2;
  exports2.Writable = require_stream_writable();
  exports2.Duplex = require_stream_duplex();
  exports2.Transform = _stream_transform;
  exports2.PassThrough = _stream_passthrough;
  exports2.finished = endOfStream;
  exports2.pipeline = pipeline_1;
})(readableBrowser, readableBrowser.exports);
var Buffer$D = safeBuffer$1.exports.Buffer;
var Transform$7 = readableBrowser.exports.Transform;
var inherits$v = requireInherits_browser();
function throwIfNotStringOrBuffer(val, prefix) {
  if (!Buffer$D.isBuffer(val) && typeof val !== "string") {
    throw new TypeError(prefix + " must be a string or a buffer");
  }
}
function HashBase$2(blockSize2) {
  Transform$7.call(this);
  this._block = Buffer$D.allocUnsafe(blockSize2);
  this._blockSize = blockSize2;
  this._blockOffset = 0;
  this._length = [0, 0, 0, 0];
  this._finalized = false;
}
inherits$v(HashBase$2, Transform$7);
HashBase$2.prototype._transform = function(chunk, encoding, callback) {
  var error3 = null;
  try {
    this.update(chunk, encoding);
  } catch (err) {
    error3 = err;
  }
  callback(error3);
};
HashBase$2.prototype._flush = function(callback) {
  var error3 = null;
  try {
    this.push(this.digest());
  } catch (err) {
    error3 = err;
  }
  callback(error3);
};
HashBase$2.prototype.update = function(data2, encoding) {
  throwIfNotStringOrBuffer(data2, "Data");
  if (this._finalized)
    throw new Error("Digest already called");
  if (!Buffer$D.isBuffer(data2))
    data2 = Buffer$D.from(data2, encoding);
  var block = this._block;
  var offset = 0;
  while (this._blockOffset + data2.length - offset >= this._blockSize) {
    for (var i = this._blockOffset; i < this._blockSize; )
      block[i++] = data2[offset++];
    this._update();
    this._blockOffset = 0;
  }
  while (offset < data2.length)
    block[this._blockOffset++] = data2[offset++];
  for (var j = 0, carry = data2.length * 8; carry > 0; ++j) {
    this._length[j] += carry;
    carry = this._length[j] / 4294967296 | 0;
    if (carry > 0)
      this._length[j] -= 4294967296 * carry;
  }
  return this;
};
HashBase$2.prototype._update = function() {
  throw new Error("_update is not implemented");
};
HashBase$2.prototype.digest = function(encoding) {
  if (this._finalized)
    throw new Error("Digest already called");
  this._finalized = true;
  var digest10 = this._digest();
  if (encoding !== void 0)
    digest10 = digest10.toString(encoding);
  this._block.fill(0);
  this._blockOffset = 0;
  for (var i = 0; i < 4; ++i)
    this._length[i] = 0;
  return digest10;
};
HashBase$2.prototype._digest = function() {
  throw new Error("_digest is not implemented");
};
var hashBase = HashBase$2;
var inherits$u = requireInherits_browser();
var HashBase$1 = hashBase;
var Buffer$C = safeBuffer$1.exports.Buffer;
var ARRAY16$1 = new Array(16);
function MD5$3() {
  HashBase$1.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
}
inherits$u(MD5$3, HashBase$1);
MD5$3.prototype._update = function() {
  var M = ARRAY16$1;
  for (var i = 0; i < 16; ++i)
    M[i] = this._block.readInt32LE(i * 4);
  var a = this._a;
  var b = this._b;
  var c = this._c;
  var d = this._d;
  a = fnF(a, b, c, d, M[0], 3614090360, 7);
  d = fnF(d, a, b, c, M[1], 3905402710, 12);
  c = fnF(c, d, a, b, M[2], 606105819, 17);
  b = fnF(b, c, d, a, M[3], 3250441966, 22);
  a = fnF(a, b, c, d, M[4], 4118548399, 7);
  d = fnF(d, a, b, c, M[5], 1200080426, 12);
  c = fnF(c, d, a, b, M[6], 2821735955, 17);
  b = fnF(b, c, d, a, M[7], 4249261313, 22);
  a = fnF(a, b, c, d, M[8], 1770035416, 7);
  d = fnF(d, a, b, c, M[9], 2336552879, 12);
  c = fnF(c, d, a, b, M[10], 4294925233, 17);
  b = fnF(b, c, d, a, M[11], 2304563134, 22);
  a = fnF(a, b, c, d, M[12], 1804603682, 7);
  d = fnF(d, a, b, c, M[13], 4254626195, 12);
  c = fnF(c, d, a, b, M[14], 2792965006, 17);
  b = fnF(b, c, d, a, M[15], 1236535329, 22);
  a = fnG(a, b, c, d, M[1], 4129170786, 5);
  d = fnG(d, a, b, c, M[6], 3225465664, 9);
  c = fnG(c, d, a, b, M[11], 643717713, 14);
  b = fnG(b, c, d, a, M[0], 3921069994, 20);
  a = fnG(a, b, c, d, M[5], 3593408605, 5);
  d = fnG(d, a, b, c, M[10], 38016083, 9);
  c = fnG(c, d, a, b, M[15], 3634488961, 14);
  b = fnG(b, c, d, a, M[4], 3889429448, 20);
  a = fnG(a, b, c, d, M[9], 568446438, 5);
  d = fnG(d, a, b, c, M[14], 3275163606, 9);
  c = fnG(c, d, a, b, M[3], 4107603335, 14);
  b = fnG(b, c, d, a, M[8], 1163531501, 20);
  a = fnG(a, b, c, d, M[13], 2850285829, 5);
  d = fnG(d, a, b, c, M[2], 4243563512, 9);
  c = fnG(c, d, a, b, M[7], 1735328473, 14);
  b = fnG(b, c, d, a, M[12], 2368359562, 20);
  a = fnH(a, b, c, d, M[5], 4294588738, 4);
  d = fnH(d, a, b, c, M[8], 2272392833, 11);
  c = fnH(c, d, a, b, M[11], 1839030562, 16);
  b = fnH(b, c, d, a, M[14], 4259657740, 23);
  a = fnH(a, b, c, d, M[1], 2763975236, 4);
  d = fnH(d, a, b, c, M[4], 1272893353, 11);
  c = fnH(c, d, a, b, M[7], 4139469664, 16);
  b = fnH(b, c, d, a, M[10], 3200236656, 23);
  a = fnH(a, b, c, d, M[13], 681279174, 4);
  d = fnH(d, a, b, c, M[0], 3936430074, 11);
  c = fnH(c, d, a, b, M[3], 3572445317, 16);
  b = fnH(b, c, d, a, M[6], 76029189, 23);
  a = fnH(a, b, c, d, M[9], 3654602809, 4);
  d = fnH(d, a, b, c, M[12], 3873151461, 11);
  c = fnH(c, d, a, b, M[15], 530742520, 16);
  b = fnH(b, c, d, a, M[2], 3299628645, 23);
  a = fnI(a, b, c, d, M[0], 4096336452, 6);
  d = fnI(d, a, b, c, M[7], 1126891415, 10);
  c = fnI(c, d, a, b, M[14], 2878612391, 15);
  b = fnI(b, c, d, a, M[5], 4237533241, 21);
  a = fnI(a, b, c, d, M[12], 1700485571, 6);
  d = fnI(d, a, b, c, M[3], 2399980690, 10);
  c = fnI(c, d, a, b, M[10], 4293915773, 15);
  b = fnI(b, c, d, a, M[1], 2240044497, 21);
  a = fnI(a, b, c, d, M[8], 1873313359, 6);
  d = fnI(d, a, b, c, M[15], 4264355552, 10);
  c = fnI(c, d, a, b, M[6], 2734768916, 15);
  b = fnI(b, c, d, a, M[13], 1309151649, 21);
  a = fnI(a, b, c, d, M[4], 4149444226, 6);
  d = fnI(d, a, b, c, M[11], 3174756917, 10);
  c = fnI(c, d, a, b, M[2], 718787259, 15);
  b = fnI(b, c, d, a, M[9], 3951481745, 21);
  this._a = this._a + a | 0;
  this._b = this._b + b | 0;
  this._c = this._c + c | 0;
  this._d = this._d + d | 0;
};
MD5$3.prototype._digest = function() {
  this._block[this._blockOffset++] = 128;
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64);
    this._update();
    this._blockOffset = 0;
  }
  this._block.fill(0, this._blockOffset, 56);
  this._block.writeUInt32LE(this._length[0], 56);
  this._block.writeUInt32LE(this._length[1], 60);
  this._update();
  var buffer2 = Buffer$C.allocUnsafe(16);
  buffer2.writeInt32LE(this._a, 0);
  buffer2.writeInt32LE(this._b, 4);
  buffer2.writeInt32LE(this._c, 8);
  buffer2.writeInt32LE(this._d, 12);
  return buffer2;
};
function rotl$1(x, n) {
  return x << n | x >>> 32 - n;
}
function fnF(a, b, c, d, m, k, s2) {
  return rotl$1(a + (b & c | ~b & d) + m + k | 0, s2) + b | 0;
}
function fnG(a, b, c, d, m, k, s2) {
  return rotl$1(a + (b & d | c & ~d) + m + k | 0, s2) + b | 0;
}
function fnH(a, b, c, d, m, k, s2) {
  return rotl$1(a + (b ^ c ^ d) + m + k | 0, s2) + b | 0;
}
function fnI(a, b, c, d, m, k, s2) {
  return rotl$1(a + (c ^ (b | ~d)) + m + k | 0, s2) + b | 0;
}
var md5_js = MD5$3;
var Buffer$B = buffer$3.Buffer;
var inherits$t = requireInherits_browser();
var HashBase = hashBase;
var ARRAY16 = new Array(16);
var zl = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  7,
  4,
  13,
  1,
  10,
  6,
  15,
  3,
  12,
  0,
  9,
  5,
  2,
  14,
  11,
  8,
  3,
  10,
  14,
  4,
  9,
  15,
  8,
  1,
  2,
  7,
  0,
  6,
  13,
  11,
  5,
  12,
  1,
  9,
  11,
  10,
  0,
  8,
  12,
  4,
  13,
  3,
  7,
  15,
  14,
  5,
  6,
  2,
  4,
  0,
  5,
  9,
  7,
  12,
  2,
  10,
  14,
  1,
  3,
  8,
  11,
  6,
  15,
  13
];
var zr = [
  5,
  14,
  7,
  0,
  9,
  2,
  11,
  4,
  13,
  6,
  15,
  8,
  1,
  10,
  3,
  12,
  6,
  11,
  3,
  7,
  0,
  13,
  5,
  10,
  14,
  15,
  8,
  12,
  4,
  9,
  1,
  2,
  15,
  5,
  1,
  3,
  7,
  14,
  6,
  9,
  11,
  8,
  12,
  2,
  10,
  0,
  4,
  13,
  8,
  6,
  4,
  1,
  3,
  11,
  15,
  0,
  5,
  12,
  2,
  13,
  9,
  7,
  10,
  14,
  12,
  15,
  10,
  4,
  1,
  5,
  8,
  7,
  6,
  2,
  13,
  14,
  0,
  3,
  9,
  11
];
var sl = [
  11,
  14,
  15,
  12,
  5,
  8,
  7,
  9,
  11,
  13,
  14,
  15,
  6,
  7,
  9,
  8,
  7,
  6,
  8,
  13,
  11,
  9,
  7,
  15,
  7,
  12,
  15,
  9,
  11,
  7,
  13,
  12,
  11,
  13,
  6,
  7,
  14,
  9,
  13,
  15,
  14,
  8,
  13,
  6,
  5,
  12,
  7,
  5,
  11,
  12,
  14,
  15,
  14,
  15,
  9,
  8,
  9,
  14,
  5,
  6,
  8,
  6,
  5,
  12,
  9,
  15,
  5,
  11,
  6,
  8,
  13,
  12,
  5,
  12,
  13,
  14,
  11,
  8,
  5,
  6
];
var sr = [
  8,
  9,
  9,
  11,
  13,
  15,
  15,
  5,
  7,
  7,
  8,
  11,
  14,
  14,
  12,
  6,
  9,
  13,
  15,
  7,
  12,
  8,
  9,
  11,
  7,
  7,
  12,
  7,
  6,
  15,
  13,
  11,
  9,
  7,
  15,
  11,
  8,
  6,
  6,
  14,
  12,
  13,
  5,
  14,
  13,
  13,
  7,
  5,
  15,
  5,
  8,
  11,
  14,
  14,
  6,
  14,
  6,
  9,
  12,
  9,
  12,
  5,
  15,
  8,
  8,
  5,
  12,
  9,
  12,
  5,
  14,
  6,
  8,
  13,
  6,
  5,
  15,
  13,
  11,
  11
];
var hl = [0, 1518500249, 1859775393, 2400959708, 2840853838];
var hr = [1352829926, 1548603684, 1836072691, 2053994217, 0];
function RIPEMD160$4() {
  HashBase.call(this, 64);
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
}
inherits$t(RIPEMD160$4, HashBase);
RIPEMD160$4.prototype._update = function() {
  var words2 = ARRAY16;
  for (var j = 0; j < 16; ++j)
    words2[j] = this._block.readInt32LE(j * 4);
  var al = this._a | 0;
  var bl = this._b | 0;
  var cl = this._c | 0;
  var dl = this._d | 0;
  var el = this._e | 0;
  var ar2 = this._a | 0;
  var br = this._b | 0;
  var cr = this._c | 0;
  var dr = this._d | 0;
  var er = this._e | 0;
  for (var i = 0; i < 80; i += 1) {
    var tl;
    var tr;
    if (i < 16) {
      tl = fn1(al, bl, cl, dl, el, words2[zl[i]], hl[0], sl[i]);
      tr = fn5(ar2, br, cr, dr, er, words2[zr[i]], hr[0], sr[i]);
    } else if (i < 32) {
      tl = fn2(al, bl, cl, dl, el, words2[zl[i]], hl[1], sl[i]);
      tr = fn4(ar2, br, cr, dr, er, words2[zr[i]], hr[1], sr[i]);
    } else if (i < 48) {
      tl = fn3(al, bl, cl, dl, el, words2[zl[i]], hl[2], sl[i]);
      tr = fn3(ar2, br, cr, dr, er, words2[zr[i]], hr[2], sr[i]);
    } else if (i < 64) {
      tl = fn4(al, bl, cl, dl, el, words2[zl[i]], hl[3], sl[i]);
      tr = fn2(ar2, br, cr, dr, er, words2[zr[i]], hr[3], sr[i]);
    } else {
      tl = fn5(al, bl, cl, dl, el, words2[zl[i]], hl[4], sl[i]);
      tr = fn1(ar2, br, cr, dr, er, words2[zr[i]], hr[4], sr[i]);
    }
    al = el;
    el = dl;
    dl = rotl(cl, 10);
    cl = bl;
    bl = tl;
    ar2 = er;
    er = dr;
    dr = rotl(cr, 10);
    cr = br;
    br = tr;
  }
  var t = this._b + cl + dr | 0;
  this._b = this._c + dl + er | 0;
  this._c = this._d + el + ar2 | 0;
  this._d = this._e + al + br | 0;
  this._e = this._a + bl + cr | 0;
  this._a = t;
};
RIPEMD160$4.prototype._digest = function() {
  this._block[this._blockOffset++] = 128;
  if (this._blockOffset > 56) {
    this._block.fill(0, this._blockOffset, 64);
    this._update();
    this._blockOffset = 0;
  }
  this._block.fill(0, this._blockOffset, 56);
  this._block.writeUInt32LE(this._length[0], 56);
  this._block.writeUInt32LE(this._length[1], 60);
  this._update();
  var buffer2 = Buffer$B.alloc ? Buffer$B.alloc(20) : new Buffer$B(20);
  buffer2.writeInt32LE(this._a, 0);
  buffer2.writeInt32LE(this._b, 4);
  buffer2.writeInt32LE(this._c, 8);
  buffer2.writeInt32LE(this._d, 12);
  buffer2.writeInt32LE(this._e, 16);
  return buffer2;
};
function rotl(x, n) {
  return x << n | x >>> 32 - n;
}
function fn1(a, b, c, d, e, m, k, s2) {
  return rotl(a + (b ^ c ^ d) + m + k | 0, s2) + e | 0;
}
function fn2(a, b, c, d, e, m, k, s2) {
  return rotl(a + (b & c | ~b & d) + m + k | 0, s2) + e | 0;
}
function fn3(a, b, c, d, e, m, k, s2) {
  return rotl(a + ((b | ~c) ^ d) + m + k | 0, s2) + e | 0;
}
function fn4(a, b, c, d, e, m, k, s2) {
  return rotl(a + (b & d | c & ~d) + m + k | 0, s2) + e | 0;
}
function fn5(a, b, c, d, e, m, k, s2) {
  return rotl(a + (b ^ (c | ~d)) + m + k | 0, s2) + e | 0;
}
var ripemd160$1 = RIPEMD160$4;
var sha_js = { exports: {} };
var Buffer$A = safeBuffer$1.exports.Buffer;
function Hash$8(blockSize2, finalSize) {
  this._block = Buffer$A.alloc(blockSize2);
  this._finalSize = finalSize;
  this._blockSize = blockSize2;
  this._len = 0;
}
Hash$8.prototype.update = function(data2, enc) {
  if (typeof data2 === "string") {
    enc = enc || "utf8";
    data2 = Buffer$A.from(data2, enc);
  }
  var block = this._block;
  var blockSize2 = this._blockSize;
  var length2 = data2.length;
  var accum = this._len;
  for (var offset = 0; offset < length2; ) {
    var assigned = accum % blockSize2;
    var remainder = Math.min(length2 - offset, blockSize2 - assigned);
    for (var i = 0; i < remainder; i++) {
      block[assigned + i] = data2[offset + i];
    }
    accum += remainder;
    offset += remainder;
    if (accum % blockSize2 === 0) {
      this._update(block);
    }
  }
  this._len += length2;
  return this;
};
Hash$8.prototype.digest = function(enc) {
  var rem = this._len % this._blockSize;
  this._block[rem] = 128;
  this._block.fill(0, rem + 1);
  if (rem >= this._finalSize) {
    this._update(this._block);
    this._block.fill(0);
  }
  var bits = this._len * 8;
  if (bits <= 4294967295) {
    this._block.writeUInt32BE(bits, this._blockSize - 4);
  } else {
    var lowBits = (bits & 4294967295) >>> 0;
    var highBits = (bits - lowBits) / 4294967296;
    this._block.writeUInt32BE(highBits, this._blockSize - 8);
    this._block.writeUInt32BE(lowBits, this._blockSize - 4);
  }
  this._update(this._block);
  var hash3 = this._hash();
  return enc ? hash3.toString(enc) : hash3;
};
Hash$8.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var hash$3 = Hash$8;
var inherits$s = requireInherits_browser();
var Hash$7 = hash$3;
var Buffer$z = safeBuffer$1.exports.Buffer;
var K$4 = [
  1518500249,
  1859775393,
  2400959708 | 0,
  3395469782 | 0
];
var W$5 = new Array(80);
function Sha() {
  this.init();
  this._w = W$5;
  Hash$7.call(this, 64, 56);
}
inherits$s(Sha, Hash$7);
Sha.prototype.init = function() {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
function rotl5$1(num) {
  return num << 5 | num >>> 27;
}
function rotl30$1(num) {
  return num << 30 | num >>> 2;
}
function ft$1(s2, b, c, d) {
  if (s2 === 0)
    return b & c | ~b & d;
  if (s2 === 2)
    return b & c | b & d | c & d;
  return b ^ c ^ d;
}
Sha.prototype._update = function(M) {
  var W2 = this._w;
  var a = this._a | 0;
  var b = this._b | 0;
  var c = this._c | 0;
  var d = this._d | 0;
  var e = this._e | 0;
  for (var i = 0; i < 16; ++i)
    W2[i] = M.readInt32BE(i * 4);
  for (; i < 80; ++i)
    W2[i] = W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16];
  for (var j = 0; j < 80; ++j) {
    var s2 = ~~(j / 20);
    var t = rotl5$1(a) + ft$1(s2, b, c, d) + e + W2[j] + K$4[s2] | 0;
    e = d;
    d = c;
    c = rotl30$1(b);
    b = a;
    a = t;
  }
  this._a = a + this._a | 0;
  this._b = b + this._b | 0;
  this._c = c + this._c | 0;
  this._d = d + this._d | 0;
  this._e = e + this._e | 0;
};
Sha.prototype._hash = function() {
  var H = Buffer$z.allocUnsafe(20);
  H.writeInt32BE(this._a | 0, 0);
  H.writeInt32BE(this._b | 0, 4);
  H.writeInt32BE(this._c | 0, 8);
  H.writeInt32BE(this._d | 0, 12);
  H.writeInt32BE(this._e | 0, 16);
  return H;
};
var sha$5 = Sha;
var inherits$r = requireInherits_browser();
var Hash$6 = hash$3;
var Buffer$y = safeBuffer$1.exports.Buffer;
var K$3 = [
  1518500249,
  1859775393,
  2400959708 | 0,
  3395469782 | 0
];
var W$4 = new Array(80);
function Sha1() {
  this.init();
  this._w = W$4;
  Hash$6.call(this, 64, 56);
}
inherits$r(Sha1, Hash$6);
Sha1.prototype.init = function() {
  this._a = 1732584193;
  this._b = 4023233417;
  this._c = 2562383102;
  this._d = 271733878;
  this._e = 3285377520;
  return this;
};
function rotl1(num) {
  return num << 1 | num >>> 31;
}
function rotl5(num) {
  return num << 5 | num >>> 27;
}
function rotl30(num) {
  return num << 30 | num >>> 2;
}
function ft(s2, b, c, d) {
  if (s2 === 0)
    return b & c | ~b & d;
  if (s2 === 2)
    return b & c | b & d | c & d;
  return b ^ c ^ d;
}
Sha1.prototype._update = function(M) {
  var W2 = this._w;
  var a = this._a | 0;
  var b = this._b | 0;
  var c = this._c | 0;
  var d = this._d | 0;
  var e = this._e | 0;
  for (var i = 0; i < 16; ++i)
    W2[i] = M.readInt32BE(i * 4);
  for (; i < 80; ++i)
    W2[i] = rotl1(W2[i - 3] ^ W2[i - 8] ^ W2[i - 14] ^ W2[i - 16]);
  for (var j = 0; j < 80; ++j) {
    var s2 = ~~(j / 20);
    var t = rotl5(a) + ft(s2, b, c, d) + e + W2[j] + K$3[s2] | 0;
    e = d;
    d = c;
    c = rotl30(b);
    b = a;
    a = t;
  }
  this._a = a + this._a | 0;
  this._b = b + this._b | 0;
  this._c = c + this._c | 0;
  this._d = d + this._d | 0;
  this._e = e + this._e | 0;
};
Sha1.prototype._hash = function() {
  var H = Buffer$y.allocUnsafe(20);
  H.writeInt32BE(this._a | 0, 0);
  H.writeInt32BE(this._b | 0, 4);
  H.writeInt32BE(this._c | 0, 8);
  H.writeInt32BE(this._d | 0, 12);
  H.writeInt32BE(this._e | 0, 16);
  return H;
};
var sha1 = Sha1;
var inherits$q = requireInherits_browser();
var Hash$5 = hash$3;
var Buffer$x = safeBuffer$1.exports.Buffer;
var K$2 = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
];
var W$3 = new Array(64);
function Sha256$1() {
  this.init();
  this._w = W$3;
  Hash$5.call(this, 64, 56);
}
inherits$q(Sha256$1, Hash$5);
Sha256$1.prototype.init = function() {
  this._a = 1779033703;
  this._b = 3144134277;
  this._c = 1013904242;
  this._d = 2773480762;
  this._e = 1359893119;
  this._f = 2600822924;
  this._g = 528734635;
  this._h = 1541459225;
  return this;
};
function ch(x, y, z) {
  return z ^ x & (y ^ z);
}
function maj$1(x, y, z) {
  return x & y | z & (x | y);
}
function sigma0$1(x) {
  return (x >>> 2 | x << 30) ^ (x >>> 13 | x << 19) ^ (x >>> 22 | x << 10);
}
function sigma1$1(x) {
  return (x >>> 6 | x << 26) ^ (x >>> 11 | x << 21) ^ (x >>> 25 | x << 7);
}
function gamma0(x) {
  return (x >>> 7 | x << 25) ^ (x >>> 18 | x << 14) ^ x >>> 3;
}
function gamma1(x) {
  return (x >>> 17 | x << 15) ^ (x >>> 19 | x << 13) ^ x >>> 10;
}
Sha256$1.prototype._update = function(M) {
  var W2 = this._w;
  var a = this._a | 0;
  var b = this._b | 0;
  var c = this._c | 0;
  var d = this._d | 0;
  var e = this._e | 0;
  var f2 = this._f | 0;
  var g = this._g | 0;
  var h = this._h | 0;
  for (var i = 0; i < 16; ++i)
    W2[i] = M.readInt32BE(i * 4);
  for (; i < 64; ++i)
    W2[i] = gamma1(W2[i - 2]) + W2[i - 7] + gamma0(W2[i - 15]) + W2[i - 16] | 0;
  for (var j = 0; j < 64; ++j) {
    var T1 = h + sigma1$1(e) + ch(e, f2, g) + K$2[j] + W2[j] | 0;
    var T2 = sigma0$1(a) + maj$1(a, b, c) | 0;
    h = g;
    g = f2;
    f2 = e;
    e = d + T1 | 0;
    d = c;
    c = b;
    b = a;
    a = T1 + T2 | 0;
  }
  this._a = a + this._a | 0;
  this._b = b + this._b | 0;
  this._c = c + this._c | 0;
  this._d = d + this._d | 0;
  this._e = e + this._e | 0;
  this._f = f2 + this._f | 0;
  this._g = g + this._g | 0;
  this._h = h + this._h | 0;
};
Sha256$1.prototype._hash = function() {
  var H = Buffer$x.allocUnsafe(32);
  H.writeInt32BE(this._a, 0);
  H.writeInt32BE(this._b, 4);
  H.writeInt32BE(this._c, 8);
  H.writeInt32BE(this._d, 12);
  H.writeInt32BE(this._e, 16);
  H.writeInt32BE(this._f, 20);
  H.writeInt32BE(this._g, 24);
  H.writeInt32BE(this._h, 28);
  return H;
};
var sha256$5 = Sha256$1;
var inherits$p = requireInherits_browser();
var Sha256 = sha256$5;
var Hash$4 = hash$3;
var Buffer$w = safeBuffer$1.exports.Buffer;
var W$2 = new Array(64);
function Sha224() {
  this.init();
  this._w = W$2;
  Hash$4.call(this, 64, 56);
}
inherits$p(Sha224, Sha256);
Sha224.prototype.init = function() {
  this._a = 3238371032;
  this._b = 914150663;
  this._c = 812702999;
  this._d = 4144912697;
  this._e = 4290775857;
  this._f = 1750603025;
  this._g = 1694076839;
  this._h = 3204075428;
  return this;
};
Sha224.prototype._hash = function() {
  var H = Buffer$w.allocUnsafe(28);
  H.writeInt32BE(this._a, 0);
  H.writeInt32BE(this._b, 4);
  H.writeInt32BE(this._c, 8);
  H.writeInt32BE(this._d, 12);
  H.writeInt32BE(this._e, 16);
  H.writeInt32BE(this._f, 20);
  H.writeInt32BE(this._g, 24);
  return H;
};
var sha224$1 = Sha224;
var inherits$o = requireInherits_browser();
var Hash$3 = hash$3;
var Buffer$v = safeBuffer$1.exports.Buffer;
var K$1 = [
  1116352408,
  3609767458,
  1899447441,
  602891725,
  3049323471,
  3964484399,
  3921009573,
  2173295548,
  961987163,
  4081628472,
  1508970993,
  3053834265,
  2453635748,
  2937671579,
  2870763221,
  3664609560,
  3624381080,
  2734883394,
  310598401,
  1164996542,
  607225278,
  1323610764,
  1426881987,
  3590304994,
  1925078388,
  4068182383,
  2162078206,
  991336113,
  2614888103,
  633803317,
  3248222580,
  3479774868,
  3835390401,
  2666613458,
  4022224774,
  944711139,
  264347078,
  2341262773,
  604807628,
  2007800933,
  770255983,
  1495990901,
  1249150122,
  1856431235,
  1555081692,
  3175218132,
  1996064986,
  2198950837,
  2554220882,
  3999719339,
  2821834349,
  766784016,
  2952996808,
  2566594879,
  3210313671,
  3203337956,
  3336571891,
  1034457026,
  3584528711,
  2466948901,
  113926993,
  3758326383,
  338241895,
  168717936,
  666307205,
  1188179964,
  773529912,
  1546045734,
  1294757372,
  1522805485,
  1396182291,
  2643833823,
  1695183700,
  2343527390,
  1986661051,
  1014477480,
  2177026350,
  1206759142,
  2456956037,
  344077627,
  2730485921,
  1290863460,
  2820302411,
  3158454273,
  3259730800,
  3505952657,
  3345764771,
  106217008,
  3516065817,
  3606008344,
  3600352804,
  1432725776,
  4094571909,
  1467031594,
  275423344,
  851169720,
  430227734,
  3100823752,
  506948616,
  1363258195,
  659060556,
  3750685593,
  883997877,
  3785050280,
  958139571,
  3318307427,
  1322822218,
  3812723403,
  1537002063,
  2003034995,
  1747873779,
  3602036899,
  1955562222,
  1575990012,
  2024104815,
  1125592928,
  2227730452,
  2716904306,
  2361852424,
  442776044,
  2428436474,
  593698344,
  2756734187,
  3733110249,
  3204031479,
  2999351573,
  3329325298,
  3815920427,
  3391569614,
  3928383900,
  3515267271,
  566280711,
  3940187606,
  3454069534,
  4118630271,
  4000239992,
  116418474,
  1914138554,
  174292421,
  2731055270,
  289380356,
  3203993006,
  460393269,
  320620315,
  685471733,
  587496836,
  852142971,
  1086792851,
  1017036298,
  365543100,
  1126000580,
  2618297676,
  1288033470,
  3409855158,
  1501505948,
  4234509866,
  1607167915,
  987167468,
  1816402316,
  1246189591
];
var W$1 = new Array(160);
function Sha512() {
  this.init();
  this._w = W$1;
  Hash$3.call(this, 128, 112);
}
inherits$o(Sha512, Hash$3);
Sha512.prototype.init = function() {
  this._ah = 1779033703;
  this._bh = 3144134277;
  this._ch = 1013904242;
  this._dh = 2773480762;
  this._eh = 1359893119;
  this._fh = 2600822924;
  this._gh = 528734635;
  this._hh = 1541459225;
  this._al = 4089235720;
  this._bl = 2227873595;
  this._cl = 4271175723;
  this._dl = 1595750129;
  this._el = 2917565137;
  this._fl = 725511199;
  this._gl = 4215389547;
  this._hl = 327033209;
  return this;
};
function Ch(x, y, z) {
  return z ^ x & (y ^ z);
}
function maj(x, y, z) {
  return x & y | z & (x | y);
}
function sigma0(x, xl) {
  return (x >>> 28 | xl << 4) ^ (xl >>> 2 | x << 30) ^ (xl >>> 7 | x << 25);
}
function sigma1(x, xl) {
  return (x >>> 14 | xl << 18) ^ (x >>> 18 | xl << 14) ^ (xl >>> 9 | x << 23);
}
function Gamma0(x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ x >>> 7;
}
function Gamma0l(x, xl) {
  return (x >>> 1 | xl << 31) ^ (x >>> 8 | xl << 24) ^ (x >>> 7 | xl << 25);
}
function Gamma1(x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ x >>> 6;
}
function Gamma1l(x, xl) {
  return (x >>> 19 | xl << 13) ^ (xl >>> 29 | x << 3) ^ (x >>> 6 | xl << 26);
}
function getCarry(a, b) {
  return a >>> 0 < b >>> 0 ? 1 : 0;
}
Sha512.prototype._update = function(M) {
  var W2 = this._w;
  var ah = this._ah | 0;
  var bh = this._bh | 0;
  var ch2 = this._ch | 0;
  var dh2 = this._dh | 0;
  var eh = this._eh | 0;
  var fh = this._fh | 0;
  var gh = this._gh | 0;
  var hh = this._hh | 0;
  var al = this._al | 0;
  var bl = this._bl | 0;
  var cl = this._cl | 0;
  var dl = this._dl | 0;
  var el = this._el | 0;
  var fl = this._fl | 0;
  var gl = this._gl | 0;
  var hl2 = this._hl | 0;
  for (var i = 0; i < 32; i += 2) {
    W2[i] = M.readInt32BE(i * 4);
    W2[i + 1] = M.readInt32BE(i * 4 + 4);
  }
  for (; i < 160; i += 2) {
    var xh = W2[i - 15 * 2];
    var xl = W2[i - 15 * 2 + 1];
    var gamma02 = Gamma0(xh, xl);
    var gamma0l = Gamma0l(xl, xh);
    xh = W2[i - 2 * 2];
    xl = W2[i - 2 * 2 + 1];
    var gamma12 = Gamma1(xh, xl);
    var gamma1l = Gamma1l(xl, xh);
    var Wi7h = W2[i - 7 * 2];
    var Wi7l = W2[i - 7 * 2 + 1];
    var Wi16h = W2[i - 16 * 2];
    var Wi16l = W2[i - 16 * 2 + 1];
    var Wil = gamma0l + Wi7l | 0;
    var Wih = gamma02 + Wi7h + getCarry(Wil, gamma0l) | 0;
    Wil = Wil + gamma1l | 0;
    Wih = Wih + gamma12 + getCarry(Wil, gamma1l) | 0;
    Wil = Wil + Wi16l | 0;
    Wih = Wih + Wi16h + getCarry(Wil, Wi16l) | 0;
    W2[i] = Wih;
    W2[i + 1] = Wil;
  }
  for (var j = 0; j < 160; j += 2) {
    Wih = W2[j];
    Wil = W2[j + 1];
    var majh = maj(ah, bh, ch2);
    var majl = maj(al, bl, cl);
    var sigma0h = sigma0(ah, al);
    var sigma0l = sigma0(al, ah);
    var sigma1h = sigma1(eh, el);
    var sigma1l = sigma1(el, eh);
    var Kih = K$1[j];
    var Kil = K$1[j + 1];
    var chh = Ch(eh, fh, gh);
    var chl = Ch(el, fl, gl);
    var t1l = hl2 + sigma1l | 0;
    var t1h = hh + sigma1h + getCarry(t1l, hl2) | 0;
    t1l = t1l + chl | 0;
    t1h = t1h + chh + getCarry(t1l, chl) | 0;
    t1l = t1l + Kil | 0;
    t1h = t1h + Kih + getCarry(t1l, Kil) | 0;
    t1l = t1l + Wil | 0;
    t1h = t1h + Wih + getCarry(t1l, Wil) | 0;
    var t2l = sigma0l + majl | 0;
    var t2h = sigma0h + majh + getCarry(t2l, sigma0l) | 0;
    hh = gh;
    hl2 = gl;
    gh = fh;
    gl = fl;
    fh = eh;
    fl = el;
    el = dl + t1l | 0;
    eh = dh2 + t1h + getCarry(el, dl) | 0;
    dh2 = ch2;
    dl = cl;
    ch2 = bh;
    cl = bl;
    bh = ah;
    bl = al;
    al = t1l + t2l | 0;
    ah = t1h + t2h + getCarry(al, t1l) | 0;
  }
  this._al = this._al + al | 0;
  this._bl = this._bl + bl | 0;
  this._cl = this._cl + cl | 0;
  this._dl = this._dl + dl | 0;
  this._el = this._el + el | 0;
  this._fl = this._fl + fl | 0;
  this._gl = this._gl + gl | 0;
  this._hl = this._hl + hl2 | 0;
  this._ah = this._ah + ah + getCarry(this._al, al) | 0;
  this._bh = this._bh + bh + getCarry(this._bl, bl) | 0;
  this._ch = this._ch + ch2 + getCarry(this._cl, cl) | 0;
  this._dh = this._dh + dh2 + getCarry(this._dl, dl) | 0;
  this._eh = this._eh + eh + getCarry(this._el, el) | 0;
  this._fh = this._fh + fh + getCarry(this._fl, fl) | 0;
  this._gh = this._gh + gh + getCarry(this._gl, gl) | 0;
  this._hh = this._hh + hh + getCarry(this._hl, hl2) | 0;
};
Sha512.prototype._hash = function() {
  var H = Buffer$v.allocUnsafe(64);
  function writeInt64BE(h, l, offset) {
    H.writeInt32BE(h, offset);
    H.writeInt32BE(l, offset + 4);
  }
  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);
  writeInt64BE(this._gh, this._gl, 48);
  writeInt64BE(this._hh, this._hl, 56);
  return H;
};
var sha512$4 = Sha512;
var inherits$n = requireInherits_browser();
var SHA512$2 = sha512$4;
var Hash$2 = hash$3;
var Buffer$u = safeBuffer$1.exports.Buffer;
var W = new Array(160);
function Sha384() {
  this.init();
  this._w = W;
  Hash$2.call(this, 128, 112);
}
inherits$n(Sha384, SHA512$2);
Sha384.prototype.init = function() {
  this._ah = 3418070365;
  this._bh = 1654270250;
  this._ch = 2438529370;
  this._dh = 355462360;
  this._eh = 1731405415;
  this._fh = 2394180231;
  this._gh = 3675008525;
  this._hh = 1203062813;
  this._al = 3238371032;
  this._bl = 914150663;
  this._cl = 812702999;
  this._dl = 4144912697;
  this._el = 4290775857;
  this._fl = 1750603025;
  this._gl = 1694076839;
  this._hl = 3204075428;
  return this;
};
Sha384.prototype._hash = function() {
  var H = Buffer$u.allocUnsafe(48);
  function writeInt64BE(h, l, offset) {
    H.writeInt32BE(h, offset);
    H.writeInt32BE(l, offset + 4);
  }
  writeInt64BE(this._ah, this._al, 0);
  writeInt64BE(this._bh, this._bl, 8);
  writeInt64BE(this._ch, this._cl, 16);
  writeInt64BE(this._dh, this._dl, 24);
  writeInt64BE(this._eh, this._el, 32);
  writeInt64BE(this._fh, this._fl, 40);
  return H;
};
var sha384$1 = Sha384;
var exports = sha_js.exports = function SHA(algorithm) {
  algorithm = algorithm.toLowerCase();
  var Algorithm = exports[algorithm];
  if (!Algorithm)
    throw new Error(algorithm + " is not supported (we accept pull requests)");
  return new Algorithm();
};
exports.sha = sha$5;
exports.sha1 = sha1;
exports.sha224 = sha224$1;
exports.sha256 = sha256$5;
exports.sha384 = sha384$1;
exports.sha512 = sha512$4;
var streamBrowserify = Stream;
var EE = events$1.exports.EventEmitter;
var inherits$m = requireInherits_browser();
inherits$m(Stream, EE);
Stream.Readable = require_stream_readable();
Stream.Writable = require_stream_writable();
Stream.Duplex = require_stream_duplex();
Stream.Transform = _stream_transform;
Stream.PassThrough = _stream_passthrough;
Stream.finished = endOfStream;
Stream.pipeline = pipeline_1;
Stream.Stream = Stream;
function Stream() {
  EE.call(this);
}
Stream.prototype.pipe = function(dest, options) {
  var source = this;
  function ondata(chunk) {
    if (dest.writable) {
      if (false === dest.write(chunk) && source.pause) {
        source.pause();
      }
    }
  }
  source.on("data", ondata);
  function ondrain() {
    if (source.readable && source.resume) {
      source.resume();
    }
  }
  dest.on("drain", ondrain);
  if (!dest._isStdio && (!options || options.end !== false)) {
    source.on("end", onend);
    source.on("close", onclose);
  }
  var didOnEnd = false;
  function onend() {
    if (didOnEnd)
      return;
    didOnEnd = true;
    dest.end();
  }
  function onclose() {
    if (didOnEnd)
      return;
    didOnEnd = true;
    if (typeof dest.destroy === "function")
      dest.destroy();
  }
  function onerror(er) {
    cleanup();
    if (EE.listenerCount(this, "error") === 0) {
      throw er;
    }
  }
  source.on("error", onerror);
  dest.on("error", onerror);
  function cleanup() {
    source.removeListener("data", ondata);
    dest.removeListener("drain", ondrain);
    source.removeListener("end", onend);
    source.removeListener("close", onclose);
    source.removeListener("error", onerror);
    dest.removeListener("error", onerror);
    source.removeListener("end", cleanup);
    source.removeListener("close", cleanup);
    dest.removeListener("close", cleanup);
  }
  source.on("end", cleanup);
  source.on("close", cleanup);
  dest.on("close", cleanup);
  dest.emit("pipe", source);
  return dest;
};
var Buffer$t = safeBuffer$1.exports.Buffer;
var Transform$6 = streamBrowserify.Transform;
var StringDecoder = string_decoder.StringDecoder;
var inherits$l = requireInherits_browser();
function CipherBase$1(hashMode) {
  Transform$6.call(this);
  this.hashMode = typeof hashMode === "string";
  if (this.hashMode) {
    this[hashMode] = this._finalOrDigest;
  } else {
    this.final = this._finalOrDigest;
  }
  if (this._final) {
    this.__final = this._final;
    this._final = null;
  }
  this._decoder = null;
  this._encoding = null;
}
inherits$l(CipherBase$1, Transform$6);
CipherBase$1.prototype.update = function(data2, inputEnc, outputEnc) {
  if (typeof data2 === "string") {
    data2 = Buffer$t.from(data2, inputEnc);
  }
  var outData = this._update(data2);
  if (this.hashMode)
    return this;
  if (outputEnc) {
    outData = this._toString(outData, outputEnc);
  }
  return outData;
};
CipherBase$1.prototype.setAutoPadding = function() {
};
CipherBase$1.prototype.getAuthTag = function() {
  throw new Error("trying to get auth tag in unsupported state");
};
CipherBase$1.prototype.setAuthTag = function() {
  throw new Error("trying to set auth tag in unsupported state");
};
CipherBase$1.prototype.setAAD = function() {
  throw new Error("trying to set aad in unsupported state");
};
CipherBase$1.prototype._transform = function(data2, _, next) {
  var err;
  try {
    if (this.hashMode) {
      this._update(data2);
    } else {
      this.push(this._update(data2));
    }
  } catch (e) {
    err = e;
  } finally {
    next(err);
  }
};
CipherBase$1.prototype._flush = function(done2) {
  var err;
  try {
    this.push(this.__final());
  } catch (e) {
    err = e;
  }
  done2(err);
};
CipherBase$1.prototype._finalOrDigest = function(outputEnc) {
  var outData = this.__final() || Buffer$t.alloc(0);
  if (outputEnc) {
    outData = this._toString(outData, outputEnc, true);
  }
  return outData;
};
CipherBase$1.prototype._toString = function(value, enc, fin) {
  if (!this._decoder) {
    this._decoder = new StringDecoder(enc);
    this._encoding = enc;
  }
  if (this._encoding !== enc)
    throw new Error("can't switch encodings");
  var out = this._decoder.write(value);
  if (fin) {
    out += this._decoder.end();
  }
  return out;
};
var cipherBase = CipherBase$1;
var inherits$k = requireInherits_browser();
var MD5$2 = md5_js;
var RIPEMD160$3 = ripemd160$1;
var sha$4 = sha_js.exports;
var Base$5 = cipherBase;
function Hash$1(hash3) {
  Base$5.call(this, "digest");
  this._hash = hash3;
}
inherits$k(Hash$1, Base$5);
Hash$1.prototype._update = function(data2) {
  this._hash.update(data2);
};
Hash$1.prototype._final = function() {
  return this._hash.digest();
};
var browser$c = function createHash(alg) {
  alg = alg.toLowerCase();
  if (alg === "md5")
    return new MD5$2();
  if (alg === "rmd160" || alg === "ripemd160")
    return new RIPEMD160$3();
  return new Hash$1(sha$4(alg));
};
var inherits$j = requireInherits_browser();
var Buffer$s = safeBuffer$1.exports.Buffer;
var Base$4 = cipherBase;
var ZEROS$2 = Buffer$s.alloc(128);
var blocksize = 64;
function Hmac$3(alg, key3) {
  Base$4.call(this, "digest");
  if (typeof key3 === "string") {
    key3 = Buffer$s.from(key3);
  }
  this._alg = alg;
  this._key = key3;
  if (key3.length > blocksize) {
    key3 = alg(key3);
  } else if (key3.length < blocksize) {
    key3 = Buffer$s.concat([key3, ZEROS$2], blocksize);
  }
  var ipad = this._ipad = Buffer$s.allocUnsafe(blocksize);
  var opad = this._opad = Buffer$s.allocUnsafe(blocksize);
  for (var i = 0; i < blocksize; i++) {
    ipad[i] = key3[i] ^ 54;
    opad[i] = key3[i] ^ 92;
  }
  this._hash = [ipad];
}
inherits$j(Hmac$3, Base$4);
Hmac$3.prototype._update = function(data2) {
  this._hash.push(data2);
};
Hmac$3.prototype._final = function() {
  var h = this._alg(Buffer$s.concat(this._hash));
  return this._alg(Buffer$s.concat([this._opad, h]));
};
var legacy = Hmac$3;
var MD5$1 = md5_js;
var md5$2 = function(buffer2) {
  return new MD5$1().update(buffer2).digest();
};
var inherits$i = requireInherits_browser();
var Legacy = legacy;
var Base$3 = cipherBase;
var Buffer$r = safeBuffer$1.exports.Buffer;
var md5$1 = md5$2;
var RIPEMD160$2 = ripemd160$1;
var sha$3 = sha_js.exports;
var ZEROS$1 = Buffer$r.alloc(128);
function Hmac$2(alg, key3) {
  Base$3.call(this, "digest");
  if (typeof key3 === "string") {
    key3 = Buffer$r.from(key3);
  }
  var blocksize2 = alg === "sha512" || alg === "sha384" ? 128 : 64;
  this._alg = alg;
  this._key = key3;
  if (key3.length > blocksize2) {
    var hash3 = alg === "rmd160" ? new RIPEMD160$2() : sha$3(alg);
    key3 = hash3.update(key3).digest();
  } else if (key3.length < blocksize2) {
    key3 = Buffer$r.concat([key3, ZEROS$1], blocksize2);
  }
  var ipad = this._ipad = Buffer$r.allocUnsafe(blocksize2);
  var opad = this._opad = Buffer$r.allocUnsafe(blocksize2);
  for (var i = 0; i < blocksize2; i++) {
    ipad[i] = key3[i] ^ 54;
    opad[i] = key3[i] ^ 92;
  }
  this._hash = alg === "rmd160" ? new RIPEMD160$2() : sha$3(alg);
  this._hash.update(ipad);
}
inherits$i(Hmac$2, Base$3);
Hmac$2.prototype._update = function(data2) {
  this._hash.update(data2);
};
Hmac$2.prototype._final = function() {
  var h = this._hash.digest();
  var hash3 = this._alg === "rmd160" ? new RIPEMD160$2() : sha$3(this._alg);
  return hash3.update(this._opad).update(h).digest();
};
var browser$b = function createHmac(alg, key3) {
  alg = alg.toLowerCase();
  if (alg === "rmd160" || alg === "ripemd160") {
    return new Hmac$2("rmd160", key3);
  }
  if (alg === "md5") {
    return new Legacy(md5$1, key3);
  }
  return new Hmac$2(alg, key3);
};
var algos = { exports: {} };
const sha224WithRSAEncryption = {
  sign: "rsa",
  hash: "sha224",
  id: "302d300d06096086480165030402040500041c"
};
const sha256WithRSAEncryption = {
  sign: "rsa",
  hash: "sha256",
  id: "3031300d060960864801650304020105000420"
};
const sha384WithRSAEncryption = {
  sign: "rsa",
  hash: "sha384",
  id: "3041300d060960864801650304020205000430"
};
const sha512WithRSAEncryption = {
  sign: "rsa",
  hash: "sha512",
  id: "3051300d060960864801650304020305000440"
};
const sha256$4 = {
  sign: "ecdsa",
  hash: "sha256",
  id: ""
};
const sha224 = {
  sign: "ecdsa",
  hash: "sha224",
  id: ""
};
const sha384 = {
  sign: "ecdsa",
  hash: "sha384",
  id: ""
};
const sha512$3 = {
  sign: "ecdsa",
  hash: "sha512",
  id: ""
};
const DSA = {
  sign: "dsa",
  hash: "sha1",
  id: ""
};
const ripemd160WithRSA = {
  sign: "rsa",
  hash: "rmd160",
  id: "3021300906052b2403020105000414"
};
const md5WithRSAEncryption = {
  sign: "rsa",
  hash: "md5",
  id: "3020300c06082a864886f70d020505000410"
};
const require$$6 = {
  sha224WithRSAEncryption,
  "RSA-SHA224": {
    sign: "ecdsa/rsa",
    hash: "sha224",
    id: "302d300d06096086480165030402040500041c"
  },
  sha256WithRSAEncryption,
  "RSA-SHA256": {
    sign: "ecdsa/rsa",
    hash: "sha256",
    id: "3031300d060960864801650304020105000420"
  },
  sha384WithRSAEncryption,
  "RSA-SHA384": {
    sign: "ecdsa/rsa",
    hash: "sha384",
    id: "3041300d060960864801650304020205000430"
  },
  sha512WithRSAEncryption,
  "RSA-SHA512": {
    sign: "ecdsa/rsa",
    hash: "sha512",
    id: "3051300d060960864801650304020305000440"
  },
  "RSA-SHA1": {
    sign: "rsa",
    hash: "sha1",
    id: "3021300906052b0e03021a05000414"
  },
  "ecdsa-with-SHA1": {
    sign: "ecdsa",
    hash: "sha1",
    id: ""
  },
  sha256: sha256$4,
  sha224,
  sha384,
  sha512: sha512$3,
  "DSA-SHA": {
    sign: "dsa",
    hash: "sha1",
    id: ""
  },
  "DSA-SHA1": {
    sign: "dsa",
    hash: "sha1",
    id: ""
  },
  DSA,
  "DSA-WITH-SHA224": {
    sign: "dsa",
    hash: "sha224",
    id: ""
  },
  "DSA-SHA224": {
    sign: "dsa",
    hash: "sha224",
    id: ""
  },
  "DSA-WITH-SHA256": {
    sign: "dsa",
    hash: "sha256",
    id: ""
  },
  "DSA-SHA256": {
    sign: "dsa",
    hash: "sha256",
    id: ""
  },
  "DSA-WITH-SHA384": {
    sign: "dsa",
    hash: "sha384",
    id: ""
  },
  "DSA-SHA384": {
    sign: "dsa",
    hash: "sha384",
    id: ""
  },
  "DSA-WITH-SHA512": {
    sign: "dsa",
    hash: "sha512",
    id: ""
  },
  "DSA-SHA512": {
    sign: "dsa",
    hash: "sha512",
    id: ""
  },
  "DSA-RIPEMD160": {
    sign: "dsa",
    hash: "rmd160",
    id: ""
  },
  ripemd160WithRSA,
  "RSA-RIPEMD160": {
    sign: "rsa",
    hash: "rmd160",
    id: "3021300906052b2403020105000414"
  },
  md5WithRSAEncryption,
  "RSA-MD5": {
    sign: "rsa",
    hash: "md5",
    id: "3020300c06082a864886f70d020505000410"
  }
};
(function(module) {
  module.exports = require$$6;
})(algos);
var browser$a = {};
var MAX_ALLOC = Math.pow(2, 30) - 1;
var precondition = function(iterations, keylen) {
  if (typeof iterations !== "number") {
    throw new TypeError("Iterations not a number");
  }
  if (iterations < 0) {
    throw new TypeError("Bad iterations");
  }
  if (typeof keylen !== "number") {
    throw new TypeError("Key length not a number");
  }
  if (keylen < 0 || keylen > MAX_ALLOC || keylen !== keylen) {
    throw new TypeError("Bad key length");
  }
};
var defaultEncoding$2;
if (globalThis.process && globalThis.process.browser) {
  defaultEncoding$2 = "utf-8";
} else if (globalThis.process && globalThis.process.version) {
  var pVersionMajor = parseInt(process.version.split(".")[0].slice(1), 10);
  defaultEncoding$2 = pVersionMajor >= 6 ? "utf-8" : "binary";
} else {
  defaultEncoding$2 = "utf-8";
}
var defaultEncoding_1 = defaultEncoding$2;
var Buffer$q = safeBuffer$1.exports.Buffer;
var toBuffer$3 = function(thing, encoding, name2) {
  if (Buffer$q.isBuffer(thing)) {
    return thing;
  } else if (typeof thing === "string") {
    return Buffer$q.from(thing, encoding);
  } else if (ArrayBuffer.isView(thing)) {
    return Buffer$q.from(thing.buffer);
  } else {
    throw new TypeError(name2 + " must be a string, a Buffer, a typed array or a DataView");
  }
};
var md5 = md5$2;
var RIPEMD160$1 = ripemd160$1;
var sha$2 = sha_js.exports;
var Buffer$p = safeBuffer$1.exports.Buffer;
var checkParameters$1 = precondition;
var defaultEncoding$1 = defaultEncoding_1;
var toBuffer$2 = toBuffer$3;
var ZEROS = Buffer$p.alloc(128);
var sizes = {
  md5: 16,
  sha1: 20,
  sha224: 28,
  sha256: 32,
  sha384: 48,
  sha512: 64,
  rmd160: 20,
  ripemd160: 20
};
function Hmac$1(alg, key3, saltLen) {
  var hash3 = getDigest(alg);
  var blocksize2 = alg === "sha512" || alg === "sha384" ? 128 : 64;
  if (key3.length > blocksize2) {
    key3 = hash3(key3);
  } else if (key3.length < blocksize2) {
    key3 = Buffer$p.concat([key3, ZEROS], blocksize2);
  }
  var ipad = Buffer$p.allocUnsafe(blocksize2 + sizes[alg]);
  var opad = Buffer$p.allocUnsafe(blocksize2 + sizes[alg]);
  for (var i = 0; i < blocksize2; i++) {
    ipad[i] = key3[i] ^ 54;
    opad[i] = key3[i] ^ 92;
  }
  var ipad1 = Buffer$p.allocUnsafe(blocksize2 + saltLen + 4);
  ipad.copy(ipad1, 0, 0, blocksize2);
  this.ipad1 = ipad1;
  this.ipad2 = ipad;
  this.opad = opad;
  this.alg = alg;
  this.blocksize = blocksize2;
  this.hash = hash3;
  this.size = sizes[alg];
}
Hmac$1.prototype.run = function(data2, ipad) {
  data2.copy(ipad, this.blocksize);
  var h = this.hash(ipad);
  h.copy(this.opad, this.blocksize);
  return this.hash(this.opad);
};
function getDigest(alg) {
  function shaFunc(data2) {
    return sha$2(alg).update(data2).digest();
  }
  function rmd160Func(data2) {
    return new RIPEMD160$1().update(data2).digest();
  }
  if (alg === "rmd160" || alg === "ripemd160")
    return rmd160Func;
  if (alg === "md5")
    return md5;
  return shaFunc;
}
function pbkdf2$2(password, salt, iterations, keylen, digest10) {
  checkParameters$1(iterations, keylen);
  password = toBuffer$2(password, defaultEncoding$1, "Password");
  salt = toBuffer$2(salt, defaultEncoding$1, "Salt");
  digest10 = digest10 || "sha1";
  var hmac4 = new Hmac$1(digest10, password, salt.length);
  var DK = Buffer$p.allocUnsafe(keylen);
  var block1 = Buffer$p.allocUnsafe(salt.length + 4);
  salt.copy(block1, 0, 0, salt.length);
  var destPos = 0;
  var hLen = sizes[digest10];
  var l = Math.ceil(keylen / hLen);
  for (var i = 1; i <= l; i++) {
    block1.writeUInt32BE(i, salt.length);
    var T = hmac4.run(block1, hmac4.ipad1);
    var U = T;
    for (var j = 1; j < iterations; j++) {
      U = hmac4.run(U, hmac4.ipad2);
      for (var k = 0; k < hLen; k++)
        T[k] ^= U[k];
    }
    T.copy(DK, destPos);
    destPos += hLen;
  }
  return DK;
}
var syncBrowser = pbkdf2$2;
var Buffer$o = safeBuffer$1.exports.Buffer;
var checkParameters = precondition;
var defaultEncoding = defaultEncoding_1;
var sync = syncBrowser;
var toBuffer$1 = toBuffer$3;
var ZERO_BUF;
var subtle = globalThis.crypto && globalThis.crypto.subtle;
var toBrowser = {
  sha: "SHA-1",
  "sha-1": "SHA-1",
  sha1: "SHA-1",
  sha256: "SHA-256",
  "sha-256": "SHA-256",
  sha384: "SHA-384",
  "sha-384": "SHA-384",
  "sha-512": "SHA-512",
  sha512: "SHA-512"
};
var checks = [];
function checkNative(algo) {
  if (globalThis.process && !globalThis.process.browser) {
    return Promise.resolve(false);
  }
  if (!subtle || !subtle.importKey || !subtle.deriveBits) {
    return Promise.resolve(false);
  }
  if (checks[algo] !== void 0) {
    return checks[algo];
  }
  ZERO_BUF = ZERO_BUF || Buffer$o.alloc(8);
  var prom = browserPbkdf2(ZERO_BUF, ZERO_BUF, 10, 128, algo).then(function() {
    return true;
  }).catch(function() {
    return false;
  });
  checks[algo] = prom;
  return prom;
}
var nextTick;
function getNextTick() {
  if (nextTick) {
    return nextTick;
  }
  if (globalThis.process && globalThis.process.nextTick) {
    nextTick = globalThis.process.nextTick;
  } else if (globalThis.queueMicrotask) {
    nextTick = globalThis.queueMicrotask;
  } else if (globalThis.setImmediate) {
    nextTick = globalThis.setImmediate;
  } else {
    nextTick = globalThis.setTimeout;
  }
  return nextTick;
}
function browserPbkdf2(password, salt, iterations, length2, algo) {
  return subtle.importKey(
    "raw",
    password,
    { name: "PBKDF2" },
    false,
    ["deriveBits"]
  ).then(function(key3) {
    return subtle.deriveBits({
      name: "PBKDF2",
      salt,
      iterations,
      hash: {
        name: algo
      }
    }, key3, length2 << 3);
  }).then(function(res) {
    return Buffer$o.from(res);
  });
}
function resolvePromise(promise, callback) {
  promise.then(function(out) {
    getNextTick()(function() {
      callback(null, out);
    });
  }, function(e) {
    getNextTick()(function() {
      callback(e);
    });
  });
}
var async = function(password, salt, iterations, keylen, digest10, callback) {
  if (typeof digest10 === "function") {
    callback = digest10;
    digest10 = void 0;
  }
  digest10 = digest10 || "sha1";
  var algo = toBrowser[digest10.toLowerCase()];
  if (!algo || typeof globalThis.Promise !== "function") {
    getNextTick()(function() {
      var out;
      try {
        out = sync(password, salt, iterations, keylen, digest10);
      } catch (e) {
        return callback(e);
      }
      callback(null, out);
    });
    return;
  }
  checkParameters(iterations, keylen);
  password = toBuffer$1(password, defaultEncoding, "Password");
  salt = toBuffer$1(salt, defaultEncoding, "Salt");
  if (typeof callback !== "function")
    throw new Error("No callback provided to pbkdf2");
  resolvePromise(checkNative(algo).then(function(resp) {
    if (resp)
      return browserPbkdf2(password, salt, iterations, keylen, algo);
    return sync(password, salt, iterations, keylen, digest10);
  }), callback);
};
browser$a.pbkdf2 = async;
browser$a.pbkdf2Sync = syncBrowser;
var browser$9 = {};
var des$2 = {};
var utils$D = {};
utils$D.readUInt32BE = function readUInt32BE(bytes, off) {
  var res = bytes[0 + off] << 24 | bytes[1 + off] << 16 | bytes[2 + off] << 8 | bytes[3 + off];
  return res >>> 0;
};
utils$D.writeUInt32BE = function writeUInt32BE(bytes, value, off) {
  bytes[0 + off] = value >>> 24;
  bytes[1 + off] = value >>> 16 & 255;
  bytes[2 + off] = value >>> 8 & 255;
  bytes[3 + off] = value & 255;
};
utils$D.ip = function ip(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;
  for (var i = 6; i >= 0; i -= 2) {
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= inR >>> j + i & 1;
    }
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= inL >>> j + i & 1;
    }
  }
  for (var i = 6; i >= 0; i -= 2) {
    for (var j = 1; j <= 25; j += 8) {
      outR <<= 1;
      outR |= inR >>> j + i & 1;
    }
    for (var j = 1; j <= 25; j += 8) {
      outR <<= 1;
      outR |= inL >>> j + i & 1;
    }
  }
  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};
utils$D.rip = function rip(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;
  for (var i = 0; i < 4; i++) {
    for (var j = 24; j >= 0; j -= 8) {
      outL <<= 1;
      outL |= inR >>> j + i & 1;
      outL <<= 1;
      outL |= inL >>> j + i & 1;
    }
  }
  for (var i = 4; i < 8; i++) {
    for (var j = 24; j >= 0; j -= 8) {
      outR <<= 1;
      outR |= inR >>> j + i & 1;
      outR <<= 1;
      outR |= inL >>> j + i & 1;
    }
  }
  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};
utils$D.pc1 = function pc1(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;
  for (var i = 7; i >= 5; i--) {
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= inR >> j + i & 1;
    }
    for (var j = 0; j <= 24; j += 8) {
      outL <<= 1;
      outL |= inL >> j + i & 1;
    }
  }
  for (var j = 0; j <= 24; j += 8) {
    outL <<= 1;
    outL |= inR >> j + i & 1;
  }
  for (var i = 1; i <= 3; i++) {
    for (var j = 0; j <= 24; j += 8) {
      outR <<= 1;
      outR |= inR >> j + i & 1;
    }
    for (var j = 0; j <= 24; j += 8) {
      outR <<= 1;
      outR |= inL >> j + i & 1;
    }
  }
  for (var j = 0; j <= 24; j += 8) {
    outR <<= 1;
    outR |= inL >> j + i & 1;
  }
  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};
utils$D.r28shl = function r28shl(num, shift) {
  return num << shift & 268435455 | num >>> 28 - shift;
};
var pc2table = [
  14,
  11,
  17,
  4,
  27,
  23,
  25,
  0,
  13,
  22,
  7,
  18,
  5,
  9,
  16,
  24,
  2,
  20,
  12,
  21,
  1,
  8,
  15,
  26,
  15,
  4,
  25,
  19,
  9,
  1,
  26,
  16,
  5,
  11,
  23,
  8,
  12,
  7,
  17,
  0,
  22,
  3,
  10,
  14,
  6,
  20,
  27,
  24
];
utils$D.pc2 = function pc2(inL, inR, out, off) {
  var outL = 0;
  var outR = 0;
  var len = pc2table.length >>> 1;
  for (var i = 0; i < len; i++) {
    outL <<= 1;
    outL |= inL >>> pc2table[i] & 1;
  }
  for (var i = len; i < pc2table.length; i++) {
    outR <<= 1;
    outR |= inR >>> pc2table[i] & 1;
  }
  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};
utils$D.expand = function expand(r2, out, off) {
  var outL = 0;
  var outR = 0;
  outL = (r2 & 1) << 5 | r2 >>> 27;
  for (var i = 23; i >= 15; i -= 4) {
    outL <<= 6;
    outL |= r2 >>> i & 63;
  }
  for (var i = 11; i >= 3; i -= 4) {
    outR |= r2 >>> i & 63;
    outR <<= 6;
  }
  outR |= (r2 & 31) << 1 | r2 >>> 31;
  out[off + 0] = outL >>> 0;
  out[off + 1] = outR >>> 0;
};
var sTable = [
  14,
  0,
  4,
  15,
  13,
  7,
  1,
  4,
  2,
  14,
  15,
  2,
  11,
  13,
  8,
  1,
  3,
  10,
  10,
  6,
  6,
  12,
  12,
  11,
  5,
  9,
  9,
  5,
  0,
  3,
  7,
  8,
  4,
  15,
  1,
  12,
  14,
  8,
  8,
  2,
  13,
  4,
  6,
  9,
  2,
  1,
  11,
  7,
  15,
  5,
  12,
  11,
  9,
  3,
  7,
  14,
  3,
  10,
  10,
  0,
  5,
  6,
  0,
  13,
  15,
  3,
  1,
  13,
  8,
  4,
  14,
  7,
  6,
  15,
  11,
  2,
  3,
  8,
  4,
  14,
  9,
  12,
  7,
  0,
  2,
  1,
  13,
  10,
  12,
  6,
  0,
  9,
  5,
  11,
  10,
  5,
  0,
  13,
  14,
  8,
  7,
  10,
  11,
  1,
  10,
  3,
  4,
  15,
  13,
  4,
  1,
  2,
  5,
  11,
  8,
  6,
  12,
  7,
  6,
  12,
  9,
  0,
  3,
  5,
  2,
  14,
  15,
  9,
  10,
  13,
  0,
  7,
  9,
  0,
  14,
  9,
  6,
  3,
  3,
  4,
  15,
  6,
  5,
  10,
  1,
  2,
  13,
  8,
  12,
  5,
  7,
  14,
  11,
  12,
  4,
  11,
  2,
  15,
  8,
  1,
  13,
  1,
  6,
  10,
  4,
  13,
  9,
  0,
  8,
  6,
  15,
  9,
  3,
  8,
  0,
  7,
  11,
  4,
  1,
  15,
  2,
  14,
  12,
  3,
  5,
  11,
  10,
  5,
  14,
  2,
  7,
  12,
  7,
  13,
  13,
  8,
  14,
  11,
  3,
  5,
  0,
  6,
  6,
  15,
  9,
  0,
  10,
  3,
  1,
  4,
  2,
  7,
  8,
  2,
  5,
  12,
  11,
  1,
  12,
  10,
  4,
  14,
  15,
  9,
  10,
  3,
  6,
  15,
  9,
  0,
  0,
  6,
  12,
  10,
  11,
  1,
  7,
  13,
  13,
  8,
  15,
  9,
  1,
  4,
  3,
  5,
  14,
  11,
  5,
  12,
  2,
  7,
  8,
  2,
  4,
  14,
  2,
  14,
  12,
  11,
  4,
  2,
  1,
  12,
  7,
  4,
  10,
  7,
  11,
  13,
  6,
  1,
  8,
  5,
  5,
  0,
  3,
  15,
  15,
  10,
  13,
  3,
  0,
  9,
  14,
  8,
  9,
  6,
  4,
  11,
  2,
  8,
  1,
  12,
  11,
  7,
  10,
  1,
  13,
  14,
  7,
  2,
  8,
  13,
  15,
  6,
  9,
  15,
  12,
  0,
  5,
  9,
  6,
  10,
  3,
  4,
  0,
  5,
  14,
  3,
  12,
  10,
  1,
  15,
  10,
  4,
  15,
  2,
  9,
  7,
  2,
  12,
  6,
  9,
  8,
  5,
  0,
  6,
  13,
  1,
  3,
  13,
  4,
  14,
  14,
  0,
  7,
  11,
  5,
  3,
  11,
  8,
  9,
  4,
  14,
  3,
  15,
  2,
  5,
  12,
  2,
  9,
  8,
  5,
  12,
  15,
  3,
  10,
  7,
  11,
  0,
  14,
  4,
  1,
  10,
  7,
  1,
  6,
  13,
  0,
  11,
  8,
  6,
  13,
  4,
  13,
  11,
  0,
  2,
  11,
  14,
  7,
  15,
  4,
  0,
  9,
  8,
  1,
  13,
  10,
  3,
  14,
  12,
  3,
  9,
  5,
  7,
  12,
  5,
  2,
  10,
  15,
  6,
  8,
  1,
  6,
  1,
  6,
  4,
  11,
  11,
  13,
  13,
  8,
  12,
  1,
  3,
  4,
  7,
  10,
  14,
  7,
  10,
  9,
  15,
  5,
  6,
  0,
  8,
  15,
  0,
  14,
  5,
  2,
  9,
  3,
  2,
  12,
  13,
  1,
  2,
  15,
  8,
  13,
  4,
  8,
  6,
  10,
  15,
  3,
  11,
  7,
  1,
  4,
  10,
  12,
  9,
  5,
  3,
  6,
  14,
  11,
  5,
  0,
  0,
  14,
  12,
  9,
  7,
  2,
  7,
  2,
  11,
  1,
  4,
  14,
  1,
  7,
  9,
  4,
  12,
  10,
  14,
  8,
  2,
  13,
  0,
  15,
  6,
  12,
  10,
  9,
  13,
  0,
  15,
  3,
  3,
  5,
  5,
  6,
  8,
  11
];
utils$D.substitute = function substitute(inL, inR) {
  var out = 0;
  for (var i = 0; i < 4; i++) {
    var b = inL >>> 18 - i * 6 & 63;
    var sb = sTable[i * 64 + b];
    out <<= 4;
    out |= sb;
  }
  for (var i = 0; i < 4; i++) {
    var b = inR >>> 18 - i * 6 & 63;
    var sb = sTable[4 * 64 + i * 64 + b];
    out <<= 4;
    out |= sb;
  }
  return out >>> 0;
};
var permuteTable = [
  16,
  25,
  12,
  11,
  3,
  20,
  4,
  15,
  31,
  17,
  9,
  6,
  27,
  14,
  1,
  22,
  30,
  24,
  8,
  18,
  0,
  5,
  29,
  23,
  13,
  19,
  2,
  26,
  10,
  21,
  28,
  7
];
utils$D.permute = function permute(num) {
  var out = 0;
  for (var i = 0; i < permuteTable.length; i++) {
    out <<= 1;
    out |= num >>> permuteTable[i] & 1;
  }
  return out >>> 0;
};
utils$D.padSplit = function padSplit(num, size, group) {
  var str = num.toString(2);
  while (str.length < size)
    str = "0" + str;
  var out = [];
  for (var i = 0; i < size; i += group)
    out.push(str.slice(i, i + group));
  return out.join(" ");
};
var minimalisticAssert$1 = assert$q;
function assert$q(val, msg) {
  if (!val)
    throw new Error(msg || "Assertion failed");
}
assert$q.equal = function assertEqual(l, r2, msg) {
  if (l != r2)
    throw new Error(msg || "Assertion failed: " + l + " != " + r2);
};
var assert$p = minimalisticAssert$1;
function Cipher$3(options) {
  this.options = options;
  this.type = this.options.type;
  this.blockSize = 8;
  this._init();
  this.buffer = new Array(this.blockSize);
  this.bufferOff = 0;
}
var cipher = Cipher$3;
Cipher$3.prototype._init = function _init() {
};
Cipher$3.prototype.update = function update(data2) {
  if (data2.length === 0)
    return [];
  if (this.type === "decrypt")
    return this._updateDecrypt(data2);
  else
    return this._updateEncrypt(data2);
};
Cipher$3.prototype._buffer = function _buffer(data2, off) {
  var min = Math.min(this.buffer.length - this.bufferOff, data2.length - off);
  for (var i = 0; i < min; i++)
    this.buffer[this.bufferOff + i] = data2[off + i];
  this.bufferOff += min;
  return min;
};
Cipher$3.prototype._flushBuffer = function _flushBuffer(out, off) {
  this._update(this.buffer, 0, out, off);
  this.bufferOff = 0;
  return this.blockSize;
};
Cipher$3.prototype._updateEncrypt = function _updateEncrypt(data2) {
  var inputOff = 0;
  var outputOff = 0;
  var count = (this.bufferOff + data2.length) / this.blockSize | 0;
  var out = new Array(count * this.blockSize);
  if (this.bufferOff !== 0) {
    inputOff += this._buffer(data2, inputOff);
    if (this.bufferOff === this.buffer.length)
      outputOff += this._flushBuffer(out, outputOff);
  }
  var max = data2.length - (data2.length - inputOff) % this.blockSize;
  for (; inputOff < max; inputOff += this.blockSize) {
    this._update(data2, inputOff, out, outputOff);
    outputOff += this.blockSize;
  }
  for (; inputOff < data2.length; inputOff++, this.bufferOff++)
    this.buffer[this.bufferOff] = data2[inputOff];
  return out;
};
Cipher$3.prototype._updateDecrypt = function _updateDecrypt(data2) {
  var inputOff = 0;
  var outputOff = 0;
  var count = Math.ceil((this.bufferOff + data2.length) / this.blockSize) - 1;
  var out = new Array(count * this.blockSize);
  for (; count > 0; count--) {
    inputOff += this._buffer(data2, inputOff);
    outputOff += this._flushBuffer(out, outputOff);
  }
  inputOff += this._buffer(data2, inputOff);
  return out;
};
Cipher$3.prototype.final = function final(buffer2) {
  var first;
  if (buffer2)
    first = this.update(buffer2);
  var last;
  if (this.type === "encrypt")
    last = this._finalEncrypt();
  else
    last = this._finalDecrypt();
  if (first)
    return first.concat(last);
  else
    return last;
};
Cipher$3.prototype._pad = function _pad(buffer2, off) {
  if (off === 0)
    return false;
  while (off < buffer2.length)
    buffer2[off++] = 0;
  return true;
};
Cipher$3.prototype._finalEncrypt = function _finalEncrypt() {
  if (!this._pad(this.buffer, this.bufferOff))
    return [];
  var out = new Array(this.blockSize);
  this._update(this.buffer, 0, out, 0);
  return out;
};
Cipher$3.prototype._unpad = function _unpad(buffer2) {
  return buffer2;
};
Cipher$3.prototype._finalDecrypt = function _finalDecrypt() {
  assert$p.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
  var out = new Array(this.blockSize);
  this._flushBuffer(out, 0);
  return this._unpad(out);
};
var assert$o = minimalisticAssert$1;
var inherits$h = requireInherits_browser();
var utils$C = utils$D;
var Cipher$2 = cipher;
function DESState() {
  this.tmp = new Array(2);
  this.keys = null;
}
function DES$3(options) {
  Cipher$2.call(this, options);
  var state2 = new DESState();
  this._desState = state2;
  this.deriveKeys(state2, options.key);
}
inherits$h(DES$3, Cipher$2);
var des$1 = DES$3;
DES$3.create = function create(options) {
  return new DES$3(options);
};
var shiftTable = [
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1
];
DES$3.prototype.deriveKeys = function deriveKeys(state2, key3) {
  state2.keys = new Array(16 * 2);
  assert$o.equal(key3.length, this.blockSize, "Invalid key length");
  var kL = utils$C.readUInt32BE(key3, 0);
  var kR = utils$C.readUInt32BE(key3, 4);
  utils$C.pc1(kL, kR, state2.tmp, 0);
  kL = state2.tmp[0];
  kR = state2.tmp[1];
  for (var i = 0; i < state2.keys.length; i += 2) {
    var shift = shiftTable[i >>> 1];
    kL = utils$C.r28shl(kL, shift);
    kR = utils$C.r28shl(kR, shift);
    utils$C.pc2(kL, kR, state2.keys, i);
  }
};
DES$3.prototype._update = function _update(inp, inOff, out, outOff) {
  var state2 = this._desState;
  var l = utils$C.readUInt32BE(inp, inOff);
  var r2 = utils$C.readUInt32BE(inp, inOff + 4);
  utils$C.ip(l, r2, state2.tmp, 0);
  l = state2.tmp[0];
  r2 = state2.tmp[1];
  if (this.type === "encrypt")
    this._encrypt(state2, l, r2, state2.tmp, 0);
  else
    this._decrypt(state2, l, r2, state2.tmp, 0);
  l = state2.tmp[0];
  r2 = state2.tmp[1];
  utils$C.writeUInt32BE(out, l, outOff);
  utils$C.writeUInt32BE(out, r2, outOff + 4);
};
DES$3.prototype._pad = function _pad2(buffer2, off) {
  var value = buffer2.length - off;
  for (var i = off; i < buffer2.length; i++)
    buffer2[i] = value;
  return true;
};
DES$3.prototype._unpad = function _unpad2(buffer2) {
  var pad3 = buffer2[buffer2.length - 1];
  for (var i = buffer2.length - pad3; i < buffer2.length; i++)
    assert$o.equal(buffer2[i], pad3);
  return buffer2.slice(0, buffer2.length - pad3);
};
DES$3.prototype._encrypt = function _encrypt(state2, lStart, rStart, out, off) {
  var l = lStart;
  var r2 = rStart;
  for (var i = 0; i < state2.keys.length; i += 2) {
    var keyL = state2.keys[i];
    var keyR = state2.keys[i + 1];
    utils$C.expand(r2, state2.tmp, 0);
    keyL ^= state2.tmp[0];
    keyR ^= state2.tmp[1];
    var s2 = utils$C.substitute(keyL, keyR);
    var f2 = utils$C.permute(s2);
    var t = r2;
    r2 = (l ^ f2) >>> 0;
    l = t;
  }
  utils$C.rip(r2, l, out, off);
};
DES$3.prototype._decrypt = function _decrypt(state2, lStart, rStart, out, off) {
  var l = rStart;
  var r2 = lStart;
  for (var i = state2.keys.length - 2; i >= 0; i -= 2) {
    var keyL = state2.keys[i];
    var keyR = state2.keys[i + 1];
    utils$C.expand(l, state2.tmp, 0);
    keyL ^= state2.tmp[0];
    keyR ^= state2.tmp[1];
    var s2 = utils$C.substitute(keyL, keyR);
    var f2 = utils$C.permute(s2);
    var t = l;
    l = (r2 ^ f2) >>> 0;
    r2 = t;
  }
  utils$C.rip(l, r2, out, off);
};
var cbc$1 = {};
var assert$n = minimalisticAssert$1;
var inherits$g = requireInherits_browser();
var proto = {};
function CBCState(iv) {
  assert$n.equal(iv.length, 8, "Invalid IV length");
  this.iv = new Array(8);
  for (var i = 0; i < this.iv.length; i++)
    this.iv[i] = iv[i];
}
function instantiate(Base2) {
  function CBC(options) {
    Base2.call(this, options);
    this._cbcInit();
  }
  inherits$g(CBC, Base2);
  var keys2 = Object.keys(proto);
  for (var i = 0; i < keys2.length; i++) {
    var key3 = keys2[i];
    CBC.prototype[key3] = proto[key3];
  }
  CBC.create = function create5(options) {
    return new CBC(options);
  };
  return CBC;
}
cbc$1.instantiate = instantiate;
proto._cbcInit = function _cbcInit() {
  var state2 = new CBCState(this.options.iv);
  this._cbcState = state2;
};
proto._update = function _update2(inp, inOff, out, outOff) {
  var state2 = this._cbcState;
  var superProto = this.constructor.super_.prototype;
  var iv = state2.iv;
  if (this.type === "encrypt") {
    for (var i = 0; i < this.blockSize; i++)
      iv[i] ^= inp[inOff + i];
    superProto._update.call(this, iv, 0, out, outOff);
    for (var i = 0; i < this.blockSize; i++)
      iv[i] = out[outOff + i];
  } else {
    superProto._update.call(this, inp, inOff, out, outOff);
    for (var i = 0; i < this.blockSize; i++)
      out[outOff + i] ^= iv[i];
    for (var i = 0; i < this.blockSize; i++)
      iv[i] = inp[inOff + i];
  }
};
var assert$m = minimalisticAssert$1;
var inherits$f = requireInherits_browser();
var Cipher$1 = cipher;
var DES$2 = des$1;
function EDEState(type, key3) {
  assert$m.equal(key3.length, 24, "Invalid key length");
  var k1 = key3.slice(0, 8);
  var k2 = key3.slice(8, 16);
  var k3 = key3.slice(16, 24);
  if (type === "encrypt") {
    this.ciphers = [
      DES$2.create({ type: "encrypt", key: k1 }),
      DES$2.create({ type: "decrypt", key: k2 }),
      DES$2.create({ type: "encrypt", key: k3 })
    ];
  } else {
    this.ciphers = [
      DES$2.create({ type: "decrypt", key: k3 }),
      DES$2.create({ type: "encrypt", key: k2 }),
      DES$2.create({ type: "decrypt", key: k1 })
    ];
  }
}
function EDE(options) {
  Cipher$1.call(this, options);
  var state2 = new EDEState(this.type, this.options.key);
  this._edeState = state2;
}
inherits$f(EDE, Cipher$1);
var ede = EDE;
EDE.create = function create2(options) {
  return new EDE(options);
};
EDE.prototype._update = function _update3(inp, inOff, out, outOff) {
  var state2 = this._edeState;
  state2.ciphers[0]._update(inp, inOff, out, outOff);
  state2.ciphers[1]._update(out, outOff, out, outOff);
  state2.ciphers[2]._update(out, outOff, out, outOff);
};
EDE.prototype._pad = DES$2.prototype._pad;
EDE.prototype._unpad = DES$2.prototype._unpad;
des$2.utils = utils$D;
des$2.Cipher = cipher;
des$2.DES = des$1;
des$2.CBC = cbc$1;
des$2.EDE = ede;
var CipherBase = cipherBase;
var des = des$2;
var inherits$e = requireInherits_browser();
var Buffer$n = safeBuffer$1.exports.Buffer;
var modes$3 = {
  "des-ede3-cbc": des.CBC.instantiate(des.EDE),
  "des-ede3": des.EDE,
  "des-ede-cbc": des.CBC.instantiate(des.EDE),
  "des-ede": des.EDE,
  "des-cbc": des.CBC.instantiate(des.DES),
  "des-ecb": des.DES
};
modes$3.des = modes$3["des-cbc"];
modes$3.des3 = modes$3["des-ede3-cbc"];
var browserifyDes = DES$1;
inherits$e(DES$1, CipherBase);
function DES$1(opts) {
  CipherBase.call(this);
  var modeName = opts.mode.toLowerCase();
  var mode = modes$3[modeName];
  var type;
  if (opts.decrypt) {
    type = "decrypt";
  } else {
    type = "encrypt";
  }
  var key3 = opts.key;
  if (!Buffer$n.isBuffer(key3)) {
    key3 = Buffer$n.from(key3);
  }
  if (modeName === "des-ede" || modeName === "des-ede-cbc") {
    key3 = Buffer$n.concat([key3, key3.slice(0, 8)]);
  }
  var iv = opts.iv;
  if (!Buffer$n.isBuffer(iv)) {
    iv = Buffer$n.from(iv);
  }
  this._des = mode.create({
    key: key3,
    iv,
    type
  });
}
DES$1.prototype._update = function(data2) {
  return Buffer$n.from(this._des.update(data2));
};
DES$1.prototype._final = function() {
  return Buffer$n.from(this._des.final());
};
var browser$8 = {};
var encrypter = {};
var ecb = {};
ecb.encrypt = function(self2, block) {
  return self2._cipher.encryptBlock(block);
};
ecb.decrypt = function(self2, block) {
  return self2._cipher.decryptBlock(block);
};
var cbc = {};
var bufferXor = function xor(a, b) {
  var length2 = Math.min(a.length, b.length);
  var buffer2 = new Buffer(length2);
  for (var i = 0; i < length2; ++i) {
    buffer2[i] = a[i] ^ b[i];
  }
  return buffer2;
};
var xor$7 = bufferXor;
cbc.encrypt = function(self2, block) {
  var data2 = xor$7(block, self2._prev);
  self2._prev = self2._cipher.encryptBlock(data2);
  return self2._prev;
};
cbc.decrypt = function(self2, block) {
  var pad3 = self2._prev;
  self2._prev = block;
  var out = self2._cipher.decryptBlock(block);
  return xor$7(out, pad3);
};
var cfb = {};
var Buffer$m = safeBuffer$1.exports.Buffer;
var xor$6 = bufferXor;
function encryptStart(self2, data2, decrypt2) {
  var len = data2.length;
  var out = xor$6(data2, self2._cache);
  self2._cache = self2._cache.slice(len);
  self2._prev = Buffer$m.concat([self2._prev, decrypt2 ? data2 : out]);
  return out;
}
cfb.encrypt = function(self2, data2, decrypt2) {
  var out = Buffer$m.allocUnsafe(0);
  var len;
  while (data2.length) {
    if (self2._cache.length === 0) {
      self2._cache = self2._cipher.encryptBlock(self2._prev);
      self2._prev = Buffer$m.allocUnsafe(0);
    }
    if (self2._cache.length <= data2.length) {
      len = self2._cache.length;
      out = Buffer$m.concat([out, encryptStart(self2, data2.slice(0, len), decrypt2)]);
      data2 = data2.slice(len);
    } else {
      out = Buffer$m.concat([out, encryptStart(self2, data2, decrypt2)]);
      break;
    }
  }
  return out;
};
var cfb8 = {};
var Buffer$l = safeBuffer$1.exports.Buffer;
function encryptByte$1(self2, byteParam, decrypt2) {
  var pad3 = self2._cipher.encryptBlock(self2._prev);
  var out = pad3[0] ^ byteParam;
  self2._prev = Buffer$l.concat([
    self2._prev.slice(1),
    Buffer$l.from([decrypt2 ? byteParam : out])
  ]);
  return out;
}
cfb8.encrypt = function(self2, chunk, decrypt2) {
  var len = chunk.length;
  var out = Buffer$l.allocUnsafe(len);
  var i = -1;
  while (++i < len) {
    out[i] = encryptByte$1(self2, chunk[i], decrypt2);
  }
  return out;
};
var cfb1 = {};
var Buffer$k = safeBuffer$1.exports.Buffer;
function encryptByte(self2, byteParam, decrypt2) {
  var pad3;
  var i = -1;
  var len = 8;
  var out = 0;
  var bit, value;
  while (++i < len) {
    pad3 = self2._cipher.encryptBlock(self2._prev);
    bit = byteParam & 1 << 7 - i ? 128 : 0;
    value = pad3[0] ^ bit;
    out += (value & 128) >> i % 8;
    self2._prev = shiftIn(self2._prev, decrypt2 ? bit : value);
  }
  return out;
}
function shiftIn(buffer2, value) {
  var len = buffer2.length;
  var i = -1;
  var out = Buffer$k.allocUnsafe(buffer2.length);
  buffer2 = Buffer$k.concat([buffer2, Buffer$k.from([value])]);
  while (++i < len) {
    out[i] = buffer2[i] << 1 | buffer2[i + 1] >> 7;
  }
  return out;
}
cfb1.encrypt = function(self2, chunk, decrypt2) {
  var len = chunk.length;
  var out = Buffer$k.allocUnsafe(len);
  var i = -1;
  while (++i < len) {
    out[i] = encryptByte(self2, chunk[i], decrypt2);
  }
  return out;
};
var ofb = {};
var xor$5 = bufferXor;
function getBlock$1(self2) {
  self2._prev = self2._cipher.encryptBlock(self2._prev);
  return self2._prev;
}
ofb.encrypt = function(self2, chunk) {
  while (self2._cache.length < chunk.length) {
    self2._cache = Buffer.concat([self2._cache, getBlock$1(self2)]);
  }
  var pad3 = self2._cache.slice(0, chunk.length);
  self2._cache = self2._cache.slice(chunk.length);
  return xor$5(chunk, pad3);
};
var ctr = {};
function incr32$2(iv) {
  var len = iv.length;
  var item;
  while (len--) {
    item = iv.readUInt8(len);
    if (item === 255) {
      iv.writeUInt8(0, len);
    } else {
      item++;
      iv.writeUInt8(item, len);
      break;
    }
  }
}
var incr32_1 = incr32$2;
var xor$4 = bufferXor;
var Buffer$j = safeBuffer$1.exports.Buffer;
var incr32$1 = incr32_1;
function getBlock(self2) {
  var out = self2._cipher.encryptBlockRaw(self2._prev);
  incr32$1(self2._prev);
  return out;
}
var blockSize = 16;
ctr.encrypt = function(self2, chunk) {
  var chunkNum = Math.ceil(chunk.length / blockSize);
  var start = self2._cache.length;
  self2._cache = Buffer$j.concat([
    self2._cache,
    Buffer$j.allocUnsafe(chunkNum * blockSize)
  ]);
  for (var i = 0; i < chunkNum; i++) {
    var out = getBlock(self2);
    var offset = start + i * blockSize;
    self2._cache.writeUInt32BE(out[0], offset + 0);
    self2._cache.writeUInt32BE(out[1], offset + 4);
    self2._cache.writeUInt32BE(out[2], offset + 8);
    self2._cache.writeUInt32BE(out[3], offset + 12);
  }
  var pad3 = self2._cache.slice(0, chunk.length);
  self2._cache = self2._cache.slice(chunk.length);
  return xor$4(chunk, pad3);
};
const aes128 = {
  cipher: "AES",
  key: 128,
  iv: 16,
  mode: "CBC",
  type: "block"
};
const aes192 = {
  cipher: "AES",
  key: 192,
  iv: 16,
  mode: "CBC",
  type: "block"
};
const aes256 = {
  cipher: "AES",
  key: 256,
  iv: 16,
  mode: "CBC",
  type: "block"
};
const require$$2 = {
  "aes-128-ecb": {
    cipher: "AES",
    key: 128,
    iv: 0,
    mode: "ECB",
    type: "block"
  },
  "aes-192-ecb": {
    cipher: "AES",
    key: 192,
    iv: 0,
    mode: "ECB",
    type: "block"
  },
  "aes-256-ecb": {
    cipher: "AES",
    key: 256,
    iv: 0,
    mode: "ECB",
    type: "block"
  },
  "aes-128-cbc": {
    cipher: "AES",
    key: 128,
    iv: 16,
    mode: "CBC",
    type: "block"
  },
  "aes-192-cbc": {
    cipher: "AES",
    key: 192,
    iv: 16,
    mode: "CBC",
    type: "block"
  },
  "aes-256-cbc": {
    cipher: "AES",
    key: 256,
    iv: 16,
    mode: "CBC",
    type: "block"
  },
  aes128,
  aes192,
  aes256,
  "aes-128-cfb": {
    cipher: "AES",
    key: 128,
    iv: 16,
    mode: "CFB",
    type: "stream"
  },
  "aes-192-cfb": {
    cipher: "AES",
    key: 192,
    iv: 16,
    mode: "CFB",
    type: "stream"
  },
  "aes-256-cfb": {
    cipher: "AES",
    key: 256,
    iv: 16,
    mode: "CFB",
    type: "stream"
  },
  "aes-128-cfb8": {
    cipher: "AES",
    key: 128,
    iv: 16,
    mode: "CFB8",
    type: "stream"
  },
  "aes-192-cfb8": {
    cipher: "AES",
    key: 192,
    iv: 16,
    mode: "CFB8",
    type: "stream"
  },
  "aes-256-cfb8": {
    cipher: "AES",
    key: 256,
    iv: 16,
    mode: "CFB8",
    type: "stream"
  },
  "aes-128-cfb1": {
    cipher: "AES",
    key: 128,
    iv: 16,
    mode: "CFB1",
    type: "stream"
  },
  "aes-192-cfb1": {
    cipher: "AES",
    key: 192,
    iv: 16,
    mode: "CFB1",
    type: "stream"
  },
  "aes-256-cfb1": {
    cipher: "AES",
    key: 256,
    iv: 16,
    mode: "CFB1",
    type: "stream"
  },
  "aes-128-ofb": {
    cipher: "AES",
    key: 128,
    iv: 16,
    mode: "OFB",
    type: "stream"
  },
  "aes-192-ofb": {
    cipher: "AES",
    key: 192,
    iv: 16,
    mode: "OFB",
    type: "stream"
  },
  "aes-256-ofb": {
    cipher: "AES",
    key: 256,
    iv: 16,
    mode: "OFB",
    type: "stream"
  },
  "aes-128-ctr": {
    cipher: "AES",
    key: 128,
    iv: 16,
    mode: "CTR",
    type: "stream"
  },
  "aes-192-ctr": {
    cipher: "AES",
    key: 192,
    iv: 16,
    mode: "CTR",
    type: "stream"
  },
  "aes-256-ctr": {
    cipher: "AES",
    key: 256,
    iv: 16,
    mode: "CTR",
    type: "stream"
  },
  "aes-128-gcm": {
    cipher: "AES",
    key: 128,
    iv: 12,
    mode: "GCM",
    type: "auth"
  },
  "aes-192-gcm": {
    cipher: "AES",
    key: 192,
    iv: 12,
    mode: "GCM",
    type: "auth"
  },
  "aes-256-gcm": {
    cipher: "AES",
    key: 256,
    iv: 12,
    mode: "GCM",
    type: "auth"
  }
};
var modeModules = {
  ECB: ecb,
  CBC: cbc,
  CFB: cfb,
  CFB8: cfb8,
  CFB1: cfb1,
  OFB: ofb,
  CTR: ctr,
  GCM: ctr
};
var modes$2 = require$$2;
for (var key$4 in modes$2) {
  modes$2[key$4].module = modeModules[modes$2[key$4].mode];
}
var modes_1 = modes$2;
var aes$6 = {};
var Buffer$i = safeBuffer$1.exports.Buffer;
function asUInt32Array(buf) {
  if (!Buffer$i.isBuffer(buf))
    buf = Buffer$i.from(buf);
  var len = buf.length / 4 | 0;
  var out = new Array(len);
  for (var i = 0; i < len; i++) {
    out[i] = buf.readUInt32BE(i * 4);
  }
  return out;
}
function scrubVec(v) {
  for (var i = 0; i < v.length; v++) {
    v[i] = 0;
  }
}
function cryptBlock(M, keySchedule, SUB_MIX, SBOX, nRounds) {
  var SUB_MIX0 = SUB_MIX[0];
  var SUB_MIX1 = SUB_MIX[1];
  var SUB_MIX2 = SUB_MIX[2];
  var SUB_MIX3 = SUB_MIX[3];
  var s0 = M[0] ^ keySchedule[0];
  var s1 = M[1] ^ keySchedule[1];
  var s2 = M[2] ^ keySchedule[2];
  var s3 = M[3] ^ keySchedule[3];
  var t0, t1, t2, t3;
  var ksRow = 4;
  for (var round = 1; round < nRounds; round++) {
    t0 = SUB_MIX0[s0 >>> 24] ^ SUB_MIX1[s1 >>> 16 & 255] ^ SUB_MIX2[s2 >>> 8 & 255] ^ SUB_MIX3[s3 & 255] ^ keySchedule[ksRow++];
    t1 = SUB_MIX0[s1 >>> 24] ^ SUB_MIX1[s2 >>> 16 & 255] ^ SUB_MIX2[s3 >>> 8 & 255] ^ SUB_MIX3[s0 & 255] ^ keySchedule[ksRow++];
    t2 = SUB_MIX0[s2 >>> 24] ^ SUB_MIX1[s3 >>> 16 & 255] ^ SUB_MIX2[s0 >>> 8 & 255] ^ SUB_MIX3[s1 & 255] ^ keySchedule[ksRow++];
    t3 = SUB_MIX0[s3 >>> 24] ^ SUB_MIX1[s0 >>> 16 & 255] ^ SUB_MIX2[s1 >>> 8 & 255] ^ SUB_MIX3[s2 & 255] ^ keySchedule[ksRow++];
    s0 = t0;
    s1 = t1;
    s2 = t2;
    s3 = t3;
  }
  t0 = (SBOX[s0 >>> 24] << 24 | SBOX[s1 >>> 16 & 255] << 16 | SBOX[s2 >>> 8 & 255] << 8 | SBOX[s3 & 255]) ^ keySchedule[ksRow++];
  t1 = (SBOX[s1 >>> 24] << 24 | SBOX[s2 >>> 16 & 255] << 16 | SBOX[s3 >>> 8 & 255] << 8 | SBOX[s0 & 255]) ^ keySchedule[ksRow++];
  t2 = (SBOX[s2 >>> 24] << 24 | SBOX[s3 >>> 16 & 255] << 16 | SBOX[s0 >>> 8 & 255] << 8 | SBOX[s1 & 255]) ^ keySchedule[ksRow++];
  t3 = (SBOX[s3 >>> 24] << 24 | SBOX[s0 >>> 16 & 255] << 16 | SBOX[s1 >>> 8 & 255] << 8 | SBOX[s2 & 255]) ^ keySchedule[ksRow++];
  t0 = t0 >>> 0;
  t1 = t1 >>> 0;
  t2 = t2 >>> 0;
  t3 = t3 >>> 0;
  return [t0, t1, t2, t3];
}
var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
var G = function() {
  var d = new Array(256);
  for (var j = 0; j < 256; j++) {
    if (j < 128) {
      d[j] = j << 1;
    } else {
      d[j] = j << 1 ^ 283;
    }
  }
  var SBOX = [];
  var INV_SBOX = [];
  var SUB_MIX = [[], [], [], []];
  var INV_SUB_MIX = [[], [], [], []];
  var x = 0;
  var xi = 0;
  for (var i = 0; i < 256; ++i) {
    var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
    sx = sx >>> 8 ^ sx & 255 ^ 99;
    SBOX[x] = sx;
    INV_SBOX[sx] = x;
    var x2 = d[x];
    var x4 = d[x2];
    var x8 = d[x4];
    var t = d[sx] * 257 ^ sx * 16843008;
    SUB_MIX[0][x] = t << 24 | t >>> 8;
    SUB_MIX[1][x] = t << 16 | t >>> 16;
    SUB_MIX[2][x] = t << 8 | t >>> 24;
    SUB_MIX[3][x] = t;
    t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
    INV_SUB_MIX[0][sx] = t << 24 | t >>> 8;
    INV_SUB_MIX[1][sx] = t << 16 | t >>> 16;
    INV_SUB_MIX[2][sx] = t << 8 | t >>> 24;
    INV_SUB_MIX[3][sx] = t;
    if (x === 0) {
      x = xi = 1;
    } else {
      x = x2 ^ d[d[d[x8 ^ x2]]];
      xi ^= d[d[xi]];
    }
  }
  return {
    SBOX,
    INV_SBOX,
    SUB_MIX,
    INV_SUB_MIX
  };
}();
function AES(key3) {
  this._key = asUInt32Array(key3);
  this._reset();
}
AES.blockSize = 4 * 4;
AES.keySize = 256 / 8;
AES.prototype.blockSize = AES.blockSize;
AES.prototype.keySize = AES.keySize;
AES.prototype._reset = function() {
  var keyWords = this._key;
  var keySize = keyWords.length;
  var nRounds = keySize + 6;
  var ksRows = (nRounds + 1) * 4;
  var keySchedule = [];
  for (var k = 0; k < keySize; k++) {
    keySchedule[k] = keyWords[k];
  }
  for (k = keySize; k < ksRows; k++) {
    var t = keySchedule[k - 1];
    if (k % keySize === 0) {
      t = t << 8 | t >>> 24;
      t = G.SBOX[t >>> 24] << 24 | G.SBOX[t >>> 16 & 255] << 16 | G.SBOX[t >>> 8 & 255] << 8 | G.SBOX[t & 255];
      t ^= RCON[k / keySize | 0] << 24;
    } else if (keySize > 6 && k % keySize === 4) {
      t = G.SBOX[t >>> 24] << 24 | G.SBOX[t >>> 16 & 255] << 16 | G.SBOX[t >>> 8 & 255] << 8 | G.SBOX[t & 255];
    }
    keySchedule[k] = keySchedule[k - keySize] ^ t;
  }
  var invKeySchedule = [];
  for (var ik = 0; ik < ksRows; ik++) {
    var ksR = ksRows - ik;
    var tt = keySchedule[ksR - (ik % 4 ? 0 : 4)];
    if (ik < 4 || ksR <= 4) {
      invKeySchedule[ik] = tt;
    } else {
      invKeySchedule[ik] = G.INV_SUB_MIX[0][G.SBOX[tt >>> 24]] ^ G.INV_SUB_MIX[1][G.SBOX[tt >>> 16 & 255]] ^ G.INV_SUB_MIX[2][G.SBOX[tt >>> 8 & 255]] ^ G.INV_SUB_MIX[3][G.SBOX[tt & 255]];
    }
  }
  this._nRounds = nRounds;
  this._keySchedule = keySchedule;
  this._invKeySchedule = invKeySchedule;
};
AES.prototype.encryptBlockRaw = function(M) {
  M = asUInt32Array(M);
  return cryptBlock(M, this._keySchedule, G.SUB_MIX, G.SBOX, this._nRounds);
};
AES.prototype.encryptBlock = function(M) {
  var out = this.encryptBlockRaw(M);
  var buf = Buffer$i.allocUnsafe(16);
  buf.writeUInt32BE(out[0], 0);
  buf.writeUInt32BE(out[1], 4);
  buf.writeUInt32BE(out[2], 8);
  buf.writeUInt32BE(out[3], 12);
  return buf;
};
AES.prototype.decryptBlock = function(M) {
  M = asUInt32Array(M);
  var m1 = M[1];
  M[1] = M[3];
  M[3] = m1;
  var out = cryptBlock(M, this._invKeySchedule, G.INV_SUB_MIX, G.INV_SBOX, this._nRounds);
  var buf = Buffer$i.allocUnsafe(16);
  buf.writeUInt32BE(out[0], 0);
  buf.writeUInt32BE(out[3], 4);
  buf.writeUInt32BE(out[2], 8);
  buf.writeUInt32BE(out[1], 12);
  return buf;
};
AES.prototype.scrub = function() {
  scrubVec(this._keySchedule);
  scrubVec(this._invKeySchedule);
  scrubVec(this._key);
};
aes$6.AES = AES;
var Buffer$h = safeBuffer$1.exports.Buffer;
var ZEROES = Buffer$h.alloc(16, 0);
function toArray$1(buf) {
  return [
    buf.readUInt32BE(0),
    buf.readUInt32BE(4),
    buf.readUInt32BE(8),
    buf.readUInt32BE(12)
  ];
}
function fromArray(out) {
  var buf = Buffer$h.allocUnsafe(16);
  buf.writeUInt32BE(out[0] >>> 0, 0);
  buf.writeUInt32BE(out[1] >>> 0, 4);
  buf.writeUInt32BE(out[2] >>> 0, 8);
  buf.writeUInt32BE(out[3] >>> 0, 12);
  return buf;
}
function GHASH$1(key3) {
  this.h = key3;
  this.state = Buffer$h.alloc(16, 0);
  this.cache = Buffer$h.allocUnsafe(0);
}
GHASH$1.prototype.ghash = function(block) {
  var i = -1;
  while (++i < block.length) {
    this.state[i] ^= block[i];
  }
  this._multiply();
};
GHASH$1.prototype._multiply = function() {
  var Vi = toArray$1(this.h);
  var Zi = [0, 0, 0, 0];
  var j, xi, lsbVi;
  var i = -1;
  while (++i < 128) {
    xi = (this.state[~~(i / 8)] & 1 << 7 - i % 8) !== 0;
    if (xi) {
      Zi[0] ^= Vi[0];
      Zi[1] ^= Vi[1];
      Zi[2] ^= Vi[2];
      Zi[3] ^= Vi[3];
    }
    lsbVi = (Vi[3] & 1) !== 0;
    for (j = 3; j > 0; j--) {
      Vi[j] = Vi[j] >>> 1 | (Vi[j - 1] & 1) << 31;
    }
    Vi[0] = Vi[0] >>> 1;
    if (lsbVi) {
      Vi[0] = Vi[0] ^ 225 << 24;
    }
  }
  this.state = fromArray(Zi);
};
GHASH$1.prototype.update = function(buf) {
  this.cache = Buffer$h.concat([this.cache, buf]);
  var chunk;
  while (this.cache.length >= 16) {
    chunk = this.cache.slice(0, 16);
    this.cache = this.cache.slice(16);
    this.ghash(chunk);
  }
};
GHASH$1.prototype.final = function(abl, bl) {
  if (this.cache.length) {
    this.ghash(Buffer$h.concat([this.cache, ZEROES], 16));
  }
  this.ghash(fromArray([0, abl, 0, bl]));
  return this.state;
};
var ghash = GHASH$1;
var aes$5 = aes$6;
var Buffer$g = safeBuffer$1.exports.Buffer;
var Transform$5 = cipherBase;
var inherits$d = requireInherits_browser();
var GHASH = ghash;
var xor$3 = bufferXor;
var incr32 = incr32_1;
function xorTest(a, b) {
  var out = 0;
  if (a.length !== b.length)
    out++;
  var len = Math.min(a.length, b.length);
  for (var i = 0; i < len; ++i) {
    out += a[i] ^ b[i];
  }
  return out;
}
function calcIv(self2, iv, ck) {
  if (iv.length === 12) {
    self2._finID = Buffer$g.concat([iv, Buffer$g.from([0, 0, 0, 1])]);
    return Buffer$g.concat([iv, Buffer$g.from([0, 0, 0, 2])]);
  }
  var ghash2 = new GHASH(ck);
  var len = iv.length;
  var toPad = len % 16;
  ghash2.update(iv);
  if (toPad) {
    toPad = 16 - toPad;
    ghash2.update(Buffer$g.alloc(toPad, 0));
  }
  ghash2.update(Buffer$g.alloc(8, 0));
  var ivBits = len * 8;
  var tail = Buffer$g.alloc(8);
  tail.writeUIntBE(ivBits, 0, 8);
  ghash2.update(tail);
  self2._finID = ghash2.state;
  var out = Buffer$g.from(self2._finID);
  incr32(out);
  return out;
}
function StreamCipher$3(mode, key3, iv, decrypt2) {
  Transform$5.call(this);
  var h = Buffer$g.alloc(4, 0);
  this._cipher = new aes$5.AES(key3);
  var ck = this._cipher.encryptBlock(h);
  this._ghash = new GHASH(ck);
  iv = calcIv(this, iv, ck);
  this._prev = Buffer$g.from(iv);
  this._cache = Buffer$g.allocUnsafe(0);
  this._secCache = Buffer$g.allocUnsafe(0);
  this._decrypt = decrypt2;
  this._alen = 0;
  this._len = 0;
  this._mode = mode;
  this._authTag = null;
  this._called = false;
}
inherits$d(StreamCipher$3, Transform$5);
StreamCipher$3.prototype._update = function(chunk) {
  if (!this._called && this._alen) {
    var rump = 16 - this._alen % 16;
    if (rump < 16) {
      rump = Buffer$g.alloc(rump, 0);
      this._ghash.update(rump);
    }
  }
  this._called = true;
  var out = this._mode.encrypt(this, chunk);
  if (this._decrypt) {
    this._ghash.update(chunk);
  } else {
    this._ghash.update(out);
  }
  this._len += chunk.length;
  return out;
};
StreamCipher$3.prototype._final = function() {
  if (this._decrypt && !this._authTag)
    throw new Error("Unsupported state or unable to authenticate data");
  var tag = xor$3(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
  if (this._decrypt && xorTest(tag, this._authTag))
    throw new Error("Unsupported state or unable to authenticate data");
  this._authTag = tag;
  this._cipher.scrub();
};
StreamCipher$3.prototype.getAuthTag = function getAuthTag() {
  if (this._decrypt || !Buffer$g.isBuffer(this._authTag))
    throw new Error("Attempting to get auth tag in unsupported state");
  return this._authTag;
};
StreamCipher$3.prototype.setAuthTag = function setAuthTag(tag) {
  if (!this._decrypt)
    throw new Error("Attempting to set auth tag in unsupported state");
  this._authTag = tag;
};
StreamCipher$3.prototype.setAAD = function setAAD(buf) {
  if (this._called)
    throw new Error("Attempting to set AAD in unsupported state");
  this._ghash.update(buf);
  this._alen += buf.length;
};
var authCipher = StreamCipher$3;
var aes$4 = aes$6;
var Buffer$f = safeBuffer$1.exports.Buffer;
var Transform$4 = cipherBase;
var inherits$c = requireInherits_browser();
function StreamCipher$2(mode, key3, iv, decrypt2) {
  Transform$4.call(this);
  this._cipher = new aes$4.AES(key3);
  this._prev = Buffer$f.from(iv);
  this._cache = Buffer$f.allocUnsafe(0);
  this._secCache = Buffer$f.allocUnsafe(0);
  this._decrypt = decrypt2;
  this._mode = mode;
}
inherits$c(StreamCipher$2, Transform$4);
StreamCipher$2.prototype._update = function(chunk) {
  return this._mode.encrypt(this, chunk, this._decrypt);
};
StreamCipher$2.prototype._final = function() {
  this._cipher.scrub();
};
var streamCipher = StreamCipher$2;
var Buffer$e = safeBuffer$1.exports.Buffer;
var MD5 = md5_js;
function EVP_BytesToKey(password, salt, keyBits, ivLen) {
  if (!Buffer$e.isBuffer(password))
    password = Buffer$e.from(password, "binary");
  if (salt) {
    if (!Buffer$e.isBuffer(salt))
      salt = Buffer$e.from(salt, "binary");
    if (salt.length !== 8)
      throw new RangeError("salt should be Buffer with 8 byte length");
  }
  var keyLen = keyBits / 8;
  var key3 = Buffer$e.alloc(keyLen);
  var iv = Buffer$e.alloc(ivLen || 0);
  var tmp = Buffer$e.alloc(0);
  while (keyLen > 0 || ivLen > 0) {
    var hash3 = new MD5();
    hash3.update(tmp);
    hash3.update(password);
    if (salt)
      hash3.update(salt);
    tmp = hash3.digest();
    var used = 0;
    if (keyLen > 0) {
      var keyStart = key3.length - keyLen;
      used = Math.min(keyLen, tmp.length);
      tmp.copy(key3, keyStart, 0, used);
      keyLen -= used;
    }
    if (used < tmp.length && ivLen > 0) {
      var ivStart = iv.length - ivLen;
      var length2 = Math.min(ivLen, tmp.length - used);
      tmp.copy(iv, ivStart, used, used + length2);
      ivLen -= length2;
    }
  }
  tmp.fill(0);
  return { key: key3, iv };
}
var evp_bytestokey = EVP_BytesToKey;
var MODES$1 = modes_1;
var AuthCipher$1 = authCipher;
var Buffer$d = safeBuffer$1.exports.Buffer;
var StreamCipher$1 = streamCipher;
var Transform$3 = cipherBase;
var aes$3 = aes$6;
var ebtk$2 = evp_bytestokey;
var inherits$b = requireInherits_browser();
function Cipher(mode, key3, iv) {
  Transform$3.call(this);
  this._cache = new Splitter$1();
  this._cipher = new aes$3.AES(key3);
  this._prev = Buffer$d.from(iv);
  this._mode = mode;
  this._autopadding = true;
}
inherits$b(Cipher, Transform$3);
Cipher.prototype._update = function(data2) {
  this._cache.add(data2);
  var chunk;
  var thing;
  var out = [];
  while (chunk = this._cache.get()) {
    thing = this._mode.encrypt(this, chunk);
    out.push(thing);
  }
  return Buffer$d.concat(out);
};
var PADDING = Buffer$d.alloc(16, 16);
Cipher.prototype._final = function() {
  var chunk = this._cache.flush();
  if (this._autopadding) {
    chunk = this._mode.encrypt(this, chunk);
    this._cipher.scrub();
    return chunk;
  }
  if (!chunk.equals(PADDING)) {
    this._cipher.scrub();
    throw new Error("data not multiple of block length");
  }
};
Cipher.prototype.setAutoPadding = function(setTo) {
  this._autopadding = !!setTo;
  return this;
};
function Splitter$1() {
  this.cache = Buffer$d.allocUnsafe(0);
}
Splitter$1.prototype.add = function(data2) {
  this.cache = Buffer$d.concat([this.cache, data2]);
};
Splitter$1.prototype.get = function() {
  if (this.cache.length > 15) {
    var out = this.cache.slice(0, 16);
    this.cache = this.cache.slice(16);
    return out;
  }
  return null;
};
Splitter$1.prototype.flush = function() {
  var len = 16 - this.cache.length;
  var padBuff = Buffer$d.allocUnsafe(len);
  var i = -1;
  while (++i < len) {
    padBuff.writeUInt8(len, i);
  }
  return Buffer$d.concat([this.cache, padBuff]);
};
function createCipheriv$1(suite, password, iv) {
  var config2 = MODES$1[suite.toLowerCase()];
  if (!config2)
    throw new TypeError("invalid suite type");
  if (typeof password === "string")
    password = Buffer$d.from(password);
  if (password.length !== config2.key / 8)
    throw new TypeError("invalid key length " + password.length);
  if (typeof iv === "string")
    iv = Buffer$d.from(iv);
  if (config2.mode !== "GCM" && iv.length !== config2.iv)
    throw new TypeError("invalid iv length " + iv.length);
  if (config2.type === "stream") {
    return new StreamCipher$1(config2.module, password, iv);
  } else if (config2.type === "auth") {
    return new AuthCipher$1(config2.module, password, iv);
  }
  return new Cipher(config2.module, password, iv);
}
function createCipher$1(suite, password) {
  var config2 = MODES$1[suite.toLowerCase()];
  if (!config2)
    throw new TypeError("invalid suite type");
  var keys2 = ebtk$2(password, false, config2.key, config2.iv);
  return createCipheriv$1(suite, keys2.key, keys2.iv);
}
encrypter.createCipheriv = createCipheriv$1;
encrypter.createCipher = createCipher$1;
var decrypter = {};
var AuthCipher = authCipher;
var Buffer$c = safeBuffer$1.exports.Buffer;
var MODES = modes_1;
var StreamCipher = streamCipher;
var Transform$2 = cipherBase;
var aes$2 = aes$6;
var ebtk$1 = evp_bytestokey;
var inherits$a = requireInherits_browser();
function Decipher(mode, key3, iv) {
  Transform$2.call(this);
  this._cache = new Splitter();
  this._last = void 0;
  this._cipher = new aes$2.AES(key3);
  this._prev = Buffer$c.from(iv);
  this._mode = mode;
  this._autopadding = true;
}
inherits$a(Decipher, Transform$2);
Decipher.prototype._update = function(data2) {
  this._cache.add(data2);
  var chunk;
  var thing;
  var out = [];
  while (chunk = this._cache.get(this._autopadding)) {
    thing = this._mode.decrypt(this, chunk);
    out.push(thing);
  }
  return Buffer$c.concat(out);
};
Decipher.prototype._final = function() {
  var chunk = this._cache.flush();
  if (this._autopadding) {
    return unpad(this._mode.decrypt(this, chunk));
  } else if (chunk) {
    throw new Error("data not multiple of block length");
  }
};
Decipher.prototype.setAutoPadding = function(setTo) {
  this._autopadding = !!setTo;
  return this;
};
function Splitter() {
  this.cache = Buffer$c.allocUnsafe(0);
}
Splitter.prototype.add = function(data2) {
  this.cache = Buffer$c.concat([this.cache, data2]);
};
Splitter.prototype.get = function(autoPadding) {
  var out;
  if (autoPadding) {
    if (this.cache.length > 16) {
      out = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return out;
    }
  } else {
    if (this.cache.length >= 16) {
      out = this.cache.slice(0, 16);
      this.cache = this.cache.slice(16);
      return out;
    }
  }
  return null;
};
Splitter.prototype.flush = function() {
  if (this.cache.length)
    return this.cache;
};
function unpad(last) {
  var padded = last[15];
  if (padded < 1 || padded > 16) {
    throw new Error("unable to decrypt data");
  }
  var i = -1;
  while (++i < padded) {
    if (last[i + (16 - padded)] !== padded) {
      throw new Error("unable to decrypt data");
    }
  }
  if (padded === 16)
    return;
  return last.slice(0, 16 - padded);
}
function createDecipheriv$1(suite, password, iv) {
  var config2 = MODES[suite.toLowerCase()];
  if (!config2)
    throw new TypeError("invalid suite type");
  if (typeof iv === "string")
    iv = Buffer$c.from(iv);
  if (config2.mode !== "GCM" && iv.length !== config2.iv)
    throw new TypeError("invalid iv length " + iv.length);
  if (typeof password === "string")
    password = Buffer$c.from(password);
  if (password.length !== config2.key / 8)
    throw new TypeError("invalid key length " + password.length);
  if (config2.type === "stream") {
    return new StreamCipher(config2.module, password, iv, true);
  } else if (config2.type === "auth") {
    return new AuthCipher(config2.module, password, iv, true);
  }
  return new Decipher(config2.module, password, iv);
}
function createDecipher$1(suite, password) {
  var config2 = MODES[suite.toLowerCase()];
  if (!config2)
    throw new TypeError("invalid suite type");
  var keys2 = ebtk$1(password, false, config2.key, config2.iv);
  return createDecipheriv$1(suite, keys2.key, keys2.iv);
}
decrypter.createDecipher = createDecipher$1;
decrypter.createDecipheriv = createDecipheriv$1;
var ciphers$2 = encrypter;
var deciphers = decrypter;
var modes$1 = require$$2;
function getCiphers$1() {
  return Object.keys(modes$1);
}
browser$8.createCipher = browser$8.Cipher = ciphers$2.createCipher;
browser$8.createCipheriv = browser$8.Cipheriv = ciphers$2.createCipheriv;
browser$8.createDecipher = browser$8.Decipher = deciphers.createDecipher;
browser$8.createDecipheriv = browser$8.Decipheriv = deciphers.createDecipheriv;
browser$8.listCiphers = browser$8.getCiphers = getCiphers$1;
var modes = {};
(function(exports2) {
  exports2["des-ecb"] = {
    key: 8,
    iv: 0
  };
  exports2["des-cbc"] = exports2.des = {
    key: 8,
    iv: 8
  };
  exports2["des-ede3-cbc"] = exports2.des3 = {
    key: 24,
    iv: 8
  };
  exports2["des-ede3"] = {
    key: 24,
    iv: 0
  };
  exports2["des-ede-cbc"] = {
    key: 16,
    iv: 8
  };
  exports2["des-ede"] = {
    key: 16,
    iv: 0
  };
})(modes);
var DES = browserifyDes;
var aes$1 = browser$8;
var aesModes = modes_1;
var desModes = modes;
var ebtk = evp_bytestokey;
function createCipher(suite, password) {
  suite = suite.toLowerCase();
  var keyLen, ivLen;
  if (aesModes[suite]) {
    keyLen = aesModes[suite].key;
    ivLen = aesModes[suite].iv;
  } else if (desModes[suite]) {
    keyLen = desModes[suite].key * 8;
    ivLen = desModes[suite].iv;
  } else {
    throw new TypeError("invalid suite type");
  }
  var keys2 = ebtk(password, false, keyLen, ivLen);
  return createCipheriv(suite, keys2.key, keys2.iv);
}
function createDecipher(suite, password) {
  suite = suite.toLowerCase();
  var keyLen, ivLen;
  if (aesModes[suite]) {
    keyLen = aesModes[suite].key;
    ivLen = aesModes[suite].iv;
  } else if (desModes[suite]) {
    keyLen = desModes[suite].key * 8;
    ivLen = desModes[suite].iv;
  } else {
    throw new TypeError("invalid suite type");
  }
  var keys2 = ebtk(password, false, keyLen, ivLen);
  return createDecipheriv(suite, keys2.key, keys2.iv);
}
function createCipheriv(suite, key3, iv) {
  suite = suite.toLowerCase();
  if (aesModes[suite])
    return aes$1.createCipheriv(suite, key3, iv);
  if (desModes[suite])
    return new DES({ key: key3, iv, mode: suite });
  throw new TypeError("invalid suite type");
}
function createDecipheriv(suite, key3, iv) {
  suite = suite.toLowerCase();
  if (aesModes[suite])
    return aes$1.createDecipheriv(suite, key3, iv);
  if (desModes[suite])
    return new DES({ key: key3, iv, mode: suite, decrypt: true });
  throw new TypeError("invalid suite type");
}
function getCiphers() {
  return Object.keys(desModes).concat(aes$1.getCiphers());
}
browser$9.createCipher = browser$9.Cipher = createCipher;
browser$9.createCipheriv = browser$9.Cipheriv = createCipheriv;
browser$9.createDecipher = browser$9.Decipher = createDecipher;
browser$9.createDecipheriv = browser$9.Decipheriv = createDecipheriv;
browser$9.listCiphers = browser$9.getCiphers = getCiphers;
var browser$7 = {};
var bn$4 = { exports: {} };
(function(module) {
  (function(module2, exports2) {
    function assert2(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    function inherits2(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
    function BN2(number, base3, endian) {
      if (BN2.isBN(number)) {
        return number;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (number !== null) {
        if (base3 === "le" || base3 === "be") {
          endian = base3;
          base3 = 10;
        }
        this._init(number || 0, base3 || 10, endian || "be");
      }
    }
    if (typeof module2 === "object") {
      module2.exports = BN2;
    } else {
      exports2.BN = BN2;
    }
    BN2.BN = BN2;
    BN2.wordSize = 26;
    var Buffer2;
    try {
      if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
        Buffer2 = window.Buffer;
      } else {
        Buffer2 = require$$0$3.Buffer;
      }
    } catch (e) {
    }
    BN2.isBN = function isBN(num) {
      if (num instanceof BN2) {
        return true;
      }
      return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
    };
    BN2.max = function max(left, right) {
      if (left.cmp(right) > 0)
        return left;
      return right;
    };
    BN2.min = function min(left, right) {
      if (left.cmp(right) < 0)
        return left;
      return right;
    };
    BN2.prototype._init = function init6(number, base3, endian) {
      if (typeof number === "number") {
        return this._initNumber(number, base3, endian);
      }
      if (typeof number === "object") {
        return this._initArray(number, base3, endian);
      }
      if (base3 === "hex") {
        base3 = 16;
      }
      assert2(base3 === (base3 | 0) && base3 >= 2 && base3 <= 36);
      number = number.toString().replace(/\s+/g, "");
      var start = 0;
      if (number[0] === "-") {
        start++;
        this.negative = 1;
      }
      if (start < number.length) {
        if (base3 === 16) {
          this._parseHex(number, start, endian);
        } else {
          this._parseBase(number, base3, start);
          if (endian === "le") {
            this._initArray(this.toArray(), base3, endian);
          }
        }
      }
    };
    BN2.prototype._initNumber = function _initNumber(number, base3, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }
      if (number < 67108864) {
        this.words = [number & 67108863];
        this.length = 1;
      } else if (number < 4503599627370496) {
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863
        ];
        this.length = 2;
      } else {
        assert2(number < 9007199254740992);
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863,
          1
        ];
        this.length = 3;
      }
      if (endian !== "le")
        return;
      this._initArray(this.toArray(), base3, endian);
    };
    BN2.prototype._initArray = function _initArray(number, base3, endian) {
      assert2(typeof number.length === "number");
      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var j, w;
      var off = 0;
      if (endian === "be") {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === "le") {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }
      return this.strip();
    };
    function parseHex4Bits(string, index2) {
      var c = string.charCodeAt(index2);
      if (c >= 65 && c <= 70) {
        return c - 55;
      } else if (c >= 97 && c <= 102) {
        return c - 87;
      } else {
        return c - 48 & 15;
      }
    }
    function parseHexByte(string, lowerBound, index2) {
      var r2 = parseHex4Bits(string, index2);
      if (index2 - 1 >= lowerBound) {
        r2 |= parseHex4Bits(string, index2 - 1) << 4;
      }
      return r2;
    }
    BN2.prototype._parseHex = function _parseHex(number, start, endian) {
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var off = 0;
      var j = 0;
      var w;
      if (endian === "be") {
        for (i = number.length - 1; i >= start; i -= 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 67108863;
          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      } else {
        var parseLength = number.length - start;
        for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 67108863;
          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      }
      this.strip();
    };
    function parseBase(str, start, end, mul7) {
      var r2 = 0;
      var len = Math.min(str.length, end);
      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r2 *= mul7;
        if (c >= 49) {
          r2 += c - 49 + 10;
        } else if (c >= 17) {
          r2 += c - 17 + 10;
        } else {
          r2 += c;
        }
      }
      return r2;
    }
    BN2.prototype._parseBase = function _parseBase(number, base3, start) {
      this.words = [0];
      this.length = 1;
      for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base3) {
        limbLen++;
      }
      limbLen--;
      limbPow = limbPow / base3 | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;
      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base3);
        this.imuln(limbPow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base3);
        for (i = 0; i < mod; i++) {
          pow *= base3;
        }
        this.imuln(pow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      this.strip();
    };
    BN2.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }
      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };
    BN2.prototype.clone = function clone2() {
      var r2 = new BN2(null);
      this.copy(r2);
      return r2;
    };
    BN2.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }
      return this;
    };
    BN2.prototype.strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    };
    BN2.prototype._normSign = function _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    };
    BN2.prototype.inspect = function inspect9() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    };
    var zeros2 = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ];
    var groupSizes = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ];
    var groupBases = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    BN2.prototype.toString = function toString2(base3, padding2) {
      base3 = base3 || 10;
      padding2 = padding2 | 0 || 1;
      var out;
      if (base3 === 16 || base3 === "hex") {
        out = "";
        var off = 0;
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 16777215).toString(16);
          carry = w >>> 24 - off & 16777215;
          if (carry !== 0 || i !== this.length - 1) {
            out = zeros2[6 - word.length] + word + out;
          } else {
            out = word + out;
          }
          off += 2;
          if (off >= 26) {
            off -= 26;
            i--;
          }
        }
        if (carry !== 0) {
          out = carry.toString(16) + out;
        }
        while (out.length % padding2 !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      if (base3 === (base3 | 0) && base3 >= 2 && base3 <= 36) {
        var groupSize = groupSizes[base3];
        var groupBase = groupBases[base3];
        out = "";
        var c = this.clone();
        c.negative = 0;
        while (!c.isZero()) {
          var r2 = c.modn(groupBase).toString(base3);
          c = c.idivn(groupBase);
          if (!c.isZero()) {
            out = zeros2[groupSize - r2.length] + r2 + out;
          } else {
            out = r2 + out;
          }
        }
        if (this.isZero()) {
          out = "0" + out;
        }
        while (out.length % padding2 !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      assert2(false, "Base should be between 2 and 36");
    };
    BN2.prototype.toNumber = function toNumber() {
      var ret = this.words[0];
      if (this.length === 2) {
        ret += this.words[1] * 67108864;
      } else if (this.length === 3 && this.words[2] === 1) {
        ret += 4503599627370496 + this.words[1] * 67108864;
      } else if (this.length > 2) {
        assert2(false, "Number can only safely store up to 53 bits");
      }
      return this.negative !== 0 ? -ret : ret;
    };
    BN2.prototype.toJSON = function toJSON4() {
      return this.toString(16);
    };
    BN2.prototype.toBuffer = function toBuffer2(endian, length2) {
      assert2(typeof Buffer2 !== "undefined");
      return this.toArrayLike(Buffer2, endian, length2);
    };
    BN2.prototype.toArray = function toArray2(endian, length2) {
      return this.toArrayLike(Array, endian, length2);
    };
    BN2.prototype.toArrayLike = function toArrayLike(ArrayType2, endian, length2) {
      var byteLength = this.byteLength();
      var reqLength = length2 || Math.max(1, byteLength);
      assert2(byteLength <= reqLength, "byte array longer than desired length");
      assert2(reqLength > 0, "Requested array length <= 0");
      this.strip();
      var littleEndian = endian === "le";
      var res = new ArrayType2(reqLength);
      var b, i;
      var q = this.clone();
      if (!littleEndian) {
        for (i = 0; i < reqLength - byteLength; i++) {
          res[i] = 0;
        }
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(255);
          q.iushrn(8);
          res[reqLength - i - 1] = b;
        }
      } else {
        for (i = 0; !q.isZero(); i++) {
          b = q.andln(255);
          q.iushrn(8);
          res[i] = b;
        }
        for (; i < reqLength; i++) {
          res[i] = 0;
        }
      }
      return res;
    };
    if (Math.clz32) {
      BN2.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN2.prototype._countBits = function _countBits(w) {
        var t = w;
        var r2 = 0;
        if (t >= 4096) {
          r2 += 13;
          t >>>= 13;
        }
        if (t >= 64) {
          r2 += 7;
          t >>>= 7;
        }
        if (t >= 8) {
          r2 += 4;
          t >>>= 4;
        }
        if (t >= 2) {
          r2 += 2;
          t >>>= 2;
        }
        return r2 + t;
      };
    }
    BN2.prototype._zeroBits = function _zeroBits(w) {
      if (w === 0)
        return 26;
      var t = w;
      var r2 = 0;
      if ((t & 8191) === 0) {
        r2 += 13;
        t >>>= 13;
      }
      if ((t & 127) === 0) {
        r2 += 7;
        t >>>= 7;
      }
      if ((t & 15) === 0) {
        r2 += 4;
        t >>>= 4;
      }
      if ((t & 3) === 0) {
        r2 += 2;
        t >>>= 2;
      }
      if ((t & 1) === 0) {
        r2++;
      }
      return r2;
    };
    BN2.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];
      var hi = this._countBits(w);
      return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
      var w = new Array(num.bitLength());
      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = (num.words[off] & 1 << wbit) >>> wbit;
      }
      return w;
    }
    BN2.prototype.zeroBits = function zeroBits() {
      if (this.isZero())
        return 0;
      var r2 = 0;
      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);
        r2 += b;
        if (b !== 26)
          break;
      }
      return r2;
    };
    BN2.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };
    BN2.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }
      return this.clone();
    };
    BN2.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }
      return this.clone();
    };
    BN2.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    };
    BN2.prototype.neg = function neg6() {
      return this.clone().ineg();
    };
    BN2.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    };
    BN2.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }
      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }
      return this.strip();
    };
    BN2.prototype.ior = function ior(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuor(num);
    };
    BN2.prototype.or = function or2(num) {
      if (this.length > num.length)
        return this.clone().ior(num);
      return num.clone().ior(this);
    };
    BN2.prototype.uor = function uor(num) {
      if (this.length > num.length)
        return this.clone().iuor(num);
      return num.clone().iuor(this);
    };
    BN2.prototype.iuand = function iuand(num) {
      var b;
      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }
      this.length = b.length;
      return this.strip();
    };
    BN2.prototype.iand = function iand(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuand(num);
    };
    BN2.prototype.and = function and(num) {
      if (this.length > num.length)
        return this.clone().iand(num);
      return num.clone().iand(this);
    };
    BN2.prototype.uand = function uand(num) {
      if (this.length > num.length)
        return this.clone().iuand(num);
      return num.clone().iuand(this);
    };
    BN2.prototype.iuxor = function iuxor(num) {
      var a;
      var b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }
      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = a.length;
      return this.strip();
    };
    BN2.prototype.ixor = function ixor(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuxor(num);
    };
    BN2.prototype.xor = function xor4(num) {
      if (this.length > num.length)
        return this.clone().ixor(num);
      return num.clone().ixor(this);
    };
    BN2.prototype.uxor = function uxor(num) {
      if (this.length > num.length)
        return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    };
    BN2.prototype.inotn = function inotn(width) {
      assert2(typeof width === "number" && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26;
      this._expand(bytesNeeded);
      if (bitsLeft > 0) {
        bytesNeeded--;
      }
      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 67108863;
      }
      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
      }
      return this.strip();
    };
    BN2.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    };
    BN2.prototype.setn = function setn(bit, val) {
      assert2(typeof bit === "number" && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;
      this._expand(off + 1);
      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }
      return this.strip();
    };
    BN2.prototype.iadd = function iadd(num) {
      var r2;
      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r2 = this.isub(num);
        this.negative ^= 1;
        return this._normSign();
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r2 = this.isub(num);
        num.negative = 1;
        return r2._normSign();
      }
      var a, b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r2 = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r2 = (a.words[i] | 0) + carry;
        this.words[i] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      this.length = a.length;
      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++;
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      return this;
    };
    BN2.prototype.add = function add7(num) {
      var res;
      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }
      if (this.length > num.length)
        return this.clone().iadd(num);
      return num.clone().iadd(this);
    };
    BN2.prototype.isub = function isub(num) {
      if (num.negative !== 0) {
        num.negative = 0;
        var r2 = this.iadd(num);
        num.negative = 1;
        return r2._normSign();
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      }
      var cmp = this.cmp(num);
      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      var a, b;
      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r2 = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r2 >> 26;
        this.words[i] = r2 & 67108863;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r2 = (a.words[i] | 0) + carry;
        carry = r2 >> 26;
        this.words[i] = r2 & 67108863;
      }
      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = Math.max(this.length, i);
      if (a !== this) {
        this.negative = 1;
      }
      return this.strip();
    };
    BN2.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };
    function smallMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      var len = self2.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0;
      var a = self2.words[0] | 0;
      var b = num.words[0] | 0;
      var r2 = a * b;
      var lo = r2 & 67108863;
      var carry = r2 / 67108864 | 0;
      out.words[0] = lo;
      for (var k = 1; k < len; k++) {
        var ncarry = carry >>> 26;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self2.words[i] | 0;
          b = num.words[j] | 0;
          r2 = a * b + rword;
          ncarry += r2 / 67108864 | 0;
          rword = r2 & 67108863;
        }
        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }
      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }
      return out.strip();
    }
    var comb10MulTo = function comb10MulTo2(self2, num, out) {
      var a = self2.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 8191;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 8191;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 8191;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 8191;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 8191;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 8191;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 8191;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 8191;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 8191;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 8191;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 8191;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 8191;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 8191;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 8191;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 8191;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 8191;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 8191;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 8191;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 8191;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 8191;
      var bh9 = b9 >>> 13;
      out.negative = self2.negative ^ num.negative;
      out.length = 19;
      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 67108863;
      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 67108863;
      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 67108863;
      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 67108863;
      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 67108863;
      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 67108863;
      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 67108863;
      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 67108863;
      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 67108863;
      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 67108863;
      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 67108863;
      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 67108863;
      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 67108863;
      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 67108863;
      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 67108863;
      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 67108863;
      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 67108863;
      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 67108863;
      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 67108863;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;
      if (c !== 0) {
        o[19] = c;
        out.length++;
      }
      return out;
    };
    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }
    function bigMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      out.length = self2.length + num.length;
      var carry = 0;
      var hncarry = 0;
      for (var k = 0; k < out.length - 1; k++) {
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self2.words[i] | 0;
          var b = num.words[j] | 0;
          var r2 = a * b;
          var lo = r2 & 67108863;
          ncarry = ncarry + (r2 / 67108864 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 67108863;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 67108863;
        }
        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }
      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }
      return out.strip();
    }
    function jumboMulTo(self2, num, out) {
      var fftm = new FFTM();
      return fftm.mulp(self2, num, out);
    }
    BN2.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;
      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }
      return res;
    };
    function FFTM(x, y) {
      this.x = x;
      this.y = y;
    }
    FFTM.prototype.makeRBT = function makeRBT(N10) {
      var t = new Array(N10);
      var l = BN2.prototype._countBits(N10) - 1;
      for (var i = 0; i < N10; i++) {
        t[i] = this.revBin(i, l, N10);
      }
      return t;
    };
    FFTM.prototype.revBin = function revBin(x, l, N10) {
      if (x === 0 || x === N10 - 1)
        return x;
      var rb = 0;
      for (var i = 0; i < l; i++) {
        rb |= (x & 1) << l - i - 1;
        x >>= 1;
      }
      return rb;
    };
    FFTM.prototype.permute = function permute2(rbt, rws, iws, rtws, itws, N10) {
      for (var i = 0; i < N10; i++) {
        rtws[i] = rws[rbt[i]];
        itws[i] = iws[rbt[i]];
      }
    };
    FFTM.prototype.transform = function transform(rws, iws, rtws, itws, N10, rbt) {
      this.permute(rbt, rws, iws, rtws, itws, N10);
      for (var s2 = 1; s2 < N10; s2 <<= 1) {
        var l = s2 << 1;
        var rtwdf = Math.cos(2 * Math.PI / l);
        var itwdf = Math.sin(2 * Math.PI / l);
        for (var p = 0; p < N10; p += l) {
          var rtwdf_ = rtwdf;
          var itwdf_ = itwdf;
          for (var j = 0; j < s2; j++) {
            var re = rtws[p + j];
            var ie = itws[p + j];
            var ro = rtws[p + j + s2];
            var io = itws[p + j + s2];
            var rx = rtwdf_ * ro - itwdf_ * io;
            io = rtwdf_ * io + itwdf_ * ro;
            ro = rx;
            rtws[p + j] = re + ro;
            itws[p + j] = ie + io;
            rtws[p + j + s2] = re - ro;
            itws[p + j + s2] = ie - io;
            if (j !== l) {
              rx = rtwdf * rtwdf_ - itwdf * itwdf_;
              itwdf_ = rtwdf * itwdf_ + itwdf * rtwdf_;
              rtwdf_ = rx;
            }
          }
        }
      }
    };
    FFTM.prototype.guessLen13b = function guessLen13b(n, m) {
      var N10 = Math.max(m, n) | 1;
      var odd = N10 & 1;
      var i = 0;
      for (N10 = N10 / 2 | 0; N10; N10 = N10 >>> 1) {
        i++;
      }
      return 1 << i + 1 + odd;
    };
    FFTM.prototype.conjugate = function conjugate(rws, iws, N10) {
      if (N10 <= 1)
        return;
      for (var i = 0; i < N10 / 2; i++) {
        var t = rws[i];
        rws[i] = rws[N10 - i - 1];
        rws[N10 - i - 1] = t;
        t = iws[i];
        iws[i] = -iws[N10 - i - 1];
        iws[N10 - i - 1] = -t;
      }
    };
    FFTM.prototype.normalize13b = function normalize13b(ws, N10) {
      var carry = 0;
      for (var i = 0; i < N10 / 2; i++) {
        var w = Math.round(ws[2 * i + 1] / N10) * 8192 + Math.round(ws[2 * i] / N10) + carry;
        ws[i] = w & 67108863;
        if (w < 67108864) {
          carry = 0;
        } else {
          carry = w / 67108864 | 0;
        }
      }
      return ws;
    };
    FFTM.prototype.convert13b = function convert13b(ws, len, rws, N10) {
      var carry = 0;
      for (var i = 0; i < len; i++) {
        carry = carry + (ws[i] | 0);
        rws[2 * i] = carry & 8191;
        carry = carry >>> 13;
        rws[2 * i + 1] = carry & 8191;
        carry = carry >>> 13;
      }
      for (i = 2 * len; i < N10; ++i) {
        rws[i] = 0;
      }
      assert2(carry === 0);
      assert2((carry & ~8191) === 0);
    };
    FFTM.prototype.stub = function stub(N10) {
      var ph = new Array(N10);
      for (var i = 0; i < N10; i++) {
        ph[i] = 0;
      }
      return ph;
    };
    FFTM.prototype.mulp = function mulp(x, y, out) {
      var N10 = 2 * this.guessLen13b(x.length, y.length);
      var rbt = this.makeRBT(N10);
      var _ = this.stub(N10);
      var rws = new Array(N10);
      var rwst = new Array(N10);
      var iwst = new Array(N10);
      var nrws = new Array(N10);
      var nrwst = new Array(N10);
      var niwst = new Array(N10);
      var rmws = out.words;
      rmws.length = N10;
      this.convert13b(x.words, x.length, rws, N10);
      this.convert13b(y.words, y.length, nrws, N10);
      this.transform(rws, _, rwst, iwst, N10, rbt);
      this.transform(nrws, _, nrwst, niwst, N10, rbt);
      for (var i = 0; i < N10; i++) {
        var rx = rwst[i] * nrwst[i] - iwst[i] * niwst[i];
        iwst[i] = rwst[i] * niwst[i] + iwst[i] * nrwst[i];
        rwst[i] = rx;
      }
      this.conjugate(rwst, iwst, N10);
      this.transform(rwst, iwst, rmws, _, N10, rbt);
      this.conjugate(rmws, _, N10);
      this.normalize13b(rmws, N10);
      out.negative = x.negative ^ y.negative;
      out.length = x.length + y.length;
      return out.strip();
    };
    BN2.prototype.mul = function mul7(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    };
    BN2.prototype.mulf = function mulf(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    };
    BN2.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };
    BN2.prototype.imuln = function imuln(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 67108863) + (carry & 67108863);
        carry >>= 26;
        carry += w / 67108864 | 0;
        carry += lo >>> 26;
        this.words[i] = lo & 67108863;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    };
    BN2.prototype.sqr = function sqr() {
      return this.mul(this);
    };
    BN2.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    };
    BN2.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0)
        return new BN2(1);
      var res = this;
      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0)
          break;
      }
      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0)
            continue;
          res = res.mul(q);
        }
      }
      return res;
    };
    BN2.prototype.iushln = function iushln(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
      var i;
      if (r2 !== 0) {
        var carry = 0;
        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r2;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r2;
        }
        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }
      if (s2 !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s2] = this.words[i];
        }
        for (i = 0; i < s2; i++) {
          this.words[i] = 0;
        }
        this.length += s2;
      }
      return this.strip();
    };
    BN2.prototype.ishln = function ishln(bits) {
      assert2(this.negative === 0);
      return this.iushln(bits);
    };
    BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert2(typeof bits === "number" && bits >= 0);
      var h;
      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }
      var r2 = bits % 26;
      var s2 = Math.min((bits - r2) / 26, this.length);
      var mask = 67108863 ^ 67108863 >>> r2 << r2;
      var maskedWords = extended;
      h -= s2;
      h = Math.max(0, h);
      if (maskedWords) {
        for (var i = 0; i < s2; i++) {
          maskedWords.words[i] = this.words[i];
        }
        maskedWords.length = s2;
      }
      if (s2 === 0)
        ;
      else if (this.length > s2) {
        this.length -= s2;
        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s2];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      var carry = 0;
      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r2 | word >>> r2;
        carry = word & mask;
      }
      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this.strip();
    };
    BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
      assert2(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    };
    BN2.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };
    BN2.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    };
    BN2.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };
    BN2.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    };
    BN2.prototype.testn = function testn(bit) {
      assert2(typeof bit === "number" && bit >= 0);
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q = 1 << r2;
      if (this.length <= s2)
        return false;
      var w = this.words[s2];
      return !!(w & q);
    };
    BN2.prototype.imaskn = function imaskn(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      assert2(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= s2) {
        return this;
      }
      if (r2 !== 0) {
        s2++;
      }
      this.length = Math.min(s2, this.length);
      if (r2 !== 0) {
        var mask = 67108863 ^ 67108863 >>> r2 << r2;
        this.words[this.length - 1] &= mask;
      }
      return this.strip();
    };
    BN2.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    };
    BN2.prototype.iaddn = function iaddn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0)
        return this.isubn(-num);
      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) < num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }
        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      }
      return this._iaddn(num);
    };
    BN2.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num;
      for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
        this.words[i] -= 67108864;
        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }
      this.length = Math.max(this.length, i + 1);
      return this;
    };
    BN2.prototype.isubn = function isubn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0)
        return this.iaddn(-num);
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }
      this.words[0] -= num;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 67108864;
          this.words[i + 1] -= 1;
        }
      }
      return this.strip();
    };
    BN2.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };
    BN2.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };
    BN2.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };
    BN2.prototype.abs = function abs() {
      return this.clone().iabs();
    };
    BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul7, shift) {
      var len = num.length + shift;
      var i;
      this._expand(len);
      var w;
      var carry = 0;
      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul7;
        w -= right & 67108863;
        carry = (w >> 26) - (right / 67108864 | 0);
        this.words[i + shift] = w & 67108863;
      }
      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 67108863;
      }
      if (carry === 0)
        return this.strip();
      assert2(carry === -1);
      carry = 0;
      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 67108863;
      }
      this.negative = 1;
      return this.strip();
    };
    BN2.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num;
      var bhi = b.words[b.length - 1] | 0;
      var bhiBits = this._countBits(bhi);
      shift = 26 - bhiBits;
      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      }
      var m = a.length - b.length;
      var q;
      if (mode !== "mod") {
        q = new BN2(null);
        q.length = m + 1;
        q.words = new Array(q.length);
        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }
      var diff = a.clone()._ishlnsubmul(b, 1, m);
      if (diff.negative === 0) {
        a = diff;
        if (q) {
          q.words[m] = 1;
        }
      }
      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
        qj = Math.min(qj / bhi | 0, 67108863);
        a._ishlnsubmul(b, qj, j);
        while (a.negative !== 0) {
          qj--;
          a.negative = 0;
          a._ishlnsubmul(b, 1, j);
          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }
        if (q) {
          q.words[j] = qj;
        }
      }
      if (q) {
        q.strip();
      }
      a.strip();
      if (mode !== "div" && shift !== 0) {
        a.iushrn(shift);
      }
      return {
        div: q || null,
        mod: a
      };
    };
    BN2.prototype.divmod = function divmod(num, mode, positive) {
      assert2(!num.isZero());
      if (this.isZero()) {
        return {
          div: new BN2(0),
          mod: new BN2(0)
        };
      }
      var div, mod, res;
      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }
        return {
          div,
          mod
        };
      }
      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        return {
          div,
          mod: res.mod
        };
      }
      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }
        return {
          div: res.div,
          mod
        };
      }
      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN2(0),
          mod: this
        };
      }
      if (num.length === 1) {
        if (mode === "div") {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }
        if (mode === "mod") {
          return {
            div: null,
            mod: new BN2(this.modn(num.words[0]))
          };
        }
        return {
          div: this.divn(num.words[0]),
          mod: new BN2(this.modn(num.words[0]))
        };
      }
      return this._wordDiv(num, mode);
    };
    BN2.prototype.div = function div(num) {
      return this.divmod(num, "div", false).div;
    };
    BN2.prototype.mod = function mod(num) {
      return this.divmod(num, "mod", false).mod;
    };
    BN2.prototype.umod = function umod(num) {
      return this.divmod(num, "mod", true).mod;
    };
    BN2.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num);
      if (dm.mod.isZero())
        return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half);
      if (cmp < 0 || r2 === 1 && cmp === 0)
        return dm.div;
      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN2.prototype.modn = function modn(num) {
      assert2(num <= 67108863);
      var p = (1 << 26) % num;
      var acc = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }
      return acc;
    };
    BN2.prototype.idivn = function idivn(num) {
      assert2(num <= 67108863);
      var carry = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 67108864;
        this.words[i] = w / num | 0;
        carry = w % num;
      }
      return this.strip();
    };
    BN2.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };
    BN2.prototype.egcd = function egcd(p) {
      assert2(p.negative === 0);
      assert2(!p.isZero());
      var x = this;
      var y = p.clone();
      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      }
      var A = new BN2(1);
      var B = new BN2(0);
      var C = new BN2(0);
      var D = new BN2(1);
      var g = 0;
      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }
      var yp = y.clone();
      var xp = x.clone();
      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          x.iushrn(i);
          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }
            A.iushrn(1);
            B.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          y.iushrn(j);
          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }
            C.iushrn(1);
            D.iushrn(1);
          }
        }
        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }
      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    };
    BN2.prototype._invmp = function _invmp(p) {
      assert2(p.negative === 0);
      assert2(!p.isZero());
      var a = this;
      var b = p.clone();
      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }
      var x1 = new BN2(1);
      var x2 = new BN2(0);
      var delta = b.clone();
      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          a.iushrn(i);
          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }
            x1.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          b.iushrn(j);
          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }
            x2.iushrn(1);
          }
        }
        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }
      var res;
      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }
      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }
      return res;
    };
    BN2.prototype.gcd = function gcd(num) {
      if (this.isZero())
        return num.abs();
      if (num.isZero())
        return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0;
      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }
      do {
        while (a.isEven()) {
          a.iushrn(1);
        }
        while (b.isEven()) {
          b.iushrn(1);
        }
        var r2 = a.cmp(b);
        if (r2 < 0) {
          var t = a;
          a = b;
          b = t;
        } else if (r2 === 0 || b.cmpn(1) === 0) {
          break;
        }
        a.isub(b);
      } while (true);
      return b.iushln(shift);
    };
    BN2.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };
    BN2.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };
    BN2.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    };
    BN2.prototype.andln = function andln(num) {
      return this.words[0] & num;
    };
    BN2.prototype.bincn = function bincn(bit) {
      assert2(typeof bit === "number");
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q = 1 << r2;
      if (this.length <= s2) {
        this._expand(s2 + 1);
        this.words[s2] |= q;
        return this;
      }
      var carry = q;
      for (var i = s2; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 67108863;
        this.words[i] = w;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };
    BN2.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative)
        return -1;
      if (this.negative === 0 && negative)
        return 1;
      this.strip();
      var res;
      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }
        assert2(num <= 67108863, "Number is too big");
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0)
        return -1;
      if (this.negative === 0 && num.negative !== 0)
        return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.ucmp = function ucmp(num) {
      if (this.length > num.length)
        return 1;
      if (this.length < num.length)
        return -1;
      var res = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b)
          continue;
        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }
        break;
      }
      return res;
    };
    BN2.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };
    BN2.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };
    BN2.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };
    BN2.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };
    BN2.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };
    BN2.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };
    BN2.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };
    BN2.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };
    BN2.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };
    BN2.prototype.eq = function eq9(num) {
      return this.cmp(num) === 0;
    };
    BN2.red = function red2(num) {
      return new Red(num);
    };
    BN2.prototype.toRed = function toRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      assert2(this.negative === 0, "red works only with positives");
      return ctx.convertTo(this)._forceRed(ctx);
    };
    BN2.prototype.fromRed = function fromRed() {
      assert2(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    };
    BN2.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };
    BN2.prototype.forceRed = function forceRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      return this._forceRed(ctx);
    };
    BN2.prototype.redAdd = function redAdd(num) {
      assert2(this.red, "redAdd works only with red numbers");
      return this.red.add(this, num);
    };
    BN2.prototype.redIAdd = function redIAdd(num) {
      assert2(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, num);
    };
    BN2.prototype.redSub = function redSub(num) {
      assert2(this.red, "redSub works only with red numbers");
      return this.red.sub(this, num);
    };
    BN2.prototype.redISub = function redISub(num) {
      assert2(this.red, "redISub works only with red numbers");
      return this.red.isub(this, num);
    };
    BN2.prototype.redShl = function redShl(num) {
      assert2(this.red, "redShl works only with red numbers");
      return this.red.shl(this, num);
    };
    BN2.prototype.redMul = function redMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.mul(this, num);
    };
    BN2.prototype.redIMul = function redIMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.imul(this, num);
    };
    BN2.prototype.redSqr = function redSqr() {
      assert2(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    };
    BN2.prototype.redISqr = function redISqr() {
      assert2(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    };
    BN2.prototype.redSqrt = function redSqrt() {
      assert2(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    };
    BN2.prototype.redInvm = function redInvm() {
      assert2(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    };
    BN2.prototype.redNeg = function redNeg() {
      assert2(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    };
    BN2.prototype.redPow = function redPow(num) {
      assert2(this.red && !num.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, num);
    };
    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function MPrime(name2, p) {
      this.name = name2;
      this.p = new BN2(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN2(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN2(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
      var r2 = num;
      var rlen;
      do {
        this.split(r2, this.tmp);
        r2 = this.imulK(r2);
        r2 = r2.iadd(this.tmp);
        rlen = r2.bitLength();
      } while (rlen > this.n);
      var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
      if (cmp === 0) {
        r2.words[0] = 0;
        r2.length = 1;
      } else if (cmp > 0) {
        r2.isub(this.p);
      } else {
        if (r2.strip !== void 0) {
          r2.strip();
        } else {
          r2._strip();
        }
      }
      return r2;
    };
    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };
    function K256() {
      MPrime.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    inherits2(K256, MPrime);
    K256.prototype.split = function split(input, output) {
      var mask = 4194303;
      var outLen = Math.min(input.length, 9);
      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }
      output.length = outLen;
      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      }
      var prev = input.words[9];
      output.words[output.length++] = prev & mask;
      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }
      prev >>>= 22;
      input.words[i - 10] = prev;
      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };
    K256.prototype.imulK = function imulK(num) {
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2;
      var lo = 0;
      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 977;
        num.words[i] = lo & 67108863;
        lo = w * 64 + (lo / 67108864 | 0);
      }
      if (num.words[num.length - 1] === 0) {
        num.length--;
        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }
      return num;
    };
    function P224() {
      MPrime.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    inherits2(P224, MPrime);
    function P192() {
      MPrime.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    inherits2(P192, MPrime);
    function P25519() {
      MPrime.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    inherits2(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
      var carry = 0;
      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 19 + carry;
        var lo = hi & 67108863;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }
      if (carry !== 0) {
        num.words[num.length++] = carry;
      }
      return num;
    };
    BN2._prime = function prime(name2) {
      if (primes[name2])
        return primes[name2];
      var prime2;
      if (name2 === "k256") {
        prime2 = new K256();
      } else if (name2 === "p224") {
        prime2 = new P224();
      } else if (name2 === "p192") {
        prime2 = new P192();
      } else if (name2 === "p25519") {
        prime2 = new P25519();
      } else {
        throw new Error("Unknown prime " + name2);
      }
      primes[name2] = prime2;
      return prime2;
    };
    function Red(m) {
      if (typeof m === "string") {
        var prime = BN2._prime(m);
        this.m = prime.p;
        this.prime = prime;
      } else {
        assert2(m.gtn(1), "modulus must be greater than 1");
        this.m = m;
        this.prime = null;
      }
    }
    Red.prototype._verify1 = function _verify1(a) {
      assert2(a.negative === 0, "red works only with positives");
      assert2(a.red, "red works only with red numbers");
    };
    Red.prototype._verify2 = function _verify2(a, b) {
      assert2((a.negative | b.negative) === 0, "red works only with positives");
      assert2(
        a.red && a.red === b.red,
        "red works only with red numbers"
      );
    };
    Red.prototype.imod = function imod(a) {
      if (this.prime)
        return this.prime.ireduce(a)._forceRed(this);
      return a.umod(this.m)._forceRed(this);
    };
    Red.prototype.neg = function neg6(a) {
      if (a.isZero()) {
        return a.clone();
      }
      return this.m.sub(a)._forceRed(this);
    };
    Red.prototype.add = function add7(a, b) {
      this._verify2(a, b);
      var res = a.add(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.iadd = function iadd(a, b) {
      this._verify2(a, b);
      var res = a.iadd(b);
      if (res.cmp(this.m) >= 0) {
        res.isub(this.m);
      }
      return res;
    };
    Red.prototype.sub = function sub(a, b) {
      this._verify2(a, b);
      var res = a.sub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Red.prototype.isub = function isub(a, b) {
      this._verify2(a, b);
      var res = a.isub(b);
      if (res.cmpn(0) < 0) {
        res.iadd(this.m);
      }
      return res;
    };
    Red.prototype.shl = function shl(a, num) {
      this._verify1(a);
      return this.imod(a.ushln(num));
    };
    Red.prototype.imul = function imul(a, b) {
      this._verify2(a, b);
      return this.imod(a.imul(b));
    };
    Red.prototype.mul = function mul7(a, b) {
      this._verify2(a, b);
      return this.imod(a.mul(b));
    };
    Red.prototype.isqr = function isqr(a) {
      return this.imul(a, a.clone());
    };
    Red.prototype.sqr = function sqr(a) {
      return this.mul(a, a);
    };
    Red.prototype.sqrt = function sqrt(a) {
      if (a.isZero())
        return a.clone();
      var mod3 = this.m.andln(3);
      assert2(mod3 % 2 === 1);
      if (mod3 === 3) {
        var pow = this.m.add(new BN2(1)).iushrn(2);
        return this.pow(a, pow);
      }
      var q = this.m.subn(1);
      var s2 = 0;
      while (!q.isZero() && q.andln(1) === 0) {
        s2++;
        q.iushrn(1);
      }
      assert2(!q.isZero());
      var one = new BN2(1).toRed(this);
      var nOne = one.redNeg();
      var lpow = this.m.subn(1).iushrn(1);
      var z = this.m.bitLength();
      z = new BN2(2 * z * z).toRed(this);
      while (this.pow(z, lpow).cmp(nOne) !== 0) {
        z.redIAdd(nOne);
      }
      var c = this.pow(z, q);
      var r2 = this.pow(a, q.addn(1).iushrn(1));
      var t = this.pow(a, q);
      var m = s2;
      while (t.cmp(one) !== 0) {
        var tmp = t;
        for (var i = 0; tmp.cmp(one) !== 0; i++) {
          tmp = tmp.redSqr();
        }
        assert2(i < m);
        var b = this.pow(c, new BN2(1).iushln(m - i - 1));
        r2 = r2.redMul(b);
        c = b.redSqr();
        t = t.redMul(c);
        m = i;
      }
      return r2;
    };
    Red.prototype.invm = function invm(a) {
      var inv = a._invmp(this.m);
      if (inv.negative !== 0) {
        inv.negative = 0;
        return this.imod(inv).redNeg();
      } else {
        return this.imod(inv);
      }
    };
    Red.prototype.pow = function pow(a, num) {
      if (num.isZero())
        return new BN2(1).toRed(this);
      if (num.cmpn(1) === 0)
        return a.clone();
      var windowSize = 4;
      var wnd = new Array(1 << windowSize);
      wnd[0] = new BN2(1).toRed(this);
      wnd[1] = a;
      for (var i = 2; i < wnd.length; i++) {
        wnd[i] = this.mul(wnd[i - 1], a);
      }
      var res = wnd[0];
      var current = 0;
      var currentLen = 0;
      var start = num.bitLength() % 26;
      if (start === 0) {
        start = 26;
      }
      for (i = num.length - 1; i >= 0; i--) {
        var word = num.words[i];
        for (var j = start - 1; j >= 0; j--) {
          var bit = word >> j & 1;
          if (res !== wnd[0]) {
            res = this.sqr(res);
          }
          if (bit === 0 && current === 0) {
            currentLen = 0;
            continue;
          }
          current <<= 1;
          current |= bit;
          currentLen++;
          if (currentLen !== windowSize && (i !== 0 || j !== 0))
            continue;
          res = this.mul(res, wnd[current]);
          currentLen = 0;
          current = 0;
        }
        start = 26;
      }
      return res;
    };
    Red.prototype.convertTo = function convertTo(num) {
      var r2 = num.umod(this.m);
      return r2 === num ? r2.clone() : r2;
    };
    Red.prototype.convertFrom = function convertFrom(num) {
      var res = num.clone();
      res.red = null;
      return res;
    };
    BN2.mont = function mont2(num) {
      return new Mont(num);
    };
    function Mont(m) {
      Red.call(this, m);
      this.shift = this.m.bitLength();
      if (this.shift % 26 !== 0) {
        this.shift += 26 - this.shift % 26;
      }
      this.r = new BN2(1).iushln(this.shift);
      this.r2 = this.imod(this.r.sqr());
      this.rinv = this.r._invmp(this.m);
      this.minv = this.rinv.mul(this.r).isubn(1).div(this.m);
      this.minv = this.minv.umod(this.r);
      this.minv = this.r.sub(this.minv);
    }
    inherits2(Mont, Red);
    Mont.prototype.convertTo = function convertTo(num) {
      return this.imod(num.ushln(this.shift));
    };
    Mont.prototype.convertFrom = function convertFrom(num) {
      var r2 = this.imod(num.mul(this.rinv));
      r2.red = null;
      return r2;
    };
    Mont.prototype.imul = function imul(a, b) {
      if (a.isZero() || b.isZero()) {
        a.words[0] = 0;
        a.length = 1;
        return a;
      }
      var t = a.imul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.mul = function mul7(a, b) {
      if (a.isZero() || b.isZero())
        return new BN2(0)._forceRed(this);
      var t = a.mul(b);
      var c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m);
      var u = t.isub(c).iushrn(this.shift);
      var res = u;
      if (u.cmp(this.m) >= 0) {
        res = u.isub(this.m);
      } else if (u.cmpn(0) < 0) {
        res = u.iadd(this.m);
      }
      return res._forceRed(this);
    };
    Mont.prototype.invm = function invm(a) {
      var res = this.imod(a._invmp(this.m).mul(this.r2));
      return res._forceRed(this);
    };
  })(module, commonjsGlobal);
})(bn$4);
var brorand = { exports: {} };
var hasRequiredBrorand;
function requireBrorand() {
  if (hasRequiredBrorand)
    return brorand.exports;
  hasRequiredBrorand = 1;
  var r2;
  brorand.exports = function rand2(len) {
    if (!r2)
      r2 = new Rand(null);
    return r2.generate(len);
  };
  function Rand(rand2) {
    this.rand = rand2;
  }
  brorand.exports.Rand = Rand;
  Rand.prototype.generate = function generate3(len) {
    return this._rand(len);
  };
  Rand.prototype._rand = function _rand(n) {
    if (this.rand.getBytes)
      return this.rand.getBytes(n);
    var res = new Uint8Array(n);
    for (var i = 0; i < res.length; i++)
      res[i] = this.rand.getByte();
    return res;
  };
  if (typeof self === "object") {
    if (self.crypto && self.crypto.getRandomValues) {
      Rand.prototype._rand = function _rand(n) {
        var arr = new Uint8Array(n);
        self.crypto.getRandomValues(arr);
        return arr;
      };
    } else if (self.msCrypto && self.msCrypto.getRandomValues) {
      Rand.prototype._rand = function _rand(n) {
        var arr = new Uint8Array(n);
        self.msCrypto.getRandomValues(arr);
        return arr;
      };
    } else if (typeof window === "object") {
      Rand.prototype._rand = function() {
        throw new Error("Not implemented yet");
      };
    }
  } else {
    try {
      var crypto2 = requireCryptoBrowserify();
      if (typeof crypto2.randomBytes !== "function")
        throw new Error("Not supported");
      Rand.prototype._rand = function _rand(n) {
        return crypto2.randomBytes(n);
      };
    } catch (e) {
    }
  }
  return brorand.exports;
}
var mr;
var hasRequiredMr;
function requireMr() {
  if (hasRequiredMr)
    return mr;
  hasRequiredMr = 1;
  var bn2 = bn$4.exports;
  var brorand2 = requireBrorand();
  function MillerRabin(rand2) {
    this.rand = rand2 || new brorand2.Rand();
  }
  mr = MillerRabin;
  MillerRabin.create = function create5(rand2) {
    return new MillerRabin(rand2);
  };
  MillerRabin.prototype._randbelow = function _randbelow(n) {
    var len = n.bitLength();
    var min_bytes = Math.ceil(len / 8);
    do
      var a = new bn2(this.rand.generate(min_bytes));
    while (a.cmp(n) >= 0);
    return a;
  };
  MillerRabin.prototype._randrange = function _randrange(start, stop) {
    var size = stop.sub(start);
    return start.add(this._randbelow(size));
  };
  MillerRabin.prototype.test = function test(n, k, cb) {
    var len = n.bitLength();
    var red2 = bn2.mont(n);
    var rone = new bn2(1).toRed(red2);
    if (!k)
      k = Math.max(1, len / 48 | 0);
    var n1 = n.subn(1);
    for (var s2 = 0; !n1.testn(s2); s2++) {
    }
    var d = n.shrn(s2);
    var rn1 = n1.toRed(red2);
    var prime = true;
    for (; k > 0; k--) {
      var a = this._randrange(new bn2(2), n1);
      if (cb)
        cb(a);
      var x = a.toRed(red2).redPow(d);
      if (x.cmp(rone) === 0 || x.cmp(rn1) === 0)
        continue;
      for (var i = 1; i < s2; i++) {
        x = x.redSqr();
        if (x.cmp(rone) === 0)
          return false;
        if (x.cmp(rn1) === 0)
          break;
      }
      if (i === s2)
        return false;
    }
    return prime;
  };
  MillerRabin.prototype.getDivisor = function getDivisor(n, k) {
    var len = n.bitLength();
    var red2 = bn2.mont(n);
    var rone = new bn2(1).toRed(red2);
    if (!k)
      k = Math.max(1, len / 48 | 0);
    var n1 = n.subn(1);
    for (var s2 = 0; !n1.testn(s2); s2++) {
    }
    var d = n.shrn(s2);
    var rn1 = n1.toRed(red2);
    for (; k > 0; k--) {
      var a = this._randrange(new bn2(2), n1);
      var g = n.gcd(a);
      if (g.cmpn(1) !== 0)
        return g;
      var x = a.toRed(red2).redPow(d);
      if (x.cmp(rone) === 0 || x.cmp(rn1) === 0)
        continue;
      for (var i = 1; i < s2; i++) {
        x = x.redSqr();
        if (x.cmp(rone) === 0)
          return x.fromRed().subn(1).gcd(n);
        if (x.cmp(rn1) === 0)
          break;
      }
      if (i === s2) {
        x = x.redSqr();
        return x.fromRed().subn(1).gcd(n);
      }
    }
    return false;
  };
  return mr;
}
var generatePrime;
var hasRequiredGeneratePrime;
function requireGeneratePrime() {
  if (hasRequiredGeneratePrime)
    return generatePrime;
  hasRequiredGeneratePrime = 1;
  var randomBytes2 = browser$e.exports;
  generatePrime = findPrime;
  findPrime.simpleSieve = simpleSieve;
  findPrime.fermatTest = fermatTest;
  var BN2 = bn$4.exports;
  var TWENTYFOUR = new BN2(24);
  var MillerRabin = requireMr();
  var millerRabin = new MillerRabin();
  var ONE2 = new BN2(1);
  var TWO = new BN2(2);
  var FIVE = new BN2(5);
  new BN2(16);
  new BN2(8);
  var TEN = new BN2(10);
  var THREE = new BN2(3);
  new BN2(7);
  var ELEVEN = new BN2(11);
  var FOUR = new BN2(4);
  new BN2(12);
  var primes = null;
  function _getPrimes() {
    if (primes !== null)
      return primes;
    var limit = 1048576;
    var res = [];
    res[0] = 2;
    for (var i = 1, k = 3; k < limit; k += 2) {
      var sqrt = Math.ceil(Math.sqrt(k));
      for (var j = 0; j < i && res[j] <= sqrt; j++)
        if (k % res[j] === 0)
          break;
      if (i !== j && res[j] <= sqrt)
        continue;
      res[i++] = k;
    }
    primes = res;
    return res;
  }
  function simpleSieve(p) {
    var primes2 = _getPrimes();
    for (var i = 0; i < primes2.length; i++)
      if (p.modn(primes2[i]) === 0) {
        if (p.cmpn(primes2[i]) === 0) {
          return true;
        } else {
          return false;
        }
      }
    return true;
  }
  function fermatTest(p) {
    var red2 = BN2.mont(p);
    return TWO.toRed(red2).redPow(p.subn(1)).fromRed().cmpn(1) === 0;
  }
  function findPrime(bits, gen) {
    if (bits < 16) {
      if (gen === 2 || gen === 5) {
        return new BN2([140, 123]);
      } else {
        return new BN2([140, 39]);
      }
    }
    gen = new BN2(gen);
    var num, n2;
    while (true) {
      num = new BN2(randomBytes2(Math.ceil(bits / 8)));
      while (num.bitLength() > bits) {
        num.ishrn(1);
      }
      if (num.isEven()) {
        num.iadd(ONE2);
      }
      if (!num.testn(1)) {
        num.iadd(TWO);
      }
      if (!gen.cmp(TWO)) {
        while (num.mod(TWENTYFOUR).cmp(ELEVEN)) {
          num.iadd(FOUR);
        }
      } else if (!gen.cmp(FIVE)) {
        while (num.mod(TEN).cmp(THREE)) {
          num.iadd(FOUR);
        }
      }
      n2 = num.shrn(1);
      if (simpleSieve(n2) && simpleSieve(num) && fermatTest(n2) && fermatTest(num) && millerRabin.test(n2) && millerRabin.test(num)) {
        return num;
      }
    }
  }
  return generatePrime;
}
const modp1 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
};
const modp2 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
};
const modp5 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
};
const modp14 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
};
const modp15 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
};
const modp16 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
};
const modp17 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
};
const modp18 = {
  gen: "02",
  prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
};
const require$$1$1 = {
  modp1,
  modp2,
  modp5,
  modp14,
  modp15,
  modp16,
  modp17,
  modp18
};
var dh;
var hasRequiredDh;
function requireDh() {
  if (hasRequiredDh)
    return dh;
  hasRequiredDh = 1;
  var BN2 = bn$4.exports;
  var MillerRabin = requireMr();
  var millerRabin = new MillerRabin();
  var TWENTYFOUR = new BN2(24);
  var ELEVEN = new BN2(11);
  var TEN = new BN2(10);
  var THREE = new BN2(3);
  var SEVEN = new BN2(7);
  var primes = requireGeneratePrime();
  var randomBytes2 = browser$e.exports;
  dh = DH;
  function setPublicKey(pub2, enc) {
    enc = enc || "utf8";
    if (!Buffer.isBuffer(pub2)) {
      pub2 = new Buffer(pub2, enc);
    }
    this._pub = new BN2(pub2);
    return this;
  }
  function setPrivateKey(priv2, enc) {
    enc = enc || "utf8";
    if (!Buffer.isBuffer(priv2)) {
      priv2 = new Buffer(priv2, enc);
    }
    this._priv = new BN2(priv2);
    return this;
  }
  var primeCache = {};
  function checkPrime(prime, generator) {
    var gen = generator.toString("hex");
    var hex = [gen, prime.toString(16)].join("_");
    if (hex in primeCache) {
      return primeCache[hex];
    }
    var error3 = 0;
    if (prime.isEven() || !primes.simpleSieve || !primes.fermatTest(prime) || !millerRabin.test(prime)) {
      error3 += 1;
      if (gen === "02" || gen === "05") {
        error3 += 8;
      } else {
        error3 += 4;
      }
      primeCache[hex] = error3;
      return error3;
    }
    if (!millerRabin.test(prime.shrn(1))) {
      error3 += 2;
    }
    var rem;
    switch (gen) {
      case "02":
        if (prime.mod(TWENTYFOUR).cmp(ELEVEN)) {
          error3 += 8;
        }
        break;
      case "05":
        rem = prime.mod(TEN);
        if (rem.cmp(THREE) && rem.cmp(SEVEN)) {
          error3 += 8;
        }
        break;
      default:
        error3 += 4;
    }
    primeCache[hex] = error3;
    return error3;
  }
  function DH(prime, generator, malleable) {
    this.setGenerator(generator);
    this.__prime = new BN2(prime);
    this._prime = BN2.mont(this.__prime);
    this._primeLen = prime.length;
    this._pub = void 0;
    this._priv = void 0;
    this._primeCode = void 0;
    if (malleable) {
      this.setPublicKey = setPublicKey;
      this.setPrivateKey = setPrivateKey;
    } else {
      this._primeCode = 8;
    }
  }
  Object.defineProperty(DH.prototype, "verifyError", {
    enumerable: true,
    get: function() {
      if (typeof this._primeCode !== "number") {
        this._primeCode = checkPrime(this.__prime, this.__gen);
      }
      return this._primeCode;
    }
  });
  DH.prototype.generateKeys = function() {
    if (!this._priv) {
      this._priv = new BN2(randomBytes2(this._primeLen));
    }
    this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed();
    return this.getPublicKey();
  };
  DH.prototype.computeSecret = function(other) {
    other = new BN2(other);
    other = other.toRed(this._prime);
    var secret2 = other.redPow(this._priv).fromRed();
    var out = new Buffer(secret2.toArray());
    var prime = this.getPrime();
    if (out.length < prime.length) {
      var front = new Buffer(prime.length - out.length);
      front.fill(0);
      out = Buffer.concat([front, out]);
    }
    return out;
  };
  DH.prototype.getPublicKey = function getPublicKey(enc) {
    return formatReturnValue(this._pub, enc);
  };
  DH.prototype.getPrivateKey = function getPrivateKey(enc) {
    return formatReturnValue(this._priv, enc);
  };
  DH.prototype.getPrime = function(enc) {
    return formatReturnValue(this.__prime, enc);
  };
  DH.prototype.getGenerator = function(enc) {
    return formatReturnValue(this._gen, enc);
  };
  DH.prototype.setGenerator = function(gen, enc) {
    enc = enc || "utf8";
    if (!Buffer.isBuffer(gen)) {
      gen = new Buffer(gen, enc);
    }
    this.__gen = gen;
    this._gen = new BN2(gen);
    return this;
  };
  function formatReturnValue(bn2, enc) {
    var buf = new Buffer(bn2.toArray());
    if (!enc) {
      return buf;
    } else {
      return buf.toString(enc);
    }
  }
  return dh;
}
var hasRequiredBrowser$2;
function requireBrowser$2() {
  if (hasRequiredBrowser$2)
    return browser$7;
  hasRequiredBrowser$2 = 1;
  var generatePrime2 = requireGeneratePrime();
  var primes = require$$1$1;
  var DH = requireDh();
  function getDiffieHellman(mod) {
    var prime = new Buffer(primes[mod].prime, "hex");
    var gen = new Buffer(primes[mod].gen, "hex");
    return new DH(prime, gen);
  }
  var ENCODINGS = {
    "binary": true,
    "hex": true,
    "base64": true
  };
  function createDiffieHellman(prime, enc, generator, genc) {
    if (Buffer.isBuffer(enc) || ENCODINGS[enc] === void 0) {
      return createDiffieHellman(prime, "binary", enc, generator);
    }
    enc = enc || "binary";
    genc = genc || "binary";
    generator = generator || new Buffer([2]);
    if (!Buffer.isBuffer(generator)) {
      generator = new Buffer(generator, genc);
    }
    if (typeof prime === "number") {
      return new DH(generatePrime2(prime, generator), generator, true);
    }
    if (!Buffer.isBuffer(prime)) {
      prime = new Buffer(prime, enc);
    }
    return new DH(prime, generator, true);
  }
  browser$7.DiffieHellmanGroup = browser$7.createDiffieHellmanGroup = browser$7.getDiffieHellman = getDiffieHellman;
  browser$7.createDiffieHellman = browser$7.DiffieHellman = createDiffieHellman;
  return browser$7;
}
var sign = { exports: {} };
var bn$3 = { exports: {} };
(function(module) {
  (function(module2, exports2) {
    function assert2(val, msg) {
      if (!val)
        throw new Error(msg || "Assertion failed");
    }
    function inherits2(ctor, superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function() {
      };
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
    function BN2(number, base3, endian) {
      if (BN2.isBN(number)) {
        return number;
      }
      this.negative = 0;
      this.words = null;
      this.length = 0;
      this.red = null;
      if (number !== null) {
        if (base3 === "le" || base3 === "be") {
          endian = base3;
          base3 = 10;
        }
        this._init(number || 0, base3 || 10, endian || "be");
      }
    }
    if (typeof module2 === "object") {
      module2.exports = BN2;
    } else {
      exports2.BN = BN2;
    }
    BN2.BN = BN2;
    BN2.wordSize = 26;
    var Buffer2;
    try {
      if (typeof window !== "undefined" && typeof window.Buffer !== "undefined") {
        Buffer2 = window.Buffer;
      } else {
        Buffer2 = require$$0$3.Buffer;
      }
    } catch (e) {
    }
    BN2.isBN = function isBN(num) {
      if (num instanceof BN2) {
        return true;
      }
      return num !== null && typeof num === "object" && num.constructor.wordSize === BN2.wordSize && Array.isArray(num.words);
    };
    BN2.max = function max(left, right) {
      if (left.cmp(right) > 0)
        return left;
      return right;
    };
    BN2.min = function min(left, right) {
      if (left.cmp(right) < 0)
        return left;
      return right;
    };
    BN2.prototype._init = function init6(number, base3, endian) {
      if (typeof number === "number") {
        return this._initNumber(number, base3, endian);
      }
      if (typeof number === "object") {
        return this._initArray(number, base3, endian);
      }
      if (base3 === "hex") {
        base3 = 16;
      }
      assert2(base3 === (base3 | 0) && base3 >= 2 && base3 <= 36);
      number = number.toString().replace(/\s+/g, "");
      var start = 0;
      if (number[0] === "-") {
        start++;
        this.negative = 1;
      }
      if (start < number.length) {
        if (base3 === 16) {
          this._parseHex(number, start, endian);
        } else {
          this._parseBase(number, base3, start);
          if (endian === "le") {
            this._initArray(this.toArray(), base3, endian);
          }
        }
      }
    };
    BN2.prototype._initNumber = function _initNumber(number, base3, endian) {
      if (number < 0) {
        this.negative = 1;
        number = -number;
      }
      if (number < 67108864) {
        this.words = [number & 67108863];
        this.length = 1;
      } else if (number < 4503599627370496) {
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863
        ];
        this.length = 2;
      } else {
        assert2(number < 9007199254740992);
        this.words = [
          number & 67108863,
          number / 67108864 & 67108863,
          1
        ];
        this.length = 3;
      }
      if (endian !== "le")
        return;
      this._initArray(this.toArray(), base3, endian);
    };
    BN2.prototype._initArray = function _initArray(number, base3, endian) {
      assert2(typeof number.length === "number");
      if (number.length <= 0) {
        this.words = [0];
        this.length = 1;
        return this;
      }
      this.length = Math.ceil(number.length / 3);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var j, w;
      var off = 0;
      if (endian === "be") {
        for (i = number.length - 1, j = 0; i >= 0; i -= 3) {
          w = number[i] | number[i - 1] << 8 | number[i - 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      } else if (endian === "le") {
        for (i = 0, j = 0; i < number.length; i += 3) {
          w = number[i] | number[i + 1] << 8 | number[i + 2] << 16;
          this.words[j] |= w << off & 67108863;
          this.words[j + 1] = w >>> 26 - off & 67108863;
          off += 24;
          if (off >= 26) {
            off -= 26;
            j++;
          }
        }
      }
      return this._strip();
    };
    function parseHex4Bits(string, index2) {
      var c = string.charCodeAt(index2);
      if (c >= 48 && c <= 57) {
        return c - 48;
      } else if (c >= 65 && c <= 70) {
        return c - 55;
      } else if (c >= 97 && c <= 102) {
        return c - 87;
      } else {
        assert2(false, "Invalid character in " + string);
      }
    }
    function parseHexByte(string, lowerBound, index2) {
      var r2 = parseHex4Bits(string, index2);
      if (index2 - 1 >= lowerBound) {
        r2 |= parseHex4Bits(string, index2 - 1) << 4;
      }
      return r2;
    }
    BN2.prototype._parseHex = function _parseHex(number, start, endian) {
      this.length = Math.ceil((number.length - start) / 6);
      this.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        this.words[i] = 0;
      }
      var off = 0;
      var j = 0;
      var w;
      if (endian === "be") {
        for (i = number.length - 1; i >= start; i -= 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 67108863;
          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      } else {
        var parseLength = number.length - start;
        for (i = parseLength % 2 === 0 ? start + 1 : start; i < number.length; i += 2) {
          w = parseHexByte(number, start, i) << off;
          this.words[j] |= w & 67108863;
          if (off >= 18) {
            off -= 18;
            j += 1;
            this.words[j] |= w >>> 26;
          } else {
            off += 8;
          }
        }
      }
      this._strip();
    };
    function parseBase(str, start, end, mul7) {
      var r2 = 0;
      var b = 0;
      var len = Math.min(str.length, end);
      for (var i = start; i < len; i++) {
        var c = str.charCodeAt(i) - 48;
        r2 *= mul7;
        if (c >= 49) {
          b = c - 49 + 10;
        } else if (c >= 17) {
          b = c - 17 + 10;
        } else {
          b = c;
        }
        assert2(c >= 0 && b < mul7, "Invalid character");
        r2 += b;
      }
      return r2;
    }
    BN2.prototype._parseBase = function _parseBase(number, base3, start) {
      this.words = [0];
      this.length = 1;
      for (var limbLen = 0, limbPow = 1; limbPow <= 67108863; limbPow *= base3) {
        limbLen++;
      }
      limbLen--;
      limbPow = limbPow / base3 | 0;
      var total = number.length - start;
      var mod = total % limbLen;
      var end = Math.min(total, total - mod) + start;
      var word = 0;
      for (var i = start; i < end; i += limbLen) {
        word = parseBase(number, i, i + limbLen, base3);
        this.imuln(limbPow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      if (mod !== 0) {
        var pow = 1;
        word = parseBase(number, i, number.length, base3);
        for (i = 0; i < mod; i++) {
          pow *= base3;
        }
        this.imuln(pow);
        if (this.words[0] + word < 67108864) {
          this.words[0] += word;
        } else {
          this._iaddn(word);
        }
      }
      this._strip();
    };
    BN2.prototype.copy = function copy(dest) {
      dest.words = new Array(this.length);
      for (var i = 0; i < this.length; i++) {
        dest.words[i] = this.words[i];
      }
      dest.length = this.length;
      dest.negative = this.negative;
      dest.red = this.red;
    };
    function move(dest, src2) {
      dest.words = src2.words;
      dest.length = src2.length;
      dest.negative = src2.negative;
      dest.red = src2.red;
    }
    BN2.prototype._move = function _move(dest) {
      move(dest, this);
    };
    BN2.prototype.clone = function clone2() {
      var r2 = new BN2(null);
      this.copy(r2);
      return r2;
    };
    BN2.prototype._expand = function _expand(size) {
      while (this.length < size) {
        this.words[this.length++] = 0;
      }
      return this;
    };
    BN2.prototype._strip = function strip() {
      while (this.length > 1 && this.words[this.length - 1] === 0) {
        this.length--;
      }
      return this._normSign();
    };
    BN2.prototype._normSign = function _normSign() {
      if (this.length === 1 && this.words[0] === 0) {
        this.negative = 0;
      }
      return this;
    };
    if (typeof Symbol !== "undefined" && typeof Symbol.for === "function") {
      try {
        BN2.prototype[Symbol.for("nodejs.util.inspect.custom")] = inspect9;
      } catch (e) {
        BN2.prototype.inspect = inspect9;
      }
    } else {
      BN2.prototype.inspect = inspect9;
    }
    function inspect9() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var zeros2 = [
      "",
      "0",
      "00",
      "000",
      "0000",
      "00000",
      "000000",
      "0000000",
      "00000000",
      "000000000",
      "0000000000",
      "00000000000",
      "000000000000",
      "0000000000000",
      "00000000000000",
      "000000000000000",
      "0000000000000000",
      "00000000000000000",
      "000000000000000000",
      "0000000000000000000",
      "00000000000000000000",
      "000000000000000000000",
      "0000000000000000000000",
      "00000000000000000000000",
      "000000000000000000000000",
      "0000000000000000000000000"
    ];
    var groupSizes = [
      0,
      0,
      25,
      16,
      12,
      11,
      10,
      9,
      8,
      8,
      7,
      7,
      7,
      7,
      6,
      6,
      6,
      6,
      6,
      6,
      6,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5,
      5
    ];
    var groupBases = [
      0,
      0,
      33554432,
      43046721,
      16777216,
      48828125,
      60466176,
      40353607,
      16777216,
      43046721,
      1e7,
      19487171,
      35831808,
      62748517,
      7529536,
      11390625,
      16777216,
      24137569,
      34012224,
      47045881,
      64e6,
      4084101,
      5153632,
      6436343,
      7962624,
      9765625,
      11881376,
      14348907,
      17210368,
      20511149,
      243e5,
      28629151,
      33554432,
      39135393,
      45435424,
      52521875,
      60466176
    ];
    BN2.prototype.toString = function toString2(base3, padding2) {
      base3 = base3 || 10;
      padding2 = padding2 | 0 || 1;
      var out;
      if (base3 === 16 || base3 === "hex") {
        out = "";
        var off = 0;
        var carry = 0;
        for (var i = 0; i < this.length; i++) {
          var w = this.words[i];
          var word = ((w << off | carry) & 16777215).toString(16);
          carry = w >>> 24 - off & 16777215;
          off += 2;
          if (off >= 26) {
            off -= 26;
            i--;
          }
          if (carry !== 0 || i !== this.length - 1) {
            out = zeros2[6 - word.length] + word + out;
          } else {
            out = word + out;
          }
        }
        if (carry !== 0) {
          out = carry.toString(16) + out;
        }
        while (out.length % padding2 !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      if (base3 === (base3 | 0) && base3 >= 2 && base3 <= 36) {
        var groupSize = groupSizes[base3];
        var groupBase = groupBases[base3];
        out = "";
        var c = this.clone();
        c.negative = 0;
        while (!c.isZero()) {
          var r2 = c.modrn(groupBase).toString(base3);
          c = c.idivn(groupBase);
          if (!c.isZero()) {
            out = zeros2[groupSize - r2.length] + r2 + out;
          } else {
            out = r2 + out;
          }
        }
        if (this.isZero()) {
          out = "0" + out;
        }
        while (out.length % padding2 !== 0) {
          out = "0" + out;
        }
        if (this.negative !== 0) {
          out = "-" + out;
        }
        return out;
      }
      assert2(false, "Base should be between 2 and 36");
    };
    BN2.prototype.toNumber = function toNumber() {
      var ret = this.words[0];
      if (this.length === 2) {
        ret += this.words[1] * 67108864;
      } else if (this.length === 3 && this.words[2] === 1) {
        ret += 4503599627370496 + this.words[1] * 67108864;
      } else if (this.length > 2) {
        assert2(false, "Number can only safely store up to 53 bits");
      }
      return this.negative !== 0 ? -ret : ret;
    };
    BN2.prototype.toJSON = function toJSON4() {
      return this.toString(16, 2);
    };
    if (Buffer2) {
      BN2.prototype.toBuffer = function toBuffer2(endian, length2) {
        return this.toArrayLike(Buffer2, endian, length2);
      };
    }
    BN2.prototype.toArray = function toArray2(endian, length2) {
      return this.toArrayLike(Array, endian, length2);
    };
    var allocate = function allocate2(ArrayType2, size) {
      if (ArrayType2.allocUnsafe) {
        return ArrayType2.allocUnsafe(size);
      }
      return new ArrayType2(size);
    };
    BN2.prototype.toArrayLike = function toArrayLike(ArrayType2, endian, length2) {
      this._strip();
      var byteLength = this.byteLength();
      var reqLength = length2 || Math.max(1, byteLength);
      assert2(byteLength <= reqLength, "byte array longer than desired length");
      assert2(reqLength > 0, "Requested array length <= 0");
      var res = allocate(ArrayType2, reqLength);
      var postfix = endian === "le" ? "LE" : "BE";
      this["_toArrayLike" + postfix](res, byteLength);
      return res;
    };
    BN2.prototype._toArrayLikeLE = function _toArrayLikeLE(res, byteLength) {
      var position = 0;
      var carry = 0;
      for (var i = 0, shift = 0; i < this.length; i++) {
        var word = this.words[i] << shift | carry;
        res[position++] = word & 255;
        if (position < res.length) {
          res[position++] = word >> 8 & 255;
        }
        if (position < res.length) {
          res[position++] = word >> 16 & 255;
        }
        if (shift === 6) {
          if (position < res.length) {
            res[position++] = word >> 24 & 255;
          }
          carry = 0;
          shift = 0;
        } else {
          carry = word >>> 24;
          shift += 2;
        }
      }
      if (position < res.length) {
        res[position++] = carry;
        while (position < res.length) {
          res[position++] = 0;
        }
      }
    };
    BN2.prototype._toArrayLikeBE = function _toArrayLikeBE(res, byteLength) {
      var position = res.length - 1;
      var carry = 0;
      for (var i = 0, shift = 0; i < this.length; i++) {
        var word = this.words[i] << shift | carry;
        res[position--] = word & 255;
        if (position >= 0) {
          res[position--] = word >> 8 & 255;
        }
        if (position >= 0) {
          res[position--] = word >> 16 & 255;
        }
        if (shift === 6) {
          if (position >= 0) {
            res[position--] = word >> 24 & 255;
          }
          carry = 0;
          shift = 0;
        } else {
          carry = word >>> 24;
          shift += 2;
        }
      }
      if (position >= 0) {
        res[position--] = carry;
        while (position >= 0) {
          res[position--] = 0;
        }
      }
    };
    if (Math.clz32) {
      BN2.prototype._countBits = function _countBits(w) {
        return 32 - Math.clz32(w);
      };
    } else {
      BN2.prototype._countBits = function _countBits(w) {
        var t = w;
        var r2 = 0;
        if (t >= 4096) {
          r2 += 13;
          t >>>= 13;
        }
        if (t >= 64) {
          r2 += 7;
          t >>>= 7;
        }
        if (t >= 8) {
          r2 += 4;
          t >>>= 4;
        }
        if (t >= 2) {
          r2 += 2;
          t >>>= 2;
        }
        return r2 + t;
      };
    }
    BN2.prototype._zeroBits = function _zeroBits(w) {
      if (w === 0)
        return 26;
      var t = w;
      var r2 = 0;
      if ((t & 8191) === 0) {
        r2 += 13;
        t >>>= 13;
      }
      if ((t & 127) === 0) {
        r2 += 7;
        t >>>= 7;
      }
      if ((t & 15) === 0) {
        r2 += 4;
        t >>>= 4;
      }
      if ((t & 3) === 0) {
        r2 += 2;
        t >>>= 2;
      }
      if ((t & 1) === 0) {
        r2++;
      }
      return r2;
    };
    BN2.prototype.bitLength = function bitLength() {
      var w = this.words[this.length - 1];
      var hi = this._countBits(w);
      return (this.length - 1) * 26 + hi;
    };
    function toBitArray(num) {
      var w = new Array(num.bitLength());
      for (var bit = 0; bit < w.length; bit++) {
        var off = bit / 26 | 0;
        var wbit = bit % 26;
        w[bit] = num.words[off] >>> wbit & 1;
      }
      return w;
    }
    BN2.prototype.zeroBits = function zeroBits() {
      if (this.isZero())
        return 0;
      var r2 = 0;
      for (var i = 0; i < this.length; i++) {
        var b = this._zeroBits(this.words[i]);
        r2 += b;
        if (b !== 26)
          break;
      }
      return r2;
    };
    BN2.prototype.byteLength = function byteLength() {
      return Math.ceil(this.bitLength() / 8);
    };
    BN2.prototype.toTwos = function toTwos(width) {
      if (this.negative !== 0) {
        return this.abs().inotn(width).iaddn(1);
      }
      return this.clone();
    };
    BN2.prototype.fromTwos = function fromTwos(width) {
      if (this.testn(width - 1)) {
        return this.notn(width).iaddn(1).ineg();
      }
      return this.clone();
    };
    BN2.prototype.isNeg = function isNeg() {
      return this.negative !== 0;
    };
    BN2.prototype.neg = function neg6() {
      return this.clone().ineg();
    };
    BN2.prototype.ineg = function ineg() {
      if (!this.isZero()) {
        this.negative ^= 1;
      }
      return this;
    };
    BN2.prototype.iuor = function iuor(num) {
      while (this.length < num.length) {
        this.words[this.length++] = 0;
      }
      for (var i = 0; i < num.length; i++) {
        this.words[i] = this.words[i] | num.words[i];
      }
      return this._strip();
    };
    BN2.prototype.ior = function ior(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuor(num);
    };
    BN2.prototype.or = function or2(num) {
      if (this.length > num.length)
        return this.clone().ior(num);
      return num.clone().ior(this);
    };
    BN2.prototype.uor = function uor(num) {
      if (this.length > num.length)
        return this.clone().iuor(num);
      return num.clone().iuor(this);
    };
    BN2.prototype.iuand = function iuand(num) {
      var b;
      if (this.length > num.length) {
        b = num;
      } else {
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = this.words[i] & num.words[i];
      }
      this.length = b.length;
      return this._strip();
    };
    BN2.prototype.iand = function iand(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuand(num);
    };
    BN2.prototype.and = function and(num) {
      if (this.length > num.length)
        return this.clone().iand(num);
      return num.clone().iand(this);
    };
    BN2.prototype.uand = function uand(num) {
      if (this.length > num.length)
        return this.clone().iuand(num);
      return num.clone().iuand(this);
    };
    BN2.prototype.iuxor = function iuxor(num) {
      var a;
      var b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      for (var i = 0; i < b.length; i++) {
        this.words[i] = a.words[i] ^ b.words[i];
      }
      if (this !== a) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = a.length;
      return this._strip();
    };
    BN2.prototype.ixor = function ixor(num) {
      assert2((this.negative | num.negative) === 0);
      return this.iuxor(num);
    };
    BN2.prototype.xor = function xor4(num) {
      if (this.length > num.length)
        return this.clone().ixor(num);
      return num.clone().ixor(this);
    };
    BN2.prototype.uxor = function uxor(num) {
      if (this.length > num.length)
        return this.clone().iuxor(num);
      return num.clone().iuxor(this);
    };
    BN2.prototype.inotn = function inotn(width) {
      assert2(typeof width === "number" && width >= 0);
      var bytesNeeded = Math.ceil(width / 26) | 0;
      var bitsLeft = width % 26;
      this._expand(bytesNeeded);
      if (bitsLeft > 0) {
        bytesNeeded--;
      }
      for (var i = 0; i < bytesNeeded; i++) {
        this.words[i] = ~this.words[i] & 67108863;
      }
      if (bitsLeft > 0) {
        this.words[i] = ~this.words[i] & 67108863 >> 26 - bitsLeft;
      }
      return this._strip();
    };
    BN2.prototype.notn = function notn(width) {
      return this.clone().inotn(width);
    };
    BN2.prototype.setn = function setn(bit, val) {
      assert2(typeof bit === "number" && bit >= 0);
      var off = bit / 26 | 0;
      var wbit = bit % 26;
      this._expand(off + 1);
      if (val) {
        this.words[off] = this.words[off] | 1 << wbit;
      } else {
        this.words[off] = this.words[off] & ~(1 << wbit);
      }
      return this._strip();
    };
    BN2.prototype.iadd = function iadd(num) {
      var r2;
      if (this.negative !== 0 && num.negative === 0) {
        this.negative = 0;
        r2 = this.isub(num);
        this.negative ^= 1;
        return this._normSign();
      } else if (this.negative === 0 && num.negative !== 0) {
        num.negative = 0;
        r2 = this.isub(num);
        num.negative = 1;
        return r2._normSign();
      }
      var a, b;
      if (this.length > num.length) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r2 = (a.words[i] | 0) + (b.words[i] | 0) + carry;
        this.words[i] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r2 = (a.words[i] | 0) + carry;
        this.words[i] = r2 & 67108863;
        carry = r2 >>> 26;
      }
      this.length = a.length;
      if (carry !== 0) {
        this.words[this.length] = carry;
        this.length++;
      } else if (a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      return this;
    };
    BN2.prototype.add = function add7(num) {
      var res;
      if (num.negative !== 0 && this.negative === 0) {
        num.negative = 0;
        res = this.sub(num);
        num.negative ^= 1;
        return res;
      } else if (num.negative === 0 && this.negative !== 0) {
        this.negative = 0;
        res = num.sub(this);
        this.negative = 1;
        return res;
      }
      if (this.length > num.length)
        return this.clone().iadd(num);
      return num.clone().iadd(this);
    };
    BN2.prototype.isub = function isub(num) {
      if (num.negative !== 0) {
        num.negative = 0;
        var r2 = this.iadd(num);
        num.negative = 1;
        return r2._normSign();
      } else if (this.negative !== 0) {
        this.negative = 0;
        this.iadd(num);
        this.negative = 1;
        return this._normSign();
      }
      var cmp = this.cmp(num);
      if (cmp === 0) {
        this.negative = 0;
        this.length = 1;
        this.words[0] = 0;
        return this;
      }
      var a, b;
      if (cmp > 0) {
        a = this;
        b = num;
      } else {
        a = num;
        b = this;
      }
      var carry = 0;
      for (var i = 0; i < b.length; i++) {
        r2 = (a.words[i] | 0) - (b.words[i] | 0) + carry;
        carry = r2 >> 26;
        this.words[i] = r2 & 67108863;
      }
      for (; carry !== 0 && i < a.length; i++) {
        r2 = (a.words[i] | 0) + carry;
        carry = r2 >> 26;
        this.words[i] = r2 & 67108863;
      }
      if (carry === 0 && i < a.length && a !== this) {
        for (; i < a.length; i++) {
          this.words[i] = a.words[i];
        }
      }
      this.length = Math.max(this.length, i);
      if (a !== this) {
        this.negative = 1;
      }
      return this._strip();
    };
    BN2.prototype.sub = function sub(num) {
      return this.clone().isub(num);
    };
    function smallMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      var len = self2.length + num.length | 0;
      out.length = len;
      len = len - 1 | 0;
      var a = self2.words[0] | 0;
      var b = num.words[0] | 0;
      var r2 = a * b;
      var lo = r2 & 67108863;
      var carry = r2 / 67108864 | 0;
      out.words[0] = lo;
      for (var k = 1; k < len; k++) {
        var ncarry = carry >>> 26;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j | 0;
          a = self2.words[i] | 0;
          b = num.words[j] | 0;
          r2 = a * b + rword;
          ncarry += r2 / 67108864 | 0;
          rword = r2 & 67108863;
        }
        out.words[k] = rword | 0;
        carry = ncarry | 0;
      }
      if (carry !== 0) {
        out.words[k] = carry | 0;
      } else {
        out.length--;
      }
      return out._strip();
    }
    var comb10MulTo = function comb10MulTo2(self2, num, out) {
      var a = self2.words;
      var b = num.words;
      var o = out.words;
      var c = 0;
      var lo;
      var mid;
      var hi;
      var a0 = a[0] | 0;
      var al0 = a0 & 8191;
      var ah0 = a0 >>> 13;
      var a1 = a[1] | 0;
      var al1 = a1 & 8191;
      var ah1 = a1 >>> 13;
      var a2 = a[2] | 0;
      var al2 = a2 & 8191;
      var ah2 = a2 >>> 13;
      var a3 = a[3] | 0;
      var al3 = a3 & 8191;
      var ah3 = a3 >>> 13;
      var a4 = a[4] | 0;
      var al4 = a4 & 8191;
      var ah4 = a4 >>> 13;
      var a5 = a[5] | 0;
      var al5 = a5 & 8191;
      var ah5 = a5 >>> 13;
      var a6 = a[6] | 0;
      var al6 = a6 & 8191;
      var ah6 = a6 >>> 13;
      var a7 = a[7] | 0;
      var al7 = a7 & 8191;
      var ah7 = a7 >>> 13;
      var a8 = a[8] | 0;
      var al8 = a8 & 8191;
      var ah8 = a8 >>> 13;
      var a9 = a[9] | 0;
      var al9 = a9 & 8191;
      var ah9 = a9 >>> 13;
      var b0 = b[0] | 0;
      var bl0 = b0 & 8191;
      var bh0 = b0 >>> 13;
      var b1 = b[1] | 0;
      var bl1 = b1 & 8191;
      var bh1 = b1 >>> 13;
      var b2 = b[2] | 0;
      var bl2 = b2 & 8191;
      var bh2 = b2 >>> 13;
      var b3 = b[3] | 0;
      var bl3 = b3 & 8191;
      var bh3 = b3 >>> 13;
      var b4 = b[4] | 0;
      var bl4 = b4 & 8191;
      var bh4 = b4 >>> 13;
      var b5 = b[5] | 0;
      var bl5 = b5 & 8191;
      var bh5 = b5 >>> 13;
      var b6 = b[6] | 0;
      var bl6 = b6 & 8191;
      var bh6 = b6 >>> 13;
      var b7 = b[7] | 0;
      var bl7 = b7 & 8191;
      var bh7 = b7 >>> 13;
      var b8 = b[8] | 0;
      var bl8 = b8 & 8191;
      var bh8 = b8 >>> 13;
      var b9 = b[9] | 0;
      var bl9 = b9 & 8191;
      var bh9 = b9 >>> 13;
      out.negative = self2.negative ^ num.negative;
      out.length = 19;
      lo = Math.imul(al0, bl0);
      mid = Math.imul(al0, bh0);
      mid = mid + Math.imul(ah0, bl0) | 0;
      hi = Math.imul(ah0, bh0);
      var w0 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w0 >>> 26) | 0;
      w0 &= 67108863;
      lo = Math.imul(al1, bl0);
      mid = Math.imul(al1, bh0);
      mid = mid + Math.imul(ah1, bl0) | 0;
      hi = Math.imul(ah1, bh0);
      lo = lo + Math.imul(al0, bl1) | 0;
      mid = mid + Math.imul(al0, bh1) | 0;
      mid = mid + Math.imul(ah0, bl1) | 0;
      hi = hi + Math.imul(ah0, bh1) | 0;
      var w1 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w1 >>> 26) | 0;
      w1 &= 67108863;
      lo = Math.imul(al2, bl0);
      mid = Math.imul(al2, bh0);
      mid = mid + Math.imul(ah2, bl0) | 0;
      hi = Math.imul(ah2, bh0);
      lo = lo + Math.imul(al1, bl1) | 0;
      mid = mid + Math.imul(al1, bh1) | 0;
      mid = mid + Math.imul(ah1, bl1) | 0;
      hi = hi + Math.imul(ah1, bh1) | 0;
      lo = lo + Math.imul(al0, bl2) | 0;
      mid = mid + Math.imul(al0, bh2) | 0;
      mid = mid + Math.imul(ah0, bl2) | 0;
      hi = hi + Math.imul(ah0, bh2) | 0;
      var w2 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w2 >>> 26) | 0;
      w2 &= 67108863;
      lo = Math.imul(al3, bl0);
      mid = Math.imul(al3, bh0);
      mid = mid + Math.imul(ah3, bl0) | 0;
      hi = Math.imul(ah3, bh0);
      lo = lo + Math.imul(al2, bl1) | 0;
      mid = mid + Math.imul(al2, bh1) | 0;
      mid = mid + Math.imul(ah2, bl1) | 0;
      hi = hi + Math.imul(ah2, bh1) | 0;
      lo = lo + Math.imul(al1, bl2) | 0;
      mid = mid + Math.imul(al1, bh2) | 0;
      mid = mid + Math.imul(ah1, bl2) | 0;
      hi = hi + Math.imul(ah1, bh2) | 0;
      lo = lo + Math.imul(al0, bl3) | 0;
      mid = mid + Math.imul(al0, bh3) | 0;
      mid = mid + Math.imul(ah0, bl3) | 0;
      hi = hi + Math.imul(ah0, bh3) | 0;
      var w3 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w3 >>> 26) | 0;
      w3 &= 67108863;
      lo = Math.imul(al4, bl0);
      mid = Math.imul(al4, bh0);
      mid = mid + Math.imul(ah4, bl0) | 0;
      hi = Math.imul(ah4, bh0);
      lo = lo + Math.imul(al3, bl1) | 0;
      mid = mid + Math.imul(al3, bh1) | 0;
      mid = mid + Math.imul(ah3, bl1) | 0;
      hi = hi + Math.imul(ah3, bh1) | 0;
      lo = lo + Math.imul(al2, bl2) | 0;
      mid = mid + Math.imul(al2, bh2) | 0;
      mid = mid + Math.imul(ah2, bl2) | 0;
      hi = hi + Math.imul(ah2, bh2) | 0;
      lo = lo + Math.imul(al1, bl3) | 0;
      mid = mid + Math.imul(al1, bh3) | 0;
      mid = mid + Math.imul(ah1, bl3) | 0;
      hi = hi + Math.imul(ah1, bh3) | 0;
      lo = lo + Math.imul(al0, bl4) | 0;
      mid = mid + Math.imul(al0, bh4) | 0;
      mid = mid + Math.imul(ah0, bl4) | 0;
      hi = hi + Math.imul(ah0, bh4) | 0;
      var w4 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w4 >>> 26) | 0;
      w4 &= 67108863;
      lo = Math.imul(al5, bl0);
      mid = Math.imul(al5, bh0);
      mid = mid + Math.imul(ah5, bl0) | 0;
      hi = Math.imul(ah5, bh0);
      lo = lo + Math.imul(al4, bl1) | 0;
      mid = mid + Math.imul(al4, bh1) | 0;
      mid = mid + Math.imul(ah4, bl1) | 0;
      hi = hi + Math.imul(ah4, bh1) | 0;
      lo = lo + Math.imul(al3, bl2) | 0;
      mid = mid + Math.imul(al3, bh2) | 0;
      mid = mid + Math.imul(ah3, bl2) | 0;
      hi = hi + Math.imul(ah3, bh2) | 0;
      lo = lo + Math.imul(al2, bl3) | 0;
      mid = mid + Math.imul(al2, bh3) | 0;
      mid = mid + Math.imul(ah2, bl3) | 0;
      hi = hi + Math.imul(ah2, bh3) | 0;
      lo = lo + Math.imul(al1, bl4) | 0;
      mid = mid + Math.imul(al1, bh4) | 0;
      mid = mid + Math.imul(ah1, bl4) | 0;
      hi = hi + Math.imul(ah1, bh4) | 0;
      lo = lo + Math.imul(al0, bl5) | 0;
      mid = mid + Math.imul(al0, bh5) | 0;
      mid = mid + Math.imul(ah0, bl5) | 0;
      hi = hi + Math.imul(ah0, bh5) | 0;
      var w5 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w5 >>> 26) | 0;
      w5 &= 67108863;
      lo = Math.imul(al6, bl0);
      mid = Math.imul(al6, bh0);
      mid = mid + Math.imul(ah6, bl0) | 0;
      hi = Math.imul(ah6, bh0);
      lo = lo + Math.imul(al5, bl1) | 0;
      mid = mid + Math.imul(al5, bh1) | 0;
      mid = mid + Math.imul(ah5, bl1) | 0;
      hi = hi + Math.imul(ah5, bh1) | 0;
      lo = lo + Math.imul(al4, bl2) | 0;
      mid = mid + Math.imul(al4, bh2) | 0;
      mid = mid + Math.imul(ah4, bl2) | 0;
      hi = hi + Math.imul(ah4, bh2) | 0;
      lo = lo + Math.imul(al3, bl3) | 0;
      mid = mid + Math.imul(al3, bh3) | 0;
      mid = mid + Math.imul(ah3, bl3) | 0;
      hi = hi + Math.imul(ah3, bh3) | 0;
      lo = lo + Math.imul(al2, bl4) | 0;
      mid = mid + Math.imul(al2, bh4) | 0;
      mid = mid + Math.imul(ah2, bl4) | 0;
      hi = hi + Math.imul(ah2, bh4) | 0;
      lo = lo + Math.imul(al1, bl5) | 0;
      mid = mid + Math.imul(al1, bh5) | 0;
      mid = mid + Math.imul(ah1, bl5) | 0;
      hi = hi + Math.imul(ah1, bh5) | 0;
      lo = lo + Math.imul(al0, bl6) | 0;
      mid = mid + Math.imul(al0, bh6) | 0;
      mid = mid + Math.imul(ah0, bl6) | 0;
      hi = hi + Math.imul(ah0, bh6) | 0;
      var w6 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w6 >>> 26) | 0;
      w6 &= 67108863;
      lo = Math.imul(al7, bl0);
      mid = Math.imul(al7, bh0);
      mid = mid + Math.imul(ah7, bl0) | 0;
      hi = Math.imul(ah7, bh0);
      lo = lo + Math.imul(al6, bl1) | 0;
      mid = mid + Math.imul(al6, bh1) | 0;
      mid = mid + Math.imul(ah6, bl1) | 0;
      hi = hi + Math.imul(ah6, bh1) | 0;
      lo = lo + Math.imul(al5, bl2) | 0;
      mid = mid + Math.imul(al5, bh2) | 0;
      mid = mid + Math.imul(ah5, bl2) | 0;
      hi = hi + Math.imul(ah5, bh2) | 0;
      lo = lo + Math.imul(al4, bl3) | 0;
      mid = mid + Math.imul(al4, bh3) | 0;
      mid = mid + Math.imul(ah4, bl3) | 0;
      hi = hi + Math.imul(ah4, bh3) | 0;
      lo = lo + Math.imul(al3, bl4) | 0;
      mid = mid + Math.imul(al3, bh4) | 0;
      mid = mid + Math.imul(ah3, bl4) | 0;
      hi = hi + Math.imul(ah3, bh4) | 0;
      lo = lo + Math.imul(al2, bl5) | 0;
      mid = mid + Math.imul(al2, bh5) | 0;
      mid = mid + Math.imul(ah2, bl5) | 0;
      hi = hi + Math.imul(ah2, bh5) | 0;
      lo = lo + Math.imul(al1, bl6) | 0;
      mid = mid + Math.imul(al1, bh6) | 0;
      mid = mid + Math.imul(ah1, bl6) | 0;
      hi = hi + Math.imul(ah1, bh6) | 0;
      lo = lo + Math.imul(al0, bl7) | 0;
      mid = mid + Math.imul(al0, bh7) | 0;
      mid = mid + Math.imul(ah0, bl7) | 0;
      hi = hi + Math.imul(ah0, bh7) | 0;
      var w7 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w7 >>> 26) | 0;
      w7 &= 67108863;
      lo = Math.imul(al8, bl0);
      mid = Math.imul(al8, bh0);
      mid = mid + Math.imul(ah8, bl0) | 0;
      hi = Math.imul(ah8, bh0);
      lo = lo + Math.imul(al7, bl1) | 0;
      mid = mid + Math.imul(al7, bh1) | 0;
      mid = mid + Math.imul(ah7, bl1) | 0;
      hi = hi + Math.imul(ah7, bh1) | 0;
      lo = lo + Math.imul(al6, bl2) | 0;
      mid = mid + Math.imul(al6, bh2) | 0;
      mid = mid + Math.imul(ah6, bl2) | 0;
      hi = hi + Math.imul(ah6, bh2) | 0;
      lo = lo + Math.imul(al5, bl3) | 0;
      mid = mid + Math.imul(al5, bh3) | 0;
      mid = mid + Math.imul(ah5, bl3) | 0;
      hi = hi + Math.imul(ah5, bh3) | 0;
      lo = lo + Math.imul(al4, bl4) | 0;
      mid = mid + Math.imul(al4, bh4) | 0;
      mid = mid + Math.imul(ah4, bl4) | 0;
      hi = hi + Math.imul(ah4, bh4) | 0;
      lo = lo + Math.imul(al3, bl5) | 0;
      mid = mid + Math.imul(al3, bh5) | 0;
      mid = mid + Math.imul(ah3, bl5) | 0;
      hi = hi + Math.imul(ah3, bh5) | 0;
      lo = lo + Math.imul(al2, bl6) | 0;
      mid = mid + Math.imul(al2, bh6) | 0;
      mid = mid + Math.imul(ah2, bl6) | 0;
      hi = hi + Math.imul(ah2, bh6) | 0;
      lo = lo + Math.imul(al1, bl7) | 0;
      mid = mid + Math.imul(al1, bh7) | 0;
      mid = mid + Math.imul(ah1, bl7) | 0;
      hi = hi + Math.imul(ah1, bh7) | 0;
      lo = lo + Math.imul(al0, bl8) | 0;
      mid = mid + Math.imul(al0, bh8) | 0;
      mid = mid + Math.imul(ah0, bl8) | 0;
      hi = hi + Math.imul(ah0, bh8) | 0;
      var w8 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w8 >>> 26) | 0;
      w8 &= 67108863;
      lo = Math.imul(al9, bl0);
      mid = Math.imul(al9, bh0);
      mid = mid + Math.imul(ah9, bl0) | 0;
      hi = Math.imul(ah9, bh0);
      lo = lo + Math.imul(al8, bl1) | 0;
      mid = mid + Math.imul(al8, bh1) | 0;
      mid = mid + Math.imul(ah8, bl1) | 0;
      hi = hi + Math.imul(ah8, bh1) | 0;
      lo = lo + Math.imul(al7, bl2) | 0;
      mid = mid + Math.imul(al7, bh2) | 0;
      mid = mid + Math.imul(ah7, bl2) | 0;
      hi = hi + Math.imul(ah7, bh2) | 0;
      lo = lo + Math.imul(al6, bl3) | 0;
      mid = mid + Math.imul(al6, bh3) | 0;
      mid = mid + Math.imul(ah6, bl3) | 0;
      hi = hi + Math.imul(ah6, bh3) | 0;
      lo = lo + Math.imul(al5, bl4) | 0;
      mid = mid + Math.imul(al5, bh4) | 0;
      mid = mid + Math.imul(ah5, bl4) | 0;
      hi = hi + Math.imul(ah5, bh4) | 0;
      lo = lo + Math.imul(al4, bl5) | 0;
      mid = mid + Math.imul(al4, bh5) | 0;
      mid = mid + Math.imul(ah4, bl5) | 0;
      hi = hi + Math.imul(ah4, bh5) | 0;
      lo = lo + Math.imul(al3, bl6) | 0;
      mid = mid + Math.imul(al3, bh6) | 0;
      mid = mid + Math.imul(ah3, bl6) | 0;
      hi = hi + Math.imul(ah3, bh6) | 0;
      lo = lo + Math.imul(al2, bl7) | 0;
      mid = mid + Math.imul(al2, bh7) | 0;
      mid = mid + Math.imul(ah2, bl7) | 0;
      hi = hi + Math.imul(ah2, bh7) | 0;
      lo = lo + Math.imul(al1, bl8) | 0;
      mid = mid + Math.imul(al1, bh8) | 0;
      mid = mid + Math.imul(ah1, bl8) | 0;
      hi = hi + Math.imul(ah1, bh8) | 0;
      lo = lo + Math.imul(al0, bl9) | 0;
      mid = mid + Math.imul(al0, bh9) | 0;
      mid = mid + Math.imul(ah0, bl9) | 0;
      hi = hi + Math.imul(ah0, bh9) | 0;
      var w9 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w9 >>> 26) | 0;
      w9 &= 67108863;
      lo = Math.imul(al9, bl1);
      mid = Math.imul(al9, bh1);
      mid = mid + Math.imul(ah9, bl1) | 0;
      hi = Math.imul(ah9, bh1);
      lo = lo + Math.imul(al8, bl2) | 0;
      mid = mid + Math.imul(al8, bh2) | 0;
      mid = mid + Math.imul(ah8, bl2) | 0;
      hi = hi + Math.imul(ah8, bh2) | 0;
      lo = lo + Math.imul(al7, bl3) | 0;
      mid = mid + Math.imul(al7, bh3) | 0;
      mid = mid + Math.imul(ah7, bl3) | 0;
      hi = hi + Math.imul(ah7, bh3) | 0;
      lo = lo + Math.imul(al6, bl4) | 0;
      mid = mid + Math.imul(al6, bh4) | 0;
      mid = mid + Math.imul(ah6, bl4) | 0;
      hi = hi + Math.imul(ah6, bh4) | 0;
      lo = lo + Math.imul(al5, bl5) | 0;
      mid = mid + Math.imul(al5, bh5) | 0;
      mid = mid + Math.imul(ah5, bl5) | 0;
      hi = hi + Math.imul(ah5, bh5) | 0;
      lo = lo + Math.imul(al4, bl6) | 0;
      mid = mid + Math.imul(al4, bh6) | 0;
      mid = mid + Math.imul(ah4, bl6) | 0;
      hi = hi + Math.imul(ah4, bh6) | 0;
      lo = lo + Math.imul(al3, bl7) | 0;
      mid = mid + Math.imul(al3, bh7) | 0;
      mid = mid + Math.imul(ah3, bl7) | 0;
      hi = hi + Math.imul(ah3, bh7) | 0;
      lo = lo + Math.imul(al2, bl8) | 0;
      mid = mid + Math.imul(al2, bh8) | 0;
      mid = mid + Math.imul(ah2, bl8) | 0;
      hi = hi + Math.imul(ah2, bh8) | 0;
      lo = lo + Math.imul(al1, bl9) | 0;
      mid = mid + Math.imul(al1, bh9) | 0;
      mid = mid + Math.imul(ah1, bl9) | 0;
      hi = hi + Math.imul(ah1, bh9) | 0;
      var w10 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w10 >>> 26) | 0;
      w10 &= 67108863;
      lo = Math.imul(al9, bl2);
      mid = Math.imul(al9, bh2);
      mid = mid + Math.imul(ah9, bl2) | 0;
      hi = Math.imul(ah9, bh2);
      lo = lo + Math.imul(al8, bl3) | 0;
      mid = mid + Math.imul(al8, bh3) | 0;
      mid = mid + Math.imul(ah8, bl3) | 0;
      hi = hi + Math.imul(ah8, bh3) | 0;
      lo = lo + Math.imul(al7, bl4) | 0;
      mid = mid + Math.imul(al7, bh4) | 0;
      mid = mid + Math.imul(ah7, bl4) | 0;
      hi = hi + Math.imul(ah7, bh4) | 0;
      lo = lo + Math.imul(al6, bl5) | 0;
      mid = mid + Math.imul(al6, bh5) | 0;
      mid = mid + Math.imul(ah6, bl5) | 0;
      hi = hi + Math.imul(ah6, bh5) | 0;
      lo = lo + Math.imul(al5, bl6) | 0;
      mid = mid + Math.imul(al5, bh6) | 0;
      mid = mid + Math.imul(ah5, bl6) | 0;
      hi = hi + Math.imul(ah5, bh6) | 0;
      lo = lo + Math.imul(al4, bl7) | 0;
      mid = mid + Math.imul(al4, bh7) | 0;
      mid = mid + Math.imul(ah4, bl7) | 0;
      hi = hi + Math.imul(ah4, bh7) | 0;
      lo = lo + Math.imul(al3, bl8) | 0;
      mid = mid + Math.imul(al3, bh8) | 0;
      mid = mid + Math.imul(ah3, bl8) | 0;
      hi = hi + Math.imul(ah3, bh8) | 0;
      lo = lo + Math.imul(al2, bl9) | 0;
      mid = mid + Math.imul(al2, bh9) | 0;
      mid = mid + Math.imul(ah2, bl9) | 0;
      hi = hi + Math.imul(ah2, bh9) | 0;
      var w11 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w11 >>> 26) | 0;
      w11 &= 67108863;
      lo = Math.imul(al9, bl3);
      mid = Math.imul(al9, bh3);
      mid = mid + Math.imul(ah9, bl3) | 0;
      hi = Math.imul(ah9, bh3);
      lo = lo + Math.imul(al8, bl4) | 0;
      mid = mid + Math.imul(al8, bh4) | 0;
      mid = mid + Math.imul(ah8, bl4) | 0;
      hi = hi + Math.imul(ah8, bh4) | 0;
      lo = lo + Math.imul(al7, bl5) | 0;
      mid = mid + Math.imul(al7, bh5) | 0;
      mid = mid + Math.imul(ah7, bl5) | 0;
      hi = hi + Math.imul(ah7, bh5) | 0;
      lo = lo + Math.imul(al6, bl6) | 0;
      mid = mid + Math.imul(al6, bh6) | 0;
      mid = mid + Math.imul(ah6, bl6) | 0;
      hi = hi + Math.imul(ah6, bh6) | 0;
      lo = lo + Math.imul(al5, bl7) | 0;
      mid = mid + Math.imul(al5, bh7) | 0;
      mid = mid + Math.imul(ah5, bl7) | 0;
      hi = hi + Math.imul(ah5, bh7) | 0;
      lo = lo + Math.imul(al4, bl8) | 0;
      mid = mid + Math.imul(al4, bh8) | 0;
      mid = mid + Math.imul(ah4, bl8) | 0;
      hi = hi + Math.imul(ah4, bh8) | 0;
      lo = lo + Math.imul(al3, bl9) | 0;
      mid = mid + Math.imul(al3, bh9) | 0;
      mid = mid + Math.imul(ah3, bl9) | 0;
      hi = hi + Math.imul(ah3, bh9) | 0;
      var w12 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w12 >>> 26) | 0;
      w12 &= 67108863;
      lo = Math.imul(al9, bl4);
      mid = Math.imul(al9, bh4);
      mid = mid + Math.imul(ah9, bl4) | 0;
      hi = Math.imul(ah9, bh4);
      lo = lo + Math.imul(al8, bl5) | 0;
      mid = mid + Math.imul(al8, bh5) | 0;
      mid = mid + Math.imul(ah8, bl5) | 0;
      hi = hi + Math.imul(ah8, bh5) | 0;
      lo = lo + Math.imul(al7, bl6) | 0;
      mid = mid + Math.imul(al7, bh6) | 0;
      mid = mid + Math.imul(ah7, bl6) | 0;
      hi = hi + Math.imul(ah7, bh6) | 0;
      lo = lo + Math.imul(al6, bl7) | 0;
      mid = mid + Math.imul(al6, bh7) | 0;
      mid = mid + Math.imul(ah6, bl7) | 0;
      hi = hi + Math.imul(ah6, bh7) | 0;
      lo = lo + Math.imul(al5, bl8) | 0;
      mid = mid + Math.imul(al5, bh8) | 0;
      mid = mid + Math.imul(ah5, bl8) | 0;
      hi = hi + Math.imul(ah5, bh8) | 0;
      lo = lo + Math.imul(al4, bl9) | 0;
      mid = mid + Math.imul(al4, bh9) | 0;
      mid = mid + Math.imul(ah4, bl9) | 0;
      hi = hi + Math.imul(ah4, bh9) | 0;
      var w13 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w13 >>> 26) | 0;
      w13 &= 67108863;
      lo = Math.imul(al9, bl5);
      mid = Math.imul(al9, bh5);
      mid = mid + Math.imul(ah9, bl5) | 0;
      hi = Math.imul(ah9, bh5);
      lo = lo + Math.imul(al8, bl6) | 0;
      mid = mid + Math.imul(al8, bh6) | 0;
      mid = mid + Math.imul(ah8, bl6) | 0;
      hi = hi + Math.imul(ah8, bh6) | 0;
      lo = lo + Math.imul(al7, bl7) | 0;
      mid = mid + Math.imul(al7, bh7) | 0;
      mid = mid + Math.imul(ah7, bl7) | 0;
      hi = hi + Math.imul(ah7, bh7) | 0;
      lo = lo + Math.imul(al6, bl8) | 0;
      mid = mid + Math.imul(al6, bh8) | 0;
      mid = mid + Math.imul(ah6, bl8) | 0;
      hi = hi + Math.imul(ah6, bh8) | 0;
      lo = lo + Math.imul(al5, bl9) | 0;
      mid = mid + Math.imul(al5, bh9) | 0;
      mid = mid + Math.imul(ah5, bl9) | 0;
      hi = hi + Math.imul(ah5, bh9) | 0;
      var w14 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w14 >>> 26) | 0;
      w14 &= 67108863;
      lo = Math.imul(al9, bl6);
      mid = Math.imul(al9, bh6);
      mid = mid + Math.imul(ah9, bl6) | 0;
      hi = Math.imul(ah9, bh6);
      lo = lo + Math.imul(al8, bl7) | 0;
      mid = mid + Math.imul(al8, bh7) | 0;
      mid = mid + Math.imul(ah8, bl7) | 0;
      hi = hi + Math.imul(ah8, bh7) | 0;
      lo = lo + Math.imul(al7, bl8) | 0;
      mid = mid + Math.imul(al7, bh8) | 0;
      mid = mid + Math.imul(ah7, bl8) | 0;
      hi = hi + Math.imul(ah7, bh8) | 0;
      lo = lo + Math.imul(al6, bl9) | 0;
      mid = mid + Math.imul(al6, bh9) | 0;
      mid = mid + Math.imul(ah6, bl9) | 0;
      hi = hi + Math.imul(ah6, bh9) | 0;
      var w15 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w15 >>> 26) | 0;
      w15 &= 67108863;
      lo = Math.imul(al9, bl7);
      mid = Math.imul(al9, bh7);
      mid = mid + Math.imul(ah9, bl7) | 0;
      hi = Math.imul(ah9, bh7);
      lo = lo + Math.imul(al8, bl8) | 0;
      mid = mid + Math.imul(al8, bh8) | 0;
      mid = mid + Math.imul(ah8, bl8) | 0;
      hi = hi + Math.imul(ah8, bh8) | 0;
      lo = lo + Math.imul(al7, bl9) | 0;
      mid = mid + Math.imul(al7, bh9) | 0;
      mid = mid + Math.imul(ah7, bl9) | 0;
      hi = hi + Math.imul(ah7, bh9) | 0;
      var w16 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w16 >>> 26) | 0;
      w16 &= 67108863;
      lo = Math.imul(al9, bl8);
      mid = Math.imul(al9, bh8);
      mid = mid + Math.imul(ah9, bl8) | 0;
      hi = Math.imul(ah9, bh8);
      lo = lo + Math.imul(al8, bl9) | 0;
      mid = mid + Math.imul(al8, bh9) | 0;
      mid = mid + Math.imul(ah8, bl9) | 0;
      hi = hi + Math.imul(ah8, bh9) | 0;
      var w17 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w17 >>> 26) | 0;
      w17 &= 67108863;
      lo = Math.imul(al9, bl9);
      mid = Math.imul(al9, bh9);
      mid = mid + Math.imul(ah9, bl9) | 0;
      hi = Math.imul(ah9, bh9);
      var w18 = (c + lo | 0) + ((mid & 8191) << 13) | 0;
      c = (hi + (mid >>> 13) | 0) + (w18 >>> 26) | 0;
      w18 &= 67108863;
      o[0] = w0;
      o[1] = w1;
      o[2] = w2;
      o[3] = w3;
      o[4] = w4;
      o[5] = w5;
      o[6] = w6;
      o[7] = w7;
      o[8] = w8;
      o[9] = w9;
      o[10] = w10;
      o[11] = w11;
      o[12] = w12;
      o[13] = w13;
      o[14] = w14;
      o[15] = w15;
      o[16] = w16;
      o[17] = w17;
      o[18] = w18;
      if (c !== 0) {
        o[19] = c;
        out.length++;
      }
      return out;
    };
    if (!Math.imul) {
      comb10MulTo = smallMulTo;
    }
    function bigMulTo(self2, num, out) {
      out.negative = num.negative ^ self2.negative;
      out.length = self2.length + num.length;
      var carry = 0;
      var hncarry = 0;
      for (var k = 0; k < out.length - 1; k++) {
        var ncarry = hncarry;
        hncarry = 0;
        var rword = carry & 67108863;
        var maxJ = Math.min(k, num.length - 1);
        for (var j = Math.max(0, k - self2.length + 1); j <= maxJ; j++) {
          var i = k - j;
          var a = self2.words[i] | 0;
          var b = num.words[j] | 0;
          var r2 = a * b;
          var lo = r2 & 67108863;
          ncarry = ncarry + (r2 / 67108864 | 0) | 0;
          lo = lo + rword | 0;
          rword = lo & 67108863;
          ncarry = ncarry + (lo >>> 26) | 0;
          hncarry += ncarry >>> 26;
          ncarry &= 67108863;
        }
        out.words[k] = rword;
        carry = ncarry;
        ncarry = hncarry;
      }
      if (carry !== 0) {
        out.words[k] = carry;
      } else {
        out.length--;
      }
      return out._strip();
    }
    function jumboMulTo(self2, num, out) {
      return bigMulTo(self2, num, out);
    }
    BN2.prototype.mulTo = function mulTo(num, out) {
      var res;
      var len = this.length + num.length;
      if (this.length === 10 && num.length === 10) {
        res = comb10MulTo(this, num, out);
      } else if (len < 63) {
        res = smallMulTo(this, num, out);
      } else if (len < 1024) {
        res = bigMulTo(this, num, out);
      } else {
        res = jumboMulTo(this, num, out);
      }
      return res;
    };
    BN2.prototype.mul = function mul7(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return this.mulTo(num, out);
    };
    BN2.prototype.mulf = function mulf(num) {
      var out = new BN2(null);
      out.words = new Array(this.length + num.length);
      return jumboMulTo(this, num, out);
    };
    BN2.prototype.imul = function imul(num) {
      return this.clone().mulTo(num, this);
    };
    BN2.prototype.imuln = function imuln(num) {
      var isNegNum = num < 0;
      if (isNegNum)
        num = -num;
      assert2(typeof num === "number");
      assert2(num < 67108864);
      var carry = 0;
      for (var i = 0; i < this.length; i++) {
        var w = (this.words[i] | 0) * num;
        var lo = (w & 67108863) + (carry & 67108863);
        carry >>= 26;
        carry += w / 67108864 | 0;
        carry += lo >>> 26;
        this.words[i] = lo & 67108863;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return isNegNum ? this.ineg() : this;
    };
    BN2.prototype.muln = function muln(num) {
      return this.clone().imuln(num);
    };
    BN2.prototype.sqr = function sqr() {
      return this.mul(this);
    };
    BN2.prototype.isqr = function isqr() {
      return this.imul(this.clone());
    };
    BN2.prototype.pow = function pow(num) {
      var w = toBitArray(num);
      if (w.length === 0)
        return new BN2(1);
      var res = this;
      for (var i = 0; i < w.length; i++, res = res.sqr()) {
        if (w[i] !== 0)
          break;
      }
      if (++i < w.length) {
        for (var q = res.sqr(); i < w.length; i++, q = q.sqr()) {
          if (w[i] === 0)
            continue;
          res = res.mul(q);
        }
      }
      return res;
    };
    BN2.prototype.iushln = function iushln(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      var carryMask = 67108863 >>> 26 - r2 << 26 - r2;
      var i;
      if (r2 !== 0) {
        var carry = 0;
        for (i = 0; i < this.length; i++) {
          var newCarry = this.words[i] & carryMask;
          var c = (this.words[i] | 0) - newCarry << r2;
          this.words[i] = c | carry;
          carry = newCarry >>> 26 - r2;
        }
        if (carry) {
          this.words[i] = carry;
          this.length++;
        }
      }
      if (s2 !== 0) {
        for (i = this.length - 1; i >= 0; i--) {
          this.words[i + s2] = this.words[i];
        }
        for (i = 0; i < s2; i++) {
          this.words[i] = 0;
        }
        this.length += s2;
      }
      return this._strip();
    };
    BN2.prototype.ishln = function ishln(bits) {
      assert2(this.negative === 0);
      return this.iushln(bits);
    };
    BN2.prototype.iushrn = function iushrn(bits, hint, extended) {
      assert2(typeof bits === "number" && bits >= 0);
      var h;
      if (hint) {
        h = (hint - hint % 26) / 26;
      } else {
        h = 0;
      }
      var r2 = bits % 26;
      var s2 = Math.min((bits - r2) / 26, this.length);
      var mask = 67108863 ^ 67108863 >>> r2 << r2;
      var maskedWords = extended;
      h -= s2;
      h = Math.max(0, h);
      if (maskedWords) {
        for (var i = 0; i < s2; i++) {
          maskedWords.words[i] = this.words[i];
        }
        maskedWords.length = s2;
      }
      if (s2 === 0)
        ;
      else if (this.length > s2) {
        this.length -= s2;
        for (i = 0; i < this.length; i++) {
          this.words[i] = this.words[i + s2];
        }
      } else {
        this.words[0] = 0;
        this.length = 1;
      }
      var carry = 0;
      for (i = this.length - 1; i >= 0 && (carry !== 0 || i >= h); i--) {
        var word = this.words[i] | 0;
        this.words[i] = carry << 26 - r2 | word >>> r2;
        carry = word & mask;
      }
      if (maskedWords && carry !== 0) {
        maskedWords.words[maskedWords.length++] = carry;
      }
      if (this.length === 0) {
        this.words[0] = 0;
        this.length = 1;
      }
      return this._strip();
    };
    BN2.prototype.ishrn = function ishrn(bits, hint, extended) {
      assert2(this.negative === 0);
      return this.iushrn(bits, hint, extended);
    };
    BN2.prototype.shln = function shln(bits) {
      return this.clone().ishln(bits);
    };
    BN2.prototype.ushln = function ushln(bits) {
      return this.clone().iushln(bits);
    };
    BN2.prototype.shrn = function shrn(bits) {
      return this.clone().ishrn(bits);
    };
    BN2.prototype.ushrn = function ushrn(bits) {
      return this.clone().iushrn(bits);
    };
    BN2.prototype.testn = function testn(bit) {
      assert2(typeof bit === "number" && bit >= 0);
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q = 1 << r2;
      if (this.length <= s2)
        return false;
      var w = this.words[s2];
      return !!(w & q);
    };
    BN2.prototype.imaskn = function imaskn(bits) {
      assert2(typeof bits === "number" && bits >= 0);
      var r2 = bits % 26;
      var s2 = (bits - r2) / 26;
      assert2(this.negative === 0, "imaskn works only with positive numbers");
      if (this.length <= s2) {
        return this;
      }
      if (r2 !== 0) {
        s2++;
      }
      this.length = Math.min(s2, this.length);
      if (r2 !== 0) {
        var mask = 67108863 ^ 67108863 >>> r2 << r2;
        this.words[this.length - 1] &= mask;
      }
      return this._strip();
    };
    BN2.prototype.maskn = function maskn(bits) {
      return this.clone().imaskn(bits);
    };
    BN2.prototype.iaddn = function iaddn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0)
        return this.isubn(-num);
      if (this.negative !== 0) {
        if (this.length === 1 && (this.words[0] | 0) <= num) {
          this.words[0] = num - (this.words[0] | 0);
          this.negative = 0;
          return this;
        }
        this.negative = 0;
        this.isubn(num);
        this.negative = 1;
        return this;
      }
      return this._iaddn(num);
    };
    BN2.prototype._iaddn = function _iaddn(num) {
      this.words[0] += num;
      for (var i = 0; i < this.length && this.words[i] >= 67108864; i++) {
        this.words[i] -= 67108864;
        if (i === this.length - 1) {
          this.words[i + 1] = 1;
        } else {
          this.words[i + 1]++;
        }
      }
      this.length = Math.max(this.length, i + 1);
      return this;
    };
    BN2.prototype.isubn = function isubn(num) {
      assert2(typeof num === "number");
      assert2(num < 67108864);
      if (num < 0)
        return this.iaddn(-num);
      if (this.negative !== 0) {
        this.negative = 0;
        this.iaddn(num);
        this.negative = 1;
        return this;
      }
      this.words[0] -= num;
      if (this.length === 1 && this.words[0] < 0) {
        this.words[0] = -this.words[0];
        this.negative = 1;
      } else {
        for (var i = 0; i < this.length && this.words[i] < 0; i++) {
          this.words[i] += 67108864;
          this.words[i + 1] -= 1;
        }
      }
      return this._strip();
    };
    BN2.prototype.addn = function addn(num) {
      return this.clone().iaddn(num);
    };
    BN2.prototype.subn = function subn(num) {
      return this.clone().isubn(num);
    };
    BN2.prototype.iabs = function iabs() {
      this.negative = 0;
      return this;
    };
    BN2.prototype.abs = function abs() {
      return this.clone().iabs();
    };
    BN2.prototype._ishlnsubmul = function _ishlnsubmul(num, mul7, shift) {
      var len = num.length + shift;
      var i;
      this._expand(len);
      var w;
      var carry = 0;
      for (i = 0; i < num.length; i++) {
        w = (this.words[i + shift] | 0) + carry;
        var right = (num.words[i] | 0) * mul7;
        w -= right & 67108863;
        carry = (w >> 26) - (right / 67108864 | 0);
        this.words[i + shift] = w & 67108863;
      }
      for (; i < this.length - shift; i++) {
        w = (this.words[i + shift] | 0) + carry;
        carry = w >> 26;
        this.words[i + shift] = w & 67108863;
      }
      if (carry === 0)
        return this._strip();
      assert2(carry === -1);
      carry = 0;
      for (i = 0; i < this.length; i++) {
        w = -(this.words[i] | 0) + carry;
        carry = w >> 26;
        this.words[i] = w & 67108863;
      }
      this.negative = 1;
      return this._strip();
    };
    BN2.prototype._wordDiv = function _wordDiv(num, mode) {
      var shift = this.length - num.length;
      var a = this.clone();
      var b = num;
      var bhi = b.words[b.length - 1] | 0;
      var bhiBits = this._countBits(bhi);
      shift = 26 - bhiBits;
      if (shift !== 0) {
        b = b.ushln(shift);
        a.iushln(shift);
        bhi = b.words[b.length - 1] | 0;
      }
      var m = a.length - b.length;
      var q;
      if (mode !== "mod") {
        q = new BN2(null);
        q.length = m + 1;
        q.words = new Array(q.length);
        for (var i = 0; i < q.length; i++) {
          q.words[i] = 0;
        }
      }
      var diff = a.clone()._ishlnsubmul(b, 1, m);
      if (diff.negative === 0) {
        a = diff;
        if (q) {
          q.words[m] = 1;
        }
      }
      for (var j = m - 1; j >= 0; j--) {
        var qj = (a.words[b.length + j] | 0) * 67108864 + (a.words[b.length + j - 1] | 0);
        qj = Math.min(qj / bhi | 0, 67108863);
        a._ishlnsubmul(b, qj, j);
        while (a.negative !== 0) {
          qj--;
          a.negative = 0;
          a._ishlnsubmul(b, 1, j);
          if (!a.isZero()) {
            a.negative ^= 1;
          }
        }
        if (q) {
          q.words[j] = qj;
        }
      }
      if (q) {
        q._strip();
      }
      a._strip();
      if (mode !== "div" && shift !== 0) {
        a.iushrn(shift);
      }
      return {
        div: q || null,
        mod: a
      };
    };
    BN2.prototype.divmod = function divmod(num, mode, positive) {
      assert2(!num.isZero());
      if (this.isZero()) {
        return {
          div: new BN2(0),
          mod: new BN2(0)
        };
      }
      var div, mod, res;
      if (this.negative !== 0 && num.negative === 0) {
        res = this.neg().divmod(num, mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.iadd(num);
          }
        }
        return {
          div,
          mod
        };
      }
      if (this.negative === 0 && num.negative !== 0) {
        res = this.divmod(num.neg(), mode);
        if (mode !== "mod") {
          div = res.div.neg();
        }
        return {
          div,
          mod: res.mod
        };
      }
      if ((this.negative & num.negative) !== 0) {
        res = this.neg().divmod(num.neg(), mode);
        if (mode !== "div") {
          mod = res.mod.neg();
          if (positive && mod.negative !== 0) {
            mod.isub(num);
          }
        }
        return {
          div: res.div,
          mod
        };
      }
      if (num.length > this.length || this.cmp(num) < 0) {
        return {
          div: new BN2(0),
          mod: this
        };
      }
      if (num.length === 1) {
        if (mode === "div") {
          return {
            div: this.divn(num.words[0]),
            mod: null
          };
        }
        if (mode === "mod") {
          return {
            div: null,
            mod: new BN2(this.modrn(num.words[0]))
          };
        }
        return {
          div: this.divn(num.words[0]),
          mod: new BN2(this.modrn(num.words[0]))
        };
      }
      return this._wordDiv(num, mode);
    };
    BN2.prototype.div = function div(num) {
      return this.divmod(num, "div", false).div;
    };
    BN2.prototype.mod = function mod(num) {
      return this.divmod(num, "mod", false).mod;
    };
    BN2.prototype.umod = function umod(num) {
      return this.divmod(num, "mod", true).mod;
    };
    BN2.prototype.divRound = function divRound(num) {
      var dm = this.divmod(num);
      if (dm.mod.isZero())
        return dm.div;
      var mod = dm.div.negative !== 0 ? dm.mod.isub(num) : dm.mod;
      var half = num.ushrn(1);
      var r2 = num.andln(1);
      var cmp = mod.cmp(half);
      if (cmp < 0 || r2 === 1 && cmp === 0)
        return dm.div;
      return dm.div.negative !== 0 ? dm.div.isubn(1) : dm.div.iaddn(1);
    };
    BN2.prototype.modrn = function modrn(num) {
      var isNegNum = num < 0;
      if (isNegNum)
        num = -num;
      assert2(num <= 67108863);
      var p = (1 << 26) % num;
      var acc = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        acc = (p * acc + (this.words[i] | 0)) % num;
      }
      return isNegNum ? -acc : acc;
    };
    BN2.prototype.modn = function modn(num) {
      return this.modrn(num);
    };
    BN2.prototype.idivn = function idivn(num) {
      var isNegNum = num < 0;
      if (isNegNum)
        num = -num;
      assert2(num <= 67108863);
      var carry = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var w = (this.words[i] | 0) + carry * 67108864;
        this.words[i] = w / num | 0;
        carry = w % num;
      }
      this._strip();
      return isNegNum ? this.ineg() : this;
    };
    BN2.prototype.divn = function divn(num) {
      return this.clone().idivn(num);
    };
    BN2.prototype.egcd = function egcd(p) {
      assert2(p.negative === 0);
      assert2(!p.isZero());
      var x = this;
      var y = p.clone();
      if (x.negative !== 0) {
        x = x.umod(p);
      } else {
        x = x.clone();
      }
      var A = new BN2(1);
      var B = new BN2(0);
      var C = new BN2(0);
      var D = new BN2(1);
      var g = 0;
      while (x.isEven() && y.isEven()) {
        x.iushrn(1);
        y.iushrn(1);
        ++g;
      }
      var yp = y.clone();
      var xp = x.clone();
      while (!x.isZero()) {
        for (var i = 0, im = 1; (x.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          x.iushrn(i);
          while (i-- > 0) {
            if (A.isOdd() || B.isOdd()) {
              A.iadd(yp);
              B.isub(xp);
            }
            A.iushrn(1);
            B.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (y.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          y.iushrn(j);
          while (j-- > 0) {
            if (C.isOdd() || D.isOdd()) {
              C.iadd(yp);
              D.isub(xp);
            }
            C.iushrn(1);
            D.iushrn(1);
          }
        }
        if (x.cmp(y) >= 0) {
          x.isub(y);
          A.isub(C);
          B.isub(D);
        } else {
          y.isub(x);
          C.isub(A);
          D.isub(B);
        }
      }
      return {
        a: C,
        b: D,
        gcd: y.iushln(g)
      };
    };
    BN2.prototype._invmp = function _invmp(p) {
      assert2(p.negative === 0);
      assert2(!p.isZero());
      var a = this;
      var b = p.clone();
      if (a.negative !== 0) {
        a = a.umod(p);
      } else {
        a = a.clone();
      }
      var x1 = new BN2(1);
      var x2 = new BN2(0);
      var delta = b.clone();
      while (a.cmpn(1) > 0 && b.cmpn(1) > 0) {
        for (var i = 0, im = 1; (a.words[0] & im) === 0 && i < 26; ++i, im <<= 1)
          ;
        if (i > 0) {
          a.iushrn(i);
          while (i-- > 0) {
            if (x1.isOdd()) {
              x1.iadd(delta);
            }
            x1.iushrn(1);
          }
        }
        for (var j = 0, jm = 1; (b.words[0] & jm) === 0 && j < 26; ++j, jm <<= 1)
          ;
        if (j > 0) {
          b.iushrn(j);
          while (j-- > 0) {
            if (x2.isOdd()) {
              x2.iadd(delta);
            }
            x2.iushrn(1);
          }
        }
        if (a.cmp(b) >= 0) {
          a.isub(b);
          x1.isub(x2);
        } else {
          b.isub(a);
          x2.isub(x1);
        }
      }
      var res;
      if (a.cmpn(1) === 0) {
        res = x1;
      } else {
        res = x2;
      }
      if (res.cmpn(0) < 0) {
        res.iadd(p);
      }
      return res;
    };
    BN2.prototype.gcd = function gcd(num) {
      if (this.isZero())
        return num.abs();
      if (num.isZero())
        return this.abs();
      var a = this.clone();
      var b = num.clone();
      a.negative = 0;
      b.negative = 0;
      for (var shift = 0; a.isEven() && b.isEven(); shift++) {
        a.iushrn(1);
        b.iushrn(1);
      }
      do {
        while (a.isEven()) {
          a.iushrn(1);
        }
        while (b.isEven()) {
          b.iushrn(1);
        }
        var r2 = a.cmp(b);
        if (r2 < 0) {
          var t = a;
          a = b;
          b = t;
        } else if (r2 === 0 || b.cmpn(1) === 0) {
          break;
        }
        a.isub(b);
      } while (true);
      return b.iushln(shift);
    };
    BN2.prototype.invm = function invm(num) {
      return this.egcd(num).a.umod(num);
    };
    BN2.prototype.isEven = function isEven() {
      return (this.words[0] & 1) === 0;
    };
    BN2.prototype.isOdd = function isOdd() {
      return (this.words[0] & 1) === 1;
    };
    BN2.prototype.andln = function andln(num) {
      return this.words[0] & num;
    };
    BN2.prototype.bincn = function bincn(bit) {
      assert2(typeof bit === "number");
      var r2 = bit % 26;
      var s2 = (bit - r2) / 26;
      var q = 1 << r2;
      if (this.length <= s2) {
        this._expand(s2 + 1);
        this.words[s2] |= q;
        return this;
      }
      var carry = q;
      for (var i = s2; carry !== 0 && i < this.length; i++) {
        var w = this.words[i] | 0;
        w += carry;
        carry = w >>> 26;
        w &= 67108863;
        this.words[i] = w;
      }
      if (carry !== 0) {
        this.words[i] = carry;
        this.length++;
      }
      return this;
    };
    BN2.prototype.isZero = function isZero() {
      return this.length === 1 && this.words[0] === 0;
    };
    BN2.prototype.cmpn = function cmpn(num) {
      var negative = num < 0;
      if (this.negative !== 0 && !negative)
        return -1;
      if (this.negative === 0 && negative)
        return 1;
      this._strip();
      var res;
      if (this.length > 1) {
        res = 1;
      } else {
        if (negative) {
          num = -num;
        }
        assert2(num <= 67108863, "Number is too big");
        var w = this.words[0] | 0;
        res = w === num ? 0 : w < num ? -1 : 1;
      }
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.cmp = function cmp(num) {
      if (this.negative !== 0 && num.negative === 0)
        return -1;
      if (this.negative === 0 && num.negative !== 0)
        return 1;
      var res = this.ucmp(num);
      if (this.negative !== 0)
        return -res | 0;
      return res;
    };
    BN2.prototype.ucmp = function ucmp(num) {
      if (this.length > num.length)
        return 1;
      if (this.length < num.length)
        return -1;
      var res = 0;
      for (var i = this.length - 1; i >= 0; i--) {
        var a = this.words[i] | 0;
        var b = num.words[i] | 0;
        if (a === b)
          continue;
        if (a < b) {
          res = -1;
        } else if (a > b) {
          res = 1;
        }
        break;
      }
      return res;
    };
    BN2.prototype.gtn = function gtn(num) {
      return this.cmpn(num) === 1;
    };
    BN2.prototype.gt = function gt(num) {
      return this.cmp(num) === 1;
    };
    BN2.prototype.gten = function gten(num) {
      return this.cmpn(num) >= 0;
    };
    BN2.prototype.gte = function gte(num) {
      return this.cmp(num) >= 0;
    };
    BN2.prototype.ltn = function ltn(num) {
      return this.cmpn(num) === -1;
    };
    BN2.prototype.lt = function lt(num) {
      return this.cmp(num) === -1;
    };
    BN2.prototype.lten = function lten(num) {
      return this.cmpn(num) <= 0;
    };
    BN2.prototype.lte = function lte(num) {
      return this.cmp(num) <= 0;
    };
    BN2.prototype.eqn = function eqn(num) {
      return this.cmpn(num) === 0;
    };
    BN2.prototype.eq = function eq9(num) {
      return this.cmp(num) === 0;
    };
    BN2.red = function red2(num) {
      return new Red(num);
    };
    BN2.prototype.toRed = function toRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      assert2(this.negative === 0, "red works only with positives");
      return ctx.convertTo(this)._forceRed(ctx);
    };
    BN2.prototype.fromRed = function fromRed() {
      assert2(this.red, "fromRed works only with numbers in reduction context");
      return this.red.convertFrom(this);
    };
    BN2.prototype._forceRed = function _forceRed(ctx) {
      this.red = ctx;
      return this;
    };
    BN2.prototype.forceRed = function forceRed(ctx) {
      assert2(!this.red, "Already a number in reduction context");
      return this._forceRed(ctx);
    };
    BN2.prototype.redAdd = function redAdd(num) {
      assert2(this.red, "redAdd works only with red numbers");
      return this.red.add(this, num);
    };
    BN2.prototype.redIAdd = function redIAdd(num) {
      assert2(this.red, "redIAdd works only with red numbers");
      return this.red.iadd(this, num);
    };
    BN2.prototype.redSub = function redSub(num) {
      assert2(this.red, "redSub works only with red numbers");
      return this.red.sub(this, num);
    };
    BN2.prototype.redISub = function redISub(num) {
      assert2(this.red, "redISub works only with red numbers");
      return this.red.isub(this, num);
    };
    BN2.prototype.redShl = function redShl(num) {
      assert2(this.red, "redShl works only with red numbers");
      return this.red.shl(this, num);
    };
    BN2.prototype.redMul = function redMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.mul(this, num);
    };
    BN2.prototype.redIMul = function redIMul(num) {
      assert2(this.red, "redMul works only with red numbers");
      this.red._verify2(this, num);
      return this.red.imul(this, num);
    };
    BN2.prototype.redSqr = function redSqr() {
      assert2(this.red, "redSqr works only with red numbers");
      this.red._verify1(this);
      return this.red.sqr(this);
    };
    BN2.prototype.redISqr = function redISqr() {
      assert2(this.red, "redISqr works only with red numbers");
      this.red._verify1(this);
      return this.red.isqr(this);
    };
    BN2.prototype.redSqrt = function redSqrt() {
      assert2(this.red, "redSqrt works only with red numbers");
      this.red._verify1(this);
      return this.red.sqrt(this);
    };
    BN2.prototype.redInvm = function redInvm() {
      assert2(this.red, "redInvm works only with red numbers");
      this.red._verify1(this);
      return this.red.invm(this);
    };
    BN2.prototype.redNeg = function redNeg() {
      assert2(this.red, "redNeg works only with red numbers");
      this.red._verify1(this);
      return this.red.neg(this);
    };
    BN2.prototype.redPow = function redPow(num) {
      assert2(this.red && !num.red, "redPow(normalNum)");
      this.red._verify1(this);
      return this.red.pow(this, num);
    };
    var primes = {
      k256: null,
      p224: null,
      p192: null,
      p25519: null
    };
    function MPrime(name2, p) {
      this.name = name2;
      this.p = new BN2(p, 16);
      this.n = this.p.bitLength();
      this.k = new BN2(1).iushln(this.n).isub(this.p);
      this.tmp = this._tmp();
    }
    MPrime.prototype._tmp = function _tmp() {
      var tmp = new BN2(null);
      tmp.words = new Array(Math.ceil(this.n / 13));
      return tmp;
    };
    MPrime.prototype.ireduce = function ireduce(num) {
      var r2 = num;
      var rlen;
      do {
        this.split(r2, this.tmp);
        r2 = this.imulK(r2);
        r2 = r2.iadd(this.tmp);
        rlen = r2.bitLength();
      } while (rlen > this.n);
      var cmp = rlen < this.n ? -1 : r2.ucmp(this.p);
      if (cmp === 0) {
        r2.words[0] = 0;
        r2.length = 1;
      } else if (cmp > 0) {
        r2.isub(this.p);
      } else {
        if (r2.strip !== void 0) {
          r2.strip();
        } else {
          r2._strip();
        }
      }
      return r2;
    };
    MPrime.prototype.split = function split(input, out) {
      input.iushrn(this.n, 0, out);
    };
    MPrime.prototype.imulK = function imulK(num) {
      return num.imul(this.k);
    };
    function K256() {
      MPrime.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    inherits2(K256, MPrime);
    K256.prototype.split = function split(input, output) {
      var mask = 4194303;
      var outLen = Math.min(input.length, 9);
      for (var i = 0; i < outLen; i++) {
        output.words[i] = input.words[i];
      }
      output.length = outLen;
      if (input.length <= 9) {
        input.words[0] = 0;
        input.length = 1;
        return;
      }
      var prev = input.words[9];
      output.words[output.length++] = prev & mask;
      for (i = 10; i < input.length; i++) {
        var next = input.words[i] | 0;
        input.words[i - 10] = (next & mask) << 4 | prev >>> 22;
        prev = next;
      }
      prev >>>= 22;
      input.words[i - 10] = prev;
      if (prev === 0 && input.length > 10) {
        input.length -= 10;
      } else {
        input.length -= 9;
      }
    };
    K256.prototype.imulK = function imulK(num) {
      num.words[num.length] = 0;
      num.words[num.length + 1] = 0;
      num.length += 2;
      var lo = 0;
      for (var i = 0; i < num.length; i++) {
        var w = num.words[i] | 0;
        lo += w * 977;
        num.words[i] = lo & 67108863;
        lo = w * 64 + (lo / 67108864 | 0);
      }
      if (num.words[num.length - 1] === 0) {
        num.length--;
        if (num.words[num.length - 1] === 0) {
          num.length--;
        }
      }
      return num;
    };
    function P224() {
      MPrime.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    inherits2(P224, MPrime);
    function P192() {
      MPrime.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    inherits2(P192, MPrime);
    function P25519() {
      MPrime.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    inherits2(P25519, MPrime);
    P25519.prototype.imulK = function imulK(num) {
      var carry = 0;
      for (var i = 0; i < num.length; i++) {
        var hi = (num.words[i] | 0) * 19 + carry;
        var lo = hi & 67108863;
        hi >>>= 26;
        num.words[i] = lo;
        carry = hi;
      }
      if (carry !== 0) {