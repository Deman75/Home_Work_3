<template lang="pug">
.tabs__content
  .content__left
    app-title(
      title = "Блог"
      )
    blog-content
  .content__right
    blog-show(
      :blogs="blogs"
      )
</template>

<script>
import title from "../title";
import blogContent from "./blogContent";
import blogShow from "./blogShow";

export default {
  components: {
    appTitle: title,
    blogContent: blogContent,
    blogShow: blogShow
  },
  props: {
    blogs: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<style lang="scss" scoped>
.tabs__content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.content__right {
  height: 70%;
  width: 40%;
  overflow: hidden;
}
.content__right {
  width: 60%;
}
</style>
