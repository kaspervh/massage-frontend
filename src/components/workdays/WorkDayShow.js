import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import {GetWorkDay} from '../../actions/WorkDayAction';


const WorkDayShow = () => {
  const workDayId = useParams();
  const dispatch = useDispatch();
  const workDay = useSelector(state => state.WorkDayReducer);
  const [date, setDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  useEffect(() => {
    dispatch(GetWorkDay(workDayId.id))
  },[])

  useEffect(() => {
    if(typeof workDay === 'object'){
      const start = new Date(workDay.start_time)
      const end = new Date(workDay.end_time)
      setDate(`${start.getDay()}/${start.getMonth()}/${start.getFullYear()}`)
      setStartTime(`${start.getHours()}:${start.getMinutes()}`)
      setEndTime(`${end.getHours()}:${end.getMinutes()}`)
    }
  }, [workDay])

  return(
    <div className='container_80'>
      <h1>Vis Arbejdsdag</h1>
      <div>
        <strong>Dato: {date}  </strong>
        <strong>Fra: {startTime}</strong>
        <strong>Til: {endTime}</strong>
      </div>
    </div>
  )
}

export default WorkDayShow;