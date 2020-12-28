import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetProductsAction} from '../../actions/productsAction';
import {GetAppointmentTimesAction, bookAppointment} from '../../actions/AppointmentAction';

const NewAppointment = () => {
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [possibleApointments , setPossibleApointments] = useState([]);
  const [error, setError] = useState('');
  const products = useSelector(state => state.ProductsReducer);
  const appointments = useSelector(state => state.AppointmentReducer);

  useEffect(()=>{
    dispatch(GetProductsAction())
    window.scrollTo(0,0)
  },[dispatch])

  useEffect(() =>{
    if(appointments.length !== 0){
      setLoading(false);
      if(Array.isArray(appointments)){
        setPossibleApointments(appointments);
      }
      if(typeof appointments === 'string'){

        setError(appointments)
      }
    }
  },[appointments])

  useEffect(() => {
    if(error.length !== 0 ){
      setTimeout(() => {
        setError('')
      }, 3000)
    }
  },[error])

  const getAvailableTimes = (index) => {
    setLoading(true);
    dispatch(GetAppointmentTimesAction(products[index].duration))
    setCurrentProduct(products[index])
  }

  const requestAppointment = (pa) =>{
    if(validateFields()){
      dispatch(bookAppointment({work_day_id: pa.work_day_id, start_time: new Date(pa.start_time).toUTCString(), end_time: new Date(pa.end_time).toUTCString(), first_name: firstName, last_name: lastName, phone, email}))
      dispatch(GetAppointmentTimesAction(currentProduct.duration))
    }else{
      setError('Fornavn, efternavn, email og telefon nummer skal udfyldes for at du kan booke en massagetid')
    }
  }

  const validateFields = () => {
    if(firstName.length === 0 ){return false }
    if(lastName.length === 0 ){return false }
    if(phone.length === 0 ){return false }
    if(email.length === 0 ){return false }
    return true;
  }


  const displayDate = (dateString) => {
    const date = new Date(dateString)
    const days = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'trosdag', 'fredag', 'lørdag']
    const months = ['januar', 'febuar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
    return(`${days[date.getDay()]} d. ${date.getDate()} ${months[date.getMonth()]} ` )
  } 

  const showAppointmentTimes = (from) => {
    const fromTime = new Date(from);
    const toTime = new Date(fromTime.getTime() + currentProduct.duration*6000)
    return(`fra ${fromTime.getHours()}:${fromTime.getMinutes()} Til ${toTime.getHours()}:${toTime.getMinutes()}`)
  }

  return(
    <div className='container_80'>
      <h1>Bestil tid</h1>
      <p className='error'>{error}</p>
      <select onChange={e => getAvailableTimes(e.target.value)}>
        <option value="">Vælg Massage</option>
        
        {products.map((product, index)=> <option value={index} key={product.name}>{`${product.name} ${product.duration} minutter`}</option>)}
      </select>
      <br/>
      {currentProduct != null ? 
        <div>
        <input type='text' placeholder='Fornavn' onChange={e => setFirstName(e.target.value)} />
        <br/>
        <input type='text' placeholder='Efternavn' onChange={e => setLastName(e.target.value)}/>
        <br/>
        <input type='text' placeholder='Telefon nummer' onChange={e => setPhone(e.target.value)}/>
        <br/>
        <input type='text' placeholder='Email' onChange={e => setEmail(e.target.value)}/>
        </div> : ''
      }
      <br/>
      {appointments != null && loading === false ? 
        <div className='container_80' style={{dispaly: 'flex', flexWrap: 'wrap', flexDirection: 'row', alignItems: 'baseline'}}>
          {possibleApointments.map((appointmentList, index)=> 
            <div key={index} className='card'>
              <div className='cardHeader'>
                {displayDate(appointmentList[0].start_time)}
              </div>
              {appointmentList.map((possibleApointment, index) => 
                <div key={index}>
                  <div className='cardButton' onClick={() => requestAppointment(possibleApointment)}>
                    <p>{showAppointmentTimes(possibleApointment.start_time)}</p>
                  </div>
                </div>
              )}
            </div>

          )}
        </div>: ''
      }

    </div>
  )
}

export default NewAppointment;
