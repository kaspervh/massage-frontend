import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetWorkDays, DeleteWorkDay} from '../../actions/WorkDayAction';
import {Link, useHistory} from 'react-router-dom';

const WorkDayIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [workDays, setWorkDays] = useState([]);
  const currentUser = useSelector(state => state.CurrentUserReducer);
  const wd = useSelector(state => state.WorkDayReducer);

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(GetWorkDays(currentUser.user.id))
    if(currentUser.length === 0){history.push('/')}
    if(currentUser.status !== 200){history.push('/')}
  }, [dispatch, currentUser, history])

  useEffect(() => {
    if(Array.isArray(wd) && wd.length !== 0){
      setWorkDays(wd)
    }
  },[wd])

  const displayDate = (dateString) => {
    const date = new Date(dateString)
    const days = ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag']
    const months = ['januar', 'febuar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
    return(`${days[date.getDay()]} d. ${date.getDate()} ${months[date.getMonth()]} klokken ${date.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'})}` )

  } 

  const deleteWorkday = (index) =>{
    if(window.confirm('er du sikker på at du vil slette arbejdsdagen? alle aftaler der er oprettet på dagen vil også blive slettet')){
      let newWorkDays = [...workDays]
      newWorkDays.splice(index, 1)
      dispatch(DeleteWorkDay(workDays[index].id))
      setWorkDays(newWorkDays)
    }    
  }
  
  return(
    <div className='container_80'>
      <h1>Arbejdsdage</h1>
      <table>
        <thead>
          <tr>
            <th>Start tid</th>
            <th>Slut Tid</th>
            <th>bestilte tider</th>
            <th>Optioner</th>
          </tr>
        </thead>
        <tbody>
          {workDays.length !== 0 ? 
            workDays.map((wd, index) =>
              <tr key={index}>
                <td>{displayDate(wd.start_time)}</td>
                <td>{displayDate(wd.end_time)}</td>
                <td>{wd.appointments.length}</td>
                <td>
                  <div style={{display: 'flex'}}>
                    <Link to={`/work_days/show/${wd.id}`}  className='button'>Vis</Link>
                    <Link to={`/work_day/edit/${wd.id}`} className='button-purple'>Rediger</Link>
                    <div className="button" style={{backgroundColor: 'red'}} onClick={e => deleteWorkday(index)}>Slet</div>
                  </div>
                </td>
              </tr>
            ) :
            <tr></tr>
          }
        </tbody>
      </table>

      <Link to='/work_day/new' className='button-purple'>Opret ny arbejdsdag</Link>
    </div>
  )
}

export default WorkDayIndex;
