<template>
    <form id="todo-form" @submit="addTodo">
        <input type="text" name="todoInput" placeholder="Ketik tugasmu di sini..." v-model="inputTodo" required
            @invalid="setValidity" @input="removeValidity" />
        <button type="submit">Tambahkan</button>
    </form>
</template>

<script>
export default {
    name: "TodoForm",
    data() {
        return {
            inputTodo: "",
        }
    },
    methods: {
        addTodo(e) {
            e.preventDefault()
            this.$emit('newTodoSubmitted', {id: crypto.randomUUID(), newTodo: this.inputTodo})
            e.target.reset()
        },
        setValidity(e) {
            e.target.setCustomValidity('Bagian ini ga boleh kosong!')
        },
        removeValidity(e) {
            // if the input field is filled, remove the custom validity, 
            // otherwise the input field will allways be invalid. 
            e.target.setCustomValidity('')
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    gap: 16px;

    & input {
        width: 100%;
    }
}
</style>