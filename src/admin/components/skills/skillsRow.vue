<template lang="pug">
.skills
  .skills__wrap
    .skills-title {{type.name}}
    table.skills-list
      skill-elem(
        v-for="skill in skills"
        :key="skill.id"
        v-if="skill.category === type.id"
        :skill="skill"
        @change="$emit('change', $event)"
        )
      skill-elem(
        :editmode="true"
        :typeId="type.id"
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

<style lang="scss" scoped>
  .skills {
    display: inline-flex;
    flex-wrap: wrap;
  }
  .skills__wrap {
    display: inline-block;
    margin: 0 40px 40px 0;

    @media screen and (max-width: 480px) {
      margin: 0 0 20px 0;
    }
  }
  .skills-title {
    display: inline-block;
    font-weight: 500;
  }
  .skills-list {
    font-weight: 400;
    margin-left: 20px;
  }
</style>
