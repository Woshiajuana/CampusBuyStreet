<template>
  <div class="container container-list">

    <router-link to="/find/content/1">
      <div @click="rememberScroll" class="mui-card">
          <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/images/cbd.jpg)"></div>
          <div class="mui-card-content">
            <div class="mui-card-content-inner">
              <p>Posted on January 18, 2016</p>
              <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
            </div>
          </div>
          <div class="mui-card-footer">
            <a class="mui-card-link">Like</a>
            <a class="mui-card-link">Read more</a>
          </div>
      </div>
    </router-link>
    <router-link to="/find/content/2">
      <div @click="rememberScroll" class="mui-card">
        <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/images/cbd.jpg)"></div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>Posted on January 18, 2016</p>
            <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <a class="mui-card-link">Like</a>
          <a class="mui-card-link">Read more</a>
        </div>
      </div>
    </router-link>
    <router-link to="/find/content/3">
      <div @click="rememberScroll" class="mui-card">
        <div class="mui-card-header mui-card-media" style="height:40vw;background-image:url(../../static/images/cbd.jpg)"></div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>Posted on January 18, 2016</p>
            <p style="color: #333;">这里显示文章摘要，让读者对文章内容有个粗略的概念...</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <a class="mui-card-link">Like</a>
          <a class="mui-card-link">Read more</a>
        </div>
      </div>
    </router-link>
  </div>
</template>
<!--js-->
<script src="../../static/js/find_list.js"></script>
