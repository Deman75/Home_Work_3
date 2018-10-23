<template lang="pug">
.tabs__content
  app-title(
    title = "Блог"
    )
  blog-content(
    :blogs="blogs"
    )
</template>

<script>
import title from "../title";
import blogContent from "./blogContent";

export default {
  components: {
    appTitle: title,
    blogContent: blogContent,
  },
  props: {
    blogs: {
      type: Array,
      default: () => []
    },
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.tabs__content {
  overflow: hidden;
  height: 90%;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
}

</style>
