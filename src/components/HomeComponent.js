import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Link} from 'react-router-dom';
import {GetProductsAction} from '../actions/productsAction';

const Home = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.CurrentUserReducer);

  useEffect(() => {
    window.scrollTo(0,0)
    dispatch(GetProductsAction)
  }, [])

  return(
    <div className='container'>
      <div className="welcome">
        <div className="welcome-header">
          <h1>Velkommen til Velvære Massage i Skørping</h1>
          <div className="welcome-buttons">
            <Link to='/services' className='button-purple' style={{marginLeft: '55px'}}>Se Behandlinger</Link>
            <Link to='/appointments' className='button' style={{marginLeft: '10px'}}>Bestil tid</Link>
          </div>
        </div>
      </div>

      <div className="about">
        <div className="about-image"/>

        <div className="about-text">
          <h1>Om Skørping velvære massage</h1>
          <p>Jeg hedder Olga og jeg er en certificeret massør. <br/>
             Jeg specialisere mig i afslappende massage og sportsmassage. <br/>
             Jeg laver pt. massage i et privat hus i Askildrup, tæt på Skørping. <br/> 
             Jeg sender addressen pr sms når en tid er booket. <br/>
             Jeg tilpasser massagen efter kundens behov. <br/>
             Hvis du har spørgsmål, ring eller send en sms til mig på<br/>
             tlf. 91 85 64 19</p> 
          

          <div className="welcome-buttons">
            <Link to='/services' className='button-purple'> Se behandlinger</Link>
            <Link to='/appointments' className='button'>Bestil tid</Link>
          </div>
        </div>
      </div>
      <div className="testimonial-container">
        <h3>Det siger mine kunder</h3>
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
    </div>
  
  );
}

export default Home;