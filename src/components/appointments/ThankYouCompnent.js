import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const ThankYouComponent = () =>{
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 10000)
  },[])

  return(
    <div className='container_80'>
      <p>Tak</p>
      <p>Din tid er nu booket og du vil snarligt modtage en bekreftelses sms</p>
      <br/>
      <br/>
      <p>Vi glæder os til at du besøger os</p>
      <p>Hilsen Skørping velvære massage</p>
    </div>

  )
}

export default ThankYouComponent;