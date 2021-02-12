import React, {useState, useEffect} from 'react';
import {LoginUser} from '../actions/CurrentUserAction';
import { useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const currentUser = useSelector(state => state.CurrentUserReducer);

  useEffect(() =>  {
    window.scrollTo(0,0)
    if(currentUser.status === 200){
      history.push('/')
    }
  }, [currentUser, history])


  const login = () => {
    dispatch(LoginUser(email, password))
  }

  return(
    <div className='container'>
      <div className="form_box">
        <h1>Log ind</h1>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
        
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>

        <button onClick={login} className='button-purple'>Log ind</button>
      </div>
      
    </div>
  );
}

export default Login;