import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Layout from '@/components/Layout.vue'
import dAppList from '@/components/dAppList.vue'
import dAppPage from '@/components/dAppPage.vue'
import EEPList from '@/components/EEPList.vue'
import PRepList from '@/components/PRepList.vue'
import Exchanges from '@/components/Exchanges.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'dAppList',
          component: dAppList
        },
        {
          path: '/hello',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path: '/dapp',
          name: 'dAppList',
          component: dAppList
        },
        {
          path: '/dapp/:dappid',
          name: 'dAppPage',
          component: dAppPage
        },
        {
          path: '/eep',
          name: 'EEPList',
          component: EEPList
        },
        {
          path: '/prep',
          name: 'PRepList',
          component: PRepList
        },
        {
          path: '/exchange',
          name: 'Exchanges',
          component: Exchanges
        },
      ]
    }
  ]
})
