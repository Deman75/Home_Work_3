const blog = {
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/posts/30').then(response => { // 30 - user id in server
        console.log(response);
      },
      error => {
          console.log(error);
        }
      );
    },
    add({commit}, newBlog) {
      this.$axios.post('/posts', newBlog).then(response => {
        console.log(response.data)
      },
      error => {
        console.error(error)
        }
      );
    },
  }
}
export default blog;
