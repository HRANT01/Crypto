import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { d as defineStore, _ as _export_sfc } from './server.mjs';
import axios from 'axios';
import { useI18n } from 'vue-i18n';
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

const useCoinsStore = defineStore({
  id: "Coins",
  state: () => ({
    coinsData: []
  }),
  actions: {
    async fetchCoinsData() {
      const coinsToFetch = ["bitcoin", "ethereum", "tether", "usd-coin", "dai", "binancecoin"];
      try {
        const responses = await Promise.all(
          coinsToFetch.map(
            (symbol) => axios.get(`https://api.coingecko.com/api/v3/coins/${symbol}?x_cg_demo_api_key=CG-ByvcT1WZqzv26duYvY26WF2S`)
          )
        );
        this.coinsData = responses.map((response) => ({
          id: response.data.id,
          name: response.data.name,
          image: response.data.image.thumb,
          price: response.data.market_data.current_price.rub.toFixed(2)
          // Assuming price is a number and formatting it to 2 decimal places
          // Add more properties as needed
        }));
      } catch (error) {
        console.error("Error fetching coin data:", error);
      }
    }
  },
  getters: {
    getAllCoinsData(state) {
      return state.coinsData;
    }
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CoinCard",
  __ssrInlineRender: true,
  setup(__props) {
    const coinsStore = useCoinsStore();
    const allCoins = computed(() => coinsStore.getAllCoinsData);
    return (_ctx, _push, _parent, _attrs) => {
      if (allCoins.value.length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-wrap justify-between w-[80%] text-white m-auto" }, _attrs))}><!--[-->`);
        ssrRenderList(allCoins.value, (coin) => {
          _push(`<div class="flex items-center border p-2 rounded-2xl"><img${ssrRenderAttr("src", coin.image)} alt="Coin Image" class="w-8 h-8 mr-2"><div><p class="font-bold">${ssrInterpolate(coin.name)}</p><p>${ssrInterpolate(coin.price)} \u20BD</p></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full text-center text-4xl font-bold text-white" }, _attrs))}>Loading coins...</div>`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CoinCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_0 = "" + buildAssetsURL("bit.UPXt4CW6.png");
const _imports_1 = "" + buildAssetsURL("gold.h4OgH9HX.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoinCard = _sfc_main$1;
      _push(`<!--[--><div class="bg-[#607486] h-screen pt-10" data-v-0386e37d>`);
      _push(ssrRenderComponent(_component_CoinCard, null, null, _parent));
      _push(`<div class="flex h-fit flex-row mt-20 w-[90%] items-center m-auto" data-v-0386e37d><div class="basis-1/2 text-left" data-v-0386e37d><div class="ml-[10%]" data-v-0386e37d><h1 class="text-3xl text-white font-bold mb-7" data-v-0386e37d>${ssrInterpolate(unref(t)("walletForEveryone"))}</h1><p class="text-2xl text-white" data-v-0386e37d>${ssrInterpolate(unref(t)("specialization"))}</p></div></div><div class="basis-1/2 z-50" data-v-0386e37d><img class="w-5/12 m-auto flip-animation"${ssrRenderAttr("src", _imports_0)} data-v-0386e37d></div></div></div><div class="flex h-screen flex-row items-center w-full" data-v-0386e37d><div class="basis-1/2 z-50" data-v-0386e37d><img class="w-full m-auto"${ssrRenderAttr("src", _imports_1)} loading="lazy" data-v-0386e37d></div><div class="basis-1/2 text-left" data-v-0386e37d><p class="text-2xl" data-v-0386e37d>${ssrInterpolate(unref(t)("blockChainDevelopment"))}</p></div></div><!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0386e37d"]]);

export { index as default };
//# sourceMappingURL=index-CPTkPmx2.mjs.map
