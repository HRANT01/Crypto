import { _ as __nuxt_component_0$1 } from './nuxt-link-DyZc7qn_.mjs';
import { useSSRContext, defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import { _ as _export_sfc } from './server.mjs';
import { faTelegram, faVk, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Dropdown",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    ref(locale.value);
    const languages = {
      en: "English",
      ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
      am: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<select${ssrRenderAttrs(mergeProps({ class: "select-background text-white p-1 rounded" }, _attrs))} data-v-6df7191f><!--[-->`);
      ssrRenderList(languages, (value, key) => {
        _push(`<option${ssrRenderAttr("value", key)} data-v-6df7191f>${ssrInterpolate(value)}</option>`);
      });
      _push(`<!--]--></select>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Dropdown.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-6df7191f"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Dropdown = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "navbar bg-[#607486] m-auto" }, _attrs))} data-v-10ffeb1e><div class="flex items-center justify-between" data-v-10ffeb1e><div class="flex gap-4 font-bold" data-v-10ffeb1e>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["nav-link", { "active": _ctx.$route.path === "/" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/services",
        class: ["nav-link", { "active": _ctx.$route.path === "/services" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: ["nav-link", { "active": _ctx.$route.path === "/contact" }]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("contactUs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("contactUs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="ml-auto mr-4" data-v-10ffeb1e>`);
      _push(ssrRenderComponent(_component_Dropdown, null, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-10ffeb1e"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-[50vh] bg-[#607486]" }, _attrs))} data-v-c3e2f086><footer class="w-[80%] m-auto flex flex-col justify-center" data-v-c3e2f086><div class="flex flex-row text-black" data-v-c3e2f086><div class="basis-1/3" data-v-c3e2f086><div class="flex flex-col font-bold gap-10" data-v-c3e2f086><p data-v-c3e2f086>+7-900-55555-89 (\u0437\u0432\u043E\u043D\u043A\u0438)</p><p data-v-c3e2f086>8-800-55555-89 (\u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043F\u043E \u0420\u0424)</p></div></div><div class="basis-1/3 text-center" data-v-c3e2f086><h3 class="font-bold mb-5" data-v-c3e2f086>${ssrInterpolate(unref(t)("socialContact"))}</h3><div class="flex gap-4 justify-center" data-v-c3e2f086><a class="w-fit" href="https://t.me/koshelekru" target="_blank" data-v-c3e2f086>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faTelegram),
        class: "cursor-pointer h-10 hover:text-white"
      }, null, _parent));
      _push(`</a><a class="w-fit" href="https://vk.com/koshelekru" target="_blank" data-v-c3e2f086>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faVk),
        class: "cursor-pointer h-10 hover:text-white"
      }, null, _parent));
      _push(`</a><a class="w-fit" href="https://x.com/koshelek_ru?mx=2" target="_blank" data-v-c3e2f086>`);
      _push(ssrRenderComponent(unref(FontAwesomeIcon), {
        icon: unref(faTwitter),
        class: "cursor-pointer h-10 hover:text-white"
      }, null, _parent));
      _push(`</a></div></div><div class="basis-1/3 flex flex-col font-bold text-center gap-4" data-v-c3e2f086>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link hover:text-white",
        to: "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link hover:text-white",
        to: "/services"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("services"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("services")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "nav-link hover:text-white",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("contactUs"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("contactUs")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></footer></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c3e2f086"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Navbar = __nuxt_component_0;
  const _component_CustomFooter = __nuxt_component_1;
  _push(`<!--[--><div>`);
  _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
  _push(`</div><div>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_CustomFooter, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/Default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { Default as default };
//# sourceMappingURL=Default-BJvxVwdz.mjs.map
