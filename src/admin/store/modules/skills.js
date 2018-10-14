const skills = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    loadSkills: (state, skills) => state.data = skills
  },
  actions: {
    fetch({commit}) { // придуманое имя, может быть любым
      this.$axios.get('/skills/1').then(response => {
        commit('loadSkills', response.data)
      },
      error =>{
        console.error(error);
      })
    }
  }
}
export default skills;
