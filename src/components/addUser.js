import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Redlogo from '../images/redlogo.png'
import ApiTeam from './ApiCalls/ApiTeam'
import ApiPosition from './ApiCalls/ApiPosition'
function AddUser() {
  
  
  /* validations */
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [gmail,setGmail] = useState('');
  const [mobile, setMobile] = useState('');


  const [gmailErr, setGmailErr] = useState(false);
  const [mobileErr, setMobileErr] = useState(false)
  const [nameErr, setNameErr] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  


  

  const validGmail = new RegExp('(^[a-zA-Z0-9._:$!%-]+@redberry.ge$)')
  const validMobile = new RegExp('([+]9955+[0-9]{8})');
  const validName = new RegExp('(^[ა-ჰ]{2,})');
  const validSurname = new RegExp('([ა-ჰ]{2,})');
//validate data and save to session storage
 const validate = () => {
  //validations
  if (!validName.test(name)) {
    setNameErr(true);
 } else{setNameErr(false)
        if(name){ sessionStorage.setItem('name', JSON.stringify(name));}
         setName(JSON.parse(sessionStorage.getItem('name')));}
 


 if (!validSurname.test(surname)) {
    setSurnameError(true);
    }else{setSurnameError(false)
           if(surname){ sessionStorage.setItem('surname', JSON.stringify(surname));}

          setSurname(JSON.parse(sessionStorage.getItem('surname')));}


 if (!validGmail.test(gmail)) {
  setGmailErr(true);
  } else{setGmailErr(false)
        if(gmail){ sessionStorage.setItem('gmail', JSON.stringify(gmail));}

    setGmail(JSON.parse(sessionStorage.getItem('gmail')));}

if (!validMobile.test(mobile)) {
  setMobileErr(true);
} else{setMobileErr(false)
       if(mobile){ sessionStorage.setItem('mobile', JSON.stringify(mobile));}
    
  setMobile(JSON.parse(sessionStorage.getItem('mobile')));}}
//saving to session storage






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
      <div className='main'>
    <form className="survey-form">
      <div className='flex sized'>
        <div>
          <label 
          style={nameErr ? {color: "#E52F2F"}: {color: "black"}}
          >სახელი</label>
          <input type="text"
                 placeholder={(JSON.parse(sessionStorage.getItem('name'))) ? JSON.parse(sessionStorage.getItem('name')) :'გრიშა'}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  style={ nameErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}}
                  
                  />
          <small
          style={nameErr ? {color: "#E52F2F"}: {color: "black"}}
          >მინიმუმ 2 სიმბოლო, ქართული ასოები {name}</small>
        </div>
        
        <div>
          <label
          style={surnameError ? {color: "#E52F2F"}: {color: "black"}}
          >გვარი</label>
          <input type="text"
           placeholder={ (JSON.parse(sessionStorage.getItem('surname'))) ? JSON.parse(sessionStorage.getItem('surname')) :'ონიანი'}
           value={surname}
           onChange={(e) => setSurname(e.target.value)}
           style={surnameError ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}}
            required/>
          <small
          style={surnameError ? {color: "#E52F2F"}: {color: "black"}}
          >მინიმუმ 2 სიმბოლო, ქართული ასოები</small>
        </div>
      </div>
     <div className='flex selection '>
        <ApiTeam/>
     </div>
     <div className='flex selection'>
      
        <ApiPosition/>
     </div>
     <div className="flex full">
      <div>
          <label
          style={gmailErr ? {color: "#E52F2F"}: {color: "black"}}
          >მეილი</label>
          <input type="text" placeholder={(JSON.parse(sessionStorage.getItem('gmail'))) ? JSON.parse(sessionStorage.getItem('gmail')) :'grish666@redberry.ge' }
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
          style={gmailErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}}
          required/>
          <small
          style={gmailErr ? {color: "#E52F2F"}: {color: "black"}}
          >უნდა მთავრდებოდეს @redberry.ge-ით</small>
        </div>
     </div>
     <div className="flex full">
     <div>
          <label
          style={mobileErr ? {color: "#E52F2F"}: {color: "black"}}
          >ტელეფონის ნომერი</label>
          <input type="tel" placeholder={(JSON.parse(sessionStorage.getItem('mobile'))) ? JSON.parse(sessionStorage.getItem('mobile')) :'+995 598 00 07 01'} required  value={mobile} 
          style={mobileErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}} onChange={(e) => setMobile(e.target.value)} />
          <small
          style={mobileErr ? {color: "#E52F2F"}: {color: "black"}}
          >უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</small>
        </div>
     </div>
     
            
      
    </form>
    
    <img src={Redlogo} alt="reddie" className='redlogo'/>
    </div>
  )
       
        
          <div className="toLaptop" onClick={validate}>შემდეგი</div>
        
  
    </>
  )
}

export default AddUser