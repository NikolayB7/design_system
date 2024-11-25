<script setup>

defineProps({
  id:Number,
  focusPallete:String,
  list:Array,
  onFocus:Function
})


</script>

<template>
  <div class="bg-white">
    <div class="p-3">
      <div class="relative min-h-52">
        <div class="absolute top-5 left-5 right-5 rounded-3xl p-3"
             v-for="(color,index) in list"
             :key="index"
             :style="{
              backgroundColor: color,
              transform: `translateY(${index * 40}px)`
           }">
            <input type="text" @focus="onFocus(color,id)" :value="color" maxlength="7" class="invert-75 bg-transparent focus:outline-0">

        </div>
      </div>
      <div class="flex justify-center">
        <button class="bg-black text-white px-3 py-1 rounded-md">Copy All</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>