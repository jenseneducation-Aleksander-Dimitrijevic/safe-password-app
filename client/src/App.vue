<template>
  <div id="app">
    <app-bar v-show="$route.name !== 'Home'" />
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar.vue";
export default {
  name: "App",
  components: {
    AppBar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");

body {
  font-family: "Roboto", sans-serif;
}

button,
input {
  outline: none;
}

#app {
  width: 100%;
  margin: auto;
  max-width: 460px;
  position: relative;
}

.container {
  width: 100%;
  margin: auto;
  color: #fff;
  display: flex;
  height: 100vh;
  background: #160a66;

  .content {
    width: 100%;
    margin: auto;
    padding: 0 1rem;
    text-align: center;
  }
}

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

.btn-primary {
  width: 100%;
  border: none;
  margin: 1rem 0;
  font-size: 1rem;
  padding: 1rem 0;
  cursor: pointer;
  color: #160a66;
  background: #fff;
  border-radius: 5px;
  font-weight: bolder;
  letter-spacing: 2px;
  text-transform: uppercase;
}

a.form-link {
  color: #fff;
  display: block;
  margin-top: 1rem;
  text-align: center;
}

// Page transition
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
