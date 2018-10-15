<template lang="pug">
  #root
    .header
      app-header
    .tabs
      tabs
    .content
      skills(
        :skills= "skills"
      )
</template>

<script>
import header from "./components/app-header";
import tabs from "./components/tabs";
import skills from "./components/skills";
import { mapActions, mapState } from "vuex";

export default {
  components: {
    appHeader: header,
    tabs: tabs,
    skills: skills
  },
  computed: {
    ...mapState('skills', {
      skills: state => state.data
    })
  },
  created(){
    this.fetchSkills();
  },
  methods: {
    ...mapActions({
      fetchSkills: "skills/fetch"
    })
  }
};

</script>

<style lang="scss">

  body, html {
    height: 100%;
    margin: 0;
  }

  body {
    font-size: 16px;
    line-height: 1.42;
    color: #455a64;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    font-family: 'Roboto', Helvetica, sans-serif;
    overflow: auto;
  }
  * {
    box-sizing: border-box;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  button[type="button"] {
    cursor: pointer;
    border: none;

    &:focus{
      outline: none;
    }
    &:active {
      border: none;
    }
  }

  .wrapper {
    background: url('../assets/images/bg/welcome_bg.jpg') center top no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: 650px;
    overflow: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  .content {
    background-color: rgba(255,255,255, .85);
    display: block;
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 20px;
  }

</style>
