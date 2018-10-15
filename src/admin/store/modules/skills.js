const skills = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    loadSkills: (state, skills) => (state.data = skills),
    addNewSkill: (state, newSkill) => state.data.push(newSkill),
    removeSkill: (state, skillId) =>
      (state.data = state.data.filter(skill => skill.id !== skillId))
  },
  actions: {
    fetch({commit}) { // придуманое имя, может быть любым
      this.$axios.get('/skills/30').then(response => {
        commit('loadSkills', response.data)
      },
      error =>{
        console.error(error); // Нужно сделать всплывашкой.
        }
      );
    },
    add({ commit }, skill) {
      this.$axios.post('/skills', skill).then(response => {
        commit('addNewSkill', response.data)
      },
      error => {
        console.error(error);
      })
    },
    remove({ commit }, skillId) {
      this.$axios.delete(`/skills/${skillId}`).then(response => {
        commit("removeSkill", skillId)
      }, error => {
        console.error(error);
      })
    }
  }
}
export default skills;
