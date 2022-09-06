import { _ as __vitePreload } from "../chunks/preload-helper-6b8a655d.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, E as noop, h as detach, o as onMount, r as text, u as claim_text, v as set_data } from "../chunks/index-644ae64b.js";
function create_if_block(ctx) {
  let t_value = JSON.stringify(ctx[0]) + "";
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
      if (dirty & 1 && t_value !== (t_value = JSON.stringify(ctx2[0]) + ""))
        set_data(t, t_value);
    },
    d(detaching) {
      if (detaching)
        detach(t);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
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
    },
    p(ctx2, [dirty]) {
      if (ctx2[0]) {
        if (if_block) {
          if_block.p(ctx2, dirty);
        } else {
          if_block = create_if_block(ctx2);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      if (if_block)
        if_block.d(detaching);
      if (detaching)
        detach(if_block_anchor);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let result;
  onMount(async () => {
    const { default: buffer } = await __vitePreload(() => import("../chunks/index-d12ac42e.js").then((n) => n.i), true ? [] : void 0);
    window.Buffer = buffer.Buffer;
    const { EventEmitter } = await __vitePreload(() => import("../chunks/events-9be93652.js").then((n) => n.e), true ? [] : void 0);
    window.EventEmitter = EventEmitter;
    window.global = window;
    const { flow } = await __vitePreload(() => import("../chunks/tests-4521f87b.js"), true ? ["_app/immutable/chunks/tests-4521f87b.js","_app/immutable/chunks/Confirmer.svelte_svelte_type_style_lang-0b3ba63e.js","_app/immutable/assets/Confirmer-e855c2bc.css","_app/immutable/chunks/index-d12ac42e.js","_app/immutable/chunks/events-9be93652.js","_app/immutable/chunks/preload-helper-6b8a655d.js","_app/immutable/chunks/index-644ae64b.js"] : void 0);
    $$invalidate(0, result = await flow());
  });
  return [result];
}
class Dispatch extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Dispatch as default
};
//# sourceMappingURL=dispatch.svelte-a95cf30c.js.map
