import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link, useHistory} from 'react-router-dom';
import {GetProductsAction} from '../../actions/productsAction';


const ProductsIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(state => state.ProductsReducer)
  const currentUser = useSelector(state => state.CurrentUserReducer);

  useEffect(() =>{
    dispatch(GetProductsAction());
  }, [])
  
  useEffect(() => {
    if(currentUser.length === 0){goHome()}
    if(currentUser.status !== 200){goHome()}
  },[currentUser])

  const goHome = () => history.push('/');

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
          {products.length !== 0 ? 
            products.map(product =>
              <tr>
                <td>{product.name}</td>
                <td>{product.duration}</td>
                <td>{product.description}</td>
                <td><img src={product.promo_image} style={{maxWidth: '100px', maxHeight: '100px'}}/></td>
                <td>
                  <div>
                    <Link to={`/products/edit/${product.id}`} className='button-purple'>Rediger produkt</Link>
                  </div>
                </td>
              </tr>
            ) :
            <tr></tr>
          }
        </tbody>
      </table>

      <Link to='/products/new' className='button-purple'>Opret nyt produkt</Link>
    </div>
  )
}

export default ProductsIndex;