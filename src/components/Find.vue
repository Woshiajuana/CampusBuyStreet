<template>
  <div class="find">
    <header class="mui-bar mui-bar-nav">
      <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left" @click="returnPage()"></a>
      <h1 class="mui-title" v-text="content_title"></h1>
    </header>
    <router-view v-on:showTitle="showTitle"></router-view>
  </div>
</template>

<!--js-->
<script src="../../static/js/find.js"></script>

<!--scss-->
<style lang="scss">
  @import "../../static/scss/find.scss";
</style>
