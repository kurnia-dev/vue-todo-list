import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: []
    },
    mutations: {
        todoAdded(state, {id, newTodo}) {
            state.todoList.push({id, todo: newTodo})
        },
        todoDeleted(state, id) {
            state.todoList = state.todoList.filter(todo => todo.id !== id)
        },
        todoEdited(state, {id, newContent}) {
            state.todoList.find(todo => todo.id === id).todo = newContent
        }
    },
    actions: {
        addNewTodo({ commit }, newTodo) {
            commit('todoAdded', newTodo)
        },
        deleteTodo({ commit }, id) {
            commit('todoDeleted', id)
        },
        saveEditedTodo({ commit }, props) {
            commit('todoEdited', props)
        }
    }
})
