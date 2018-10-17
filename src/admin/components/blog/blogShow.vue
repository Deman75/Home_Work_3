<template lang="pug">
ul.blog
  li(
    v-for="blog in blogs"
    :key="blog.id"
    ).blog__item
    h2.blog__title {{blog.title}}
    h3.blog__date {{blog.date}}
    .blog__text {{blog.content}}
    .button__wrap
      button(
        type="button"
        @click="removeBlog(blog.id)"
        ).button Удалить
      //- button(
      //-   type="button"
      //-   @click=""
      //-   ).button Редактировать
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
  methods: {
    ...mapActions({
      removeBlog: 'blogs/remove',
    })
  }
}

</script>

<style lang="scss" scoped>

.blog {
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  overflow: scroll;
  height: 90%;
  width: 90%;
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
