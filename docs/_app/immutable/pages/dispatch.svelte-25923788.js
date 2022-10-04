import { _ as __vitePreload } from "../chunks/preload-helper-6b8a655d.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, E as noop, h as detach, o as onMount, r as text, u as claim_text, v as set_data } from "../chunks/index-95820fb8.js";
function create_if_block(ctx) {
  let t;
  return {
    c() {
      t = text(ctx[0]);
    },
    l(nodes) {
      t = claim_text(nodes, ctx[0]);
    },
    m(target, anchor) {
      insert_hydration(target, t, anchor);
    },
    p(ctx2, dirty) {
      if (dirty & 1)
        set_data(t, ctx2[0]);
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
    const { default: buffer } = await __vitePreload(() => import("../chunks/index-09de7b82.js").then((n) => n.i), true ? [] : void 0);
    window.Buffer = buffer.Buffer;
    const { EventEmitter } = await __vitePreload(() => import("../chunks/events-24eb7459.js").then((n) => n.E), true ? [] : void 0);
    window.EventEmitter = EventEmitter;
    window.global = window;
    const { flow } = await __vitePreload(() => import("../chunks/tests-0ae69734.js"), true ? ["_app/immutable/chunks/tests-0ae69734.js","_app/immutable/chunks/Index-2d1caaba.js","_app/immutable/assets/Index-e801aace.css","_app/immutable/chunks/index-09de7b82.js","_app/immutable/chunks/events-24eb7459.js","_app/immutable/chunks/preload-helper-6b8a655d.js","_app/immutable/chunks/index-95820fb8.js","_app/immutable/chunks/index-6ab0de96.js"] : void 0);
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
//# sourceMappingURL=dispatch.svelte-25923788.js.map
