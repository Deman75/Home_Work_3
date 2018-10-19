<template lang="pug">
ul.work
  li(
    v-for="work in works"
    :key="work.id"
    ).work__item
    h2.work__title {{work.title}}
    h3.work__tech {{work.techs}}
    .img__wrap
      img(
        :src="`https://webdev-api.loftschool.com/${work.photo}`"
        ).img__pic
    a(
      :href="work.link"
      target="_blank"
      ).work__link {{work.link}}
    .button__wrap
      button(
        type="button"
        @click="removeWork(work.id)"
        ).button Удалить
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    works: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions({
      removeWork: 'works/remove',
    })
  }
}
</script>

<style lang="scss" scoped >
.work {
  border-radius: 5px;
  margin-left: 20px;
  margin-top: 20px;
  overflow: scroll;
  height: 90%;
  width: 90%;

  @media screen and (max-width: 768px) {
    max-height: 700px;
  }
}
.work__item {
  background-color: rgba(255,255,255, .5);
  padding: 5px;
  margin: 10px 5px;
  border-radius: 5px;
}
.work__title {
  margin-bottom: 10px;
}
.work__date {
  color: $green;
  margin: 0 0 5px 5px;
}
.img__wrap {
  width: 90%;
}
.img__pic {
  max-width: 100%;
}
.button__wrap {
  display: flex;
  justify-content: space-between;
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
