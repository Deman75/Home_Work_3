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
    editWork: (state, editedWork) => state.data = state.data.map(work => {
      return work.id === editedWork.id
        ? editedWork
        : work
    })
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
      const formData = new FormData();

      Object.keys(newWork).forEach(key => formData.append(key, newWork[key]));

      this.$axios.post('/works', formData).then(response => {
        commit('addNewWork', response.data)
      },
      error => {
        console.error(error);
      });
    },
    remove({ commit }, workId) {
      this.$axios.delete(`/works/${workId}`).then(response => {
        commit("removeWork", workId)
      }, error => {
        console.error(error);
      })
    },
    edit({ commit }, newWork) {
      const formData = new FormData();

      Object.keys(newWork).forEach(key => formData.append(key, newWork[key]));

      console.log(newWork);
      return this.$axios.post(`/works/${newWork.id}`, formData).then(response => {
        commit('editWork', response.data.work);
        return response;
      })
    },
  }
}
export default works;
