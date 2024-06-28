<!-- LanguageSelector.vue -->
<template>
  <select class="select-background text-white p-1 rounded" v-model="selectedLanguage" @change="changeLanguage">
    <option v-for="(value, key) in languages" :key="key" :value="key">{{ value }}</option>
  </select>
</template>

<script  setup lang="ts">
import {ref, onMounted} from 'vue';
import {useI18n} from 'vue-i18n';

const {locale} = useI18n();

const selectedLanguage = ref(locale.value);

const languages = {
  en: 'English',
  ru: 'Русский',
  am: 'Հայերեն',
};

const changeLanguage = () => {
  locale.value = selectedLanguage.value;
};

onMounted(() => {
  selectedLanguage.value = locale.value;
});
</script>

<style scoped>
.select-background {
  background-color: #21262c;
}
</style>
