<script setup>
import { reactive } from 'vue';

const state = reactive({
  loopData: [{}, {}],
  constants: {},
});
</script>

<template>
  <div class="mod">
    <div class="class1" v-for="(item, index) in state.loopData" :key="index">
      <div class="body">
        <img
          class="item"
          src="https://static.imgcook.com/img/test/aae95370ae1c11efab3a11063cae6c8a.png"
        />
        <div class="tagWrapper"><span class="tag">整屋</span></div>
      </div>
      <div class="footer">
        <el-button class="class4"
          ><span class="class5">按钮文本</span> </el-button
        ><span class="title">拥有超多功能的40平米简约小公寓了解一下</span>
        <div class="group">
          <div class="view">
            <img
              class="iconAvatar"
              src="https://static.imgcook.com/img/test/aabe72e0ae1c11efa5cee1656f595e97.png"
            />
            <span class="info">花花设计工作…</span>
          </div>
          <div class="view1">
            <img
              class="iconStar"
              src="https://static.imgcook.com/img/test/aabd3a60ae1c11ef98507d64bc18c843.png"
            />
            <span class="num">168</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./index.css" />
