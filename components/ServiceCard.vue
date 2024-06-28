<template>
  <div class="w-full flex mt-10 ">
    <div v-if="!props.imageLeft" class="card-container bg-[#607486] ">
      <p class=" w-44 text-lg flex-1 p-3 text-white">{{ t(props.description) }}</p>
      <img :src="props.image" alt="Card Image" class="h-40 w-40 rounded-lg object-cover" loading="lazy">
    </div>

    <div v-else class="card-container bg-[#607486]">
      <img :src="props.image" alt="Card Image" class="h-40 w-40 rounded-lg object-cover" loading="lazy">
      <p class=" w-44 text-lg flex-1 p-3 text-white">{{ t(props.description) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const props = defineProps<{
  description: string
  image: string
  imageLeft?: boolean
}>();
</script>

<style scoped>
.card-container {
  min-width: 60%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card-container:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 12px -1px rgba(0, 0, 0, 0.2);
}
</style>
