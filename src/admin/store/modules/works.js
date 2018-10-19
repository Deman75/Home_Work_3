const works = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    loadWorks: (state, works) => (state.data = works),
    addNewWork: (state, newWork) => state.data.push(newWork),
    removeWork: (state, workId) =>
      (state.data = state.data.filter(work => work.id !== workId)),
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/works/30').then(response => { // 30 - user id in server
        commit('loadWorks', response.data)
      },
      error => {
          console.log(error);
        }
      );
    },
    add({commit}, newWork) {
      this.$axios.post('/works', newWork, {
        headers: {
          'Content-Type': "application/json"
        }
      }).then(response => {
        commit('addNewWork', response.data)
      },
      error => {
        console.error(error)
        }
      );
    },
    remove({ commit }, workId) {
      this.$axios.delete(`/works/${workId}`).then(response => {
        commit("removeWork", workId)
      }, error => {
        console.error(error);
      })
    }
  }
}
export default works;
