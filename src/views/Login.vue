<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>

      <div class="dapper-logo"><img src="../assets/dapper-logo-white.svg"></div>
      <div class="dapper-title">
        {{ title }}
      </div>
      <v-form>
        <v-text-field dark prepend-icon="mdi-account" name="dapper-username" label="Username" type="text" browser-autocomplete="new-password"></v-text-field>
        <v-text-field dark prepend-icon="mdi-lock" name="dapper-password" label="Password" type="password" browser-autocomplete="new-password"></v-text-field>
        <div>
          <v-btn class="dapper-login" color="#fff" light @click.native="login()">
            Login
            <v-icon right dark>mdi-login-variant</v-icon>
          </v-btn>
        </div>
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
    return {
      state: store.state,
      title: 'Dapper Identity Manager'
    };
  },
  methods: { login () {
    this.state.loggedIn = true;
    this.$router.replace({ name: 'dashboard' });
  } }
};
</script>

<style scoped>
.mdi-dapper::before {
    content: '';
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(../assets/dapper-logo-black.svg);
    background-size: 28px 28px !important;
    width: 28px !important;
    height: 28px !important;
}
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
    height: 64px;
    top: 10px;
    left: 80px;
    padding-top: 4px;
    color: #fff;
    font-size: 28px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
}
.dapper-title::after {
    content: '';
    position: absolute;
    bottom: 16px;
    left: 0;
    height: 2px;
    width: 100%;
    background: #fff;
    background: linear-gradient(to left, transparent 0%,#fff 50%,transparent 100%);
}
.dapper-login {
    float: right;
}
</style>
