import Vue from "vue";
import App from "./App.vue";
import '../assets/styles/layout/fonts.scss';
import store from "./store";
import router from "./router";
import axiosRequest from './request';

store.$axios = axiosRequest;

new Vue({
  el: "#admin-app",
  router,
  store,
  render: h => h(App)
});
