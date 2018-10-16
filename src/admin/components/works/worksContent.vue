<template lang="pug">
div
  h2.title Добавить работу
  .row
    input(
      type="text"
      placeholder="Название проекта"
      ).input
  .row
    input(
      type="text"
      placeholder="Технологии"
      ).input
  .row
    label.add__file
      input(
        type="file"
        ).add_input
      .file__title Загрузить картинку
  button(
    type="button"
    ).button Добавить
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped >
.row {
  margin: 20px 0;
}
.add__file {
  position: relative;
  overflow: hidden;
  color: $green;
  cursor: pointer;
}
.file__title {
  display: inline-flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: '';
    width: 0;
    height: 1px;
    background-color: $green;
    transition: width .2s;
  }

  &:hover {
    &:after {
      width: 100%;
    }
  }
}
.add_input {
  position: absolute;
  left: -1000px;
}
.input {
  font-size: 16px;
  padding: 16px;
  height: 46px;
  width: 302px;
  border: none;
  border-radius: 5px;
  outline: none;
  resize: none;
  &::placeholder {
    font-weight: 300;
    font-size: 16px;
  }
}
.textarea {
  width: 500px;
  height: 155px;
  overflow: scroll;
}
.button {
  padding: 10px;
  width: 110px;
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
