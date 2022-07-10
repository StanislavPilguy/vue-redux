import Vue from 'vue'
import Vuex from 'vuex'
import { PostsService } from '@/services/posts.service'
import {AuthService} from "@/services/auth.service";
import VuexPersistence from 'vuex-persist';
import router from "@/router";

Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    posts: [],
    loadingPosts: true,
    failPosts: false,
    failPostsMessage: '',

    user: {},
    isAuth: false,
    failLoginMessage: '',
    token: null,
    failRegisterMessage: '',
    loginErrors: [],
    registerErrors: [],
    role: [],


    // categories: [],
    // loadingPosts: true,
    // failPosts: false,
    // failPostsMessage: '',
    //
    // adminCategories: [],
    // loadingPosts: true,
    // failPosts: false,
    // failPostsMessage: '',
  },
  getters: {
    getPosts: (state) => state.posts,
    getLoadingPosts: (state) => state.loadingPosts,
    getFailPosts: (state) => state.failPosts,
    getFailPostsMessage: (state) => state.failPostsMessage,

    getUser: (state) => state.user,
    getIsAuth: (state) => state.isAuth,
    getFailLoginMessage: (state) => state.failLoginMessage,
    getToken: (state) => state.token,
    getFailRegisterMessage: (state) => state.failRegisterMessage,
    getLoginErrors: (state) => state.loginErrors,
    getRegisterErrors: (state) => state.registerErrors,
    getRole: (state) => state.role[state.role.length - 1]

  },
  mutations: {
    setPosts: (state, payload) => state.posts = payload.posts,
    setLoadingPosts: (state, payload) => state.loadingPosts = payload.loadingPosts,
    setFailPosts: (state, payload) => state.failPosts = payload.failPosts,
    setFailPostsMessage: (state, payload) => state.failPostsMessage = payload.failPostsMessage,

    setUser: (state, { user } ) => state.user = user,
    setIsAuth: (state, { isAuth }) => state.isAuth = isAuth,
    setFailLoginMessage: (state, { failLoginMessage} ) => state.failLoginMessage = failLoginMessage,
    setToken: (state, { token }) => state.token = token,
    setFailRegisterMessage: (state, { failRegisterMessage }) => state.failRegisterMessage = failRegisterMessage,
    setLoginErrors: (state, { loginErrors }) => state.loginErrors = loginErrors,
    setRegisterErrors: (state, { registerErrors }) => state.registerErrors = registerErrors,
    setRole: (state, { role }) => state.role = role,
    logout: (state) => {
      state.isAuth = false;
      state.user = {};
      state.token = '';
      router.push('/login').then()
    }

  },
  actions: {
    async fetchPostsPaginate({ commit }, limit = 10, page = 1 ) {
      try {
        commit('setFailPosts', { failPosts: false});
        commit('setLoadingPosts', { loadingPosts: false } );
        const posts = await PostsService.fetchPosts(limit, page)
        commit('setPosts', {posts: posts})
      } catch (error) {
        commit('setFailPosts', { failPosts: true});
        commit('setFailPostsMessage', { failPostsMessage: error.message } );
        commit('setLoadingPosts', { loadingPosts: true } );
      }
    },
    
    async fetchLogin({ commit }, {email, password}) {
      try {
        const res = await AuthService.login(email, password);
        commit('setUser', { user: res.user });
        commit('setIsAuth', {  isAuth: true });
        commit('setToken', { token: res.token});
        commit('setRole', { role: res.role});
        await router.push('/admin');
      } catch (error) {
        commit('setFailLoginMessage', { failLoginMessage: error.message });
        commit('setLoginErrors', { loginErrors: error.error });
      }
    }
  },
  plugins: [vuexLocal.plugin]
})

