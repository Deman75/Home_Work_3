import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

const routes = [];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  guard
    .get('/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
  })
    .then(response => {
      next();
  })
    .catch(error => {
      localStorage.removeItem('token');
      window.location.href="../index.html";
    });
});

export default router;
