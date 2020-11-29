export const GetProductsAction = (userId) =>{
  return async dispatch => {
    const products = await fetch('https://massage-backend.herokuapp.com/products',{
      method: 'GET',
      headers: {"Content-Type": "Application/json"}
    })

    dispatch({
      type: 'GetProducts',
      payload: await products.json()
    })
  }
}

export const GetProductAction = (id) =>{
  return async dispatch => {
    const products = await fetch(`https://massage-backend.herokuapp.com/products/${id}`,{
      method: 'GET',
      headers: {"Content-Type": "Application/json"}
    })

    dispatch({
      type: 'GetProduct',
      payload: await products.json()
    })
  }
}

export const NewProductAction = (user_id, name, duration, description, promo_image) => {
  console.log(user_id);
  return async dispatch => {
    const newProduct = await fetch('https://massage-backend.herokuapp.com/products', {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({user_id, name, duration, description, promo_image})
    })

    dispatch({
      type: 'NewProduct',
      payload: await newProduct.json()
    })
  }
} 

export const UpdateProductAction = (id, name, duration, description, promo_image) => {
  return async dispatch =>{
    const product = await fetch(`https://massage-backend.herokuapp.com/products/${id}`, {
      method: 'PATCH',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({name, duration, description, promo_image})
    })

    dispatch({
      type: 'UpdateProduct',
      payload: await product.json()
    })
  }
}