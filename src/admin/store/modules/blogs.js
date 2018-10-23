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
    editBlog: (state, editedBlog) => state.data = state.data.map(blog => {
      return blog.id === editedBlog.id
        ? editedBlog
        : blog
    })
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
      console.log(newBlog);
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
    },
    edit({ commit }, newBlog) {
      return this.$axios.post(`/posts/${newBlog.id}`, newBlog).then(response => {
        commit("editBlog", response.data.post);

        return response;
      }).catch(error => {
        console.log(error);
        return Promise.reject(error);
      })
    }
  }
}
export default blogs;
