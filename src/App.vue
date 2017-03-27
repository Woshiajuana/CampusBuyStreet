<template>
  <div id="app" class="mui-off-canvas-wrap mui-draggable mui-scalable" :class="{'mui-active':is_open_menu}">
    <!--菜单部分-->
    <aside class="mui-off-canvas-right mui-transitioning" :class="{'mui-active':is_open_menu}">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media">
              <a class="mui-navigate-right" href="#account">
                <img class="mui-media-object mui-pull-left head-img" id="head-img" src="../static/images/header_images.png">
                <div class="mui-media-body">
                  Hello MUI
                  <p class="mui-ellipsis">账号:hellomui</p>
                </div>
              </a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#account" class="mui-navigate-right">账号与安全</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#notifications" class="mui-navigate-right">新消息通知</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="#privacy" class="mui-navigate-right">隐私</a>
            </li>
            <li class="mui-table-view-cell">
              <a href="#general" class="mui-navigate-right">通用</a>
            </li>
          </ul>
          <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell">
              <a href="#about" class="mui-navigate-right">关于MUI <i class="mui-pull-right update">V2.7.0</i></a>
            </li>
          </ul>
          <ul class="mui-table-view">
            <li class="mui-table-view-cell">
              <a>退出登录</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    <!--/菜单部分-->
    <!--主体部分-->
    <div class="mui-inner-wrap mui-transitioning">
      <nav class="mui-bar mui-bar-tab">
        <a class="mui-tab-item" href="#/" :class="{'mui-active':nav_active_id == 1}" @click="nav_active_id = 1">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="#find" :class="{'mui-active':nav_active_id == 2}" @click="nav_active_id = 2">
          <span class="mui-icon mui-icon-eye"></span>
          <span class="mui-tab-label">发现</span>
        </a>
        <a class="mui-tab-item" href="#news" :class="{'mui-active':nav_active_id == 3}" @click="nav_active_id = 3">
          <span class="mui-icon mui-icon-email"></span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" @click.prevent="openMenu()">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">我的买手街</span>
        </a>
      </nav>
      <router-view v-on:showNavId="showNavId"></router-view>
    </div>
    <!--/主体部分-->

  </div>
</template>

<!--js-->
<script src="../static/js/app.js"></script>

<!--scss-->
<style lang="scss">
  @import "../static/scss/app.scss";
</style>
