<template>
  <div class="container">
    <div class="content">
      <img :src="require('@/assets/icon-transparent.png')" alt="lckd-icon" />
      <h1>LCKD</h1>
      <form @submit.prevent="register(input)">
        <div class="form-control">
          <label for="username">Username</label>
          <input type="text" v-model="input.username" id="username" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" v-model="input.password" id="password" />
        </div>
        <div class="form-control">
          <label for="repeatPassword">Repeat password</label>
          <input
            type="password"
            v-model="input.repeatPassword"
            id="repeatPassword"
          />
        </div>
        <button class="btn-primary">Create account</button>

        <router-link class="form-link" to="/login"
          >Already have an account? Login here!</router-link
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    register({ username, password, repeatPassword }) {
      if (username == null || password == null || repeatPassword == null) {
        alert("Fyll i fälten");
        return;
      }
      this.$store
        .dispatch("registerUser", this.input)
        .then(() => this.$router.push({ name: "login" }))
        .catch((err) => alert(err.response.data.error));
    },
  },
  data() {
    return {
      input: {
        username: null,
        password: null,
        repeatPassword: null,
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
