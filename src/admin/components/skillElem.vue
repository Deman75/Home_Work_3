<template lang="pug">
tr(v-if="editmode === false")
  td.skills__name {{skill.title}}
  td.percent
    input(
      type="text"
      :placeholder="skill.percents"
      ).skills__input.skills__percent
    | %
  td
    button(
      type="button"
      @click="removeSkill(skill.id)"
      ).button Удалить
tr(v-else)
  td
    input(
      type="text"
      placeholder="Новый скил"
      v-model="newSkill.title"
    ).skills__input.add__title
  td
    input(
      type="text"
      placeholder="0-100"
      v-model="newSkill.percents"
    ).skills__input.add__percent
    span %
  td
    button(
      type="button"
      @click="addNewSkill(newSkill)"
      ).button Добавить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    skill: {
      type: Object,
      default: () => {},
    },
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    },
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: 0,
        category: this.typeId
      }
    }
  },
  methods: {
    ...mapActions({
      addNewSkill: 'skills/add',
      removeSkill: 'skills/remove'
    })
  }
};
</script>

<style lang="scss">
  .skills__name {
    display: flex;
    align-items: center;
    height: 33px;
  }
  .percent {
    text-align: right;
    padding-right: 10px;
  }
  .skills__percent {
    display: inline-block;
    width: 47px;
    height: 33px;
    padding: 10px 0;
    text-align: center;
  }
  .add__title {
    padding: 0 0 0 10px;
  }
  .add__percent {
    width: 47px;
    height: 33px;
    padding: 10px 0;
    text-align: center;
  }
  .skills__input {
    border: none;
    height: 33px;
    margin-right: 10px;
    font-weight: 300;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
    color: $text-color;
    &::placeholder {
      font-weight: 400;
      font-size: 16px;
    }
  }
  .skill__button {

  }
</style>
