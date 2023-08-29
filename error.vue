<template>
    <!-- component -->
    <div class="w-full mt-[200px] flex items-center justify-center">
        <div class="errorCard">
            <h2>{{error.statusCode}}</h2>
            <h1>Ooooppss</h1>
            <p>{{ error.statusMessage}}</p>
            <!-- <nuxt-link to="/"><button class="btn my-7">Home Page</button></nuxt-link> -->
            <button class="btn my-7" @click="handleError">Home Page</button>
        </div>
    </div>      
</template>

<script setup>
defineProps(['error']);

const handleError = () => {clearError({redirect:'/'})};
</script>

<style  scoped>
.errorCard{
    min-width: 100%;
    min-height: 800px;
    border-radius: 10px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    background-color: aliceblue;
    color: black;
    display: grid;
    place-content: center;
    gap: 2rem;
    padding: 5rem 4rem;
    text-align: center;
}
.errorCard h2{
    font-size: 72px;
    font-weight: 900;
    color: red;
}

</style>