<template>
  <div class="home">
    <img alt="Dapper Logo" src="../assets/dapper-logo-black.svg" width="200">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: { HelloWorld }
};
</script>
