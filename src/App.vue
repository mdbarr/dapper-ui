<template>
<v-app id="app">
  <v-content>
    <router-view/>
  </v-content>
</v-app>
</template>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background: linear-gradient(to bottom, #1565c0, #0082c8, #0082c8, #1565c0) !important;
}
html {
    width: 100%;
    height: 100%;
    margin: 0;
}

</style>
