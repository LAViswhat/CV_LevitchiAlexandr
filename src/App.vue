<script setup>
import AsideComponent from "./components/AsideComponent.vue";
import MainComponent from "./components/MainComponent.vue";
</script>

<template>
  <div class="container mx-auto flex sm:flex-row flex-col">
    <AsideComponent class="sm:basis-1/4 basis-full" />
    <MainComponent class="sm:basis-3/4 basis-full" />
  </div>
</template>

<style scoped></style>
