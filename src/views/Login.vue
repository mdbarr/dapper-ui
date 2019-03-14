<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>

      <div class="dapper-logo"><img src="../assets/logo.svg"></div>
      <div class="dapper-title">
        Dapper LDAP + Radius
      </div>
      <v-form>
        <v-text-field dark prepend-icon="mdi-account" name="dapper-username" label="Username" type="text" browser-autocomplete="new-password"></v-text-field>
        <v-text-field dark prepend-icon="mdi-lock" name="dapper-password" label="Password" type="password" browser-autocomplete="new-password"></v-text-field>
        <v-btn color="#fff" light @click.native="login()">Login</v-btn>
      </v-form>

    </v-flex>
  </v-layout>

</v-container>
</template>

<script>
import store from '../store';
export default {
  name: 'Login',
  data () {
    return { state: store.state };
  },
  methods: { login () {
    this.state.loggedIn = true;
    this.$router.replace({ name: 'dashboard' });
  } }
};
</script>

<style scoped>
.dapper-logo {
    position: absolute;
    width: 64px;
    height: 64px;
    top: 0px;
    left: 10px;
    padding: 0;
    margin: 0;
}
.dapper-title {
    position: absolute;
    height: 32px;
    top: 8px;
    left: 80px;
    padding-left: 8px;
    padding-top: 4px;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
}
</style>
