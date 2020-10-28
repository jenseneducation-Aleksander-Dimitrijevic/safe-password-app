<template>
  <nav>
    <span
      class="lnr lnr-arrow-left"
      @click="$router.push({ name: 'Home' })"
    ></span>
  </nav>
</template>

<script>
export default {
  name: "AppBar",
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
  position: fixed;
  align-items: center;

  & > span {
    font-size: 3rem;
  }
}
</style>
