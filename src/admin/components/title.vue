<template lang="pug">
  h2.subtitle Страница "{{title}}"
</template>

<script>

export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
};

</script>

<style lang="scss">
  .subtitle {
    font-size: 21px;
    font-weight: 500;
    padding: 20px 0;
  }
</style>
