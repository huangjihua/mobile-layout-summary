<template>
    <div class='nav'>
      <router-link to='/'> rem</router-link>
      <router-link to='/vw'>vw </router-link>
      <router-link to='/vw_rem'>vw and  rem</router-link>
    </div>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.nav a{
  padding: 0 20px;
}
</style>
