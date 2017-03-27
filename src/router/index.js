import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Find from '@/components/Find';
import News from '@/components/News';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
