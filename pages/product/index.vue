<template>
    <div class="container">
        <div v-if="pending"  class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
            <div v-for="cd in cardDemo" class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
                <div class="animate-pulse flex space-x-4">
                  <div class="rounded-full bg-gray-400 h-12 w-12">{{cd.id}}</div>
                  <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 bg-gray-400 rounded w-3/4"></div>
                    <div class="space-y-2">
                      <div class="h-4 bg-gray-400 rounded"></div>
                      <div class="h-4 bg-gray-400 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          <div v-else class="grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            <div v-for="p in products">
              <!-- <NuxtLink :to="`/product/${p.id}`">{{ p.title }}</NuxtLink> -->
              <ProductCart :product="p"/>
            </div>
          </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "product",
});

// fetch product 
const { pending, data: products } = await useFetch('https://fakestoreapi.com/products', {
  lazy: true
})
const cardDemo = [1,2,3];

useHead({
    title:"awara | Products ",
    meta:[
        {name:"description",content:"awara home page"}
    ]
})

</script>

<style scoped>

</style>