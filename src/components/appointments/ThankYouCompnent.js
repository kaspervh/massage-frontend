import React from 'react';
import {Link} from 'react-router-dom';


const ThankYouComponent = () =>{

  return(
    <div className='container_80'>
      <p>Tak</p>
      <p>Din tid er nu booket og du vil snarligt modtage en bekreftelses sms</p>
      <br/>
      <br/>
      <p>Vi glæder os til at du besøger os</p>
      <p>Hilsen Skørping velvære massage</p>

      <Link to='/appointments' className='button'>Bestil ny tid tid</Link>
    </div>

  )
}

export default ThankYouComponent;