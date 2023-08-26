<template>
    <button @click="deleteTodo">Hapus</button>
</template>

<script>
export default {
    name: 'DeleteTodo',
    props: ["todoList"],
    methods: {
        deleteTodo(e) {
            const todoItem = e.target.parentElement
            if (confirm("Mau di hapus nih?")) todoItem.remove()
        }
    }
}
</script>