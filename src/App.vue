<script setup>
import palete_list from "../public/data/palete_list.json"
import ColorPaleteCard from "./components/ColorPaleteCard.vue";
import Header from "@/components/Header.vue";
import { useNotionDatabase } from '@/hooks/useNotionDatabase';
import { lastChildRow } from '@/hooks/detectLastChild';
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';
import {onMounted, ref} from "vue";

const { getDatabaseItems } = useNotionDatabase();
const paleteList = palete_list;

onMounted(async () => {
  const databaseId = import.meta.env.VITE_NOTION_COLOR_PALETTE_ID;
  // await getDatabaseItems(databaseId);
  // @TODO refactoring lastChildRow
  lastChildRow()
});

</script>

<template>
  <div class="container mx-auto">
    <Header></Header>
    <div class="flex flex-wrap -m-3">
      <div class="basis-1/4" v-for="(item,index) in paleteList" :key="index">
        <div class="relative">
          <ColorPaleteCard
              :class="lastChildRow(index)"
              class="relative S"
              :list="item"
          ></ColorPaleteCard>
          <div class="absolute top-2 right-5 left-5">
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

</template>

