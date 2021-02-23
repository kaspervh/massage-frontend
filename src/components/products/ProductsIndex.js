import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {GetProductsAction} from '../../actions/productsAction';


const ProductsIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // local value of products
  const [services, setServices] = useState([]);
  const products = useSelector(state => state.ProductsReducer)
  const currentUser = useSelector(state => state.CurrentUserReducer);

  useEffect( () =>{
    dispatch(GetProductsAction());
  }, [dispatch])
  
  useEffect(() => {
    window.scrollTo(0,0)
    if(currentUser.length === 0){history.push('/')}
    if(currentUser.status !== 200){history.push('/')}
  },[currentUser, history])
  

  // for some reason the react throws an error when you update or create a product
  // and redirect back to the index page, this effect handles that
  useEffect(() => {
    if(Array.isArray(products) && products.length !== 0){
      setServices(products)
    }
  },[products])

  return (
    <div className='container_80'>
      <h1>Mine Ydelser</h1>
      <table>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Varighed</th>
            <th>Beskrivelse</th>
            <th>Billede</th>
            <th>Optioner</th>
          </tr>
        </thead>
        <tbody>
          {services.length !== 0 ? 
            services.map(product =>
              <tr key={product.name}>
                <td>{product.name}</td>
                <td>{product.duration}</td>
                <td style={{maxWidth: '400px', textAlign: 'center'}}>{product.description}</td>
                <td><img src={product.promo_image} alt={product.promo_image} style={{maxWidth: '100px', maxHeight: '100px'}}/></td>
                <td><div><Link to={`/products/edit/${product.id}`} className='button-purple'>Rediger</Link></div></td>
              </tr>
          ) : <tr></tr>}
        </tbody>
      </table>

      <Link to='/products/new' className='button-purple'>Opret nyt produkt</Link>
    </div>
  )
}

export default ProductsIndex;