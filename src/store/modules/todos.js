import Axios from 'axios'

const state = {
  todos: []
}

const getters = {
  allTodos: state => state.todos
}

const mutations = {
  setTodos: (state, todos) => {
    return (state.todos = todos)
  },
  newTodo: (state, todo) => {
    return state.todos.unshift(todo)
  },
  removeTodo: (state, id) => {
    return state.todos.filter(todo => todo.id !== id)
  }
}

const actions = {
  async fetchTodos({ commit }) {
    const response = await Axios.get(
      'https://jsonplaceholder.typicode.com/todos'
    )
    commit('setTodos', response.data)
  },
  async addTodo({ commit }, title) {
    const response = await Axios.post(
      'https://jsonplaceholder.typicode.com/todos', {
      title,
      complated: false
    }
    )
    commit('newTodo', response.data)
  },
  async deleteTodo({ commit }, id) {
    await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    commit('removeTodo', id)
  }
}

export default { state, getters, mutations, actions }
