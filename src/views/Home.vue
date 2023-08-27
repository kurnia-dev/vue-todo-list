<template>
    <div id="home">
      <h1>Todo List</h1>
      <TodoList :todoList="todoList" />
      <TodoForm @newTodoSubmitted="addNewTodo" />
      <FormMessage :todoList="todoList" />
    </div>
  </template>
  
  <script>
  // importing Single File Components
  import TodoForm from '@/components/TodoForm.vue'
  import TodoList from '@/components/TodoList.vue'
  import FormMessage from '@/components/FormMessage.vue'
  import { mapActions } from 'vuex'
  
  export default {
    name: 'HomeVew',
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
  <style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: system-ui;
  }
  
  #app {
    max-width: 98vw;
    margin: auto;
    padding: 32px;
  }
  
  button, input, ol li{
    all: unset;
    padding: 8px 16px;
    border-radius: 4px;
  }
  
  input, ol li {
    border: 1px solid #00000017;
  }
  
  input::placeholder {
    color: #00000088;
  }
  
  button {
    cursor: pointer;
    font-weight: 500;
    text-transform: uppercase;
    background-color: #ffc200;
  }
  </style>