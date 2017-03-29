<template>
  <div class="hello">
    <header id="header" class="mui-bar mui-bar-nav">
      <img class="header-logo" src="../../static/images/logon-icon.png" alt=""/>
      <div class="mui-input-row mui-search">
        <input type="search" class="mui-input-clear" placeholder="" data-input-clear="1" data-input-search="1">
        <span class="mui-icon mui-icon-clear mui-hidden"></span>
        <span class="mui-placeholder">
          <span class="mui-icon mui-icon-search"></span>
          <span></span>
        </span>
      </div>
    </header>
    <div class="container">
      <!--轮播图-->
      <div id="slider" class="mui-slider" data-slider="1">
        <div class="mui-slider-group mui-slider-loop" style="transform: translate3d(-375px, 0px, 0px) translateZ(0px);">
          <!-- 额外增加的一个节点(循环轮播：第一个节点是最后一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="../../static/images/yuantiao.jpg">
              <p class="mui-slider-title">静静看这世界</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/images/shuijiao.jpg">
              <p class="mui-slider-title">幸福就是可以一起睡觉</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/images/muwu.jpg">
              <p class="mui-slider-title">想要一间这样的木屋，静静的喝咖啡</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/images/cbd.jpg">
              <p class="mui-slider-title">Color of SIP CBD</p>
            </a>
          </div>
          <div class="mui-slider-item">
            <a href="#">
              <img src="../../static/images/yuantiao.jpg">
              <p class="mui-slider-title">静静看这世界</p>
            </a>
          </div>
          <!-- 额外增加的一个节点(循环轮播：最后一个节点是第一张轮播) -->
          <div class="mui-slider-item mui-slider-item-duplicate">
            <a href="#">
              <img src="../../static/images/shuijiao.jpg">
              <p class="mui-slider-title">幸福就是可以一起睡觉</p>
            </a>
          </div>
        </div>
        <div class="mui-slider-indicator mui-text-right">
          <div class="mui-indicator mui-active"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
          <div class="mui-indicator"></div>
        </div>
      </div>
      <!--/轮播图-->

    </div>
  </div>
</template>

<!--js-->
<script src="../../static/js/hello.js"></script>

<!--scss-->
<style lang="scss">
  @import "../../static/scss/hello.scss";
</style>
