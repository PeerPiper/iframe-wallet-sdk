import { _ as __vitePreload } from "./preload-helper-6b8a655d.js";
import { Y as identity, S as SvelteComponent, i as init, s as safe_not_equal, F as create_slot, l as element, a as space, m as claim_element, n as children, c as claim_space, h as detach, p as attr, b as insert_hydration, J as append_hydration, M as listen, g as group_outros, t as transition_out, d as check_outros, f as transition_in, G as update_slot_base, H as get_all_dirty_from_scope, I as get_slot_changes, U as binding_callbacks, Z as svg_element, r as text, _ as claim_svg_element, u as claim_text, K as add_render_callback, $ as create_in_transition, E as noop, a0 as create_out_transition, e as empty, V as destroy_each, w as create_component, x as claim_component, y as mount_component, v as set_data, B as destroy_component, P as component_subscribe, a1 as createEventDispatcher, o as onMount, Q as set_store_value, a2 as HtmlTagHydration, a3 as claim_html_tag, O as is_function } from "./index-95820fb8.js";
import { s as storedValue } from "./Index-f1073d77.js";
import { E as EncodingSelector } from "./EncodingSelector-0cecf62e.js";
import "./index-09de7b82.js";
import "./events-24eb7459.js";
import "./index-6ab0de96.js";
const LUT_HEX_4b = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const LUT_HEX_8b = new Array(256);
for (let n = 0; n < 256; n++) {
  LUT_HEX_8b[n] = `${LUT_HEX_4b[n >>> 4 & 15]}${LUT_HEX_4b[n & 15]}`;
}
function fade(node, { delay = 0, duration: duration2 = 400, easing = identity } = {}) {
  const o = +getComputedStyle(node).opacity;
  return {
    delay,
    duration: duration2,
    easing,
    css: (t) => `opacity: ${t * o}`
  };
}
const Clipboard_svelte_svelte_type_style_lang = "";
const get_default_slot_changes = (dirty) => ({});
const get_default_slot_context = (ctx) => ({ copy: ctx[2] });
function create_else_block$1(ctx) {
  let div;
  let svg;
  let title;
  let t;
  let path;
  let div_intro;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      svg = svg_element("svg");
      title = svg_element("title");
      t = text("Copy to clipboard");
      path = svg_element("path");
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      svg = claim_svg_element(div_nodes, "svg", {
        class: true,
        viewBox: true,
        version: true,
        width: true,
        height: true,
        "aria-hidden": true,
        stroke: true
      });
      var svg_nodes = children(svg);
      title = claim_svg_element(svg_nodes, "title", {});
      var title_nodes = children(title);
      t = claim_text(title_nodes, "Copy to clipboard");
      title_nodes.forEach(detach);
      path = claim_svg_element(svg_nodes, "path", { "fill-rule": true, d: true });
      children(path).forEach(detach);
      svg_nodes.forEach(detach);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(path, "fill-rule", "evenodd");
      attr(path, "d", "M2 13h4v1H2v-1zm5-6H2v1h5V7zm2 3V8l-3 3 3 3v-2h5v-2H9zM4.5 9H2v1h2.5V9zM2 12h2.5v-1H2v1zm9 1h1v2c-.02.28-.11.52-.3.7-.19.18-.42.28-.7.3H1c-.55 0-1-.45-1-1V4c0-.55.45-1 1-1h3c0-1.11.89-2 2-2 1.11 0 2 .89 2 2h3c.55 0 1 .45 1 1v5h-1V6H1v9h10v-2zM2 5h8c0-.55-.45-1-1-1H8c-.55 0-1-.45-1-1s-.45-1-1-1-1 .45-1 1-.45 1-1 1H3c-.55 0-1 .45-1 1z");
      attr(svg, "class", "octicon octicon-clippy svelte-lulnfx");
      attr(svg, "viewBox", "0 0 14 16");
      attr(svg, "version", "1.1");
      attr(svg, "width", "14");
      attr(svg, "height", "16");
      attr(svg, "aria-hidden", "true");
      attr(svg, "stroke", "currentColor");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, svg);
      append_hydration(svg, title);
      append_hydration(title, t);
      append_hydration(svg, path);
      if (!mounted) {
        dispose = listen(svg, "click", ctx[2]);
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
    },
    i(local) {
      if (!div_intro) {
        add_render_callback(() => {
          div_intro = create_in_transition(div, fade, { duration: 0, delay: duration });
          div_intro.start();
        });
      }
    },
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_if_block$2(ctx) {
  let div;
  let t;
  let div_outro;
  let current;
  return {
    c() {
      div = element("div");
      t = text("\u2714\uFE0FCopied");
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", {});
      var div_nodes = children(div);
      t = claim_text(div_nodes, "\u2714\uFE0FCopied");
      div_nodes.forEach(detach);
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, t);
      current = true;
    },
    p(new_ctx, dirty) {
    },
    i(local) {
      if (current)
        return;
      if (div_outro)
        div_outro.end(1);
      current = true;
    },
    o(local) {
      div_outro = create_out_transition(div, fade, { duration });
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (detaching && div_outro)
        div_outro.end();
    }
  };
}
function create_fragment$2(ctx) {
  let div1;
  let current_block_type_index;
  let if_block;
  let t;
  let div0;
  let current;
  let mounted;
  let dispose;
  const if_block_creators = [create_if_block$2, create_else_block$1];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    if (ctx2[1])
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  const default_slot_template = ctx[5].default;
  const default_slot = create_slot(default_slot_template, ctx, ctx[4], get_default_slot_context);
  return {
    c() {
      div1 = element("div");
      if_block.c();
      t = space();
      div0 = element("div");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      div1 = claim_element(nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      if_block.l(div1_nodes);
      t = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      if (default_slot)
        default_slot.l(div0_nodes);
      div0_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "Clipboard svelte-lulnfx");
      attr(div1, "class", "Clipboard-Container svelte-lulnfx");
    },
    m(target, anchor) {
      insert_hydration(target, div1, anchor);
      if_blocks[current_block_type_index].m(div1, null);
      append_hydration(div1, t);
      append_hydration(div1, div0);
      if (default_slot) {
        default_slot.m(div0, null);
      }
      ctx[6](div0);
      current = true;
      if (!mounted) {
        dispose = listen(div1, "click", ctx[2]);
        mounted = true;
      }
    },
    p(ctx2, [dirty]) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(div1, t);
      }
      if (default_slot) {
        if (default_slot.p && (!current || dirty & 16)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            ctx2[4],
            !current ? get_all_dirty_from_scope(ctx2[4]) : get_slot_changes(default_slot_template, ctx2[4], dirty, get_default_slot_changes),
            get_default_slot_context
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block);
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(if_block);
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div1);
      if_blocks[current_block_type_index].d();
      if (default_slot)
        default_slot.d(detaching);
      ctx[6](null);
      mounted = false;
      dispose();
    }
  };
}
let duration = 2e3;
function instance$2($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  let { value = null } = $$props;
  let clip;
  let copied;
  async function copy() {
    var promise = navigator.clipboard.writeText(clip.innerHTML);
    await promise;
    $$invalidate(3, value = promise);
    $$invalidate(1, copied = true);
    setTimeout(() => $$invalidate(1, copied = false), 1);
  }
  function div0_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](() => {
      clip = $$value;
      $$invalidate(0, clip);
    });
  }
  $$self.$$set = ($$props2) => {
    if ("value" in $$props2)
      $$invalidate(3, value = $$props2.value);
    if ("$$scope" in $$props2)
      $$invalidate(4, $$scope = $$props2.$$scope);
  };
  return [clip, copied, copy, value, $$scope, slots, div0_binding];
}
class Clipboard extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$2, create_fragment$2, safe_not_equal, { value: 3 });
  }
}
const ListKeys_svelte_svelte_type_style_lang = "";
function get_each_context(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[3] = list[i];
  return child_ctx;
}
function get_each_context_1(ctx, list, i) {
  const child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}
function create_if_block$1(ctx) {
  let div;
  let show_if_1 = ctx[0].filter(func_1).length;
  let t;
  let show_if = ctx[0].filter(func);
  let current;
  let if_block0 = show_if_1 && create_if_block_2(ctx);
  let if_block1 = show_if && create_if_block_1$1(ctx);
  return {
    c() {
      div = element("div");
      if (if_block0)
        if_block0.c();
      t = space();
      if (if_block1)
        if_block1.c();
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      if (if_block0)
        if_block0.l(div_nodes);
      t = claim_space(div_nodes);
      if (if_block1)
        if_block1.l(div_nodes);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div, "class", "card text-toxic shadow-md shadow-toxic/50 rounded-lg p-4 m-4 w-auto bg-neutral-800");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      if (if_block0)
        if_block0.m(div, null);
      append_hydration(div, t);
      if (if_block1)
        if_block1.m(div, null);
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        show_if_1 = ctx2[0].filter(func_1).length;
      if (show_if_1) {
        if (if_block0) {
          if_block0.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block0, 1);
          }
        } else {
          if_block0 = create_if_block_2(ctx2);
          if_block0.c();
          transition_in(if_block0, 1);
          if_block0.m(div, t);
        }
      } else if (if_block0) {
        group_outros();
        transition_out(if_block0, 1, 1, () => {
          if_block0 = null;
        });
        check_outros();
      }
      if (dirty & 1)
        show_if = ctx2[0].filter(func);
      if (show_if) {
        if (if_block1) {
          if_block1.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block1, 1);
          }
        } else {
          if_block1 = create_if_block_1$1(ctx2);
          if_block1.c();
          transition_in(if_block1, 1);
          if_block1.m(div, null);
        }
      } else if (if_block1) {
        group_outros();
        transition_out(if_block1, 1, 1, () => {
          if_block1 = null;
        });
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(if_block0);
      transition_in(if_block1);
      current = true;
    },
    o(local) {
      transition_out(if_block0);
      transition_out(if_block1);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div);
      if (if_block0)
        if_block0.d();
      if (if_block1)
        if_block1.d();
    }
  };
}
function create_if_block_2(ctx) {
  let div2;
  let div0;
  let span;
  let t0;
  let t1;
  let div1;
  let current;
  let each_value_1 = ctx[0].filter(func_2);
  let each_blocks = [];
  for (let i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      span = element("span");
      t0 = text("Arweave");
      t1 = space();
      div1 = element("div");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Arweave");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(div1_nodes);
      }
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "row left svelte-mj0gtk");
      attr(div1, "class", "row list-group svelte-mj0gtk");
      attr(div2, "class", "keylist overflow-hidden svelte-mj0gtk");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, span);
      append_hydration(span, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(div1, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 7) {
        each_value_1 = ctx2[0].filter(func_2);
        let i;
        for (i = 0; i < each_value_1.length; i += 1) {
          const child_ctx = get_each_context_1(ctx2, each_value_1, i);
          if (each_blocks[i]) {
            each_blocks[i].p(child_ctx, dirty);
            transition_in(each_blocks[i], 1);
          } else {
            each_blocks[i] = create_each_block_1(child_ctx);
            each_blocks[i].c();
            transition_in(each_blocks[i], 1);
            each_blocks[i].m(div1, null);
          }
        }
        group_outros();
        for (i = each_value_1.length; i < each_blocks.length; i += 1) {
          out(i);
        }
        check_outros();
      }
    },
    i(local) {
      if (current)
        return;
      for (let i = 0; i < each_value_1.length; i += 1) {
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
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot_2(ctx) {
  let t_value = ctx[7].publicKeyJWK.kid + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1 && t_value !== (t_value = ctx2[7].publicKeyJWK.kid + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_each_block_1(ctx) {
  let div2;
  let div0;
  let t0_value = ctx[7].name + "";
  let t0;
  let div0_class_value;
  let t1;
  let div1;
  let t2;
  let clipboard;
  let t3;
  let current;
  clipboard = new Clipboard({
    props: {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      t0 = text(t0_value);
      t1 = space();
      div1 = element("div");
      t2 = text("Base64URL: ");
      create_component(clipboard.$$.fragment);
      t3 = space();
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      t0 = claim_text(div0_nodes, t0_value);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      t2 = claim_text(div1_nodes, "Base64URL: ");
      claim_component(clipboard.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach);
      t3 = claim_space(div2_nodes);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", div0_class_value = (ctx[2] && ctx[1] != ctx[7].kid ? "hide" : "") + " list-group-item list-group-item-action svelte-mj0gtk");
      attr(div1, "class", "flex-1");
      attr(div2, "class", "flex flex-col");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, t2);
      mount_component(clipboard, div1, null);
      append_hydration(div2, t3);
      current = true;
    },
    p(ctx2, dirty) {
      if ((!current || dirty & 1) && t0_value !== (t0_value = ctx2[7].name + ""))
        set_data(t0, t0_value);
      if (!current || dirty & 1 && div0_class_value !== (div0_class_value = (ctx2[2] && ctx2[1] != ctx2[7].kid ? "hide" : "") + " list-group-item list-group-item-action svelte-mj0gtk")) {
        attr(div0, "class", div0_class_value);
      }
      const clipboard_changes = {};
      if (dirty & 1025) {
        clipboard_changes.$$scope = { dirty, ctx: ctx2 };
      }
      clipboard.$set(clipboard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(clipboard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(clipboard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(div2);
      destroy_component(clipboard);
    }
  };
}
function create_if_block_1$1(ctx) {
  let div2;
  let div0;
  let span;
  let t0;
  let t1;
  let div1;
  let ul;
  let current;
  let each_value = ctx[0].filter(func_3);
  let each_blocks = [];
  for (let i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }
  const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
    each_blocks[i] = null;
  });
  return {
    c() {
      div2 = element("div");
      div0 = element("div");
      span = element("span");
      t0 = text("Ed25519");
      t1 = space();
      div1 = element("div");
      ul = element("ul");
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].c();
      }
      this.h();
    },
    l(nodes) {
      div2 = claim_element(nodes, "DIV", { class: true });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", { class: true });
      var div0_nodes = children(div0);
      span = claim_element(div0_nodes, "SPAN", {});
      var span_nodes = children(span);
      t0 = claim_text(span_nodes, "Ed25519");
      span_nodes.forEach(detach);
      div0_nodes.forEach(detach);
      t1 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", { class: true });
      var div1_nodes = children(div1);
      ul = claim_element(div1_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].l(ul_nodes);
      }
      ul_nodes.forEach(detach);
      div1_nodes.forEach(detach);
      div2_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(div0, "class", "row left svelte-mj0gtk");
      attr(ul, "class", "svelte-mj0gtk");
      attr(div1, "class", "row list-group svelte-mj0gtk");
      attr(div2, "class", "keylist svelte-mj0gtk");
    },
    m(target, anchor) {
      insert_hydration(target, div2, anchor);
      append_hydration(div2, div0);
      append_hydration(div0, span);
      append_hydration(span, t0);
      append_hydration(div2, t1);
      append_hydration(div2, div1);
      append_hydration(div1, ul);
      for (let i = 0; i < each_blocks.length; i += 1) {
        each_blocks[i].m(ul, null);
      }
      current = true;
    },
    p(ctx2, dirty) {
      if (dirty & 65) {
        each_value = ctx2[0].filter(func_3);
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
            each_blocks[i].m(ul, null);
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
      if (detaching)
        detach(div2);
      destroy_each(each_blocks, detaching);
    }
  };
}
function create_default_slot_1(ctx) {
  let t_value = ctx[6] + "";
  let t;
  return {
    c() {
      t = text(t_value);
    },
    l(nodes) {
      t = claim_text(nodes, t_value);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 64 && t_value !== (t_value = ctx2[6] + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_default_slot(ctx) {
  let clipboard;
  let current;
  clipboard = new Clipboard({
    props: {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(clipboard.$$.fragment);
    },
    l(nodes) {
      claim_component(clipboard.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(clipboard, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const clipboard_changes = {};
      if (dirty & 1088) {
        clipboard_changes.$$scope = { dirty, ctx: ctx2 };
      }
      clipboard.$set(clipboard_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(clipboard.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(clipboard.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(clipboard, detaching);
    }
  };
}
function create_each_block(ctx) {
  let encodingselector;
  let t;
  let current;
  encodingselector = new EncodingSelector({
    props: {
      pubkey: new Uint8Array(ctx[3].publicKey),
      $$slots: {
        default: [
          create_default_slot,
          ({ encoded }) => ({ 6: encoded }),
          ({ encoded }) => encoded ? 64 : 0
        ]
      },
      $$scope: { ctx }
    }
  });
  return {
    c() {
      create_component(encodingselector.$$.fragment);
      t = space();
    },
    l(nodes) {
      claim_component(encodingselector.$$.fragment, nodes);
      t = claim_space(nodes);
    },
    m(target, anchor) {
      mount_component(encodingselector, target, anchor);
      insert_hydration(target, t, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const encodingselector_changes = {};
      if (dirty & 1)
        encodingselector_changes.pubkey = new Uint8Array(ctx2[3].publicKey);
      if (dirty & 1088) {
        encodingselector_changes.$$scope = { dirty, ctx: ctx2 };
      }
      encodingselector.$set(encodingselector_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(encodingselector.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(encodingselector.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(encodingselector, detaching);
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment$1(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[0] && ctx[0].length > 0 && create_if_block$1(ctx);
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
      if (ctx2[0] && ctx2[0].length > 0) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 1) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx2);
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
const func = (k) => k.publicKeyJWK.crv == "Ed25519";
const func_1 = (k) => k.publicKeyJWK.kty == "RSA";
const func_2 = (k) => k.publicKeyJWK.kty == "RSA";
const func_3 = (k) => k.publicKeyJWK.crv == "Ed25519";
function instance$1($$self, $$props, $$invalidate) {
  let { keys } = $$props;
  let selectedRSA;
  let collapsed;
  $$self.$$set = ($$props2) => {
    if ("keys" in $$props2)
      $$invalidate(0, keys = $$props2.keys);
  };
  return [keys, selectedRSA, collapsed];
}
class ListKeys extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance$1, create_fragment$1, safe_not_equal, { keys: 0 });
  }
}
const GetKeys_svelte_svelte_type_style_lang = "";
function create_if_block(ctx) {
  let current_block_type_index;
  let if_block;
  let if_block_anchor;
  let current;
  const if_block_creators = [create_if_block_1, create_else_block];
  const if_blocks = [];
  function select_block_type(ctx2, dirty) {
    var _a, _b;
    if (ctx2[0] != void 0 && ctx2[0] == null || !((_a = ctx2[0]) == null ? void 0 : _a.mnemonic) || !((_b = ctx2[0]) == null ? void 0 : _b.rsajwk))
      return 0;
    return 1;
  }
  current_block_type_index = select_block_type(ctx);
  if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  return {
    c() {
      if_block.c();
      if_block_anchor = empty();
    },
    l(nodes) {
      if_block.l(nodes);
      if_block_anchor = empty();
    },
    m(target, anchor) {
      if_blocks[current_block_type_index].m(target, anchor);
      insert_hydration(target, if_block_anchor, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      let previous_block_index = current_block_type_index;
      current_block_type_index = select_block_type(ctx2);
      if (current_block_type_index === previous_block_index) {
        if_blocks[current_block_type_index].p(ctx2, dirty);
      } else {
        group_outros();
        transition_out(if_blocks[previous_block_index], 1, 1, () => {
          if_blocks[previous_block_index] = null;
        });
        check_outros();
        if_block = if_blocks[current_block_type_index];
        if (!if_block) {
          if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
          if_block.c();
        } else {
          if_block.p(ctx2, dirty);
        }
        transition_in(if_block, 1);
        if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
      if_blocks[current_block_type_index].d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function create_else_block(ctx) {
  let listkeys;
  let current;
  listkeys = new ListKeys({ props: { keys: ctx[3] } });
  return {
    c() {
      create_component(listkeys.$$.fragment);
    },
    l(nodes) {
      claim_component(listkeys.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(listkeys, target, anchor);
      current = true;
    },
    p(ctx2, dirty) {
      const listkeys_changes = {};
      if (dirty & 8)
        listkeys_changes.keys = ctx2[3];
      listkeys.$set(listkeys_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(listkeys.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(listkeys.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(listkeys, detaching);
    }
  };
}
function create_if_block_1(ctx) {
  let div;
  let button;
  let t0;
  let t1;
  let html_tag;
  let mounted;
  let dispose;
  return {
    c() {
      div = element("div");
      button = element("button");
      t0 = text("Create New Keypairs");
      t1 = space();
      html_tag = new HtmlTagHydration(false);
      this.h();
    },
    l(nodes) {
      div = claim_element(nodes, "DIV", { class: true });
      var div_nodes = children(div);
      button = claim_element(div_nodes, "BUTTON", { class: true });
      var button_nodes = children(button);
      t0 = claim_text(button_nodes, "Create New Keypairs");
      button_nodes.forEach(detach);
      t1 = claim_space(div_nodes);
      html_tag = claim_html_tag(div_nodes, false);
      div_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(button, "class", "bg-green-500 rounded shadow-lg shadow-slate-600/50 p-4 w-fit m-4 text-white");
      html_tag.a = null;
      attr(div, "class", "submit flex flex-col text-black bg-yellow-300 shadow p-8 m-4 rounded w-fit svelte-1klozpc");
    },
    m(target, anchor) {
      insert_hydration(target, div, anchor);
      append_hydration(div, button);
      append_hydration(button, t0);
      append_hydration(div, t1);
      html_tag.m(ctx[2], div);
      if (!mounted) {
        dispose = listen(button, "click", function() {
          if (is_function(ctx[1]))
            ctx[1].apply(this, arguments);
        });
        mounted = true;
      }
    },
    p(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty & 4)
        html_tag.p(ctx[2]);
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(div);
      mounted = false;
      dispose();
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = ctx[1] && create_if_block(ctx);
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
      if (ctx2[1]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
          if (dirty & 2) {
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
  let $storedValue;
  component_subscribe($$self, storedValue, ($$value) => $$invalidate(0, $storedValue = $$value));
  const dispatch = createEventDispatcher();
  let handleGenerateKeypair = null;
  let creating = "";
  let keys;
  let generateMnemonic, generateRsaJwk, loadSecrets, getLoadedKeys;
  onMount(async () => {
    $$invalidate(4, { generateMnemonic, generateRsaJwk, loadSecrets, getLoadedKeys } = await __vitePreload(() => import("./index-319e3cbf.js"), true ? ["_app/immutable/chunks/index-319e3cbf.js","_app/immutable/chunks/Index-f1073d77.js","_app/immutable/assets/Index-e801aace.css","_app/immutable/chunks/index-09de7b82.js","_app/immutable/chunks/events-24eb7459.js","_app/immutable/chunks/preload-helper-6b8a655d.js","_app/immutable/chunks/index-95820fb8.js","_app/immutable/chunks/index-6ab0de96.js"] : void 0), loadSecrets, $$invalidate(5, getLoadedKeys));
    $$invalidate(1, handleGenerateKeypair = async () => {
      $$invalidate(2, creating = "Creating keypairs...");
      const mnemonic = await generateMnemonic();
      const rsajwk = await generateRsaJwk();
      set_store_value(storedValue, $storedValue = { ...$storedValue, mnemonic, rsajwk }, $storedValue);
      $$invalidate(2, creating += "<br/>Created mnemonic.");
      $$invalidate(2, creating += `<br/>${mnemonic}`);
      $$invalidate(2, creating += "<br/>Creating master keypair (type ed25519)...");
    });
  });
  async function loadKeys() {
    await loadSecrets({
      mnemonic: $storedValue.mnemonic,
      rsajwk: $storedValue.rsajwk
    });
    dispatch("loadedKeys", "details");
    $$invalidate(3, keys = getLoadedKeys());
  }
  $$self.$$.update = () => {
    if ($$self.$$.dirty & 49) {
      if (!!loadSecrets && !!getLoadedKeys && $storedValue && $storedValue.mnemonic)
        loadKeys();
    }
  };
  return [
    $storedValue,
    handleGenerateKeypair,
    creating,
    keys,
    loadSecrets,
    getLoadedKeys
  ];
}
class GetKeys extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  GetKeys as default
};
//# sourceMappingURL=GetKeys-af5ef52c.js.map
