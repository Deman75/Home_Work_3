<template lang="pug">
div
  h2.title Добавить запись
  .row
    input(
      type="text"
      placeholder="Название"
      v-model="newBlog.title"
      ).input
  .row
    input(
      type="date"
      placeholder="Дата"
      v-model.string="newBlog.date"
      ).input.date
  .row
    textarea(
      placeholder="Содержание"
      v-model="newBlog.content"
      ).input.textarea
  button(
    type="button"
    @click="addNewBlog(newBlog)"
    ).button Добавить
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newBlog: {
        title: '',
        date: '',
        content: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addNewBlog: 'blogs/add',
    })
  }
}
</script>

<style lang="scss" scoped >
.row {
  margin: 20px 0;
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
