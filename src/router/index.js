import Vue from 'vue'
import Router from 'vue-router'
import Msite from '../pages/Msite/Msite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
// 配置路由的时候，还可以写一个属性，meta，相当于给我的路由添加一个属性,值是对象
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'msite',
      component: Msite
    },
    {
      path: '/msite',
      name: 'msite',
      component: Msite,
      // 我们要控制是否显示底部路由
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        showFooter:true
      }
    },
    // 登陆详情路由不加，默认是false，meta这个值默认就有，只是是个空对象，空对象去取这个值
    // 得到是个false
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
