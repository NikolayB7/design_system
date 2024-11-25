<script setup>
import palete_list from "../public/data/palete_list.json"
import ColorPaleteCard from "./components/ColorPaleteCard.vue";
import Header from "@/components/Header.vue";
import {useNotionDatabase} from '@/hooks/useNotionDatabase';
import {lastChildRow} from '@/hooks/detectLastChild';
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';
import {onMounted, ref, watch} from "vue";

const { getDatabaseItems } = useNotionDatabase();
const paleteList = palete_list;
const focusPallete = ref('')

const onFocus = ()=>{
  console.log('FOCUS_APP')
}


onMounted(async () => {
  const databaseId = import.meta.env.VITE_NOTION_COLOR_PALETTE_ID;
  // await getDatabaseItems(databaseId);
  // @TODO refactoring lastChildRow
  lastChildRow()
});
// watch(focusPallete)
</script>

<template>
  <div class="container mx-auto">
    <Header></Header>
    <div class="flex flex-wrap mt-3">
      <div class="basis-1/4" v-for="(item,index) in paleteList" :key="index">
        <div class="relative w-full">
          <div class="card">
            <ColorPaleteCard
                :onFocus="onFocus"
                :class="lastChildRow(index)"
                class=""
                :list="item"
            ></ColorPaleteCard>
            <div class="picker-style">
              <Vue3ColorPicker
                  v-model="value"
                  mode="solid"
                  :showInputMenu="false"
                  :showButtons="false"
                  :showAlpha="false"
                  :showPickerMode="false"
                  :showColorList="false"
                  :showEyeDrop="false"
                  type="RGBA"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

