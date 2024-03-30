<template>
  <div class="flex sticky top-0 left-0">
    <div class="bg-white dark:bg-[#14151B] w-[60px] h-[105vh] flex justify-center border  dark:border-[#313131]">
      <div>
        <div class="my-10">
          <button @click="sideBar_open = !sideBar_open">
            <img src="../assets/first.png" alt="" />
          </button>
        </div>
        <div class="mb-20">
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/Vector.png" alt=""
          /></RouterLink>
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/two.png" alt=""
          /></RouterLink>
          <RouterLink class="mb-11 block" to="/"
            ><img src="../assets/three.png" alt=""
          /></RouterLink>
          <div class="w-40px h-[2px] bg-[#d3d3d3]"></div>
        </div>
        <div class="mb-[100px]">
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/four.png" alt=""
          /></RouterLink>
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/five.png" alt=""
          /></RouterLink>
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/six.png" alt=""
          /></RouterLink>
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/seven.png" alt=""
          /></RouterLink>
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/eight.png" alt=""
          /></RouterLink>
        </div>
        <div>
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/nine.png" alt=""
          /></RouterLink>
          <RouterLink class="mb-6 block" to="/"
            ><img src="../assets/ten.png" alt=""
          /></RouterLink>
        </div>
      </div>
    </div>
    <div
      class="bg-[#fff] text-[#636363] dark:text-[#A4A4A4] transition-all dark:bg-[#1B1C21]"
      :class="{
        'w-0 !border-0': !sideBar_open,
        'w-auto px-2 pl-[20px]': sideBar_open,
      }"
    >
      <div v-if="sideBar_open">
        <div class="mb-10 flex items-center gap-3 my-9 ">
          <img src="../assets/Tvit.png" alt="" />
          <p>Onesport</p>
        </div>
        <p class="mb-[15px]">Menu</p>
        <div class="flex items-center gap-2 mb-[21px]">
          <RouterLink to="/"
            ><img src="../assets/menu1.png" alt=""
          /></RouterLink>
          <p>Dashboard</p>
        </div>
        <div class="flex items-center gap-2 mb-[21px]">
          <RouterLink to="/"class="flex items-center gap-2"
            ><img src="../assets/live.png" alt=""
          /><p>Live Football</p></RouterLink>
        </div>
        <div class="flex items-center gap-2 mb-[21px]">
          <RouterLink to="/" class=""
            ><img src="../assets/stand.png" alt=""
          /></RouterLink>
          <p>Standings</p>
        </div>
        <div class="flex items-center gap-2 mb-[21px]">
          <RouterLink to="/"
            ><img src="../assets/Highlights.png" alt=""
          /></RouterLink>
          <p>Highlights</p>
        </div>
        <div class="flex items-center gap-2 mb-[21px]">
          <RouterLink to="/"
            ><img src="../assets/shop.png" alt=""
          /></RouterLink>
          <p>Shop</p>
        </div>
        <div class="flex items-center gap-2 mb-[21px]">
          <RouterLink to="/"><img src="../assets/new.png" alt="" /></RouterLink>
          <p>News</p>
        </div>
        <div>
          <el-select
            v-model="value"
            placeholder="Football League"
            style="width: 240px"
            clearable
            class="mb-20"
          >
            <el-option
              class="text-black"
              v-for="item in options"
              :key="item.value"
              :value="item.value"
              :label="item.label"
              :disabled="item.disabled"
            >
              <div class="flex items-center justify-center gap-3">
                <img class="w-3" src="../assets/Vector.png" alt="asass" />
                <p class="text-black z-50">{{ item.label }}</p>
              </div>
            </el-option>
          </el-select>
        </div>
        <div>
          <h3 class="text-lg mb-10 ml-3">Favorite club</h3>
          <div class="flex items-center gap-4 ml-3">
            <img src="../assets/m.png" alt="" />
            <p>Chelsea FC</p>
            <div class="pl-14">
              <img src="../assets/yulduz.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";

const value = ref("");
const options = [
  {
    value: 1,
    label: "Worldcup Qatar 2022",
  },
];
const sideBar_open = ref(true);
</script>
<style>
.el-select__wrapper {
  box-shadow: none !important;
  background-color: transparent !important;
  font-size: large !important;
}
.el-select__wrapper span {
  color: #636363;
}
.el-select__placeholder.is-transparent {
  color: #636363;
}
</style>
