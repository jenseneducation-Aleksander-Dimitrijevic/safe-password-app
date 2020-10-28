import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  created() {
    const storedSession = sessionStorage.getItem("user");
    if (storedSession) {
      store.commit("SET_USER_DATA", JSON.parse(storedSession));
      router.push({ name: "dashboard" });
    }
  },
  render: (h) => h(App),
}).$mount("#app");
