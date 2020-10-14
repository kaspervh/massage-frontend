import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {GetProductsAction} from '../actions/productsAction';

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.CurrentUserReducer);

  useEffect(() => {
    dispatch(GetProductsAction)
  }, [])

  return(
    <div className='container'>
      <div className="welcome">
        <div className="welcome-header">
          <h1>Velkommen til Skørpping velvære massage</h1>
          <div className="welcome-buttons">
            <Link to='/services' className='button-purple'>Ydelser</Link>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-image"/>

        <div className="about-text">
          <h1>Om Skørping velvære massage</h1>
          <p>
            Jeg er en certificeret massør og specialisere mig i afslappende massage og sportsmassage. <br/>
            Grunden til at jeg ikke har en adresse på min side er, fordi jeg fornyligt har startet min praksis og pt. <br/>
            laver massage i et privat hus i Askildrup, tæt på Skørping. Adressen efter aftale. <br/>
            Jeg tilpasser massagen efter kundens behov. <br/>
          </p>

          <div className="welcome-buttons">
            <Link to='/services' className='button'>Ydelser</Link>
            <Link to='/' className='button'>Bestil tid</Link>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="testimonial">
          <p>Olga er både professionel og rar at blive masseret af </p>
          <strong>- kasper</strong>
        </div>
        <div className="testimonial">
          <p>Den bedste massage jeg har fået i år helt uden afslutning</p>
          <strong>- Søren</strong>
        </div>
        <div className="testimonial">
          <p>Det var super at få læst mine runer hos Olga, fremtiden ser lys ud</p>
          <strong>- Birte</strong>
        </div>
      </div>      
      
    </div>
  
  );
}

export default Home;