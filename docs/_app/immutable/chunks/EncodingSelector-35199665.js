import { S as SvelteComponent, i as init, s as safe_not_equal, F as create_slot, l as element, a as space, r as text, m as claim_element, n as children, h as detach, c as claim_space, u as claim_text, p as attr, b as insert_hydration, J as append_hydration, M as listen, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, f as transition_in, t as transition_out, X as run_all, v as set_data } from "./index-95820fb8.js";
import { i as bases } from "./Index-2d1caaba.js";
function allocUnsafe(size = 0) {
  if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
    return globalThis.Buffer.allocUnsafe(size);
  }
  return new Uint8Array(size);
}
function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec("utf8", "u", (buf) => {
  const decoder = new TextDecoder("utf8");
  return "u" + decoder.decode(buf);
}, (str) => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec("ascii", "a", (buf) => {
  let string2 = "a";
  for (let i = 0; i < buf.length; i++) {
    string2 += String.fromCharCode(buf[i]);
  }
  return string2;
}, (str) => {
  str = str.substring(1);
  const buf = allocUnsafe(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  "utf-8": string,
  hex: bases.base16,
  latin1: ascii,
  ascii,
  binary: ascii,
  ...bases
};
function toString(array, encoding = "utf8") {
  const base = BASES[encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${encoding}"`);
  }
  if ((encoding === "utf8" || encoding === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null) {
    return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString("utf8");
  }
  return base.encoder.encode(array).substring(1);
}
const get_default_slot_changes = (dirty) => ({ encoded: dirty & 4 });
const get_default_slot_context = (ctx) => ({ encoded: ctx[2] });
function fallback_block(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[2]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[2]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 4)
        set_data(t, ctx2[2]);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let div4;
  let div0;
  let t0;
  let div3;
  let div1;
  let t1;
  let t2;
  let div2;
  let span0;
  let t3;
  let span0_class_value;
  let t4;
  let span1;
  let t5;
  let span1_class_value;
  let t6;
  let span2;
  let t7;
  let span2_class_value;
  let current;
  let mounted;
  let dispose;
  const default_slot_template = ctx[7].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[6], get_default_slot_context);
  const default_slot_or_fallback = default_slot || fallback_block(ctx);
  return {
    c() {
      div4 = element("div");
      div0 = element("div");
      if (default_slot_or_fallback)
        default_slot_or_fallback.c();
      t0 = space();
      div3 = element("div");
      div1 = element("div");
      t1 = text("Same key, different format");
      t2 = space();
      div2 = element("div");
      span0 = element("span");
      t3 = text("Base64");
      t4 = space();
      span1 = element("span");
      t5 = text("Base58");
      t6 = space();
      span2 = element("span");
      t7 = text("Hex");
      this.h();
    },
    l(nodes) {
      div4 = claim_element(nodes, "DIV", { class: true });
      var div4_nodes = children(div4);
      div0 = claim_element(div4_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot_or_fallback)
        default_slot_or_fallback.l(div0_nodes);
      div0_nodes.forEach(detach);
      t0 = claim_space(div4_nodes);
      div3 = claim_element(div4_nodes, "DIV", { class: true });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t1 = claim_text(div1_nodes, "Same key, different format");
      div1_nodes.forEach(detach);
      t2 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      span0 = claim_element(div2_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, "Base64");
      span0_nodes.forEach(detach);
      t4 = claim_space(div2_nodes);
      span1 = claim_element(div2_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t5 = claim_text(span1_nodes, "Base58");
      span1_nodes.forEach(detach);
      t6 = claim_space(div2_nodes);
      span2 = claim_element(div2_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t7 = claim_text(span2_nodes, "Hex");
      span2_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      div3_nodes.forEach(detach);
      div4_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "flex-grow justify-self-auto");
      attr(div1, "class", "flex-none text-center");
      attr(span0, "class", span0_class_value = ctx[1] == "Base64" ? white : grey);
      attr(span1, "class", span1_class_value = ctx[1] == "Base58" ? white : grey);
      attr(span2, "class", span2_class_value = ctx[1] == "Hex" ? white : grey);
      attr(div2, "class", "flex-none text-center cursor-pointer select-none");
      attr(div3, "class", "flex-none flex flex-col justify-self-end bg-neutral-500/30 p-1 sm:p-2 rounded-lg");
      attr(div4, "class", "flex flex-col sm:flex-row leading-8");
    },
    m(target, anchor) {
      insert_hydration(target, div4, anchor);
      append_hydration(div4, div0);
      if (default_slot_or_fallback) {
        default_slot_or_fallback.m(div0, null);
      }
      append_hydration(div4, t0);
      append_hydration(div4, div3);
      append_hydration(div3, div1);
      append_hydration(div1, t1);
      append_hydration(div3, t2);
      append_hydration(div3, div2);
      append_hydration(div2, span0);
      append_hydration(span0, t3);
      append_hydration(div2, t4);
      append_hydration(div2, span1);
      append_hydration(span1, t5);
      append_hydration(div2, t6);
      append_hydration(div2, span2);
      append_hydration(span2, t7);
      current = true;
      if (!mounted) {
        dispose = [
          listen(span0, "click", ctx[8]),
          listen(span1, "click", ctx[9]),
          listen(span2, "click", ctx[10])
        ];
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 68)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[6],
            !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, get_default_slot_changes),
            get_default_slot_context
          );
        }
      } else {
        if (default_slot_or_fallback && default_slot_or_fallback.p && (!current || dirty & 4)) {
          default_slot_or_fallback.p(ctx2, !current ? -1 : dirty);
        }
      }
      if (!current || dirty & 2 && span0_class_value !== (span0_class_value = ctx2[1] == "Base64" ? white : grey)) {
        attr(span0, "class", span0_class_value);
      }
      if (!current || dirty & 2 && span1_class_value !== (span1_class_value = ctx2[1] == "Base58" ? white : grey)) {
        attr(span1, "class", span1_class_value);
      }
      if (!current || dirty & 2 && span2_class_value !== (span2_class_value = ctx2[1] == "Hex" ? white : grey)) {
        attr(span2, "class", span2_class_value);
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
      if (detaching)
        detach(div4);
      if (default_slot_or_fallback)
        default_slot_or_fallback.d(detaching);
      mounted = false;
      run_all(dispose);
    }
  };
}
let white = " bg-white rounded-lg text-black font-semibold py-1 px-2 m-1 ";
let grey = " bg-gray-600 rounded-lg text-grey-dark font-semibold py-1 px-2 m-1 ";
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { pubkey } = $$props;
  function bytesToBase64(b) {
    return toString(b, "base64pad");
  }
  function bytesToBase58(b) {
    return toString(b, "base58btc");
  }
  function bytesToHex(b) {
    return toString(b, "base16");
  }
  let selected = "Base64";
  let encoded = bytesToBase64(pubkey);
  const click_handler = () => {
    $$invalidate(2, encoded = bytesToBase64(pubkey));
    $$invalidate(1, selected = "Base64");
  };
  const click_handler_1 = () => {
    $$invalidate(2, encoded = bytesToBase58(pubkey));
    $$invalidate(1, selected = "Base58");
  };
  const click_handler_2 = () => {
    $$invalidate(2, encoded = bytesToHex(pubkey));
    $$invalidate(1, selected = "Hex");
  };
  $$self.$$set = ($$props2) => {
    if ("pubkey" in $$props2)
      $$invalidate(0, pubkey = $$props2.pubkey);
    if ("$$scope" in $$props2)
      $$invalidate(6, $$scope = $$props2.$$scope);
  };
  return [
    pubkey,
    selected,
    encoded,
    bytesToBase64,
    bytesToBase58,
    bytesToHex,
    $$scope,
    slots,
    click_handler,
    click_handler_1,
    click_handler_2
  ];
}
class EncodingSelector extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, { pubkey: 0 });
  }
}
export {
  EncodingSelector as E
};
//# sourceMappingURL=EncodingSelector-35199665.js.map
