import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {GetWorkDays} from '../../actions/WorkDayAction';
import {Link, useHistory} from 'react-router-dom';

const WorkDayIndex = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const currentuser = useSelector(state => state.CurrentUserReducer);
  const workDays = useSelector(state => state.WorkDayReducer);

  useEffect(() => {
    console.log("CurrentUser", currentuser)
    dispatch(GetWorkDays(currentuser.user.id))
  }, [])


  const displayDate = (dateString) => {
    const date = new Date(dateString)
    const days = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'trosdag', 'fredag', 'lørdag']
    const months = ['januar', 'febuar', 'marts', 'april', 'maj', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'december']
    return(`${days[date.getDay()]} d. ${date.getDate()} ${months[date.getMonth()]} klokken ${date.getHours()}:${date.getMinutes()}` )

  } 
  
  return(
    <div className='container_80'>
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
                <td></td>
                <td>
                  <div>
                    <Link to={`/work_days/show/${wd.id}`}  className='button'>Vis arbejdsdag</Link>
                    <Link to={`/work_day/edit/${wd.id}`} className='button-purple'>Rediger tid</Link>
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
