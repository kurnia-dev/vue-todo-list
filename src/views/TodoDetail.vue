<template>
  <div class="todo-detail">
    <button @click="() => this.$router.go(-1)">Kembali</button>
    <h1>{{ todo }}</h1>
    <input v-if="isEditing" v-model="detail" type="text" ref="detailInput" />
    <p v-else ref="detail">{{ detail ? detail : "Tidak ada deskripsi." }}</p>
    <button v-if="isEditing" @click="() => {
      isEditing = false
      saveDetail({ id, detail })
    }">Simpan Deskripsi</button>
    <button v-else @click="editDetail">{{ detail ? "Ubah Deskripsi" : "Tambahkan Deskripsi" }}</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['id'],
  data() {
    return {
      isEditing: false,
      todoList: this.$store.state.todoList,
      detail: this.$store.state.todoList.find(todo => todo.id === this.id).detail
    }
  },
  computed: {
    todo() {
      return this.todoList.find(todo => todo.id === this.id).todo
    }
  },
  methods: {
    ...mapActions(['saveDetail']),
    editDetail() {
      this.isEditing = true
      this.$nextTick(() => {
        this.$refs.detailInput.focus();
      });
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

p,
input {
  outline: none;
  padding: 16px;
}

input {
  border: 1px solid #00000017;
}
</style>