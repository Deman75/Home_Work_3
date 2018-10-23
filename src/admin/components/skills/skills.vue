<template lang="pug">
div
  .tabs__content
    app-title(
      title = "Обо мне"
      )
    skills-row(
      v-for="type in types"
      :key="type.id"
      :type="type"
      :skills="skills"
      @change="onChange"
      )
  button(
    type="button"
    @click="saveAllChanges"
    ).button Сохранить
</template>

<script>
/*eslint-disable*/
  import title from "../title";
  import skillsRow from "./skillsRow";
  import { mapActions, mapState } from "vuex";

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
        ],
      }
    },
    created(){
    console.log(this.changedSkills)
    },
    computed: {
      ...mapState('skills',[
        'changedSkills'
      ])
    },
    methods: {
      ...mapActions({
        saveAllChange: 'skills/save',
        addChangedSkill: 'skills/addChangedSkill',
        saveChangedSkills: 'skills/saveChangedSkills'
      }),
      onChange( changedSkillObject ){
        this.addChangedSkill(changedSkillObject)
      },
      saveAllChanges(){
        this.saveChangedSkills()
          .then(console.log)
      }
    },
  };
</script>

<style lang="scss" scoped>

  .tabs__content {
    width: 100%;
    margin-bottom: 40px;

    @media screen and (max-width: 480px) {
      width: 100%;
      margin-bottom: 0;
    }
  }
  .button {
    padding: 10px;
    width: 110px;
    border-radius: 5px;
    background-color: rgba(0,191,165,.8);
    color: #fff;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
      background-color: rgba(0,191,165,1);
    }

    @media screen and (max-width: 480px) {
      margin-bottom: 20px;
      content: '';
    }
  }

</style>
