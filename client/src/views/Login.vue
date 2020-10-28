<template>
  <div class="container">
    <div class="content">
      <img :src="require('@/assets/icon-transparent.png')" alt="lckd-icon" />
      <h1>LCKD</h1>
      <form @submit.prevent>
        <div class="form-control">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div class="form-control">
          <label for="password">Password</label>
          <input type="password" id="password" />
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
};
</script>

<style lang="scss">
form {
  width: 100%;
  text-align: left;
  margin-top: 2rem;
  .form-control {
    margin: 1rem 0;
    label {
      display: block;
      margin-bottom: 0.5rem;
    }
    input {
      width: 100%;
      border: none;
      padding: 12px 8px;
      border-radius: 3px;
    }
  }
}
</style>
