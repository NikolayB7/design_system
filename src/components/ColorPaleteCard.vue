<script setup>
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';
const props = defineProps({
  list:[]
})
</script>

<template>
  <div class="p-3">
    <div class="shadow-md rounded-md transition-all transition-duration-300 p-3 hover:shadow">
      <div class="relative min-h-52">
        <div class="absolute top-5 left-5 right-5 rounded-3xl p-3"
             v-for="(color,index) in list"
             :key="index"
             :style="{
              backgroundColor: color,
              transform: `translateY(${index * 40}px)`
           }">
          <span class="invert-75">{{ color }}</span>
        </div>
      </div>
      <button class="bg-black text-white px-3 py-1">Copy All</button>
<!--      <Vue3ColorPicker v-model="value" mode="solid" :showColorList="false" :showEyeDrop="false" type="RGBA"/>-->
    </div>
  </div>
</template>

<style scoped>

</style>