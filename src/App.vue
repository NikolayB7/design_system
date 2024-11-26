<script setup>
import palete_list from "../public/data/palete_list.json"
import ColorPaleteCard from "./components/ColorPaleteCard.vue";
import Header from "@/components/Header.vue";
import {useNotionDatabase} from '@/hooks/useNotionDatabase';
import {lastChildRow} from '@/hooks/detectLastChild';
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';
import {onMounted, ref} from "vue";

const { getDatabaseItems } = useNotionDatabase();
const paleteList = ref([...palete_list]);

const focusPallete = ref('')
const showOverlay = ref(false)
const activeIndex = ref(null)

const onFocus = (currentColor,index)=>{
  focusPallete.value = currentColor;
  activeIndex.value = index;
  showOverlay.value = true;
}
const closeOverlay = ()=>{
  showOverlay.value = false;
  activeIndex.value = null;
  focusPallete.value = '';
}

// Обновление цвета в палитре
const updateColor = (cardIndex, colorIndex, newColor) => {
  paleteList.value[cardIndex][colorIndex] = newColor;
};

onMounted(async () => {
  const databaseId = import.meta.env.VITE_NOTION_COLOR_PALETTE_ID;
  // await getDatabaseItems(databaseId);
  // @TODO refactoring lastChildRow
  // lastChildRow()
});
</script>

<template>
  <div class="container relative mx-auto">
    <Header></Header>
    <div class="flex flex-wrap mt-3 -m-3">
      <div
          class="basis-1/4 p-3"
          v-for="(item,index) in paleteList"
          :key="index"
      >
        <div
            class="relative w-full"
            :class="index === activeIndex ? 'z-30' : ''"
        >
          <div
              class="card"
              :class="[{ active: index === activeIndex }, lastChildRow(index)]"
          >
            <ColorPaleteCard
                :id="index"
                :focusPallete="focusPallete"
                :onFocus="onFocus"
                :list="item"
                @updateColor="(colorIndex, newColor) => updateColor(index, colorIndex, newColor)"
            ></ColorPaleteCard>
            <div class="picker-style">
              <Vue3ColorPicker
                  v-model="focusPallete"
                  mode="solid"
                  :showInputMenu="false"
                  :showButtons="false"
                  :showAlpha="false"
                  :showPickerMode="false"
                  :showColorList="false"
                  :showEyeDrop="false"
                  type="HEX"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showOverlay"
       @click="closeOverlay"
       class="absolute inset-0 bg-stone-950 opacity-40"></div>
</template>

