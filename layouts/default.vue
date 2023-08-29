<template>
    <div>
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
                    <li>
                        <NuxtLink to="/product/15442">product 1</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/product/2">product 2</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <!-- This is page content start  -->
        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<style>
.router-link-exact-active {
    color: rgb(23, 255, 2);
}</style>