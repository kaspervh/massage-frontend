//const url = "http://localhost:3000"; // https://massage-backend.herokuapp.com

export const MoveProductToTopAction = (product_id) => {
  return async dispatch => {
    const products = await fetch("https://massage-backend.herokuapp.com" + `/move_product_to_top?product_id=${product_id}`, {
      method: "GET",
      headers: {"Content-Type": "Application/json"}
    })

    dispatch({
      type: "MoveProductToTop",
      payload: await products.json() 
    })
  }
}

export const GetProductsAction = (userId) =>{
  return async dispatch => {
    const products = await fetch("https://massage-backend.herokuapp.com" + '/products',{
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
    const products = await fetch("https://massage-backend.herokuapp.com" + `/products/${id}`,{
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
  return async dispatch => {
    const newProduct = await fetch("https://massage-backend.herokuapp.com" + '/products', {
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
    const product = await fetch("https://massage-backend.herokuapp.com" + `/products/${id}`, {
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