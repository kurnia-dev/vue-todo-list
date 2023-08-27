<template>
  <div class="todo-detail">
    <button @click="() => this.$router.go(-1)">Kembali</button>
    <h1>{{ todo }}</h1>
    <p>{{ detail ? detail : "Tidak ada deskripsi." }}</p>
    <button>{{ detail ? "Ubah Deskripsi" : "Tambahkan Deskripsi" }}</button>
  </div>
</template>
<script>

export default {
  props: ['id'],
  computed: {
    todoList() {
      return this.$store.state.todoList
    },
    todo() {
      return this.todoList.find(todo => todo.id === this.id).todo
    },
    detail() {
      return this.todoList.find(todo => todo.id === this.id).detail
    }
  }
}
</script>
<style scoped>
  .todo-detail {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .todo-detail button {
    width: max-content;
  }
</style>