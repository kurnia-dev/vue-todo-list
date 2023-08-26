<template>
  <div id="app">
    <TodoList :todoList="todoList" />
    <TodoForm @newTodoSubmitted="addNewTodo" />
    <FormMessage :todoList="todoList" />
  </div>
</template>

<script>
// importing Single File Components
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import FormMessage from './components/FormMessage.vue'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    // Register all components imported
    TodoForm,
    TodoList,
    FormMessage
  },
  computed: {
    todoList() {
      return this.$store.state.todoList
    }
  },
  methods: {
    ...mapActions(['addNewTodo'])
  }
}

</script>