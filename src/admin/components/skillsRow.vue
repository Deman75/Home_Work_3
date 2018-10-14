<template lang="pug">
.skills
  .skills-title {{type.name}}
  table.skills-list
    skill-elem(
      v-for="skill in skills"
      :key="skill.id"
      v-if="skill.category === type.id"
      :skill="skill"
      )
    skill-elem(
      :editmode="true"
      )
</template>

<script>
import skillElem from './skillElem';

export default {
  components: {
    skillElem
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    type: {
      type: Object,
      default: () => {}
    },
  }
};
</script>
