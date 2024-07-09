<script setup>
import { onMounted } from "vue";
import { useUtilStore } from "../stores/UtilStore.js";

const storeUtils = useUtilStore();

onMounted(() => {
  console.log("hello");
  console.log(storeUtils.actionString);
});
</script>

<template>
  <div>
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, magnam.
    Perferendis ducimus cum, odio magni debitis dolorum. Incidunt, odio
    repellendus. Optio quam illo ex inventore non accusamus commodi saepe
    facere.
    {{ storeUtils.actionString }}
  </div>
</template>

<style scoped>
/* Add your styles here */
</style>
