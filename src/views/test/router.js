import Vue from 'vue'
import Router from 'vue-router'
//主页
const HelloWorld = () => import('@/components/HelloWorld')
Vue.use(Router)

const router = new Router({
    routes: [
      {
        path: '/',
        name: 'HelloWorld', //测试首页
        component: HelloWorld,
    },
    ]
})


export default router