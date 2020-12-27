import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {GetWorkDay} from '../../actions/WorkDayAction';
import {DeleteAppointment} from '../../actions/AppointmentAction';


const WorkDayShow = () => {
  const history = useHistory();
  const workDayId = useParams();
  const dispatch = useDispatch();
  const workDay = useSelector(state => state.WorkDayReducer);
  const [appointments, setAppointments] = useState([]);
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const currentUser = useSelector(state => state.CurrentUserReducer)

  useEffect(() => {
    dispatch(GetWorkDay(workDayId.id))
  },[])

  useEffect(() => {
    if(typeof workDay !== 'undefined' && Object.keys(workDay).length !== 0){
      const start = new Date(workDay.start_time);
      const end = new Date(workDay.end_time);
      setDate(`${start.getDay()}/${start.getMonth()}/${start.getFullYear()}`);
      setStartTime(`${start.getHours()}:${start.getMinutes()}`);
      setEndTime(`${end.getHours()}:${end.getMinutes()}`);
      setAppointments(workDay.appointments);
    }
  }, [workDay])

  useEffect(() => {
    if(currentUser.length === 0){goHome()}
    if(currentUser.status !== 200){goHome()}
  },[currentUser])

  const goHome = () => history.push('/');

  const displayDate = (dateString) => {
    const date = new Date(dateString)
    const days = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'trosdag', 'fredag', 'lørdag']
    const months = ['januar', 'febuar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
    return(`${days[date.getDay()]} d. ${date.getDate()} ${months[date.getMonth()]} klokken ${date.getHours()}:${date.getMinutes()} ` )
  } 

  const deleteAppointment = (e,appointment) => {
    if(window.confirm(`er du sikker på at du vil afslutte aftalen for ${appointment.first_name} ${appointment.last_name}`)){
      dispatch(DeleteAppointment(appointment.id))
      dispatch(GetWorkDay(workDayId.id))
    }
  }

  return(
    <div className='container_80'>
      {console.log(workDay)}
      <h1>Dato: {typeof workDay.start_time !== 'undefined' ? `${workDay.start_time.split('T')[0].toString()}` : ''} Fra: {startTime} Til: {endTime}</h1>
      <table>
        <thead>
          <tr>
            <th>Navn</th>
            <th>Telefon nummer</th>
            <th>Email</th>
            <th>fra</th>
            <th>til</th>
            <th>Optioner</th>
          </tr>
        </thead>
        <tbody>
          {typeof appointments !== 'undefined' ? appointments.map(ap => 
            <tr>
              <td>{`${ap.first_name} ${ap.last_name}`}</td>
              <td>{ap.phone}</td>
              <td>{ap.email}</td>
              <td>{displayDate(ap.start_time)}</td>
              <td>{displayDate(ap.end_time)}</td>
              <td><button className='button-purple' onClick={e => deleteAppointment(e, ap)}>Slet Blestilt Tid</button></td>
            </tr>
          ):''}
          
        </tbody>
      </table>

    </div>
  )
}

export default WorkDayShow;