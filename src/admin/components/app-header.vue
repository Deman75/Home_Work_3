<template lang="pug">
.header__component
  h2.title Панель администрирования
  a(
    @click="logout"
    href="../index.html"
    ).link-back Вернуться на сайт
</template>

<script>
  import axios from "axios";

  export default {
    methods: {
      logout: function (event) {
        event.preventDefault();
        axios.post('/logout').then(() => {
          window.location.href="../index.html";
        }, error => {
          console.error(error);
        })
        console.log("logout");
      }
    }
  }
</script>

<style lang="scss" scoped>
  .header__component {
    display: flex;
    justify-content: space-between;
    background-color: $green;
    padding: 28px;
  }
  .title {
    font-size: 28px;
    color: #fff;
    font-weight: 500;
  }
  .link-back {
    color: rgba(255,255,255, .7);
    transition: color .2s;
    padding: 10px 0;
    font-weight: 500;

    &:hover {
      color: rgba(255,255,255, 1);
    }
  }
</style>
