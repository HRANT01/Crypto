import { useSSRContext, defineComponent, ref, computed, watch, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrGetDynamicModelProps, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { useI18n } from 'vue-i18n';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CustomInput",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    label: {},
    errorMessage: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const internalValue = ref(props.modelValue);
    const focused = ref(false);
    const hasError = computed(() => !!props.errorMessage);
    watch(
      () => props.modelValue,
      (newValue) => {
        internalValue.value = newValue;
      }
    );
    watch(internalValue, (newValue) => {
      emit("update:modelValue", newValue);
    });
    return (_ctx, _push, _parent, _attrs) => {
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-5d45922c><div class="flex flex-col mb-4" data-v-5d45922c><label class="mb-2 text-gray-700" data-v-5d45922c>${ssrInterpolate(_ctx.label)}</label><input${ssrRenderAttrs((_temp0 = mergeProps(_ctx.$attrs, {
        class: ["border-black border", {
          "border-red-500": hasError.value,
          "focus:border-blue-500": !hasError.value && focused.value,
          "focus:border-red-500": hasError.value && focused.value,
          "p-2": true,
          "rounded-md": true,
          "shadow-sm": true
        }]
      }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, internalValue.value))))} data-v-5d45922c>`);
      if (hasError.value) {
        _push(`<div class="text-red-500 text-sm mt-1" data-v-5d45922c>${ssrInterpolate(_ctx.errorMessage)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CustomInput.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5d45922c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const name = ref("");
    const nameError = ref("");
    const email = ref("");
    const emailError = ref("");
    const phone = ref("");
    const phoneError = ref("");
    const lastName = ref("");
    const lastNameError = ref("");
    watch(() => name.value, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CustomInput = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full m-auto" }, _attrs))} data-v-55ecd2ff><h1 class="text-center text-3xl mt-10 mb-5" data-v-55ecd2ff>${ssrInterpolate(unref(t)("contactBack"))}</h1><form class="w-[30%] m-auto mb-10" data-v-55ecd2ff>`);
      _push(ssrRenderComponent(_component_CustomInput, {
        modelValue: name.value,
        "onUpdate:modelValue": ($event) => name.value = $event,
        "error-message": nameError.value,
        label: "Name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_CustomInput, {
        modelValue: lastName.value,
        "onUpdate:modelValue": ($event) => lastName.value = $event,
        "error-message": lastNameError.value,
        label: "Last Name"
      }, null, _parent));
      _push(ssrRenderComponent(_component_CustomInput, {
        modelValue: email.value,
        "onUpdate:modelValue": ($event) => email.value = $event,
        "error-message": emailError.value,
        label: "Email"
      }, null, _parent));
      _push(ssrRenderComponent(_component_CustomInput, {
        modelValue: phone.value,
        "onUpdate:modelValue": ($event) => phone.value = $event,
        "error-message": phoneError.value,
        label: "Phone"
      }, null, _parent));
      _push(`<button type="submit" class="p-2 min-w-20 w-fit text-white bg-blue-950 rounded" data-v-55ecd2ff>${ssrInterpolate(unref(t)("send"))}</button></form></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-55ecd2ff"]]);

export { contact as default };
//# sourceMappingURL=contact-D12_vOFp.mjs.map
