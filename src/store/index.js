import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      isLoggedIn: false,
      isLoginOpen: false,
      authUser: {}
    }
  },
  mutations: {
    setIsLoggedIn(state, payload){
      state.isLoggedIn = payload;
    },
    setIsAuthUser(state, payload){
      state.authUser = payload;
    },
    setLoginModal(state, payload) {
      state.isLoginOpen = payload;
    }
  }
})

export default store;
