<template>
    <button @click="deleteTodoElement">Hapus</button>
</template>

<script>

export default {
    name: 'DeleteTodo',
    props: ["todoList"],
    methods: {
        deleteTodoElement(e) {
            const todoItem = e.target.parentElement
            const id = todoItem.id
            if (confirm("Mau di hapus nih?")) {
                todoItem.remove()
                this.$emit('todoDeleted', id)
            }
            
        }
    }
}
</script>