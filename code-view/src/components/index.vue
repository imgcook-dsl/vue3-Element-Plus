<script setup>
import { reactive } from 'vue';

const state = reactive({
  constants: {},
});
</script>

<template>
  <div class="page">
    <div class="container">
      <div class="header">
        <span class="time">9:41</span>
        <div class="group">
          <img
            class="badge"
            src="https://static.imgcook.com/img/test/a1e4d6e05aee11ef8ea23170a0baccab.png"
          />
          <img
            class="iconWifi"
            src="https://static.imgcook.com/img/test/a1a3d6405aee11efb7870f01a7076007.png"
          />
          <div class="view">
            <div class="layer"></div>
          </div>
          <img
            class="dot"
            src="https://static.imgcook.com/img/test/a166a6305aee11efa674c13ff2e7205d.png"
          />
        </div>
      </div>
      <div class="body">
        <img
          class="iconLeft"
          src="https://static.imgcook.com/img/test/a11af7305aee11efb90f0db9f3474456.png"
        />
        <span class="title">订单</span>
        <div class="group1">
          <img
            class="icon"
            src="https://static.imgcook.com/img/test/a0d7fac05aee11efb70155ddd06c3877.png"
          />
          <div class="verticalLine"></div>
          <img
            class="iconCircleClose"
            src="https://static.imgcook.com/img/test/a088a2405aee11efbf16fdf9a4b09dfe.png"
          />
        </div>
      </div>
    </div>
    <div class="container1">
      <span class="caption">共</span>
      <span class="num">3</span>
      <span class="caption1">笔订单</span>
    </div>
    <div class="container2">
      <div class="body1">
        <div class="group2">
          <span class="title1">2020-2021学费</span>
          <div class="view1">
            <span class="title2">学生姓名</span>
            <span class="decaf">Decaf</span>
          </div>
        </div>
        <div class="group3">
          <div class="view2">
            <span class="caption2">缴费信息</span>
            <span class="caption3">2020-2021学费</span>
          </div>
          <div class="view3">
            <span class="title3">订单状态</span>
            <span class="title4">待支付</span>
          </div>
        </div>
        <div class="empty"></div>
        <div class="group4">
          <div class="view4">
            <span class="caption4">待支付金额:</span>
            <span class="time1">2000 元</span>
          </div>
          <div class="view5">
            <span class="caption5">去支付</span>
            <img
              class="iconRight"
              src="https://static.imgcook.com/img/test/a22959f05aee11efa2f96be4e27ebafd.png"
            />
          </div>
        </div>
      </div>
      <div class="main">
        <span class="title5">2020-2021学费</span>
        <div class="group5">
          <div class="labelWrapper">
            <span class="label">已完成</span>
          </div>
        </div>
        <div class="groupItem0">
          <span class="title6">学生姓名</span>
          <span class="decaf1">Decaf</span>
        </div>
        <div class="groupItem1">
          <span class="caption6">缴费信息</span>
          <span class="title7">2020-2021学费</span>
        </div>
        <div class="groupItem2">
          <span class="title8">订单状态</span>
          <span class="title9">已完成</span>
        </div>
        <div class="empty1"></div>
        <div class="group6">
          <span class="caption7">已支付金额:</span>
          <span class="clock">2000 元</span>
        </div>
      </div>
      <div class="submain">
        <span class="caption8">2020-2021学费</span>
        <div class="group7">
          <div class="view6">
            <img
              class="iconCircle"
              src="https://static.imgcook.com/img/test/a26578905aee11ef944eff6ae583fb43.png"
            />
            <span class="tag">已失效</span>
          </div>
        </div>
        <div class="groupItem01">
          <span class="title10">学生姓名</span>
          <span class="decaf2">Decaf</span>
        </div>
        <div class="groupItem11">
          <span class="caption9">缴费信息</span>
          <span class="caption10">2020-2021学费</span>
        </div>
        <div class="groupItem21">
          <span class="title11">订单状态</span>
          <span class="title12">已失效</span>
        </div>
        <div class="empty2"></div>
        <div class="group8">
          <span class="caption11">已支付金额:</span>
          <span class="timer">2000 元</span>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import './index.less';
</style>
