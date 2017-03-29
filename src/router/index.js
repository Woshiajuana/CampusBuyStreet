import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Find from '@/components/Find';
import News from '@/components/News';
import Find_List from '@/components/Find_List';
import Content from '@/components/Content';

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
      component: Find,
      children:[
        {
          path: '/',
          name: 'Find_List',
          component: Find_List
        },
        {
          path: 'content/:id',
          name: 'content',
          component: Content
        }
      ]
    },
    {
      path: '/news',
      name: 'News',
      component: News
    }
  ]
})
