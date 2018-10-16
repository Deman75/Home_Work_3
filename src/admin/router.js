import Vue from "vue";
import VueRouter from "vue-router";
import axios from "axios";

Vue.use(VueRouter);

const guard = axios.create({
  baseURL: 'https://webdev-api.loftschool.com'
});

import skills from "./components/skills/skills";
import blog from "./components/blog/blog";
import works from "./components/works/works";

const routes = [
  {
    path: '/',
    component: skills
  },
  {
    path: '/blog',
    component: blog
  },
  {
    path: '/works',
    component: works
  }
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  guard
    .get('/user', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
  })
    .then(response => {
      const wrap = document.querySelector('.wrapper'); //?

      wrap.style='display: block';
      next();
  })
    .catch(error => {
      localStorage.removeItem('token');
      window.location.href="../index.html";
    });
});

export default router;
