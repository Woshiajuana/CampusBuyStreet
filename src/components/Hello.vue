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
      <div class="main-product">
        <router-link to="/contents/4" class="product-item">
          <img src="../../static/images/header_images.png" class="product-img" alt=""/>
          <span class="product-span">自行车</span>
        </router-link>
        <router-link to="/content/5" class="product-item">
          <img src="../../static/images/header_images.png" class="product-img" alt=""/>
          <span class="product-span">自行车</span>
        </router-link>
        <router-link to="/content/6" class="product-item">
          <img src="../../static/images/header_images.png" class="product-img" alt=""/>
          <span class="product-span">自行车</span>
        </router-link>
        <router-link to="/content/7" class="product-item">
          <img src="../../static/images/header_images.png" class="product-img" alt=""/>
          <span class="product-span">自行车</span>
        </router-link>
      </div>
      <div class="mui-card" style="margin-bottom: 35px;">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/muwu.jpg">
              <div class="mui-media-body">
                木屋
                <p class="mui-ellipsis">想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/cbd.jpg">
              <div class="mui-media-body">
                CBD
                <p class="mui-ellipsis">烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/yuantiao.jpg">
              <div class="mui-media-body">
                远眺
                <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/yuantiao.jpg">
              <div class="mui-media-body">
                远眺
                <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/yuantiao.jpg">
              <div class="mui-media-body">
                远眺
                <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/yuantiao.jpg">
              <div class="mui-media-body">
                远眺
                <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/yuantiao.jpg">
              <div class="mui-media-body">
                远眺
                <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
              </div>
            </a>
          </li>
          <li class="mui-table-view-cell mui-media">
            <a href="javascript:;">
              <img class="mui-media-object mui-pull-right" src="../../static/images/yuantiao.jpg">
              <div class="mui-media-body">
                远眺
                <p class="mui-ellipsis">静静的看这个世界，最后终于疯了</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<!--js-->
<script src="../../static/js/hello.js"></script>

<!--scss-->
<style lang="scss">
  @import "../../static/scss/hello.scss";
</style>
