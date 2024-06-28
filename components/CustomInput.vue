<template>
  <div class="relative">
    <div class="flex flex-col mb-4">
      <label class="mb-2 text-gray-700">{{ label }}</label>
      <input
          v-bind="$attrs"
          v-model="internalValue"
          class="border-black border"
          :class="{
          'border-red-500': hasError,
          'focus:border-blue-500': !hasError && focused,
          'focus:border-red-500': hasError && focused,
          'p-2': true,
          'rounded-md': true,
          'shadow-sm': true,
        }"
          @focus="focused = true"
          @blur="focused = false"
      />
      <div v-if="hasError" class="text-red-500 text-sm mt-1">{{ errorMessage }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps<{
  modelValue: string;
  label: string;
  errorMessage: string;
}>();

const emit = defineEmits(['update:modelValue']);

const internalValue = ref<string>(props.modelValue);
const focused = ref<boolean>(false);

const hasError = computed(() => !!props.errorMessage);

watch(
    () => props.modelValue,
    (newValue) => {
      internalValue.value = newValue;
    }
);

watch(internalValue, (newValue) => {
  emit('update:modelValue', newValue);
});
</script>

<style scoped>
.relative {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  color: #4a5568;
}

input {
  padding: 0.5rem;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.border {
  border-width: 1px;
}

.border-red-500 {
  border-color: #f56565;
}

.focus\:border-blue-500 {
  border-color: #4299e1;
}

.focus\:border-red-500 {
  border-color: #f56565;
}

.text-red-500 {
  color: #f56565;
}
</style>
