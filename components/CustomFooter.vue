<template>
  <div class="h-[50vh] bg-[#607486]">
    <footer class="w-[80%] m-auto flex flex-col justify-center">
      <div class="flex flex-row text-black">
        <div class="basis-1/3">
          <div class="flex flex-col font-bold gap-10">
            <p>+7-900-55555-89 (звонки)</p>
            <p>8-800-55555-89 (бесплатно по РФ)</p>
          </div>
        </div>
        <div class="basis-1/3 text-center">
          <h3 class="font-bold mb-5">{{ t('socialContact') }}</h3>
          <div class="flex gap-4 justify-center">
            <a class="w-fit" href="https://t.me/koshelekru" target="_blank">
              <font-awesome-icon :icon="faTelegram" class="cursor-pointer h-10 hover:text-white"/>
            </a>
            <a class="w-fit" href="https://vk.com/koshelekru" target="_blank">
              <font-awesome-icon :icon="faVk" class="cursor-pointer h-10 hover:text-white"/>
            </a>
            <a class="w-fit" href="https://x.com/koshelek_ru?mx=2" target="_blank">
              <font-awesome-icon :icon="faTwitter" class="cursor-pointer h-10 hover:text-white"/>
            </a>
          </div>
        </div>
        <div class="basis-1/3 flex flex-col font-bold text-center gap-4">
          <NuxtLink class="nav-link hover:text-white" to="/">{{ t('home') }}</NuxtLink>
          <NuxtLink class="nav-link hover:text-white" to="/services">{{ t('services') }}</NuxtLink>
          <NuxtLink class="nav-link hover:text-white" to="/contact">{{ t('contactUs') }}</NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import {faTelegram, faVk, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {useI18n} from 'vue-i18n';

const {t} = useI18n();
</script>

<style scoped>
/* Optional: Add styles for the footer container */
footer {
  min-height: 100%; /* Ensure footer takes full height */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Vertically center items */
}
</style>
