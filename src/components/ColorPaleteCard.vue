<script setup>

import {ref, watch} from "vue";
import CopyIcon from "@/components/icon/CopyIcon.vue";

const props = defineProps({
  id:Number,
  focusPallete:String,
  list:Array,
  onFocus:Function
})
const emit = defineEmits(["updateColor"]);

const cloneList = ref([...props.list]);
const currentFocusId = ref(null)

const getFocusId = (num)=>{
  currentFocusId.value = num
}
const copyAllColors = () => {
  const colors = cloneList.value.join(', ');
  navigator.clipboard.writeText(colors)
      .then(() => {
        alert('Цвета скопированы: ' + colors);
      })
      .catch((err) => {
        console.error('Ошибка при копировании:', err);
      });
};
const copySelectColor = (val) => {
  console.log(val)
  const color = val;
  navigator.clipboard.writeText(color)
      .then(() => {
        alert('Цвета скопированы: ' + color);
      })
      .catch((err) => {
        console.error('Ошибка при копировании:', err);
      });
};

const toLower = (val) =>{
  return val.toLowerCase()
}

watch(
    () => props.focusPallete,
    (newColor) => {
      if (currentFocusId.value !== null) {
        cloneList.value[currentFocusId.value] = newColor;
        emit("updateColor", currentFocusId.value, newColor); // Сообщаем родителю о изменении
      }
    }
);

</script>

<template>
  <div class="bg-white">
    <div class="p-3">
      <div class="relative min-h-52">
        <div class="absolute top-5 left-5 right-5 rounded-3xl p-3"
             v-for="(color,index) in cloneList"
             :key="index"
             :style="{
              backgroundColor: color,
              transform: `translateY(${index * 40}px)`
           }">
          <div class="flex relative">
            <input type="text" @focus="()=>{onFocus(color,id),getFocusId(index)}" :value="toLower(color)" maxlength="7" class="invert-75 bg-transparent focus:outline-0">
            <button
                class="absolute top-0 right-0"
                @click="copySelectColor(color)">
              <CopyIcon></CopyIcon>
            </button>
          </div>
        </div>
      </div>
      <div class="flex justify-center">
        <button
            @click="copyAllColors"
            class="bg-black text-white px-3 py-1 rounded-md">Copy All</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>