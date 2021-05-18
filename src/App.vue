<template>
  <p>
    <router-link to="/">home</router-link>
    <router-link to="/login">login</router-link>
  </p>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>