<template>
    <div v-if="todoList.length >= 4">Hebat!</div>
</template>

<script>
export default {
    name: 'FormMessage',
    props: ['todoList']
}
</script>