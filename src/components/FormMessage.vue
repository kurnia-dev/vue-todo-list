<template>
    <div v-if="todoList.length >= 4">Hebat!</div>
</template>

<script>
export default {
    name: 'FormMessage',
    props: ['todoList']
}
</script>

<style scoped>
    div {
        text-align: center;
        padding: 16px;
        margin-top: 40px;
        font-weight: 600;
        font-size: xxx-large;
    }
</style>