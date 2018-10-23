<template lang="pug">
.work__wrap
  .content__left
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
          svg.file__icon-img(version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 34.6 34.5' style='enable-background:new 0 0 34.6 34.5;' xml:space='preserve')
            g
              path(d='M6.8,4.3c1.7,0,3.1,1.3,3.1,3c0,1.7-1.3,3.1-3,3.1c-1.7,0-3.1-1.3-3.1-3c0,0,0,0,0,0C3.8,5.7,5.1,4.3,6.8,4.3C6.8,4.3,6.8,4.3,6.8,4.3z')
              path(d='M17.8,8.9c-0.2-0.6-0.9-0.8-1.4-0.6c-0.3,0.1-0.5,0.3-0.6,0.6l-2.9,4.6c-0.5,0.9-1.6,1.2-2.5,0.7c0,0,0,0-0.1,0c-0.9-0.6-2.1-0.3-2.8,0.5l-2.9,3.4c-0.7,0.8-0.4,1.5,0.7,1.5h16.4c1.1,0,1.6-0.8,1-1.8L17.8,8.9z')
            path(d='M27.5,20.7V1c0-0.6-0.4-1-1-1H1C0.4,0,0,0.4,0,1v25.1c0,0.6,0.4,1,1,1h19.9C21,23.5,23.9,20.7,27.5,20.7zM2.6,2.8h22v17.8h-22V2.8z')
            path(d='M27.5,20.9c-3.5,0-6.4,2.9-6.4,6.4c0,3.5,2.9,6.4,6.4,6.4s6.4-2.9,6.4-6.4v0C33.9,23.8,31,20.9,27.5,20.9zM31.6,27.9h-3.5v3.5h-1.2v-3.5h-3.5v-1.2h3.5v-3.5h1.2v3.5h3.5V27.9z')
            path.st1(d='M34.2,27.4c0,3.7-3,6.7-6.6,6.7s-6.7-3-6.7-6.6c0-3.7,3-6.7,6.6-6.7c0,0,0,0,0,0C31.2,20.7,34.2,23.7,34.2,27.4z')
        .file__title Загрузить картинку
    .preview(:style="{backgroundImage: previewPic}")
    button(
      type="button"
      @click="editmode ? editExistedWork(newWork) : addNewWork(newWork)"
      v-text="editmode ? 'Изменить' : 'Добавить'"
      ).button
  .content__right
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
            ).button.button_prev Удалить
          button(
            type="button"
            @click="fillUpFormWithData(work)"
            ).button.button_prev Редактировать
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
  data() {
    return {
      editmode: false,
      newWork: {
        id: 0,
        title: '',
        techs: '',
        photo: {},
        link: ''
      },
      previewPic: '',
      picNotAdd: false
    }
  },
  methods: {
    ...mapActions({
      addNewWork: 'works/add',
      removeWork: 'works/remove',
      editWork: 'works/edit',
    }),
    editExistedWork(newWork) {
      if (this.picNotAdd) {
        alert('Пожалуйста выберите картинку заново');
        return;
      }
      this.editWork(newWork).then(response => {
        this.editmode = false;
        this.newWork.id = 0;
        this.newWork.title = '';
        this.newWork.techs = '';
        this.newWork.link = '';
        this.newWork.photo = {};
        this.previewPic = '';
        console.log(response);
      })
    },
    fillUpFormWithData(work) {
      this.newWork.id = work.id;
      this.newWork.title = work.title;
      this.newWork.techs = work.techs;
      this.newWork.link = work.link;
      this.picNotAdd = true;
      this.previewPic = `url(https://webdev-api.loftschool.com/${work.photo})`;

      this.editmode = true;
    },
    renderAndAddFile(event) {
      const file = event.target.files[0];
      const renderer = new FileReader();
      this.picNotAdd = false;
      renderer.readAsDataURL(file);
      renderer.onloadend = () => {
        this.previewPic = `url(${renderer.result})`;
      };
      renderer.oneerror = () => {
        console.log('Не удалось открыть файл');
      };
      this.newWork.photo = file;
    },
  }

}
</script>

<style lang="scss" scoped >
.work__wrap {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    overflow: auto;
  }
}

.content__left {
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
}

.row {
  margin: 20px 0;
}
.add__file {
  position: relative;
  overflow: hidden;
  color: rgba(0,191,165,.8);
  background-color: rgba(255,255,255, .3);
  cursor: pointer;
  display: inline-flex;
  padding: 5px 10px 5px 5px;
  border-radius: 5px;
  align-items: center;
  transition: color .2s, background-color .2s;
  .file__icon {
    .file__icon-img {
      fill: rgba(0,191,165,3);
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
  .st1{fill:none;stroke:#FFFFFF;stroke-width:0.91;stroke-miterlimit:10;}
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
  margin: 10px 0;
  background: center center / contain no-repeat;
}


.content__right {
  width: 45%;
  max-height: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 0 auto;
  }
}

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

.button_prev {
  padding: 5px;
  margin-left: 5px;
  width: auto;
}
</style>
