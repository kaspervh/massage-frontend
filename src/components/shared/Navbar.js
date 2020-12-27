import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Logo from '../../images/Logo.svg';

const Navbar = () => {
  const currentUser = useSelector(state => state.CurrentUserReducer);
  console.log(currentUser)

  return(
    <div className="navbar">
      <div className="navbar-left" >
        <Link to='/' ><img src={Logo} alt='Logo' style={{maginLeft: '20px'}}/></Link>
      </div>
      <div className="navbar-right">
        {currentUser.status === 200 ? 
          <div className='navigation-container'>
            <Link to='/products' className='nav-link'>Produkter</Link>
            <Link to='/work_days' className='nav-link'>Arbejds dage</Link>
            <Link to='/services' className='nav-link'>Behandlinger</Link>
            <Link to='/appointments' className='nav-link'>Bestil tid</Link>
          </div> 
          :
          <div className='navigation-container'>
            <Link to='/services' className='nav-link'>Behandlinger</Link>
            <Link to='/appointments' className='nav-link'>Bestil tid</Link>
          </div>
        }
        
        
      </div>
    </div>
  )
}

export default Navbar;