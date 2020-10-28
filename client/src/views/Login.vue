<template>
  <div class="container">
    <div class="content">
      <img :src="require('@/assets/icon-transparent.png')" alt="lckd-icon" />
      <h1>LCKD</h1>
      <form @submit.prevent="login(input)">
        <div class="form-control">
          <label for="username">Username</label>
          <input type="text" v-model="input.username" id="username" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" v-model="input.password" id="password" />
        </div>
        <button class="btn-primary">Let me in</button>

        <router-link class="form-link" to="/signup"
          >No account? Sign up here!</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: null,
        password: null,
      },
    };
  },
  methods: {
    login({ username, password }) {
      if (username == null || password == null) {
        alert("Fyll i fälten");
        return;
      }
      this.$store
        .dispatch("loginUser", this.input)
        .then(() => this.$router.push({ name: "dashboard" }))
        .catch((err) => alert(err.response.data.error));
    },
  },
};
</script>

<style lang="scss" scoped></style>
