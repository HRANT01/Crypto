<template>
  <div class="w-[70%] m-auto text-center ">
    <ServiceCard image-left :image="p2p" description="p2p"/>
  </div>
  <div class="w-[70%] m-auto text-center ">
    <ServiceCard class="justify-end"  :image="yo" description="multiCurrency"/>
  </div>
  <div class="w-[70%] m-auto text-center ">
    <ServiceCard image-left :image="study" description="study"/>
  </div>
  <div class="w-[70%] m-auto text-center mb-10 ">
    <ServiceCard class="justify-end " :image="staking" description="staking"/>
  </div>
</template>

<script setup lang="ts">
import p2p from '@/assets/P2P.png'
import yo from '@/assets/yo.jpg'
import study from '@/assets/study.png'
import staking from '@/assets/stakeing.png'

</script>

<style lang="scss" scoped>

</style>