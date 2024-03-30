<template>
   <div class="bg-white dark:bg-[#1d1e22]  mt-10 rounded-[16px] w-[1050px] mx-auto px-4 py-4">
        <span class="text-xl font-bold text-[#100F0F] dark:text-white">⚽ Football Match</span>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="Latest Match" name="first">Latest Match</el-tab-pane>
      <el-tab-pane label="Coming Match" name="second">Coming Match</el-tab-pane>
      <el-tab-pane label="Pre-season" name="third">Pre-season</el-tab-pane>
      <el-tab-pane label="Live Games" name="fourth">Live Games</el-tab-pane>
      <el-tab-pane label="Fun Football" name="fifth">Fun Football</el-tab-pane>
    </el-tabs>
    <div class="mx-auto bg-[#EFEFEF] dark:bg-[#2B2D31] w-[980px] h-[3px] mb-10"></div>
    <span class="text-xl font-bold text-[#100F0F] dark:text-white">🏆 Standings</span><br><br><br>
   <div class="flex items-center gap-2">
    <img src="../assets/plus.png" alt="">
    <img src="../assets/lion.png" alt="">
    <el-select v-model="value" placeholder="Premier League" style="width: 240px">
    <el-option>
      {{ store }}
    </el-option>
  </el-select>
   </div>
   </div>
  </template>
  <script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import type { TabsPaneContext } from 'element-plus'
  import { myStore } from '@/store';
  const store = myStore()
  onMounted(() => {
    store.getStandings()
  })
  const activeName = ref('first')
  const value = ref("")
  const handleClick = (tab: TabsPaneContext, event: Event) => {
    console.log(tab, event)
  }
  </script>
  <style>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  .el-tabs__active-bar {
    background-color: #5742A9 !important;
  }
  .el-tabs__item.is-active {
    color: #100F0F !important;
  }
  </style>
  