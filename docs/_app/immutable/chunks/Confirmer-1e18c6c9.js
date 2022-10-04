import { _ as __vitePreload } from "./preload-helper-6b8a655d.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, F as create_slot, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, l as element, r as text, a as space, w as create_component, m as claim_element, n as children, u as claim_text, h as detach, c as claim_space, x as claim_component, p as attr, b as insert_hydration, J as append_hydration, y as mount_component, v as set_data, B as destroy_component, U as binding_callbacks, T as bubble, e as empty, V as destroy_each, W as null_to_empty, E as noop, g as group_outros, d as check_outros, o as onMount } from "./index-95820fb8.js";
import { B as Button, d as decode_1, e as BigNumber, f as encode_1, h as handlers } from "./Index-2d1caaba.js";
import { E as EncodingSelector } from "./EncodingSelector-35199665.js";
import "./index-09de7b82.js";
import "./events-24eb7459.js";
import "./index-6ab0de96.js";
const DefaultConfirmation_svelte_svelte_type_style_lang = "";
function create_default_slot_1$6(ctx) {
  let t;
  return {
    c() {
      t = text("Yes");
    },
    l(nodes) {
      t = claim_text(nodes, "Yes");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$6(ctx) {
  let t;
  return {
    c() {
      t = text("No");
    },
    l(nodes) {
      t = claim_text(nodes, "No");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function fallback_block(ctx) {
  let div3;
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[0].method + "";
  let t1;
  let t2;
  let t3;
  let div1;
  let button0;
  let t4;
  let button1;
  let current;
  button0 = new Button({
    props: {
      type: "Yes",
      clickHandler: ctx[1],
      $$slots: { default: [create_default_slot_1$6] },
      $$scope: { ctx }
    }
  });
  button1 = new Button({
    props: {
      type: "No",
      clickHandler: ctx[2],
      $$slots: { default: [create_default_slot$6] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div3 = element("div");
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Authorize ");
      t1 = text(t1_value);
      t2 = text(" from your wallet?");
      t3 = space();
      div1 = element("div");
      create_component(button0.$$.fragment);
      t4 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Authorize ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " from your wallet?");
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(button0.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(button1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-jw03ri");
      attr(div1, "class", "submit svelte-jw03ri");
      attr(div2, "class", "attention svelte-jw03ri");
      attr(div3, "class", "svelte-jw03ri");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div2);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      mount_component(button0, div1, null);
      append_hydration(div1, t4);
      mount_component(button1, div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0].method + ""))
        set_data(t1, t1_value);
      const button0_changes = {};
      if (dirty & 2)
        button0_changes.clickHandler = ctx2[1];
      if (dirty & 16) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 4)
        button1_changes.clickHandler = ctx2[2];
      if (dirty & 16) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}
function create_fragment$7(ctx) {
  let current;
  const default_slot_template = ctx[3].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], null);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  return {
    c() {
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
    },
    l(nodes) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(nodes);
    },
    m(target, anchor) {
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(target, anchor);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[4],
            !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, null),
            null
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 7)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot_or_fallback, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot_or_fallback, local);
      current = false;
    },
    d(detaching) {
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
    }
  };
}
function instance$7($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { props = { method: "", params: {} } } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(1, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(2, handleDenied = $$props2.handleDenied);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [props, handleConfirmed, handleDenied, slots, $$scope];
}
class DefaultConfirmation extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$7, create_fragment$7, safe_not_equal, {
      props: 0,
      handleConfirmed: 1,
      handleDenied: 2
    });
  }
}
const Connect_svelte_svelte_type_style_lang = "";
function create_default_slot_1$5(ctx) {
  let t;
  return {
    c() {
      t = text("Yes");
    },
    l(nodes) {
      t = claim_text(nodes, "Yes");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$5(ctx) {
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[4].params.origin + "";
  let t1;
  let t2;
  let b;
  let t3;
  let t4;
  let t5;
  let div1;
  let button;
  let current;
  button = new Button({
    props: {
      type: "Yes",
      clickHandler: ctx[1].handleConfirm,
      $$slots: { default: [create_default_slot_1$5] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Allow ");
      t1 = text(t1_value);
      t2 = text(" to see your ");
      b = element("b");
      t3 = text("Public");
      t4 = text(" Key?");
      t5 = space();
      div1 = element("div");
      create_component(button.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Allow ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " to see your ");
      b = claim_element(div0_nodes, "B", {});
      var b_nodes = children(b);
      t3 = claim_text(b_nodes, "Public");
      b_nodes.forEach(detach);
      t4 = claim_text(div0_nodes, " Key?");
      div0_nodes.forEach(detach);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(button.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-as2cuw");
      attr(div1, "class", "submit svelte-as2cuw");
      attr(div2, "class", "attention svelte-as2cuw");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div0, b);
      append_hydration(b, t3);
      append_hydration(div0, t4);
      append_hydration(div2, t5);
      append_hydration(div2, div1);
      mount_component(button, div1, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 16) && t1_value !== (t1_value = ctx2[4].params.origin + ""))
        set_data(t1, t1_value);
      const button_changes = {};
      if (dirty & 2)
        button_changes.clickHandler = ctx2[1].handleConfirm;
      if (dirty & 32) {
        button_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button.$set(button_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(button);
    }
  };
}
function create_fragment$6(ctx) {
  let defaultconfirmation;
  let current;
  let defaultconfirmation_props = {
    props: ctx[0],
    $$slots: {
      default: [
        create_default_slot$5,
        ({ props: p }) => ({ 4: p }),
        ({ props: p }) => p ? 16 : 0
      ]
    },
    $$scope: { ctx }
  };
  defaultconfirmation = new DefaultConfirmation({ props: defaultconfirmation_props });
  ctx[2](defaultconfirmation);
  defaultconfirmation.$on("confirmed", ctx[3]);
  return {
    c() {
      create_component(defaultconfirmation.$$.fragment);
    },
    l(nodes) {
      claim_component(defaultconfirmation.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(defaultconfirmation, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const defaultconfirmation_changes = {};
      if (dirty & 1)
        defaultconfirmation_changes.props = ctx2[0];
      if (dirty & 50) {
        defaultconfirmation_changes.$$scope = { dirty, ctx: ctx2 };
      }
      defaultconfirmation.$set(defaultconfirmation_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(defaultconfirmation.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(defaultconfirmation.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      ctx[2](null);
      destroy_component(defaultconfirmation, detaching);
    }
  };
}
function instance$6($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let defConf;
  function defaultconfirmation_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      defConf = $$value;
      $$invalidate(1, defConf);
    });
  }
  function confirmed_handler(event) {
    bubble.call(this, $$self, event);
  }
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
  };
  return [props, defConf, defaultconfirmation_binding, confirmed_handler];
}
class Connect extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$6, create_fragment$6, safe_not_equal, { props: 0 });
  }
}
async function deepHash(data) {
  if (Array.isArray(data)) {
    const tag2 = concatBuffers([
      stringToBuffer("list"),
      stringToBuffer(data.length.toString())
    ]);
    return await deepHashChunks(data, await crypto.subtle.digest("SHA-384", tag2));
  }
  const tag = concatBuffers([
    stringToBuffer("blob"),
    stringToBuffer(data.byteLength.toString())
  ]);
  const taggedHash = concatBuffers([
    await crypto.subtle.digest("SHA-384", tag),
    await crypto.subtle.digest("SHA-384", data)
  ]);
  return await crypto.subtle.digest("SHA-384", taggedHash);
}
async function deepHashChunks(chunks, acc) {
  if (chunks.length < 1) {
    return acc;
  }
  const hashPair = concatBuffers([acc, await deepHash(chunks[0])]);
  const newAcc = await crypto.subtle.digest("SHA-384", hashPair);
  return await deepHashChunks(chunks.slice(1), newAcc);
}
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
function b64UrlToString(b64UrlString) {
  let buffer = b64UrlToBuffer(b64UrlString);
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = require("util").TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
function bufferToString(buffer) {
  if (typeof TextDecoder == "undefined") {
    const TextDecoder2 = require("util").TextDecoder;
    return new TextDecoder2("utf-8", { fatal: true }).decode(buffer);
  }
  return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
}
function stringToBuffer(string) {
  if (typeof TextEncoder == "undefined") {
    const TextEncoder2 = require("util").TextEncoder;
    return new TextEncoder2().encode(string);
  }
  return new TextEncoder().encode(string);
}
function stringToB64Url(string) {
  return bufferTob64Url(stringToBuffer(string));
}
function b64UrlToBuffer(b64UrlString) {
  return new Uint8Array(decode_1(b64UrlDecode(b64UrlString)));
}
function bufferTob64(buffer) {
  return encode_1(new Uint8Array(buffer));
}
function bufferTob64Url(buffer) {
  return b64UrlEncode(bufferTob64(buffer));
}
function b64UrlEncode(b64UrlString) {
  return b64UrlString.replace(/\+/g, "-").replace(/\//g, "_").replace(/\=/g, "");
}
function b64UrlDecode(b64UrlString) {
  b64UrlString = b64UrlString.replace(/\-/g, "+").replace(/\_/g, "/");
  let padding;
  b64UrlString.length % 4 == 0 ? padding = 0 : padding = 4 - b64UrlString.length % 4;
  return b64UrlString.concat("=".repeat(padding));
}
class BaseObject {
  get(field, options) {
    if (!Object.getOwnPropertyNames(this).includes(field)) {
      throw new Error(`Field "${field}" is not a property of the Arweave Transaction class.`);
    }
    if (this[field] instanceof Uint8Array) {
      if (options && options.decode && options.string) {
        return bufferToString(this[field]);
      }
      if (options && options.decode && !options.string) {
        return this[field];
      }
      return bufferTob64Url(this[field]);
    }
    if (options && options.decode == true) {
      if (options && options.string) {
        return b64UrlToString(this[field]);
      }
      return b64UrlToBuffer(this[field]);
    }
    return this[field];
  }
}
class Tag extends BaseObject {
  constructor(name, value, decode = false) {
    super();
    this.name = name;
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
      this.data = b64UrlToBuffer(this.data);
    }
    if (attributes.tags) {
      this.tags = attributes.tags.map((tag) => {
        return new Tag(tag.name, tag.value);
      });
    }
  }
  addTag(name, value) {
    this.tags.push(new Tag(stringToB64Url(name), stringToB64Url(value)));
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
      data: bufferTob64Url(this.data),
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
    id,
    owner,
    reward,
    tags,
    signature
  }) {
    this.id = id;
    this.owner = owner;
    if (reward)
      this.reward = reward;
    if (tags)
      this.tags = tags;
    this.signature = signature;
  }
  async prepareChunks(data) {
    if (!this.chunks && data.byteLength > 0) {
      this.chunks = await generateTransactionChunks(data);
      this.data_root = bufferTob64Url(this.chunks.data_root);
    }
    if (!this.chunks && data.byteLength === 0) {
      this.chunks = {
        chunks: [],
        data_root: new Uint8Array(),
        proofs: []
      };
      this.data_root = "";
    }
  }
  getChunk(idx, data) {
    if (!this.chunks) {
      throw new Error(`Chunks have not been prepared`);
    }
    const proof = this.chunks.proofs[idx];
    const chunk = this.chunks.chunks[idx];
    return {
      data_root: this.data_root,
      data_size: this.data_size,
      data_path: bufferTob64Url(proof.proof),
      offset: proof.offset.toString(),
      chunk: bufferTob64Url(data.slice(chunk.minByteRange, chunk.maxByteRange))
    };
  }
  async getSignatureData() {
    switch (this.format) {
      case 1:
        let tags = this.tags.reduce((accumulator, tag) => {
          return concatBuffers([
            accumulator,
            tag.get("name", { decode: true, string: false }),
            tag.get("value", { decode: true, string: false })
          ]);
        }, new Uint8Array());
        return concatBuffers([
          this.get("owner", { decode: true, string: false }),
          this.get("target", { decode: true, string: false }),
          this.get("data", { decode: true, string: false }),
          stringToBuffer(this.quantity),
          stringToBuffer(this.reward),
          this.get("last_tx", { decode: true, string: false }),
          tags
        ]);
      case 2:
        if (!this.data_root) {
          await this.prepareChunks(this.data);
        }
        const tagList = this.tags.map((tag) => [
          tag.get("name", { decode: true, string: false }),
          tag.get("value", { decode: true, string: false })
        ]);
        return await deepHash([
          stringToBuffer(this.format.toString()),
          this.get("owner", { decode: true, string: false }),
          this.get("target", { decode: true, string: false }),
          stringToBuffer(this.quantity),
          stringToBuffer(this.reward),
          this.get("last_tx", { decode: true, string: false }),
          tagList,
          stringToBuffer(this.data_size),
          this.get("data_root", { decode: true, string: false })
        ]);
      default:
        throw new Error(`Unexpected transaction format: ${this.format}`);
    }
  }
}
function winstonToAr(winstonString, { formatted = false, decimals = 12, trim = true } = {}) {
  let number = stringToBigNum(winstonString, decimals).shiftedBy(-12);
  return formatted ? number.toFormat(decimals) : number.toFixed(decimals);
}
function stringToBigNum(stringValue, decimalPlaces = 12) {
  return BigNum(stringValue, decimalPlaces);
}
const BigNum = (value, decimals) => {
  let instance2;
  try {
    instance2 = BigNumber.clone({ DECIMAL_PLACES: decimals });
  } catch (error) {
    console.warn("Caught big num issues, try default", error);
    instance2 = BigNumber.default.clone({ DECIMAL_PLACES: decimals });
  }
  return new instance2(value);
};
const ArweaveSign_svelte_svelte_type_style_lang = "";
function get_each_context$1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i].name;
  child_ctx[8] = list[i].val;
  return child_ctx;
}
function create_if_block$1(ctx) {
  let div3;
  let div0;
  let t0;
  let t1_value = ctx[0].method + "";
  let t1;
  let t2;
  let t3;
  let div1;
  let t4;
  let br0;
  let t5;
  let t6;
  let t7_value = ctx[3].quantity + "";
  let t7;
  let br1;
  let t8;
  let t9_value = ctx[3].reward + "";
  let t9;
  let t10;
  let t11_value = (winstonToAr(ctx[3].reward) * 100).toFixed(5) + "";
  let t11;
  let t12;
  let br2;
  let t13;
  let div2;
  let button0;
  let t14;
  let button1;
  let current;
  let each_value = ctx[4];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }
  button0 = new Button({
    props: {
      type: "Yes",
      clickHandler: ctx[1],
      $$slots: { default: [create_default_slot_1$4] },
      $$scope: { ctx }
    }
  });
  button1 = new Button({
    props: {
      type: "No",
      clickHandler: ctx[2],
      $$slots: { default: [create_default_slot$4] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div3 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Attention! You are about to sign (");
      t1 = text(t1_value);
      t2 = text(") this Arweave transaction. Authorize to\r\n			proceed?");
      t3 = space();
      div1 = element("div");
      t4 = text("Tags:");
      br0 = element("br");
      t5 = space();
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      t6 = text("\r\n			Token transfer: ");
      t7 = text(t7_value);
      br1 = element("br");
      t8 = text("\r\n			One time storage Fee: ");
      t9 = text(t9_value);
      t10 = text(" (~$");
      t11 = text(t11_value);
      t12 = text(")");
      br2 = element("br");
      t13 = space();
      div2 = element("div");
      create_component(button0.$$.fragment);
      t14 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div3 = claim_element(nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div0 = claim_element(div3_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Attention! You are about to sign (");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, ") this Arweave transaction. Authorize to\r\n			proceed?");
      div0_nodes.forEach(detach);
      t3 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t4 = claim_text(div1_nodes, "Tags:");
      br0 = claim_element(div1_nodes, "BR", {});
      t5 = claim_space(div1_nodes);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      t6 = claim_text(div1_nodes, "\r\n			Token transfer: ");
      t7 = claim_text(div1_nodes, t7_value);
      br1 = claim_element(div1_nodes, "BR", {});
      t8 = claim_text(div1_nodes, "\r\n			One time storage Fee: ");
      t9 = claim_text(div1_nodes, t9_value);
      t10 = claim_text(div1_nodes, " (~$");
      t11 = claim_text(div1_nodes, t11_value);
      t12 = claim_text(div1_nodes, ")");
      br2 = claim_element(div1_nodes, "BR", {});
      div1_nodes.forEach(detach);
      t13 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      claim_component(button0.$$.fragment, div2_nodes);
      t14 = claim_space(div2_nodes);
      claim_component(button1.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-mhnubd");
      attr(div1, "class", "svelte-mhnubd");
      attr(div2, "class", "submit svelte-mhnubd");
      attr(div3, "class", "attention svelte-mhnubd");
    },
    m(target, anchor) {
      insert_hydration(target, div3, anchor);
      append_hydration(div3, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div3, t3);
      append_hydration(div3, div1);
      append_hydration(div1, t4);
      append_hydration(div1, br0);
      append_hydration(div1, t5);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      append_hydration(div1, t6);
      append_hydration(div1, t7);
      append_hydration(div1, br1);
      append_hydration(div1, t8);
      append_hydration(div1, t9);
      append_hydration(div1, t10);
      append_hydration(div1, t11);
      append_hydration(div1, t12);
      append_hydration(div1, br2);
      append_hydration(div3, t13);
      append_hydration(div3, div2);
      mount_component(button0, div2, null);
      append_hydration(div2, t14);
      mount_component(button1, div2, null);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0].method + ""))
        set_data(t1, t1_value);
      if (dirty & 16) {
        each_value = ctx2[4];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context$1(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
          } else {
            each_blocks[i] = create_each_block$1(child_ctx);
            each_blocks[i].c();
            each_blocks[i].m(div1, t6);
          }
        }
        for (; i < each_blocks.length; i += 1) {
          each_blocks[i].d(1);
        }
        each_blocks.length = each_value.length;
      }
      const button0_changes = {};
      if (dirty & 2)
        button0_changes.clickHandler = ctx2[1];
      if (dirty & 2048) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 4)
        button1_changes.clickHandler = ctx2[2];
      if (dirty & 2048) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div3);
      destroy_each(each_blocks, detaching);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}
function create_each_block$1(ctx) {
  let li;
  let t0_value = ctx[7] + "";
  let t0;
  let t1;
  let t2_value = ctx[8] + "";
  let t2;
  return {
    c() {
      li = element("li");
      t0 = text(t0_value);
      t1 = text(":\r\n					");
      t2 = text(t2_value);
      this.h();
    },
    l(nodes) {
      li = claim_element(nodes, "LI", { class: true });
      var li_nodes = children(li);
      t0 = claim_text(li_nodes, t0_value);
      t1 = claim_text(li_nodes, ":\r\n					");
      t2 = claim_text(li_nodes, t2_value);
      li_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(li, "class", null_to_empty(ctx[7].includes("App-Name") ? "bold" : "") + " svelte-mhnubd");
    },
    m(target, anchor) {
      insert_hydration(target, li, anchor);
      append_hydration(li, t0);
      append_hydration(li, t1);
      append_hydration(li, t2);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(li);
    }
  };
}
function create_default_slot_1$4(ctx) {
  let t;
  return {
    c() {
      t = text("Yes");
    },
    l(nodes) {
      t = claim_text(nodes, "Yes");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$4(ctx) {
  let t;
  return {
    c() {
      t = text("No");
    },
    l(nodes) {
      t = claim_text(nodes, "No");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$5(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[3] && create_if_block$1(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[3])
        if_block.p(ctx2, dirty);
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance$5($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  console.log("Signing ", { params: props.params });
  const transaction = props.params;
  let tx = new Transaction(transaction);
  let tags = tx.tags.map((tag) => ({
    name: tag.get("name", { decode: true, string: true }),
    val: tag.get("value", { decode: true, string: true })
  }));
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(1, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(2, handleDenied = $$props2.handleDenied);
  };
  return [props, handleConfirmed, handleDenied, transaction, tags];
}
class ArweaveSign extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$5, create_fragment$5, safe_not_equal, {
      props: 0,
      handleConfirmed: 1,
      handleDenied: 2
    });
  }
}
function create_default_slot_1$3(ctx) {
  let t;
  return {
    c() {
      t = text("Yes");
    },
    l(nodes) {
      t = claim_text(nodes, "Yes");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$3(ctx) {
  let t;
  return {
    c() {
      t = text("No");
    },
    l(nodes) {
      t = claim_text(nodes, "No");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$4(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let button0;
  let t2;
  let button1;
  let current;
  button0 = new Button({
    props: {
      type: "Yes",
      clickHandler: ctx[0],
      $$slots: { default: [create_default_slot_1$3] },
      $$scope: { ctx }
    }
  });
  button1 = new Button({
    props: {
      type: "No",
      clickHandler: ctx[1],
      $$slots: { default: [create_default_slot$3] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Sign this transaction?");
      t1 = space();
      div1 = element("div");
      create_component(button0.$$.fragment);
      t2 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Sign this transaction?");
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(button0.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(button1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "flex-1");
      attr(div1, "class", "flex-1 p-4");
      attr(div2, "class", "flex flex-col bg-yellow-100 drop-shadow-lg rounded-sm w-auto m-4 p-6");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      mount_component(button0, div1, null);
      append_hydration(div1, t2);
      mount_component(button1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button0_changes = {};
      if (dirty & 1)
        button0_changes.clickHandler = ctx2[0];
      if (dirty & 32) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 2)
        button1_changes.clickHandler = ctx2[1];
      if (dirty & 32) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}
function instance$4($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  new TextDecoder();
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(2, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(0, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(1, handleDenied = $$props2.handleDenied);
  };
  return [handleConfirmed, handleDenied, props];
}
class Sign extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$4, create_fragment$4, safe_not_equal, {
      props: 2,
      handleConfirmed: 0,
      handleDenied: 1
    });
  }
}
const Decrypt_svelte_svelte_type_style_lang = "";
function create_default_slot_1$2(ctx) {
  let t;
  return {
    c() {
      t = text("Yes");
    },
    l(nodes) {
      t = claim_text(nodes, "Yes");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$2(ctx) {
  let t;
  return {
    c() {
      t = text("No");
    },
    l(nodes) {
      t = claim_text(nodes, "No");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$3(ctx) {
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[3].decode(ctx[0].params.tag) + "";
  let t1;
  let t2;
  let t3;
  let div1;
  let button0;
  let t4;
  let button1;
  let current;
  button0 = new Button({
    props: {
      type: "Yes",
      clickHandler: ctx[1],
      $$slots: { default: [create_default_slot_1$2] },
      $$scope: { ctx }
    }
  });
  button1 = new Button({
    props: {
      type: "No",
      clickHandler: ctx[2],
      $$slots: { default: [create_default_slot$2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Decrypt ");
      t1 = text(t1_value);
      t2 = text("?");
      t3 = space();
      div1 = element("div");
      create_component(button0.$$.fragment);
      t4 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Decrypt ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, "?");
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(button0.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(button1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-d4tl1x");
      attr(div1, "class", "submit svelte-d4tl1x");
      attr(div2, "class", "attention svelte-d4tl1x");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      mount_component(button0, div1, null);
      append_hydration(div1, t4);
      mount_component(button1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[3].decode(ctx2[0].params.tag) + ""))
        set_data(t1, t1_value);
      const button0_changes = {};
      if (dirty & 2)
        button0_changes.clickHandler = ctx2[1];
      if (dirty & 32) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 4)
        button1_changes.clickHandler = ctx2[2];
      if (dirty & 32) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}
function instance$3($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  const decoder = new TextDecoder();
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(1, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(2, handleDenied = $$props2.handleDenied);
  };
  return [props, handleConfirmed, handleDenied, decoder];
}
class Decrypt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$3, create_fragment$3, safe_not_equal, {
      props: 0,
      handleConfirmed: 1,
      handleDenied: 2
    });
  }
}
const ReDecrypt_svelte_svelte_type_style_lang = "";
function create_default_slot_1$1(ctx) {
  let t;
  return {
    c() {
      t = text("Yes");
    },
    l(nodes) {
      t = claim_text(nodes, "Yes");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot$1(ctx) {
  let t;
  return {
    c() {
      t = text("No");
    },
    l(nodes) {
      t = claim_text(nodes, "No");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$2(ctx) {
  let div2;
  let div0;
  let t0;
  let t1;
  let div1;
  let button0;
  let t2;
  let button1;
  let current;
  button0 = new Button({
    props: {
      type: "Yes",
      clickHandler: ctx[0],
      $$slots: { default: [create_default_slot_1$1] },
      $$scope: { ctx }
    }
  });
  button1 = new Button({
    props: {
      type: "No",
      clickHandler: ctx[1],
      $$slots: { default: [create_default_slot$1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Allow this app to Decrypt data?");
      t1 = space();
      div1 = element("div");
      create_component(button0.$$.fragment);
      t2 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Allow this app to Decrypt data?");
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(button0.$$.fragment, div1_nodes);
      t2 = claim_space(div1_nodes);
      claim_component(button1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "svelte-d4tl1x");
      attr(div1, "class", "submit svelte-d4tl1x");
      attr(div2, "class", "attention svelte-d4tl1x");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      mount_component(button0, div1, null);
      append_hydration(div1, t2);
      mount_component(button1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      const button0_changes = {};
      if (dirty & 1)
        button0_changes.clickHandler = ctx2[0];
      if (dirty & 16) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 2)
        button1_changes.clickHandler = ctx2[1];
      if (dirty & 16) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}
function instance$2($$self, $$props, $$invalidate) {
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  new TextDecoder();
  $$self.$$set = ($$props2) => {
    if ("handleConfirmed" in $$props2)
      $$invalidate(0, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(1, handleDenied = $$props2.handleDenied);
  };
  return [handleConfirmed, handleDenied];
}
class ReDecrypt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { handleConfirmed: 0, handleDenied: 1 });
  }
}
const TransformEncrypt_svelte_svelte_type_style_lang = "";
function create_default_slot_1(ctx) {
  let t;
  return {
    c() {
      t = text("Yes");
    },
    l(nodes) {
      t = claim_text(nodes, "Yes");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let t;
  return {
    c() {
      t = text("No");
    },
    l(nodes) {
      t = claim_text(nodes, "No");
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$1(ctx) {
  let div2;
  let div0;
  let t0;
  let t1_value = ctx[0].params.tag + "";
  let t1;
  let t2;
  let encodingselector;
  let t3;
  let div1;
  let button0;
  let t4;
  let button1;
  let current;
  encodingselector = new EncodingSelector({
    props: {
      pubkey: ctx[0].params.targetPublicKey
    }
  });
  button0 = new Button({
    props: {
      type: "Yes",
      clickHandler: ctx[1],
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  button1 = new Button({
    props: {
      type: "No",
      clickHandler: ctx[2],
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text("\u26A0\uFE0F Grant Access to ");
      t1 = text(t1_value);
      t2 = text(" for\r\n		");
      create_component(encodingselector.$$.fragment);
      t3 = space();
      div1 = element("div");
      create_component(button0.$$.fragment);
      t4 = space();
      create_component(button1.$$.fragment);
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, "\u26A0\uFE0F Grant Access to ");
      t1 = claim_text(div0_nodes, t1_value);
      t2 = claim_text(div0_nodes, " for\r\n		");
      claim_component(encodingselector.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      claim_component(button0.$$.fragment, div1_nodes);
      t4 = claim_space(div1_nodes);
      claim_component(button1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "break-all svelte-d4tl1x");
      attr(div1, "class", "submit svelte-d4tl1x");
      attr(div2, "class", "attention rounded-lg m-4 p-4 svelte-d4tl1x");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div0, t1);
      append_hydration(div0, t2);
      mount_component(encodingselector, div0, null);
      append_hydration(div2, t3);
      append_hydration(div2, div1);
      mount_component(button0, div1, null);
      append_hydration(div1, t4);
      mount_component(button1, div1, null);
      current = true;
    },
    p(ctx2, [dirty]) {
      if ((!current || dirty & 1) && t1_value !== (t1_value = ctx2[0].params.tag + ""))
        set_data(t1, t1_value);
      const encodingselector_changes = {};
      if (dirty & 1)
        encodingselector_changes.pubkey = ctx2[0].params.targetPublicKey;
      encodingselector.$set(encodingselector_changes);
      const button0_changes = {};
      if (dirty & 2)
        button0_changes.clickHandler = ctx2[1];
      if (dirty & 32) {
        button0_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button0.$set(button0_changes);
      const button1_changes = {};
      if (dirty & 4)
        button1_changes.clickHandler = ctx2[2];
      if (dirty & 32) {
        button1_changes.$$scope = { dirty, ctx: ctx2 };
      }
      button1.$set(button1_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(encodingselector.$$.fragment, local);
      transition_in(button0.$$.fragment, local);
      transition_in(button1.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(encodingselector.$$.fragment, local);
      transition_out(button0.$$.fragment, local);
      transition_out(button1.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(encodingselector);
      destroy_component(button0);
      destroy_component(button1);
    }
  };
}
function instance$1($$self, $$props, $$invalidate) {
  let { props } = $$props;
  let { handleConfirmed } = $$props;
  let { handleDenied } = $$props;
  new TextDecoder();
  $$self.$$set = ($$props2) => {
    if ("props" in $$props2)
      $$invalidate(0, props = $$props2.props);
    if ("handleConfirmed" in $$props2)
      $$invalidate(1, handleConfirmed = $$props2.handleConfirmed);
    if ("handleDenied" in $$props2)
      $$invalidate(2, handleDenied = $$props2.handleDenied);
  };
  return [props, handleConfirmed, handleDenied];
}
class TransformEncrypt extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, {
      props: 0,
      handleConfirmed: 1,
      handleDenied: 2
    });
  }
}
let confirmationComponents = {
  Default: { component: DefaultConfirmation }
};
for (const [key, value] of Object.entries(handlers)) {
  confirmationComponents[key] = { component: DefaultConfirmation };
}
let customizedComponents = {
  connect: { component: Connect },
  ed25519: {
    sign: {
      component: Sign
    }
  },
  arweaveWalletAPI: {
    sign: {
      component: ArweaveSign
    }
  },
  proxcryptor: {
    selfDecrypt: {
      component: Decrypt
    },
    transformEncrypt: {
      component: TransformEncrypt
    },
    reDecrypt: {
      component: ReDecrypt
    }
  }
};
confirmationComponents = { ...confirmationComponents, ...customizedComponents };
const Confirmer_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[6] = list[i].component;
  child_ctx[7] = list[i].confirmSection;
  child_ctx[8] = list[i].params;
  child_ctx[9] = list[i].handleConfirmed;
  child_ctx[10] = list[i].handleDenied;
  return child_ctx;
}
function create_if_block(ctx) {
  let each_1_anchor;
  let current;
  let each_value = ctx[0];
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      each_1_anchor = empty();
    },
    l(nodes) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(nodes);
      }
      each_1_anchor = empty();
    },
    m(target, anchor) {
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(target, anchor);
      }
      insert_hydration(target, each_1_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1) {
        each_value = ctx2[0];
        let i;
        for (i = 0; i < each_value.length; i += 1) {
          const child_ctx = get_each_context(ctx2, each_value, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
          }
        }
        group_outros();
        for (i = each_value.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value.length; i += 1) {
        transition_in(each_blocks[i]);
      }
      current = true;
    },
    o(local) {
      each_blocks = each_blocks.filter(Boolean);
      for (let i = 0; i < each_blocks.length; i += 1) {
        transition_out(each_blocks[i]);
      }
      current = false;
    },
    d(detaching) {
      destroy_each(each_blocks, detaching);
      if (detaching)
        detach(each_1_anchor);
    }
  };
}
function create_each_block(ctx) {
  let div;
  let switch_instance;
  let t;
  let current;
  var switch_value = ctx[6].component;
  function switch_props(ctx2) {
    return {
      props: {
        props: {
          method: ctx2[7],
          params: ctx2[8]
        },
        handleConfirmed: ctx2[9],
        handleDenied: ctx2[10]
      }
    };
  }
  if (switch_value) {
    switch_instance = new switch_value(switch_props(ctx));
  }
  return {
    c() {
      div = element("div");
      if (switch_instance)
        create_component(switch_instance.$$.fragment);
      t = space();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (switch_instance)
        claim_component(switch_instance.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "active svelte-1u8ztpp");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (switch_instance) {
        mount_component(switch_instance, div, null);
      }
      append_hydration(div, t);
      current = true;
    },
    p(ctx2, dirty) {
      const switch_instance_changes = {};
      if (dirty & 1)
        switch_instance_changes.props = {
          method: ctx2[7],
          params: ctx2[8]
        };
      if (dirty & 1)
        switch_instance_changes.handleConfirmed = ctx2[9];
      if (dirty & 1)
        switch_instance_changes.handleDenied = ctx2[10];
      if (switch_value !== (switch_value = ctx2[6].component)) {
        if (switch_instance) {
          group_outros();
          const old_component = switch_instance;
          transition_out(old_component.$$.fragment, 1, 0, () => {
            destroy_component(old_component, 1);
          });
          check_outros();
        }
        if (switch_value) {
          switch_instance = new switch_value(switch_props(ctx2));
          create_component(switch_instance.$$.fragment);
          transition_in(switch_instance.$$.fragment, 1);
          mount_component(switch_instance, div, t);
        } else {
          switch_instance = null;
        }
      } else if (switch_value) {
        switch_instance.$set(switch_instance_changes);
      }
    },
    i(local) {
      if (current)
        return;
      if (switch_instance)
        transition_in(switch_instance.$$.fragment, local);
      current = true;
    },
    o(local) {
      if (switch_instance)
        transition_out(switch_instance.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (switch_instance)
        destroy_component(switch_instance);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && create_if_block(ctx);
  return {
    c() {
      if (if_block)
        if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if (if_block)
        if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if (if_block)
        if_block.m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        group_outros();
        transition_out(if_block, 1, 1, () => {
          if_block = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      current = false;
    },
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { show } = $$props;
  let { hide } = $$props;
  const leaf = (obj, path) => path.split(".").reduce((value, el) => value && value[el], obj);
  let requests = [];
  let handlers2;
  onMount(async () => {
    ({ handlers: handlers2 } = await __vitePreload(() => import("./index-03f8ba42.js"), true ? ["_app/immutable/chunks/index-03f8ba42.js","_app/immutable/chunks/Index-2d1caaba.js","_app/immutable/assets/Index-e801aace.css","_app/immutable/chunks/index-09de7b82.js","_app/immutable/chunks/events-24eb7459.js","_app/immutable/chunks/preload-helper-6b8a655d.js","_app/immutable/chunks/index-95820fb8.js","_app/immutable/chunks/index-6ab0de96.js"] : void 0));
    handlers2.setConfig("confirm", confirm);
  });
  async function confirm(confirmSection, params) {
    const component = confirmSection ? leaf(confirmationComponents, confirmSection) || confirmationComponents.Default : false;
    return new Promise((resolve, reject) => {
      const handleConfirmed = () => {
        common();
        resolve(true);
      };
      const handleDenied = () => {
        common();
        resolve(false);
      };
      const thisRequest = {
        component,
        confirmSection,
        params,
        handleConfirmed,
        handleDenied
      };
      function common() {
        $$invalidate(0, requests = requests.filter((req) => req !== thisRequest));
        if (requests.length == 0)
          hide();
      }
      $$invalidate(0, requests = [...requests, thisRequest]);
      show();
    });
  }
  $$self.$$set = ($$props2) => {
    if ("show" in $$props2)
      $$invalidate(1, show = $$props2.show);
    if ("hide" in $$props2)
      $$invalidate(2, hide = $$props2.hide);
  };
  return [requests, show, hide];
}
class Confirmer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { show: 1, hide: 2 });
  }
}
export {
  Confirmer as default
};
//# sourceMappingURL=Confirmer-1e18c6c9.js.map
