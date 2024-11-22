<script setup>
import palete_list from "../public/data/palete_list.json"
import ColorPaleteCard from "./components/ColorPaleteCard.vue";
import {ref} from "vue";

const paleteList = palete_list


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

