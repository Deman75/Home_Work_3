import Vue from 'vue';


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
    index: Number
  },
  data() {
    return {
      prevButtonWorks: [],
      nextButtonWorks: [],
    }
  },
  created() {
    this.prevButtonWorks = this.transformWorksForButton('prev');
    this.nextButtonWorks = this.transformWorksForButton('next');
  },
  methods: {
    slide(direction) {
      this.$emit('slide', direction);
    },
    transformWorksForButton(buttonDirecrion) {
      const worksArray = [...this.works];
      const lastItem = worksArray[worksArray.length - 1];
      switch (buttonDirecrion) {
        case "prev":
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;

        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
      }
      return worksArray;
    }
  }
};



new Vue ({
  el: "#slider-component",
  components: {
    info, display, buttons
  },
  data() {
    return {
      works: [],
      currentIndex: 0
    }
  },
  computed: {
    currentWork() {
      return this.works[this.currentIndex]
    }
  },
  watch: {
    currentIndex(value) {
      this.loopCurrentIndex(value)
    }
  },
  created() {
    const data = require("../../../data/works.json");
    this.works = data;
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
      console.log(this.currentIndex);
    }
  },
  template: "#slider-root",
});
