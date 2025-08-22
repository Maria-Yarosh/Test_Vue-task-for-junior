export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log('Order received:', body)

  return {
    statusCode: 200,
    body: 'Order placed successfully!'
  }
})
