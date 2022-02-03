import { createStore } from 'vuex'
import { Navigation } from '@/types/Navigation';
import { Router } from 'vue-router';

export default createStore({
  state: {
    availableRoutes: {} as Navigation,
  },
  mutations: {
    availableRoutes(state, payload: Navigation) {
      state.availableRoutes = payload;
    },
  },
  actions: {
    getAvailableRoutes({commit}, router: Router) {
      commit('availableRoutes', router.options.routes);
    }
  },
  modules: {
  }
})
