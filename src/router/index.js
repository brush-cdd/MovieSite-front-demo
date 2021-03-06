import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Content from '@/page/content'
import Life from '@/page/life'
import Tech from '@/page/tech'
import Film from '@/page/film'
import Design from '@/page/design'
import Original from '@/page/original'
import Settings from '@/page/membersettings'
import MemberIndex from '@/page/memberindex'
import Contribute from '@/page/contribute'
import Manager from '@/page/manager'
import VideoContent from '@/page/videocontent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/content/:id',
      component: Content
    }, {
      path: '/life',
      component: Life
    }, {
      path: '/tech',
      component: Tech
    }, {
      path: '/film',
      component: Film
    }, {
      path: '/design',
      component: Design
    }, {
      path: '/original',
      component: Original
    }, {
      path: '/member/settings',
      component: Settings
    }, {
      path: '/member/user',
      component: MemberIndex
    }, {
      path: '/member/contribute',
      component: Contribute
    }, {
      path: '/member/manager',
      component: Manager
    }, {
      path: '/videocontent',
      component: VideoContent
    }
  ]
})
