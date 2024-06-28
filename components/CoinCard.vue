<template>
  <div v-if="allCoins.length > 0" class="flex flex-wrap justify-between w-[80%] text-white m-auto">
    <div v-for="coin in allCoins" :key="coin.id" class="flex items-center border p-2 rounded-2xl">
      <img :src="coin.image" alt="Coin Image" class="w-8 h-8 mr-2">
      <div>
        <p class="font-bold">{{ coin.name }}</p>
        <p>{{ coin.price }} ₽</p>
      </div>
    </div>
  </div>
  <div v-else class="w-full text-center text-4xl font-bold text-white">Loading coins...</div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useCoinsStore } from '@/store/coins';
import type { CoinData } from "@/store/coins";

const coinsStore = useCoinsStore();
const allCoins = computed<CoinData[]>(() => coinsStore.getAllCoinsData);

onMounted(async () => {
  await coinsStore.fetchCoinsData();
});
</script>

<style scoped>

</style>
