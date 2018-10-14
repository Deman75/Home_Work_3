<template lang="pug">
.skills__wrap
  app-title(
    title = "Мои работы"
    )
  skills-row(
    v-for="type in types"
    :key="type.id"
    :type="type"
    :skills="skills"
    )
</template>

<script>

  import title from "./title";
  import skillsRow from "./skillsRow";
  
  export default {
    components: {
      appTitle: title,
      skillsRow
    },
    props: {
      skills: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        types: [
          {id: 0, name: 'Frontend'},
          {id: 1, name: 'Backend'},
          {id: 2, name: 'WorkFlow'},
        ]
      }
    }
  };
</script>

<style lang="scss">

  .skills__wrap {
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }
  
</style>
