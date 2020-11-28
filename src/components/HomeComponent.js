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
            <Link to='/services' className='button-purple' style={{marginLeft: '55px'}}>Behandlinger</Link>
            <Link to='/appointments' className='button' style={{marginLeft: '10px'}}>Bestil tid</Link>
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
            <Link to='/services' className='button-purple'>Behandlinger</Link>
            <Link to='/appointments' className='button'>Bestil tid</Link>
          </div>
        </div>
      </div>

      <div className="testimonials">
        <div className="testimonial">
          <p>Meget behagelig og professionel massage udført af dygtig massør. 👌 Kommer gerne igen 😊 </p>
          <strong>- Lotte L</strong>
        </div>
        <div className="testimonial">
          <p>Fantastisk god (og behagelig) massage.

              og samtid rigtig sød og venlig massør 😊

              kan varmt anbefales 😉</p>
          <strong>- Britt O</strong>
        </div>
        <div className="testimonial">
          <p>Kan varmt anbefales - har døjet med store smerter i ryggen - som er går ned i benet - massage hos Skørping Velvære Massages har hjulpet mig 😃😃😃</p>
          <strong>- Finn P</strong>
        </div>
      </div>      
      
    </div>
  
  );
}

export default Home;