import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: [
      { name: '대시보드', icon: 'mdi-view-dashboard', link: '/admin/dashboard'},
      { name: '시스템', icon: 'mdi-cog', active: false, lists: [
          { name: '사용자 관리', link: '/admin/system/users'},
          { name: '메뉴 관리', link: '/admin/system/menus'}
        ]},
      { name: '개발자 메뉴', icon: 'mdi-dev-to', active: false, lists: [
          { name: '권한 관리', link: '/dev/roles'},
          { name: '프로그램 관리', link: '/dev/programs'},
          { name: '메뉴 관리', link: '/dev/menus'}
        ]},
    ],
    pageTitle: '대시보드'
  },
  mutations: {
    setPageTitle (state, pageTitle) {
      state.pageTitle = pageTitle
    }
  },
  getters: {
    menus: (state => state.menus),
    pageTitle: (state => state.pageTitle)
  },
  actions: {
  },
  modules: {
  }
})
