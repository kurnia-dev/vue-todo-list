import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        todoList: []
    },
    mutations: {
        todoAdded(state, newTodo) {
            state.todoList.push(newTodo)
        },
        todoDeleted(state, index) {
            state.todoList.splice(index, 1)
        },
        todoEdited(state, props) {
            const { newContent, index } = props
            state.todoList[index] = newContent
        }
    },
    actions: {
        addNewTodo({ commit }, newTodo) {
            commit('todoAdded', newTodo)
        },
        deleteTodo({ commit }, index) {
            commit('todoDeleted', index)
        },
        saveEditedTodo({ commit }, props) {
            commit('todoEdited', props)
        }
    }
})
