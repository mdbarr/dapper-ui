 <template>
<v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <div class="dapper-logo"><img src="../assets/logo.svg"></div>
          <v-toolbar dark dense class="dapper-toolbar">
            <v-toolbar-title>
              Dapper LDAP + Radius
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="mdi-account" name="dapper-login" label="Login" type="text" browser-autocomplete="new-password"></v-text-field>
              <v-text-field prepend-icon="mdi-lock" name="dapper-password" label="Password" type="password" browser-autocomplete="new-password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="#005AA7" dark @click.native="login()">Login</v-btn>
          </v-card-actions>
        </v-card>
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
    width: 100px;
    height: 100px;
    top: -92px;
}
.dapper-title {
    height: 32px;
    padding-left: 8px;
    padding-top: 4px;
}
.dapper-toolbar {
    background-image: radial-gradient(#005AA7, #1565C0);
}
</style>
