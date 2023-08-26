<template>
    <ol>
        <li v-for="(todo, index) in todoList" :key="index" :id="index">
            <span>{{ todo }}</span>
            <DeleteTodo />
            <EditTodo />
        </li>
    </ol>
</template>


<script>
import DeleteTodo from './DeleteTodo.vue';
import EditTodo from './EditTodo.vue';

export default {
    props: ["todoList"],
    components: { DeleteTodo, EditTodo }
}
</script>