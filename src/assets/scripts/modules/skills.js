import Vue from 'vue';
import axios from 'axios';

const skill = {
  template: "#skill",
  props: {
    title: String,
    percentage: Number
  },
  methods: {
    drowCircleDependsPercentage() {
      const circle = this.$refs["circle"];
      const percent = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const requiredDashoffset = (percent / 100) * (100 - this.percentage);
      circle.style.strokeDashoffset = requiredDashoffset;
    }
  },
  mounted() {
    this.drowCircleDependsPercentage()
  }
};


const skillsRow = {
  template: "#skills-item",
  props: {
    skills: Array,
    type: Object
  },
  components: {
    skill
  }
};


new Vue ({
  el: "#skills-component",
  components: {
    skillsRow
  },
  data() {
    return {
      skills: [],
      types: [
        {id: 0, name: 'Frontend'},
        {id: 1, name: 'Backend'},
        {id: 2, name: 'WorkFlow'},
      ]
    };
  },
  created() {
    axios.get('https://webdev-api.loftschool.com/skills/30').then(response => {
      this.skills = response.data;
    })
  },
  template: "#skills-list"
});
