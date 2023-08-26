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
<style scoped>
ol {
    /* This css nesting will not work on Mozilla Firefox 116 and earlier */
    margin: 40px 0;
    counter-reset: number;

    & li {
        text-transform: capitalize;
        display: flex;
        gap: 16px;
        counter-increment: number;
        align-items: center;
        margin-bottom: 10px;

        & span {
            width: 100%;
            font-size: larger;
            outline: none;
        }
    }

    & li::before {
        content: counter(number) ".";
        font-size: larger;
    }
}
</style>