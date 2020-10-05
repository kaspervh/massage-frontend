import React from 'react';
import {Link} from 'react-router-dom';

const Services = () => {
  return(
    <div className='container'>
      <div className="service">
        <div className="service_text">
          <h1>Sports massage</h1>
          <p>
            Er muskelerne ømme efter træning, eller måske efter en lang arbejdsdag? <br/> 
            Få nulstillet kroppen med en dybdegående sportsmassage i de områder du har gener <br/>
            og få løsnet knuder og spændinger der enere i hverdgen <br/>
          </p>
          <Link to='/' className='button'>Bestil tid</Link>
        </div>
        <div class="service_image">
          <img src="./images/man_back_massage.jpg" alt=""/>
        </div>
      </div>
      <div className="service">
        <div className="service_image">
        <img src="./images/blonde_head_massage.jpg" alt=""/>
        </div>
        <div className="service_text">
          <h1>Afslappende massage</h1>
          <p>
            Massage er en naturlig måde at få det bedre. <br/>
            Det har en dokumenteret virkning på ømme muskler samt hjælper din krop til at udløse endorfiner <br/>
            der fremmer afslapning og velvære. <br/> 
            Hvis du døjer med stress eller bare vil forkæle dig selv, så prøv en afslappende massage.
          </p>
          <Link to='/' className='button'>Bestil tid</Link>
        </div>
      </div>
      <div class="service">
        <div class="service_text">
          <h1>Varm sten-massage</h1>
          <Link to='/' className='button'>Bestil tid</Link>
        </div>
        <div className="service_image">
          <img src="./images/stone_massage.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Services;