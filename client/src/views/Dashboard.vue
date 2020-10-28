<template>
  <div class="container" v-if="user">
    <div class="content">
      <h1>Welcome to dashboard, {{ user.username }}</h1>
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

<style lang="scss" scoped></style>
