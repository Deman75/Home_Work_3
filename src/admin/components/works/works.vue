<template lang="pug">
.tabs__content
  .content__left
    app-title(
      title = "Мои работы"
      )
    works-content
  .content__right
    works-show(
      :works="works"
      )
</template>

<script>
import title from "../title";
import worksContent from "./worksContent";
import worksShow from "./worksShow";

export default {
  components: {
    appTitle: title,
    worksContent,
    worksShow
  },
  props: {
    works: {
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

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}
.content__right {
  height: 70%;
  width: 40%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 90%
  }
}
.content__right {
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 90%
  }
}
</style>
