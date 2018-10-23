<template lang="pug">
.blog__wrap
  .content__left
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
        v-model="newBlog.date"
        ref="inputDate"
        ).input.date
    .row
      textarea(
        placeholder="Содержание"
        v-model="newBlog.content"
        ).input.textarea
    button(
      type="button"
      @click="editmode ? editExistedBlog(newBlog) : addNewBlog(newBlog)"
      v-text="editmode ? 'Изменить' : 'Добавить'"
      ).button
  .content__right
    ul.blog
      li(
        v-for="blog in blogs"
        :key="blog.id"
        ).blog__item
        h2.blog__title {{blog.title}}
        h3.blog__date(
          v-text="new Date(parseInt(blog.date) * 1000).toLocaleDateString()"
          )
        .blog__text {{blog.content}}
        .button__wrap
          button(
            type="button"
            @click="removeBlog(blog.id)"
            ).button Удалить
          button(
            type="button"
            @click="fillUpFormWithData(blog)"
            ).button Редактировать
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      editmode: false,
      newBlog: {
        id: 0,
        title: '',
        date: '',
        content: ''
      }
    }
  },
  methods: {
    ...mapActions({
      addNewBlog: 'blogs/add',
      removeBlog: 'blogs/remove',
      editBlog: 'blogs/edit'
    }),
    editExistedBlog(newBlog) {
      this.editBlog(newBlog).then(respons => {
        this.editmode = false;
        this.newBlog.id = 0;
        this.newBlog.title = '';
        this.newBlog.date = '';
        this.newBlog.content = '';
        console.log(respons.data);
      })
    },
    fillUpFormWithData(blog) {
      const date = new Date(parseInt(blog.date) * 1000);
      const dateToInputFormat = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
      this.newBlog.id = blog.id;
      this.newBlog.title = blog.title;
      this.newBlog.date = dateToInputFormat;
      this.newBlog.content = blog.content;

      this.editmode = true;
    }
  }
}
</script>

<style lang="scss" scoped >

.blog__wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
  }
}

.content__left {
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
}

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

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
.textarea {
  max-width: 500px;
  width: 100%;
  height: 155px;
  overflow: scroll;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
}

.content__right {
  width: 45%;
  max-height: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
}

.blog {
  height: 100%;
  overflow: scroll;
}
.blog__item {
  background-color: rgba(255,255,255, .5);
  padding: 5px;
  margin: 10px 5px;
  border-radius: 5px;
}
.blog__title {
  margin-bottom: 10px;
}
.blog__date {
  color: $green;
  margin: 0 0 5px 5px;
}
.button__wrap {
  text-align: right;
  margin-top: 10px;
}
.button {
  padding: 5px;
  margin-left: 10px;
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
