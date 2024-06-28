<template>
  <div class="bg-[#607486] h-screen pt-10">
    <CoinCard />
    <div class="flex h-fit flex-row mt-20 w-[90%] items-center m-auto">
      <div class="basis-1/2 text-left ">
        <div class="ml-[10%]">
          <h1 class="text-3xl text-white font-bold mb-7">{{ t('walletForEveryone') }}</h1>
          <p class="text-2xl text-white">{{ t('specialization') }}</p>
        </div>
      </div>
      <div class="basis-1/2 z-50">
        <img class="w-5/12 m-auto flip-animation" src="../assets/bit.png">
      </div>
    </div>
  </div>

  <div class="flex h-screen flex-row items-center w-full">
    <div class="basis-1/2 z-50">
      <img class="w-full m-auto" src="../assets/gold.png" loading="lazy">
    </div>
    <div class="basis-1/2 text-left">
      <p class="text-2xl">{{t('blockChainDevelopment')}}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
@keyframes flip {
  0% {
    transform: rotateY(0deg) rotateX(0deg);
  }
  50% {
    transform: rotateY(180deg) rotateX(10deg);
  }
  100% {
    transform: rotateY(360deg) rotateX(0deg);
  }
}

.flip-animation {
  animation: flip 5s linear infinite;
  transform-style: preserve-3d;
}

/* Additional styling for other components as needed */
</style>
