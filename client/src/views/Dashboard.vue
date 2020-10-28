<template>
  <div class="container" v-if="user">
    <div class="content">
      <h1>
        Welcome to the dashboard,
        <p>{{ user.username }}</p>
      </h1>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Dashboard",
  created() {
    axios
      .get("/api/dashboard")
      .then(({ data }) => {
        this.user = data;
      })
      .catch((err) => alert(err.response.data.error));
  },
  data() {
    return {
      user: null,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1rem;
  font-weight: 100;
  p {
    font-size: 1.3rem;
    font-weight: bold;
    padding-top: 1rem;
    letter-spacing: 4px;
    text-transform: uppercase;
  }
}
</style>
