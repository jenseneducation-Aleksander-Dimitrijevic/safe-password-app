<template>
  <nav>
    <span
      v-show="$route.name != 'dashboard'"
      class="lnr lnr-arrow-left"
      @click="$router.push({ name: 'Home' })"
    ></span>
    <section v-show="$route.name == 'dashboard'">
      <img :src="require('@/assets/icon-transparent.png')" alt="lckd-icon" />
      <h1>LCKD</h1>
    </section>
    <button
      v-show="$route.name == 'dashboard'"
      class="btn-primary"
      @click="logout"
    >
      Logga ut
    </button>
  </nav>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "AppBar",
  computed: { ...mapState(["user"]) },
  methods: {
    logout() {
      sessionStorage.removeItem("user");
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  top: 0;
  right: 0;
  width: 100%;
  height: 100px;
  display: flex;
  color: #fff;
  padding: 0 1rem;
  position: absolute;
  align-items: center;

  & > span {
    font-size: 3rem;
    cursor: pointer;
  }

  section {
    display: flex;
    align-items: center;
    & > img {
      width: 50px;
      margin-right: 0.5rem;
    }

    h1 {
      font-size: 2rem;
      letter-spacing: 4px;
    }
  }

  .btn-primary {
    width: auto;
    padding: 1rem;
    color: #fff;
    font-size: 1rem;
    margin-left: auto;
    letter-spacing: 0;
    background: transparent;
    border: 2px solid #fff;
  }
}
</style>
