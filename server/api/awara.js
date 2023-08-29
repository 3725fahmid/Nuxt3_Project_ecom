export default defineEventHandler(async(e) => {

    // handle Query paramiter 
    //const { name } = getQuery(e)

    // handle Post data
    //const { age } = await readBody(e)

    // handle API call with privet key

    const { data: APOOJSAJD } = await $fetch('http://api.currencyapi.com/v3/latest?apikey=cur_live_QVZdCcKOpk2V9NBgiR9DGMbiDTgAAnsq7JHrc42w')

    return APOOJSAJD
    // return {
    //     message: `hello ${name} are you ${age} years Old ? `
    // }
})