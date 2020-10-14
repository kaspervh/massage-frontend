import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {GetProductsAction} from '../../actions/productsAction'

const NewAppointment = () => {
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState();
  const products = useSelector(state => state.ProductsReducer);

  useEffect(()=>{
    dispatch(GetProductsAction())
  },[])

  useEffect(() =>{
    console.log(products)
  },[products])

  return(
    <div className='container'>
      <h1>Bestil tid</h1>
      <select onChange={e => setCurrentProduct(e.target.value)}>
        <option value="">Vælg Massage</option>
        {products.map(product => <option value={product}>{`${product.name} ${product.duration} minutter`}</option>)}
      </select>

    </div>
  )
}

export default NewAppointment;
