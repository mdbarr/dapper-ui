<template>
<v-container fluid fill-height>
  <v-layout align-center justify-center>
    <v-flex xs12 sm8 md4>
      <img alt="Dapper Logo" src="../assets/dapper-logo-black.svg" width="200">
      <div class="dapper-title-black headline">{{ title }} {{ subtitle }}</div>

      <v-form class="dapper-form" v-if="!state.loggedIn">
        <v-text-field light prepend-icon="mdi-account" name="dapper-username" label="Username" type="text" browser-autocomplete="new-password"></v-text-field>
        <v-text-field light prepend-icon="mdi-lock" name="dapper-password" label="Password" type="password" browser-autocomplete="new-password"></v-text-field>
        <div>
          <v-btn class="dapper-login" color="#fff" light @click.native="login()">
            Login
            <v-icon right dark>mdi-login-variant</v-icon>
          </v-btn>
        </div>
      </v-form>
      <v-form class="dapper-form" v-else-if="!state.authorized">
        <v-text-field light prepend-icon="mdi-qrcode" name="dapper-username" label="Multi-factor authorization code" type="text" browser-autocomplete="new-password"></v-text-field>
        <div>
          <v-btn class="dapper-login" color="#fff" light @click.native="mfa()">
            Submit
            <v-icon right dark>mdi-checkbox-marked-outline</v-icon>
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
      title: 'Dapper',
      subtitle: 'Identity Manager'
    };
  },
  methods: {
    login () {
      this.state.loggedIn = true;
    },
    mfa () {
      this.state.authorized = true;
      this.$router.replace({ name: 'dashboard' });
    }
  }
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
.dapper-title-black {
    margin-top: -54px;
    margin-bottom: 10px;
    color: #000;
    text-transform: uppercase;
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
    top: 2px;
    left: 80px;
    padding: 4px 8px 8px 8px;
    color: #fff;
    font-size: 28px;
    letter-spacing: 2px;
    font-weight: 700;
    font-style: italic;
    text-transform: uppercase;
}
.dapper-title::after {
    content: '';
    position: absolute;
    bottom: 22px;
    left: 0;
    height: 2px;
    width: 100%;
    background: #fff;
    background: linear-gradient(to left, transparent 0%,#fff 50%,transparent 100%);
}
.dapper-subtitle {
    font-size: 8px;
}
.dapper-login {
    float: right;
}
.dapper-form {
    height: 200px;
}
</style>
