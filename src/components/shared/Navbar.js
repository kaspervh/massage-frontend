import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

const Navbar = () => {
  const currentUser = useSelector(state => state.CurrentUserReducer);

  return(
    <div className="navbar">
      <div className="navbar_left">
        <Link to='/'><img src={'../../images/logo_white.svg'}/></Link>
      </div>
      <div className="navbar_right">
        {currentUser.length !== 0 ? 
          <div style={{display: 'flex', height: '99px', marginRight: '100px'}}>
            <Link to='/products' className='nav-link'>Produkter</Link>
            <Link to='/work_days' className='nav-link'>Arbejds dage</Link>
            <Link to='/services' className='nav-link'>Ydelser</Link>
            <Link to='/' className='nav-link'>Bestil tid</Link>
          </div> 
          :
          <div style={{display: 'flex', height: '99px'}}>
            <Link to='/services' className='nav-link'>Ydelser</Link>
            <Link to='/' className='nav-link'>Bestil tid</Link>
          </div>
        }
        
        
      </div>
    </div>
  )
}

export default Navbar;