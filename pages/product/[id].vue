<template>
    <Head>
        <title>awara | {{ item.title }}</title>
        <Meta name="description" :content="item.description"/>
    </Head>
    <div v-if="pending">
        <div class=" shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="rounded-full bg-gray-400 h-12 w-12"></div>
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
    <div v-else class="max-w-sm w-full lg:max-w-full lg:flex p-11">
        <ProductDetails :item="item" />
    </div>
    <!-- <div>
        <p>{{item.title}}</p>
        <p>{{item.price}}</p>
        <p>{{item.id}}</p>
    </div> -->
</template>

<script  setup >
const { id } = useRoute().params;

const uri = "https://fakestoreapi.com/products/" + id;

const { pending, data: item } = await useFetch(uri, { key: id }, {
    lazy: true
});
// If handlaling error in evry products then use this 
// if(!item.value){
//     throw createError({ statusCode:404, statusMessage:"Product not found", fatal:true})
// }

definePageMeta({
    layout: "product",
});
</script>

<style scoped></style>