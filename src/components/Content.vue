<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <div class="container">
      <p class="content-con">
        为实现下拉刷新功能,大多H5框架都是通过DIV模拟下拉回弹动画,在低端android手机上,DIV动画经常出现卡顿现象(特别是图文列表的情况); mui通过双webview解决这个DIV的拖...
      </p>
      <p class="content-con">
        为实现下拉刷新功能,大多H5框架都是通过DIV模拟下拉回弹动画,在低端android手机上,DIV动画经常出现卡顿现象(特别是图文列表的情况); mui通过双webview解决这个DIV的拖...
      </p>
    </div>
  </div>
</template>

<!--js-->
<script src="../../static/js/content.js"></script>

<!--scss-->
<style lang="scss">
  @import "../../static/scss/content.scss";
</style>
