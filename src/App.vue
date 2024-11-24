<script setup>
import axios from 'axios';
import palete_list from "../public/data/palete_list.json"
import ColorPaleteCard from "./components/ColorPaleteCard.vue";
import Header from "@/components/Header.vue";
import { useNotionDatabase } from '@/hooks/useNotionDatabase';
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';
import {onMounted, ref, watch} from "vue";

const { databaseItems, getDatabaseItems } = useNotionDatabase();
const paleteList = palete_list;

onMounted(async () => {
  const databaseId = import.meta.env.VITE_NOTION_COLOR_PALETTE_ID;
  await getDatabaseItems(databaseId);
});

</script>

<template>
  <div class="container mx-auto">
    <Header></Header>
    <div class="flex flex-wrap -m-3">
      <div class="basis-1/4" v-for="(item,index) in paleteList" :key="index">
        <div class="relative">
          <ColorPaleteCard class="relative z-20" :list="item"></ColorPaleteCard>
<!--          <div class="absolute inset-0">-->
<!--            <Vue3ColorPicker-->
<!--                v-model="value"-->
<!--                mode="solid"-->
<!--                :showColorList="false"-->
<!--                :showEyeDrop="false"-->
<!--                type="RGBA"/>-->
<!--          </div>-->
        </div>
      </div>
    </div>

  </div>

</template>

