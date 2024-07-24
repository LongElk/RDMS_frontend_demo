// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: localStorage.getItem('username') || '',
    token: localStorage.getItem('token') || '',
    lastActionTime: parseInt(localStorage.getItem('lastActionTime')) || Date.now(),
    timeout: 30 * 60 * 1000, // 30分钟的超时时间
  },
  mutations: {
    setUser(state, { username, token }) {
      state.username = username;
      state.token = token;
      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
    },
    clearUser(state) {
      state.username = '';
      state.token = '';
      localStorage.removeItem('username');
      localStorage.removeItem('token');
    },
    updateLastActionTime(state) {
      state.lastActionTime = Date.now();
      localStorage.setItem('lastActionTime', state.lastActionTime);
    },
  },
  actions: {
    login({ commit }, { username, token }) {
      commit('setUser', { username, token });
      commit('updateLastActionTime');
    },
    logout({ commit }) {
      commit('clearUser');
    },
    updateActionTime({ commit }) {
      commit('updateLastActionTime');
    },
    autoLogin({ commit }) {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      const lastActionTime = parseInt(localStorage.getItem('lastActionTime'));

      if (username && token) {
        commit('setUser', { username, token });
        commit('updateLastActionTime', lastActionTime);
      }
    },
  },
});
