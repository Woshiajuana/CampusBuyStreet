/**
 * Created by Administrator on 2017/3/31.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const findStore = {
  state: {
    position: 0
  },
  mutations: {
    remberPositionY (state,positionY) {
      state.position = positionY;
    }
  }
};


export default new Vuex.Store({
  modules: {
    findStore: findStore
  }
})
