import Vue from 'vue';
import axios from 'axios';

const info = {
  template: "#slider-info",
  props: {
    work: Object
  }
};
const display = {
  template: "#slider-display",
  props: {
    work: Object
  }
};
const buttons = {
  template: "#slider-buttons",
  props: {
    works: Array,
    index: Number,
    prevObj: {
      type: Object,
      default: () => {}
    },
    nextObj: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      prevButtonWorks: [],
      nextButtonWorks: [],
    }
  },
  methods: {
    slide(direction) {
      this.$emit('slide', direction);
    },
  }
};



new Vue ({
  el: "#slider-component",
  components: {
    info,
    display,
    buttons
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      const emptyWork = {
        title: "",
        techs: "",
        link: "",
        photo: ""
      }
      if (this.works[this.currentIndex] === undefined) return emptyWork;
      return this.works[this.currentIndex];
    },
    prevIndex(){
      let prevIndex = this.currentIndex - 1
      if (prevIndex < 0) {
        prevIndex = this.works.length - 1
      }
      return prevIndex
    },
    nextIndex(){
      let nextIndex = this.currentIndex + 1
      if (nextIndex > this.works.length - 1) {
        nextIndex = 0
      }
      return nextIndex
    }
  },
  watch: {
    currentIndex(value) {
      this.loopCurrentIndex(value)
    }
  },
  created() {
    axios.get('https://webdev-api.loftschool.com/works/30').then(response => {
      this.works = response.data;
    })

  },
  methods: {
    loopCurrentIndex(value){
      const worksLength = this.works.length - 1
      if (value > worksLength) this.currentIndex = 0
      if (value < 0 ) this.currentIndex = worksLength
    },
    handleSlide(direction) {
      switch (direction) {
        case "prev":
          this.currentIndex--
          break;

        case "next":
          this.currentIndex++
          break;
      }
    }
  },
  template: "#slider-root",
});
