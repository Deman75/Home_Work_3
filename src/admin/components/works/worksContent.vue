<template lang="pug">
div
  h2.title Добавить работу
  .row
    input(
      type="text"
      placeholder="Название проекта"
      v-model="newWork.title"
      ).input
  .row
    input(
      type="text"
      placeholder="Технологии"
      v-model="newWork.techs"
      ).input
  .row
    input(
      type="text"
      placeholder="Ссылка на сайт"
      v-model="newWork.link"
      ).input
  .row
    label.add__file
      input(
        type="file"
        v-on:change="renderAndAddFile"
        ).add_input
      .file__icon
        svg.file__icon-img
          use(xlink:href="/assets/images/icons/sprite.svg#add-img")
      .file__title Загрузить картинку
  button(
    type="button"
    @click="addNewWork(newWork)"
    ).button Добавить
  .preview(:style="{backgroundImage: previewPic}")
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      newWork: {
        title: '',
        techs: '',
        photo: {},
        link: ''
      },
      previewPic: ''
    }
  },
  methods: {
    ...mapActions({
      addNewWork: 'works/add',
    }),
    renderAndAddFile(event) {
      const file = event.target.files[0];
      const renderer = new FileReader();

      renderer.readAsDataURL(file);

      renderer.onloadend = () => {
        this.previewPic = `url(${renderer.result})`;
      };
      renderer.oneerror = () => {
        console.log('Не удалось открыть файл');
      };

      this.newWork.photo = file;
    }
  }

}
</script>

<style lang="scss" scoped >
.row {
  margin: 20px 0;
}
.add__file {
  position: relative;
  overflow: hidden;
  color: rgba(0,191,165,.8);
  background-color: rgba(255,255,255, .8);
  cursor: pointer;
  display: inline-flex;
  padding: 5px 10px 5px 5px;
  border-radius: 5px;
  align-items: center;
  transition: color .2s, background-color .2s;
  .file__icon {
    .file__icon-img {
      fill: rgba(0,191,165,8);
    }
  }

  &:hover {
    color: rgba(0,191,165,1);
    background-color: #fff;
    .file__icon {
      .file__icon-img {
        fill: rgba(0,191,165,1);
      }
    }
  }
}
.file__title {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
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

  @media screen and (max-width: 480px) {
    width: 90%;
  }
}
.textarea {
  width: 500px;
  height: 155px;
  overflow: scroll;
}

.file__icon {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.file__icon-img {
  width: 100%;
  height: 100%;
  transition: fill .2s;
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

.preview {
  width: 200px;
  height: 200px;
  background: center center / contain no-repeat;
}
</style>
