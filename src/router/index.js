import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Find from '@/components/Find';
import News from '@/components/News';
import Find_List from '@/components/Find_List';
import Content from '@/components/Content';

Vue.use(Router);

const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    console.log(savedPosition)
    return savedPosition
  } else {
    const position = {}
    if (to.hash) {
      position.selector = to.hash
    }
    console.log(to.hash)
    if (to.matched.some(m => m.meta.scrollToTop)) {
      position.x = 0
      position.y = 0
    }
    return position
  }
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:[
        {
          path: 'content/:id',
          name: 'content',
          component: Content
        }
      ]
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
    },
    {
      path: '/contents/:id',
      name: 'content',
      component: Content
    },
    {
      path: '*',
      component: Hello
    }
  ]
})

