<template>
    <div className="card w-96 bg-base-100 shadow-xl bg-[#0e153bbb] text-white p-3 text-lg rounded-lg">
        <figure><img class="card-image" :src="product.image" alt="Shoes" /></figure>
        <div className="card-body">
          <nuxt-link :to="`/product/${product.id}`"><h2 className="card-title text-md font-bold">{{ product.title }}</h2></nuxt-link>
          <!-- <p class="py-3 px-1 border">{{ (product.description).slice(0,50)}}</p> -->
          <div className="card-actions justify-end">
            <nuxt-link :to="`/product/${product.id}`"><button className="btn btn-product">Details</button></nuxt-link>
          </div>
        </div>
      </div>
</template>

<script setup>
 const { product }  = defineProps(["product"])
</script>

<style scoped>
.card-image{
    max-width: 70%;
    max-height: 120px;
    margin: 0 auto;
}
.btn-product{
    width: 100%;
    border-radius: 10px;
}
.card-title{
    overflow: hidden;
    white-space: nowrap;

}
</style>