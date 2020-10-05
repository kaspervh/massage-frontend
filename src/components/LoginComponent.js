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
    if(currentUser.length !== 0){
      history.push('/')
    }
  }, [currentUser])


  const login = () => {
    dispatch(LoginUser(email, password))
  }

  return(
    <div className='container'>
      <div className="form_box">
        <h1>login</h1>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='Email'/>
        
        <input type="text" value={password} onChange={e => setPassword(e.target.value)} placeholder='Password'/>

        <button onClick={login}>Login</button>
      </div>
      
    </div>
  );
}

export default Login;