<script setup>
import axios from 'axios';
import palete_list from "../public/data/palete_list.json"
import ColorPaleteCard from "./components/ColorPaleteCard.vue";
import Header from "@/components/Header.vue";
import {Vue3ColorPicker} from '@cyhnkckali/vue3-color-picker';
import {onMounted, ref, watch} from "vue";

const paleteList = palete_list;

const notionAPI = axios.create({
  baseURL: '/api/v1/',  // Это будет правильно проксироваться на https://api.notion.com/v1/
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_NOTION_API_KEY}`,
    'Notion-Version': '2022-06-28',
  },
});

async function getDatabaseItems(databaseId) {
  try {
    const response = await notionAPI.post(`databases/${databaseId}/query`);
    return response.data.results;
  } catch (error) {
    console.error('Ошибка при запросе к Notion API:', error);
    return [];
  }
}
const databaseItems = ref([]);
onMounted(async ()=>{
  const databaseId = `${import.meta.env.VITE_NOTION_COLOR_PALETTE_ID}`;
  databaseItems.value = await getDatabaseItems(databaseId);
})
watch(()=>{
  console.log(databaseItems.value)
})
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

