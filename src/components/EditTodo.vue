<template>
    <button @click="editTodo">{{ isEditing ? "Simpan" : "Edit" }}</button>
</template>

<script>
export default {
    name: 'EditTodo',
    props: ["todoList"],
    data() {
        return {
            isEditing: false
        }
    },
    methods: {
        editTodo(e) {
            this.isEditing = !this.isEditing 
            const todoItem = e.target.parentElement
            const todoContent = todoItem.firstElementChild
            todoContent.setAttribute("contentEditable", this.isEditing )
            todoContent.focus()
        }
    }
}
</script>