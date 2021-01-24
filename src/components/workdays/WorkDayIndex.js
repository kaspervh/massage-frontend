import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetWorkDays} from '../../actions/WorkDayAction';
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
    const days = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'trosdag', 'fredag', 'lørdag']
    const months = ['januar', 'febuar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
    return(`${days[date.getDay()]} d. ${date.getDate()} ${months[date.getMonth()]} klokken ${date.toLocaleTimeString([], {hour12: false, hour: '2-digit', minute:'2-digit'})}` )

  } 
  
  return(
    <div className='container_80'>
      {console.log(workDays)}
      <h1>arbejds Dage</h1>
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
            workDays.map(wd =>
              <tr>
                <td>{displayDate(wd.start_time)}</td>
                <td>{displayDate(wd.end_time)}</td>
                <td>{wd.appointments.length}</td>
                <td>
                  <div>
                    <Link to={`/work_days/show/${wd.id}`}  className='button'>Vis</Link>
                    <Link to={`/work_day/edit/${wd.id}`} className='button-purple'>Rediger</Link>
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
