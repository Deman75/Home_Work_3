import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import skills from './modules/skills';
import blogs from './modules/blogs';
import works from './modules/works';

export default new Vuex.Store({
  modules: {
    skills,
    blogs,
    works
  }
});
