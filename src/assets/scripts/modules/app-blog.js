import Vue from 'vue';
import axios from 'axios';

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})


new Vue ({
  el: "#blog-component",

  data() {
    return {
      posts: [],
      visibleIndex: 0,
      clickAnimation: false,
    }
  },
  updated() {
    this.activeFirstElem()
  },
  created() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('wrapper_overflow_visible');

    axios.get('https://webdev-api.loftschool.com/posts/30').then(response => {
      let blogsBeforeChangeDate = response.data;
      const options = {year: 'numeric', month: 'numeric', day: 'numeric'};
      for (let i = 0; i < blogsBeforeChangeDate.length; i++) {
        let date = new Date(parseInt(blogsBeforeChangeDate[i].date)*1000);
        date = date.toLocaleDateString('ru', options);
        blogsBeforeChangeDate[i].date = date;
      }
      this.posts = blogsBeforeChangeDate;
    })
  },
  methods: {
    handleScroll: function () {
      if (this.posts.length < 1) return; //выходим если данные с сервера еще не пришли.
      const length = this.posts.length;
      const activeBtnClass = 'content__menu-item_active';

      if (this.$refs.blogItems[0].getBoundingClientRect().top < 10) {
        for (let i = 0; i < length; i++) {
          const top = this.$refs.blogItems[i].getBoundingClientRect().top - 10;
          const height = this.$refs.blogItems[i].getBoundingClientRect().height;
          if (top < 0 && Math.abs(top) < height && this.clickAnimation === false) {
            this.visibleIndex = i;
            this.$refs.menuItems.forEach((item) => {
              item.classList.remove(activeBtnClass);
            })
            this.$refs.menuItems[this.visibleIndex].classList.add(activeBtnClass);
            break;
          }
        }
      }
    },
    scrollToBlog: function (title) {
      for (let i = 0; i < this.posts.length; i++) {
        if (this.posts[i].title === title) {

          this.$refs.menuItems.forEach((item) => {
            item.classList.remove('content__menu-item_active');
          })

          this.$refs.menuItems[i].classList.add('content__menu-item_active');

          this.smoothScrollingToBlog(this.$refs.blogItems[i]);
          break;
        }
      }
    },

    smoothScrollingToBlog: function (elem) {
      const needPosTop = elem.getBoundingClientRect().top;
      console.log(needPosTop);
      const coord = needPosTop;
      let windowY = window.pageYOffset;
      let start = null; //
      const speed = .7;
      this.clickAnimation = true;
      console.log(this.clickAnimation);

      const setClickAnimation = () => {
        setTimeout(() => {
          this.clickAnimation = false;
          console.log(this.clickAnimation);
        },100)
      }

      requestAnimationFrame(step); // requestAnimationFrame() – встроенный метод JavaScript для плавной анимации. Функция step будет вызвана, когда придёт время обновить анимацию на следующей перерисовке.

      function step(time) {
        if (start === null)  start = time;
        let progress = time - start;
        let coordY;

          if (coord < 0) {
            coordY = Math.max(windowY - progress / speed, windowY + coord)
          } else {
            coordY = Math.min(windowY + progress / speed, windowY + coord);
          }

        window.scrollTo(0, coordY); // Скроллим страницу на coordY пикселей по вертикали и 0 по горизонтали

        if (coordY != windowY + coord) {
          requestAnimationFrame(step); // Если еще не докрутили страницу до нужной статьи, то снова вызываем метод
        } else {
          setClickAnimation(); // Как только доскроллили до нужной статьи, флаг отключаем
        }
      }
    },
    activeFirstElem(){
      this.$refs.menuItems[this.visibleIndex].classList.add('content__menu-item_active');
    }
  },

  template: "#blog-root"
});
