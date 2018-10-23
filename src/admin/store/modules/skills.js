const skills = {
  namespaced: true,
  state: {
    data: [],
    changedSkills: []
  },
  mutations: {
    loadSkills: (state, skills) => (state.data = skills),
    addNewSkill: (state, newSkill) => state.data.push(newSkill),
    replaceNewSkill(state, newSkill){
      const {id} = newSkill
console.log(1);
      const oldSkill = state.data.find(({id: _id}) => {
        if (_id == id) {
          return true
        } else {
          return false
        }
      })

      if (!oldSkill) {
        return null
      }

      Object.assign(oldSkill, newSkill)
      return true
    },
    removeSkill: (state, skillId) =>
      (state.data = state.data.filter(skill => skill.id !== skillId)),
    addChangedSkill(state, changedSkillObject){
      const {id, percents} = changedSkillObject
      if (percents) {
        const obj = state.changedSkills.find(({id: _id}) => {
          if (_id == id) {
            return true
          } else {
            return false
          }
        })

        if (!obj) {
          state.changedSkills.push(changedSkillObject)
        } else {
          Object.assign(obj, changedSkillObject)
        }
      } else {
        const index = state.changedSkills.findIndex(({id: _id}) => {
          if (_id == id) {
            return true
          } else {
            return false
          }
        })

        if (index + 1 === 0) return

        state.changedSkills.splice(index)
      }
    }
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
    },
    addChangedSkill({commit}, obj){
      commit('addChangedSkill', obj)
    },
    saveChangedSkills({state, commit}){
      const requests = state.changedSkills.map( (item) =>
        this.$axios.post(`/skills/${item.id}`, item))

          console.log(state.changedSkills);
      return Promise.all(requests)
        .then( newSkills => {
          newSkills.forEach( ({data: {skill: item}}) => {
            commit('replaceNewSkill', item)
          })
          state.changedSkills.splice(0, state.data.length - 1)
          console.log(state.changedSkills);
        })
    }
  }
}
export default skills;
