<template>
  <div class="py-10 px-5 flex justify-between items-center  bg-white dark:bg-[#1B1C21] sticky top-0   h-[68px] border border-[#D3D3D3] dark:border-[#313131]">
        <el-input
        class="dark:bg-[#2E3034]"
      v-model="input_header"
      style="width: 460px; height: 40px;"
      size="large"
      placeholder="Please Input"
      :suffix-icon="Search"
      clearable
    />
    
   <div>
   <div class="flex items-center gap-3">
    <button class="bg-[#5742A9] dark:bg-[#F5C451] h-[35px] text-[#FFFFFF] dark:text-[#100F0F] rounded-[6px] p-1">Go Premium</button>
    <img src="../assets/header_shop.png" alt="logo">
    <img src="../assets/header_call.png" alt="logo">
    <ColorMode/>
    <img class="w-[60px]" src="https://static.vecteezy.com/system/resources/thumbnails/019/879/186/small/user-icon-on-transparent-background-free-png.png" alt="">
   </div>
   </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Search } from "@element-plus/icons-vue";
import ColorMode from "@/components/ColorMode.vue"
const input_header = ref("");
</script>
<style>
.el-input__wrapper {
  background-color: #e6e6e6 !important;
}
</style>