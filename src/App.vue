<script setup>
import axios from 'axios';
import palete_list from "../public/data/palete_list.json"
import ColorPaleteCard from "./components/ColorPaleteCard.vue";
import {onMounted, ref} from "vue";

const paleteList = palete_list

const notionAPI = axios.create({
  baseURL: 'https://api.notion.com/v1/',
  headers: {
    'Authorization': `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`,
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
  const databaseId = '147cc52da0bf80d88456e57ebb6751a8';
  databaseItems.value = await getDatabaseItems(databaseId);
})
</script>

<template>
  <div class="container mx-auto">
    <div class="flex flex-wrap -m-3">
      <div class="basis-1/4" v-for="(item,index) in paleteList" :key="index">
        <ColorPaleteCard :list="item"></ColorPaleteCard>
      </div>
    </div>

  </div>

</template>

