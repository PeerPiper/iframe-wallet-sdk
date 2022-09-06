import { _ as __vitePreload } from "../chunks/preload-helper-6b8a655d.js";
import { S as SvelteComponent, i as init, s as safe_not_equal, e as empty, b as insert_hydration, f as transition_in, t as transition_out, d as check_outros, h as detach, o as onMount, w as create_component, x as claim_component, y as mount_component, B as destroy_component, g as group_outros } from "../chunks/index-95820fb8.js";
import { p as process } from "../chunks/browser-83108153.js";
function create_if_block(ctx) {
  let frontend;
  let current;
  frontend = new ctx[0]({});
  return {
    c() {
      create_component(frontend.$$.fragment);
    },
    l(nodes) {
      claim_component(frontend.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(frontend, target, anchor);
      current = true;
    },
    i(local) {
      if (current)
        return;
      transition_in(frontend.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(frontend.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(frontend, detaching);
    }
  };
}
function create_fragment(ctx) {
  let if_block_anchor;
  let current;
  let if_block = !!ctx[0] && create_if_block(ctx);
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
      if (!!ctx2[0]) {
        if (if_block) {
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
  let FrontEnd;
  onMount(async () => {
    const { default: buffer } = await __vitePreload(() => import("../chunks/index-683c0cee.js").then((n) => n.i), true ? [] : void 0);
    window.Buffer = buffer.Buffer;
    const { EventEmitter } = await __vitePreload(() => import("../chunks/events-24eb7459.js").then((n) => n.E), true ? [] : void 0);
    window.EventEmitter = EventEmitter;
    window.process = process;
    window.global = window;
    $$invalidate(0, { FrontEnd } = await __vitePreload(() => import("../chunks/index-680c83a2.js"), true ? ["_app/immutable/chunks/index-680c83a2.js","_app/immutable/chunks/Index-2a489e0f.js","_app/immutable/assets/Index-e801aace.css","_app/immutable/chunks/index-683c0cee.js","_app/immutable/chunks/events-24eb7459.js","_app/immutable/chunks/preload-helper-6b8a655d.js","_app/immutable/chunks/index-95820fb8.js","_app/immutable/chunks/index-6ab0de96.js"] : void 0), FrontEnd);
  });
  return [FrontEnd];
}
class Routes extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Routes as default
};
//# sourceMappingURL=index.svelte-51e57185.js.map
