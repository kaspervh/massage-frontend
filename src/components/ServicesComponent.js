import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {GetProductsAction} from '../actions/productsAction';

const Services = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.ProductsReducer)

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(GetProductsAction())
  },[dispatch])

  useEffect(()=>{
    console.log(products)
  }, [products])

  return(
    <div className='container'>
      {products.length !== 0 ? 
        products.map((product, index) => 
          index % 2 !== 0 ? 
          <div className='service'>
            <div className="service_text">
              <h1>{product.name}</h1>
              <h3>varighed: {product.duration} minutter</h3>
              <p>{product.description}</p>
              <Link to='/appointments' className='button'>Bestil tid</Link>
            </div>
            <div className="service_image">
              <img src={product.promo_image} alt={product.promo_image}/>
            </div>
          </div> :
          <div className='service'>
            <div className="service_image">
              <img src={product.promo_image} alt={product.promo_image}/>
            </div>
            <div className="service_text">
              <h1>{product.name}</h1>
              <h3>varighed: {product.duration} minutter</h3>
              <p>{product.description}</p>
              <Link to='/appointments' className='button'>Bestil tid</Link>
            </div>
          </div>
        ): ''}


    </div>
  );
}

export default Services;