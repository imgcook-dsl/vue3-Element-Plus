<script setup>
import { reactive } from 'vue';

const state = reactive({
  loopData: [{}, {}],
  constants: {},
});
</script>

<template>
  <div class="mod">
    <el-container class="class6">
      <el-header class="class7"></el-header>
      <el-container class="class11">
        <el-aside class="class10"></el-aside>
        <el-container class="class12">
          <el-main class="class9">
            <div
              class="class1"
              v-for="(item, index) in state.loopData"
              :key="index"
            >
              <div class="body">
                <img
                  class="item"
                  src="https://static.imgcook.com/img/test/aae95370ae1c11efab3a11063cae6c8a.png"
                />
                <div class="tagWrapper">
                  <span class="tag">整屋</span>
                </div>
              </div>
              <div class="footer">
                <el-button class="class4">
                  <span class="class5">查看详情</span>
                </el-button>
                <span class="title"
                  >拥有超多功能的40平米简约小公寓了解一下</span
                >
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
          </el-main>
          <el-footer class="class8"></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.mod {
  height: 100%;
  position: relative;
  background-color: #ffffff;
  .class6 {
    height: 100%;
    .class7 {
      background-color: #50e3c2;
    }
    .class11 {
      .class10 {
        background-color: #f5a623;
      }
      .class12 {
        .class9 {
          .class1 {
            display: flex;
            margin-bottom: 10px;
            padding-top: 2px;
            padding-right: 2px;
            padding-bottom: 2px;
            padding-left: 2px;
            width: 100%;
            position: relative;
            border: 1px solid #9b9b9b;
            min-width: 1000px;
            .body {
              display: flex;
              justify-content: flex-start;
              width: 342px;
              height: 100%;
              position: relative;
              .item {
                width: 342px;
                height: 324px;
                align-self: flex-start;
                border-radius: 12px;
              }
              .tagWrapper {
                display: flex;
                justify-content: flex-start;
                padding: 5px 10px;
                position: absolute;
                left: 18px;
                bottom: 18px;
                background-color: #ffb902;
                border-radius: 6px;
                .tag {
                  color: rgba(255, 255, 255, 1);
                  font-family: PingFang SC;
                  font-size: 20px;
                  line-height: 20px;
                  align-self: flex-start;
                  white-space: nowrap;
                }
              }
            }
            .footer {
              display: flex;
              justify-content: center;
              margin-top: 0px;
              padding-top: 3px;
              padding-right: 12px;
              padding-bottom: 0px;
              padding-left: 12px;
              height: 324px;
              position: relative;
              flex: 1px;
              .class4 {
                width: 100px;
                height: 28px;
                position: absolute;
                bottom: 12px;
                right: 12px;
                .class5 {
                }
              }
              .title {
                color: rgba(51, 51, 51, 1);
                font-family: PingFang SC;
                font-size: 30px;
                line-height: 44px;
                align-self: center;
                width: 306px;
                height: 88px;
                overflow: hidden;
                text-overflow: ellipsis;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                white-space: normal;
              }
              .group {
                display: flex;
                justify-content: space-between;
                margin-left: 10px;
                width: 306px;
                align-self: center;
                .view {
                  display: flex;
                  justify-content: space-between;
                  align-self: center;
                  height: 28px;
                  width: 204px;
                  .iconAvatar {
                    width: 30px;
                    height: 28px;
                    align-self: center;
                  }
                  .info {
                    color: rgba(102, 102, 102, 1);
                    font-family: PingFang SC;
                    font-size: 24px;
                    font-weight: 300;
                    line-height: 28px;
                    align-self: center;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 168px;
                    white-space: nowrap;
                  }
                }
                .view1 {
                  display: flex;
                  justify-content: space-between;
                  align-self: center;
                  height: 28px;
                  width: 62px;
                  padding: 1px 0;
                  .iconStar {
                    width: 22px;
                    height: 22px;
                    align-self: center;
                  }
                  .num {
                    color: rgba(153, 153, 153, 1);
                    font-family: PingFang SC;
                    font-size: 22px;
                    line-height: 26px;
                    align-self: center;
                    white-space: nowrap;
                  }
                }
              }
            }
          }
        }
        .class8 {
          background-color: #4a90e2;
        }
      }
    }
  }
}
</style>
