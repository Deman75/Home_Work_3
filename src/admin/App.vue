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

// const data = [
//   {id: 1, title: 'Html', percent: 20, category: 0 },
//   {id: 2, title: 'Php', percent: 32, category: 1 },
//   {id: 3, title: 'CSS', percent: 14, category: 0 },
//   {id: 4, title: 'Node.js', percent: 54, category: 1 },
//   {id: 5, title: 'Mongo', percent: 32, category: 1 },
//   {id: 6, title: 'Git', percent: 87, category: 2 },
//   {id: 7, title: 'Gulp', percent: 43, category: 2 }
// ];

export default {
  components: {
    appHeader: header,
    tabs: tabs,
    skills: skills
  },
  // data() {
  //   return {
  //     skills: data
  //   }
  // },
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
  
  .wrapper {
    background: url('../assets/images/bg/welcome_bg.jpg') center top no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    min-height: 650px;
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
  }
  
</style>
