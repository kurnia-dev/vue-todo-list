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
            const id = todoItem.id

            todoContent.setAttribute("contentEditable", this.isEditing)
            todoContent.focus()

            if (!this.isEditing) {
                // Will be executed if the button text is "Save"
                const newContent = todoContent.innerText
                this.$emit('todoEdited', { id, newContent })
            } else {
                // editing mode
                // set the cursor/caret position to the last character
                const selection = window.getSelection()
                selection.setPosition(selection.focusNode, selection.focusNode.length)
            }
        }
    }
}
</script>