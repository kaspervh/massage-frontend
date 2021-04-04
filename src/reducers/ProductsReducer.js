const ProductsReducer = (state = [], action) =>{
  switch(action.type){
    case 'GetProducts':
      return state = action.payload;
    case 'GetProduct':
      return state = action.payload;
    case 'NewProduct':
      return state = action.payload;
    case 'UpdateProduct':
      return state = action.payload;
    case "MoveProductToTop":
      return state = action.payload;
    default:
      return state;
  }
}

export default ProductsReducer;