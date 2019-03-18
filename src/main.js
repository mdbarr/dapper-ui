import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.min.css';

Vue.use(Vuetify, {
  iconfont: 'mdi',
  theme: { primary: '#000' }
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => { return h(App); }
}).$mount('#app');
