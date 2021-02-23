import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {GetProductsAction} from '../../actions/productsAction';
import {GetAppointmentTimesAction, bookAppointment} from '../../actions/AppointmentAction';

const NewAppointment = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [currentProduct, setCurrentProduct] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [possibleApointments , setPossibleApointments] = useState([]);
  const [pickedAppointment, setPickedAppointment] = useState(null);
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

  const requestAppointment = () =>{
    if(validateFields()){
      dispatch(bookAppointment({work_day_id: pickedAppointment.work_day_id, start_time: new Date(pickedAppointment.start_time).toUTCString(), end_time: new Date(pickedAppointment.end_time).toUTCString(), first_name: firstName, last_name: lastName, phone: phone, email: email, service: `${currentProduct.name} ${currentProduct.duration} minutter`}))
      dispatch(GetAppointmentTimesAction(currentProduct.duration))
      history.push('/thank_you');
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

  const showAppointmentTimes = (from, to) => {
    const fromTime = new Date(from);
    const toTime = new Date(to)
    return(`Fra ${fromTime.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'})} Til ${toTime.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'})}`)
  }

  const selectPossibleAppointment = (element, possibleApointment) => {
    setPickedAppointment(possibleApointment);
    for(let cardButton of document.querySelectorAll('.cardButton')){
      cardButton.style.backgroundColor = 'blueviolet';
    }
    
    element.target.parentElement.style.backgroundColor = '#C9B9A5';
  }

  return(
    <div className='container'>
      <h1>Bestil tid</h1>
      <p className='error'>{error}</p>
      
      <h5 style={{marginLeft: '10px'}}>Trin 1 vælg behandling</h5>
      <section>
        <select onChange={e => getAvailableTimes(e.target.value)}>
          <option value="">Vælg Massage</option>
          
          {products.map((product, index)=> <option value={index} key={product.name} >{`${product.name} ${product.duration} minutter`}</option>)}
        </select>

      </section>
      <br/>
      
        {appointments != null && loading === false ? 
          currentProduct != null ?
            <div>
              <h5 style={{marginLeft: '10px'}}>Trin 2 Vælg ledig tid</h5>
              <section>
            
                <div className='workdays-container' >
                  {possibleApointments.map((appointmentList, index)=> 
                    appointmentList.length != 0 ? 
                      <div key={index} className='card'>
                        <div className='cardHeader'>
                          {displayDate(appointmentList[0].start_time)}
                        </div>
                        {appointmentList.map((possibleApointment, index) => 
                          <div key={index}>
                            <div className='cardButton' onClick={element => selectPossibleAppointment(element, possibleApointment)}>
                              <p>{showAppointmentTimes(possibleApointment.start_time, possibleApointment.end_time)}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    : ''
                  )}
                
                </div>
              </section>
            </div> : ''
          : <h5 style={{color: 'red'}}>Der er desvære ingen ledige tider på nuværende tidspunkt</h5> 
        }
      

      <br/>
      {pickedAppointment != null ? 
        <div>
          <h5 style={{marginLeft: '10px'}}>Trin 3 udfyld dine kontakt oplysninger</h5>
          <section>
            <input type='text' placeholder='Fornavn' onChange={e => setFirstName(e.target.value)} />
            <br/>
            <input type='text' placeholder='Efternavn' onChange={e => setLastName(e.target.value)}/>
            <br/>
            <input type='text' placeholder='Telefon nummer' onChange={e => setPhone(e.target.value)}/>
            <br/>
            <input type='text' placeholder='Email' onChange={e => setEmail(e.target.value)}/>

            <div className="button" onClick={requestAppointment}>Bestil tid</div>
          </section>  
        </div> : ''
      }

    </div>
  )
}

export default NewAppointment;
