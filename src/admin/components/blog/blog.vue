<template lang="pug">
.tabs__content
  app-title(
    title = "Блог"
    )
  blog-content
</template>

<script>
import title from "../title";
import blogContent from "./blogContent"

export default {
  components: {
    appTitle: title,
    blogContent: blogContent
  },
}
</script>

<style lang="scss">

</style>
