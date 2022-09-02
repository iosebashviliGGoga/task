import React from 'react'
// import { useState } from 'react'

import {Link} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Redlogo from '../images/redlogo.png'
import ApiBrand from './ApiCalls/ApiBrand'
import ApiCpu from './ApiCalls/ApiCpu'
import AcceptMaxFiles from './AcceptMaxFiles'
function LaptopInfo() {
  return (
    <>
      <Link to='/add'>
          <button className="back">
          <FontAwesomeIcon icon={faAngleLeft} className="fa" />
          </button>
      </Link>
      <div className='nav'>
          
            <h3 ><Link to='/add'>თანამშრომლის ინფო</Link></h3>
          
          
            <h3 className='home-underline'><Link to='/add/laptopinfo'>ლეპტოპის მახასიათებლები</Link></h3>
          
      </div>
      <div className="laptop-main">
        <form action="">
          <div className="flex-container">
            <AcceptMaxFiles/>
            <div className="flex-items laptopflex">
                <div>
                  <label>ლეპტოპის სახელი</label>
                  <input type="text" placeholder='HP' required/>
                  <small>ლათინური ასოები, სიმბოლოები , !@#$%^+=</small>
                </div>

                <div className='justflex'>
                  <ApiBrand/>
                </div>
            </div>
            
            <div className="flex-items flex3 line">
              <div className="">
                  <ApiCpu/>
              </div>
              <div className="">
                  <label>CPU-ს ბირთვი</label>
                  <input type="text" placeholder='14' required/>
                  <small>მხოლოდ ციფრები</small>
              </div>
              <div className="">
                  <label>CPU-ს ნაკადი</label>
                  <input type="text" placeholder='385' required/>
                  <small>მხოლოდ ასოები</small>
              </div>
              
            </div>
            <div className="flex-items withoutbg">
            
            <div className="laptopflex">
                <div>
                  <label>ლეპტოპის RAM(GB)</label>
                  <input type="text" placeholder='16' required/>
                  <small>მხოლოდ ციფრები</small>
                </div>
                
                <div className='radiobuttons'>
                    <legend>მეხსიერების ტიპი</legend>
                  <div className='justflex'>
                    <input type="radio" id="SSD" name="fav_language" value="SSD"/>
                    <label htmlfor="SSD">SSD</label>
                    <input type="radio" id="HDD" name="fav_language" value="HDD"/>
                    <label htmlfor="HDD">HDD</label>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            </div>
            <div className="flex-items withoutbg laptopflex line">
            
            <div>
                  <label>შეძენის რიცხვი</label>
                  <input type="text" placeholder='დდ/თთ/წწწწ' required/>
                  
                </div>
                <div>
                  <label>ლეპტოპის ფასი</label>
                  <input type="text" placeholder='0000' required/>
                  <small>მხოლოდ ციფრები</small>
                </div>
            </div>
            <div className="flex-items withoutbg">
            <h3 className='withoutbg'>ლეპტოპის მდგომარეობა</h3>
                  <div className='justflex withoutbg'>
                    <input type="radio" id="new" name="fav_language" value="ახალი"/>
                    <label htmlfor="old">მეორადი</label>
                    <input type="radio" id="old" name="fav_language" value="მეორადი"/>
                    <label htmlfor="new">ახალი</label>
                    </div>
            </div>
            <div className="flex-items withoutbg finalbuttons">
            <div className="toback"><Link to="/add">უკან </Link></div>
              <Link to="/add"><div className="save">დამახსოვრება </div></Link>
            </div>
          </div>
        </form>
      </div>




      <img src={Redlogo} alt="reddie" className='redlogo'/>
    </>
  )
}

export default LaptopInfo