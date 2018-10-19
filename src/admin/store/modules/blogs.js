const blogs = {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    loadBlogs: (state, blogs) => (state.data = blogs),
    addNewBlog: (state, newBlog) => state.data.push(newBlog),
    removeBlog: (state, blogId) =>
      (state.data = state.data.filter(blog => blog.id !== blogId)),
  },
  actions: {
    fetch({commit}) {
      this.$axios.get('/posts/30').then(response => { // 30 - user id in server
        commit('loadBlogs', response.data)
      },
      error => {
          console.log(error);
        }
      );
    },
    add({commit}, newBlog) {
      this.$axios.post('/posts', newBlog).then(response => {
        commit('addNewBlog', response.data)
      },
      error => {
        console.error(error)
        }
      );
    },
    remove({ commit }, blogId) {
      this.$axios.delete(`/posts/${blogId}`).then(response => {
        commit("removeBlog", blogId)
      }, error => {
        console.error(error);
      })
    }
  }
}
export default blogs;
