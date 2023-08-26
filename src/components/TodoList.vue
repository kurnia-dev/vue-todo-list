<template>
    <ol>
        <li v-for="(todo, index) in todoList" :key="index" :id="index">
            <span>{{ todo }}</span>
            <DeleteTodo @todoDeleted="deleteTodo" />
            <EditTodo @todoEdited="saveEditedTodo" />
        </li>
    </ol>
</template>


<script>
import DeleteTodo from './DeleteTodo.vue';
import EditTodo from './EditTodo.vue';
import { mapActions } from 'vuex'

export default {
    props: ["todoList"],
    components: { DeleteTodo, EditTodo }, 
    methods: {
        ...mapActions(['deleteTodo', 'saveEditedTodo'])
    }
}
</script>