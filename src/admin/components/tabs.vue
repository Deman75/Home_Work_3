<template lang="pug">
.tabs__list
  router-link(
    v-for="tab in tabs"
    :key="tab.tabName"
    :to="tab.href"
    ).tabs__item {{ tab.tabName }}
</template>

<script>
  export default {
    data() {
      return {
        tabs: [
          {tabName: 'Обо мне', href: '/'},
          {tabName: 'Блог', href: '/blog'},
          {tabName: 'Мои работы', href: '/works'},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .tabs__list {
    background-color: #f0efe9;
    display: flex;

    @media screen and (max-width: 480px) {
      flex-direction: column;
    }
  }

  .tabs__item {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: $green;
    width: 180px;
    height: 60px;
    border-right: 2px solid rgba(255,255,255, .7);
    transition: background-color .2s;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      background-color: rgba(255,255,255, .5);
    }

    @media screen and (max-width: 480px) {
      width: 100%;
      border-bottom: 2px solid #fff;

      &:last-child {
        border-bottom: none;
      }
    }
  }

  .router-link-exact-active {
    background-color: #fff;
    cursor: default;

    &:hover {
      background-color: #fff;
    }
  }
</style>
