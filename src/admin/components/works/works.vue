<template lang="pug">
.tabs__content
  app-title(
    title = "Мои работы"
    )
  works-content
</template>

<script>
import title from "../title";
import worksContent from "./worksContent";

export default {
  components: {
    appTitle: title,
    worksContent
  },
}
</script>

<style lang="scss">

</style>
