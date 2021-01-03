import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory} from 'react-router-dom';
import {UpdateWorkDayAction, GetWorkDay} from '../../actions/WorkDayAction';


const EditWorkDay = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const workDayId = useParams();
  const [date, setDate] = useState();
  const [startHour, setStartHour] = useState();
  const [startMinute, setStartMinute] = useState();
  const [endHour, setEndHour] = useState();
  const [endMinute, setEndMinute] = useState();
  const currentUser = useSelector(state => state.CurrentUserReducer);
  const workDay = useSelector(state => state.WorkDayReducer);

  useEffect(() =>{
    window.scrollTo(0,0)
    dispatch(GetWorkDay(workDayId.id))
  },[dispatch])

  useEffect(() => {
    
    if(typeof workDay === 'object'){
      const startDay = new Date(workDay.start_time);
      const endDay = new Date(workDay.end_time);
      //console.log(`${startDay.getMonth()}-${startDay.getDay()}-${startDay.getFullYear()}`)
      setDate(`${startDay.getMonth()}-${startDay.getDay()}-${startDay.getFullYear()}`);
      setStartHour(startDay.getHours().toString());
      setStartMinute(startDay.getMinutes().toString());
      setEndHour(endDay.getHours().toString());
      setEndMinute(endDay.getMinutes().toString());
    }
  }, [workDay])

  useEffect(() => {
    if(currentUser.length === 0){history.push('/')}
    if(currentUser.status !== 200){history.push('/')}
  },[currentUser])

  const updateWorkDay = () => {
    const startTime = new Date(`${date}T${startHour}:${startMinute}`).toUTCString();
    const endTime = new Date(`${date}T${endHour}:${endMinute}`).toUTCString();
    dispatch(UpdateWorkDayAction(currentUser.user.id, startTime, endTime))
    history.goBack()
  }

  return(
    <div className='container'>
      <div className="form_box">
        <h1>Rediger arbejds dag</h1>
        <div>
          <label>Dato</label>
          <br/>
          <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
        </div>
        
        <div>
          <label>Start</label>
          <br/>
          <select value={startHour} onChange={e => setStartHour(e.target.value)}>
            <option value="">Vælg tid</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="00">00</option>
          </select>
          <select value={startMinute} onChange={e => setStartMinute(e.target.value)}>
            <option value="">Vælg minutter</option>
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
        </div>

        <div>
          <label>Slut</label>
          <br/>
          <select value={endHour} onChange={e => setEndHour(e.target.value)}>
            <option value="">Vælg tid</option>
            <option value="01">01</option>
            <option value="02">02</option>
            <option value="03">03</option>
            <option value="04">04</option>
            <option value="05">05</option>
            <option value="06">06</option>
            <option value="07">07</option>
            <option value="08">08</option>
            <option value="09">09</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="00">00</option>
          </select>
          <select value={endMinute} onChange={e => setEndMinute(e.target.value)}>
            <option value="">Vælg minutter</option>
            <option value="00">00</option>
            <option value="15">15</option>
            <option value="30">30</option>
            <option value="45">45</option>
          </select>
          <br/>
          
        </div>

        <button onClick={updateWorkDay}>Opret arbejds dag</button>
      </div>
    </div>
  )
}

export default EditWorkDay;