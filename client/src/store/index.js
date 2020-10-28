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
      sessionStorage.setItem("user", JSON.stringify(userData));
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${userData.token}`;
    },
  },
  actions: {
    registerUser({ commit }, credentials) {
      return axios
        .post("/api/register", credentials)
        .then(({ data }) => commit("SET_USER_DATA", data));
    },
    loginUser({ commit }, credentials) {
      return axios
        .post("/api/login", credentials)
        .then(({ data }) => commit("SET_USER_DATA", data));
    },
  },
});
