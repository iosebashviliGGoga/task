import React from 'react'
import biglogo from '../images/Group 1.png'
import logo from '../images/LOGO-02 1.png'
import smallLogo from '../images/Group.png'
import { Link } from 'react-router-dom'

function Landing() {
  
 
  return (
    
    <>
      
      <div className='landing'>
          <img className='logo' src={logo} alt="logo" />
          <img className='biglogo' src={biglogo} alt='typing'/>
          <img className='smalllogo' src={smallLogo} alt='comp'/>
          <div className='buttons'>
             <Link to='/add'>
              <button className='add'> ჩანაწერის დამატება</button>
             </Link>
             <Link to='/List'>
              <button className='list'> ჩანაწერების ნახვა</button>
             </Link>
          </div>
      </div>
    </>
  )
}

export default Landing