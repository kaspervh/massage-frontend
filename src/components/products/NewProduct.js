import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NewProductAction} from '../../actions/productsAction';
import { useHistory } from "react-router-dom";

const NewProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState();
  const [name, setName] = useState();
  const [duration, setDuration] = useState();
  const [description, setDescription] = useState();
  const [promoPicture, setPromoPicture] = useState('');
  const currentUser = useSelector(state => state.CurrentUserReducer);

  useEffect(() => {
    window.scrollTo(0,0)
    if(currentUser.length === 0){history.push('/')}
    if(currentUser.status !== 200){history.push('/')}
    setUserId(currentUser.user.id);
  },[currentUser, history])

  const setImage = (file) => {
    console.log(file)
    let reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = () => {
      setPromoPicture(reader.result)
    }
  }

  const saveProduct = () => {
    dispatch(NewProductAction(userId, name, duration, description, promoPicture));
    history.goBack();
  }

  return(
    <div className='container'>
      <div className="form_box">
        <h1>Ny ydelse</h1>
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='Ydelses navn'/>
        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} placeholder='Varighed i minutter'/>
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} placeholder='Beskrivelse'/>
        <input type="file" onChange={e => setImage(e.target.files)}/>
        <div className='image_preview' >
          {promoPicture.length !== 0 ? <img src={promoPicture} alt={promoPicture} style={{maxWidth: '100px'}}/> : ''}
        </div>
        <button onClick={e => saveProduct()}>Gem Ydelse</button>
      </div>
    </div>
  )
}

export default NewProduct;