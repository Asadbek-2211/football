<template>
  <button @click="isDark = !isDark">
    <img v-if="isDark" src="../assets/sunblack.png" alt="" />
    <img v-else src="../assets/sunwhite.png" alt="" />
  </button>
</template>
<script setup>
import { useDark } from "@vueuse/core";
const isDark = useDark();
</script>
