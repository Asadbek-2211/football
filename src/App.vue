<script setup>
import { RouterLink, RouterView } from "vue-router";
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Tabs from "./components/Tabs.vue";
</script>

<template>
  <div class="flex items-start bg-[#efefef] dark:bg-[#212227]">
    <Sidebar />
    <div class="flex-1">
      <Header />
      <div class="mt-5">
        <Main />
        <Tabs />
      </div>
    </div>
  </div>
  <RouterView />
</template>
<style></style>
