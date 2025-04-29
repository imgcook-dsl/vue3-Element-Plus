'use strict';

import React from 'react';
import './index.less';

function Index() {
  return (
    <div className="page">
      <div className="container">
        <div className="header">
          <span className="time">9:41</span>
          <div className="group">
            <img className="badge" src="https://static.imgcook.com/img/test/a1e4d6e05aee11ef8ea23170a0baccab.png" />
            <img className="iconWifi" src="https://static.imgcook.com/img/test/a1a3d6405aee11efb7870f01a7076007.png" />
            <div className="view">
              <div className="layer"></div>
            </div>
            <img className="dot" src="https://static.imgcook.com/img/test/a166a6305aee11efa674c13ff2e7205d.png" />
          </div>
        </div>
        <div className="body">
          <img className="iconLeft" src="https://static.imgcook.com/img/test/a11af7305aee11efb90f0db9f3474456.png" />
          <span className="title">订单</span>
          <div className="group1">
            <img className="icon" src="https://static.imgcook.com/img/test/a0d7fac05aee11efb70155ddd06c3877.png" />
            <div className="verticalLine"></div>
            <img
              className="iconCircleClose"
              src="https://static.imgcook.com/img/test/a088a2405aee11efbf16fdf9a4b09dfe.png"
            />
          </div>
        </div>
      </div>
      <div className="container1">
        <span className="caption">共</span>
        <span className="num">3</span>
        <span className="caption1">笔订单</span>
      </div>
      <div className="container2">
        <div className="body1">
          <div className="group2">
            <span className="title1">2020-2021学费</span>
            <div className="view1">
              <span className="title2">学生姓名</span>
              <span className="decaf">Decaf</span>
            </div>
          </div>
          <div className="group3">
            <div className="view2">
              <span className="caption2">缴费信息</span>
              <span className="caption3">2020-2021学费</span>
            </div>
            <div className="view3">
              <span className="title3">订单状态</span>
              <span className="title4">待支付</span>
            </div>
          </div>
          <div className="empty"></div>
          <div className="group4">
            <div className="view4">
              <span className="caption4">待支付金额:</span>
              <span className="time1">2000 元</span>
            </div>
            <div className="view5">
              <span className="caption5">去支付</span>
              <img
                className="iconRight"
                src="https://static.imgcook.com/img/test/a22959f05aee11efa2f96be4e27ebafd.png"
              />
            </div>
          </div>
        </div>
        <div className="main">
          <span className="title5">2020-2021学费</span>
          <div className="group5">
            <div className="labelWrapper">
              <span className="label">已完成</span>
            </div>
          </div>
          <div className="groupItem0">
            <span className="title6">学生姓名</span>
            <span className="decaf1">Decaf</span>
          </div>
          <div className="groupItem1">
            <span className="caption6">缴费信息</span>
            <span className="title7">2020-2021学费</span>
          </div>
          <div className="groupItem2">
            <span className="title8">订单状态</span>
            <span className="title9">已完成</span>
          </div>
          <div className="empty1"></div>
          <div className="group6">
            <span className="caption7">已支付金额:</span>
            <span className="clock">2000 元</span>
          </div>
        </div>
        <div className="submain">
          <span className="caption8">2020-2021学费</span>
          <div className="group7">
            <div className="view6">
              <img
                className="iconCircle"
                src="https://static.imgcook.com/img/test/a26578905aee11ef944eff6ae583fb43.png"
              />
              <span className="tag">已失效</span>
            </div>
          </div>
          <div className="groupItem01">
            <span className="title10">学生姓名</span>
            <span className="decaf2">Decaf</span>
          </div>
          <div className="groupItem11">
            <span className="caption9">缴费信息</span>
            <span className="caption10">2020-2021学费</span>
          </div>
          <div className="groupItem21">
            <span className="title11">订单状态</span>
            <span className="title12">已失效</span>
          </div>
          <div className="empty2"></div>
          <div className="group8">
            <span className="caption11">已支付金额:</span>
            <span className="timer">2000 元</span>
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}

export default Index;
