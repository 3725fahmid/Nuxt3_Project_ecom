<template>
    <div>
        <h2>This is About page</h2>
        <p>{{ onData }}</p>
    </div>
</template>

<script setup>

    const { data:onData } = await useFetch('/api/currency/EUR');

    // const { data: onData } = await useFetch('/api/awara?name=mario', {
    //     method:'post',
    //     body:{age:23},
    // })
</script>

<style scoped>

</style>