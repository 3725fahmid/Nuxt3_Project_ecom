<template>
    <header class="shadow-md bg-[#181e41]">
        <nav class="container mx-auto p-4 flex justify-between">
            <NuxtLink to="/">AWARA</NuxtLink>
            <ul class="flex gap-4">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/product" class="btn">product</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>


    <!-- This is page content start  -->
    <div class="container mx-auto p-4">
        <slot />
    </div>


    <footer class="container mx-auto p-4 flex justify-between border-t-2">
        <ul class="flex gap-4">
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/product" class="btn">product</NuxtLink>
            </li>
        </ul>
    </footer>
</template>

<style scoped>
.router-link-exact-active {
    color: rgb(255, 255, 0);
}</style>