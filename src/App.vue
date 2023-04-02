<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/user">user</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;
  }
</style>
