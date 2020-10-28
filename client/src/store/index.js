import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      console.log(state.user);
    },
  },
  actions: {
    registerUser({ commit }, credentials) {
      return axios
        .post("/api/users", credentials)
        .then(({ data }) => commit("SET_USER_DATA", data));
    },
  },
});
