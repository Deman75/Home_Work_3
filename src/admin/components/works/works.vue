<template lang="pug">
.tabs__content
  app-title(
    title = "Мои работы"
    )
  works-content(
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
  overflow: hidden;
  height: 90%;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
}
</style>
