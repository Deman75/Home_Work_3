<template lang="pug">
tr(v-if="editmode === false")
  td.skills__name {{skill.title}}
  td.percent
    input(
      type="text"
      :placeholder="skill.percents"
      @input="onChange"
      v-model="value"
      ).skills__input.skills__percent
    span %
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
    ).skills__input.skills__percent
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
      value: '',
      newSkill: {
        title: "",
        percents: 0,
        category: this.typeId
      },
    }
  },
  watch: {
    'skill.percents'(newVal){
      if (newVal == this.value) this.value = ''
    }
  },
  methods: {
    ...mapActions({
      addNewSkill: 'skills/add',
      removeSkill: 'skills/remove'
    }),
    onChange(){
      this._$_$timeoutId && clearTimeout(this._$_$timeoutId)
      this._$_$timeoutId = setTimeout(() => {
        this.$emit('change', {
          ...this.skill,
          percents: this.value
        })
      }, 300)
    }
  }
};
</script>

<style lang="scss" scoped>
  .skills__name {
    display: flex;
    align-items: center;
    height: 33px;
  }
  .percent {
    text-align: right;
    padding-right: 10px;

    @media screen and (max-width: 480px) {
      width: 63px;
    }
  }
  .skills__percent {
    display: inline-block;
    width: 47px;
    height: 33px;
    padding: 10px 0;
    text-align: center;

    @media screen and (max-width: 480px) {
      width: 30px;
    }
  }
  .add__title {
    padding: 0 0 0 10px;

    @media screen and (max-width: 480px) {
      width: 100%;
    }
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
      width: 85px;
      padding: 5px 0;
      font-size: 14px;
    }
  }
</style>
