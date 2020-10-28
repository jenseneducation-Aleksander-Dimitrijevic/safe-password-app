<template>
  <div class="container" @click="$router.push({ name: 'login' })">
    <div class="content">
      <img :src="require('@/assets/icon-transparent.png')" alt="lckd-icon" />
      <h1>LCKD</h1>
      <h2>Keeping your password safe</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.content {
  letter-spacing: 2px;
  img {
    width: 60px;
    margin: auto;
    display: block;
  }

  h1 {
    margin: 1rem 0;
  }

  h2 {
    font-size: 1.3rem;
    color: #ffc107;
    text-transform: uppercase;
  }
}
</style>
