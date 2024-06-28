import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, unref, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { useI18n } from 'vue-i18n';
import { _ as _export_sfc } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ServiceCard",
  __ssrInlineRender: true,
  props: {
    description: {},
    image: {},
    imageLeft: { type: Boolean }
  },
  setup(__props) {
    const { t } = useI18n();
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full flex mt-10" }, _attrs))} data-v-726fdbfd>`);
      if (!props.imageLeft) {
        _push(`<div class="card-container bg-[#607486]" data-v-726fdbfd><p class="w-44 text-lg flex-1 p-3 text-white" data-v-726fdbfd>${ssrInterpolate(unref(t)(props.description))}</p><img${ssrRenderAttr("src", props.image)} alt="Card Image" class="h-40 w-40 rounded-lg object-cover" loading="lazy" data-v-726fdbfd></div>`);
      } else {
        _push(`<div class="card-container bg-[#607486]" data-v-726fdbfd><img${ssrRenderAttr("src", props.image)} alt="Card Image" class="h-40 w-40 rounded-lg object-cover" loading="lazy" data-v-726fdbfd><p class="w-44 text-lg flex-1 p-3 text-white" data-v-726fdbfd>${ssrInterpolate(unref(t)(props.description))}</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ServiceCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-726fdbfd"]]);
const p2p = "" + buildAssetsURL("P2P.BBoNg9HK.png");
const yo = "" + buildAssetsURL("yo.D1imkqFH.jpg");
const study = "" + buildAssetsURL("study.DSGvTVbM.png");
const staking = "" + buildAssetsURL("stakeing.C1R33FBS.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "services",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ServiceCard = __nuxt_component_0;
      _push(`<!--[--><div class="w-[70%] m-auto text-center">`);
      _push(ssrRenderComponent(_component_ServiceCard, {
        "image-left": "",
        image: unref(p2p),
        description: "p2p"
      }, null, _parent));
      _push(`</div><div class="w-[70%] m-auto text-center">`);
      _push(ssrRenderComponent(_component_ServiceCard, {
        class: "justify-end",
        image: unref(yo),
        description: "multiCurrency"
      }, null, _parent));
      _push(`</div><div class="w-[70%] m-auto text-center">`);
      _push(ssrRenderComponent(_component_ServiceCard, {
        "image-left": "",
        image: unref(study),
        description: "study"
      }, null, _parent));
      _push(`</div><div class="w-[70%] m-auto text-center mb-10">`);
      _push(ssrRenderComponent(_component_ServiceCard, {
        class: "justify-end",
        image: unref(staking),
        description: "staking"
      }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=services-CiohbKJQ.mjs.map
