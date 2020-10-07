import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {GetProductAction, UpdateProductAction} from '../../actions/productsAction';

const EditProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [duration, setDuration] = useState();
  const [description, setDescription] = useState();
  const [promoPicture, setPromoPicture] = useState('');
  const product = useSelector(state => state.ProductsReducer)

  useEffect(() => {
    dispatch(GetProductAction(params.id))
  },[])

  useEffect(() => {
    console.log(product)
    if(typeof product === 'object'){
      setName(product.name);
      setDuration(product.duration);
      setDescription(product.description);
      setPromoPicture(product.promo_image)
    }
  }, [product])

  const setImage = (file) => {
    console.log(file)
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setPromoPicture(reader.result)
    }
  }

  const notEmpty = (param) => {
    console.log(param)
    return param !== null && typeof param != 'undefined' && param.length !== 0
  }

  const saveProduct = () => {
    dispatch(UpdateProductAction(params.id, name, duration, description, promoPicture))
  }

  return(
    <div className='container'>
      <div className="form_box">
        <h1>Rediger produkt</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Ydelses navn'/>
        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} placeholder='Varighed i minutter'/>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Beskrivelse'/>
        <input type="file" onChange={e => setImage(e.target.files)}/>
        <div className='image_preview'>
          {notEmpty(promoPicture) ? <img src={promoPicture}/> : ''}
        </div>
        <button onClick={saveProduct}>Gem Ydelse</button>
      </div>
    </div>
  )
}

export default EditProduct;