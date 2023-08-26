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
            state.todoList.find(todo => todo.id === id)
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
        deleteTodo({ commit }, id) {
            commit('todoDeleted', id)
        },
        saveEditedTodo({ commit }, props) {
            commit('todoEdited', props)
        }
    }
})
