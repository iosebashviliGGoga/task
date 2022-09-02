import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import User from './User'

function AddUser() {
  

  //const handleClick = event => {
    // 👇️ toggle isActive state on click
    
  //};
  return (
    <>
      <Link to='/'>
        <button className="back">
        <FontAwesomeIcon icon={faAngleLeft} className="fa" />
        </button>
      </Link>
      <div className='nav'>
        
          <h3 className='home-underline'><Link to='/add'>თანამშრომლის ინფო</Link></h3>
        
        
          <h3><Link to='/add/laptopinfo'>ლეპტოპის მახასიათებლები</Link></h3>
        
      </div>
       <User/>
       
        <Link to='/add/laptopinfo'>
          <div className="toLaptop">შემდეგი</div>
        </Link>
  
    </>
  )
}

export default AddUser