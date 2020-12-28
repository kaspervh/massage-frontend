import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NewWorkDayAction} from '../../actions/WorkDayAction';
import {useHistory} from 'react-router-dom';

const NewWorkDay = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [date, setDate] = useState();
  const [startHour, setStartHour] = useState();
  const [startMinute, setStartMinute] = useState();
  const [endHour, setEndHour] = useState();
  const [endMinute, setEndMinute] = useState();
  const currentUser = useSelector(state => state.CurrentUserReducer);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  useEffect(() => {
    if(currentUser.length === 0){history.push('/')}
    if(currentUser.status !== 200){history.push('/')}
  },[currentUser, history])


  const createWorkDay = () => {
    const startTime = new Date(`${date}T${startHour}:${startMinute}`).toUTCString();
    const endTime = new Date(`${date}T${endHour}:${endMinute}`).toUTCString();
    dispatch(NewWorkDayAction(currentUser.user.id, startTime, endTime));
  }

  return(
    <div className='container'>
      <div className="form_box">
        <h1>Ny arbejds dag</h1>
        <div>
          <lable>Dato</lable>
          <br/>
          <input type="date" value={date} onChange={e => setDate(e.target.value)}/>
        </div>
        
        <div>
          <lable>Start</lable>
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
          <lable>Slut</lable>
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

        <button onClick={createWorkDay}>Opret arbejds dag</button>
      </div>
    </div>
  )
}

export default NewWorkDay;