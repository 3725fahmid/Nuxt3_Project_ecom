export default defineEventHandler(async(e) => {
    const { code } = e.context.params
    const { currencykey } = useRuntimeConfig()

    const uri = `http://api.currencyapi.com/v3/latest?Currencies=${code}&apiKey=${currencykey}`

    const {data} = await $fetch(uri)
    console.log(currencykey);

    return data
})