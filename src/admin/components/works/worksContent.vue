<template lang="pug">
div
  h2.title Добавить работу
  .row
    input(
      type="text"
      placeholder="Название проекта"
      v-model="newWork.title"
      ).input
  .row
    input(
      type="text"
      placeholder="Технологии"
      v-model="newWork.techs"
      ).input
  .row
    input(
      type="text"
      placeholder="Ссылка на сайт"
      v-model="newWork.link"
      ).input
  .row
    label.add__file
      input(
        type="file"
        /* v-on:change="addFile()" */
        ref="myFiles"
        multiple
        ).add_input
      .file__title Загрузить картинку
  button(
    type="button"
    @click="addFile"
    ).button Добавить
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newWork: {
        title: '',
        techs: '',
        photo: '',
        link: ''
      },
      formSend: ''
    }
  },
  methods: {
    ...mapActions({
      addNewWork: 'works/add',
    }),
    addFile() {
      let formData = new FormData();

      formData.append('title', this.newWork.title);
      formData.append('techs', this.newWork.techs);
      formData.append('photo', this.$refs.myFiles.files[0]);
      formData.append('link', this.newWork.link);

      this.addNewWork(formData);
      console.log(formData);
    }
  }

}
</script>

<style lang="scss" scoped >
.row {
  margin: 20px 0;
}
.add__file {
  position: relative;
  overflow: hidden;
  color: $green;
  cursor: pointer;
}
.file__title {
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    width: 0;
    height: 1px;
    background-color: $green;
    transition: width .2s;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
}
.add_input {
  position: absolute;
  left: -1000px;
}
.input {
  font-size: 16px;
  padding: 16px;
  height: 46px;
  width: 302px;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;
  &::placeholder {
    font-weight: 300;
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
  }
}
.textarea {
  width: 500px;
  height: 155px;
  overflow: scroll;
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
}
</style>
