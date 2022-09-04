import React from 'react'
import { useState } from 'react'
import Redlogo from '../images/redlogo.png'
import ApiTeam from './ApiCalls/ApiTeam'
import ApiPosition from './ApiCalls/ApiPosition'
function User() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [surnameError, setSurnameError] = useState(false);
  /* it has to be deleted */
  const validName = new RegExp(
    '([ა-ჰ])'
 );
 const validSurname = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');

 const validate = () => {
    if (!validName.test(name)) {
       setNameErr(true);
    }
    if (!validSurname.test(surname)) {
       setSurnameError(true);
    }
 };

  return (
    <div className='main'>
    <form className="survey-form">
      <div className='flex sized'>
        <div>
          <label>სახელი</label>
          <input type="text"
                 placeholder='გრიშა'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required/>
          <small>მინიმუმ 2 სიმბოლო, ქართული ასოები {name}</small>
        </div>
        
        <div>
          <label>გვარი</label>
          <input type="text"
           placeholder='ონიანი'
           value={surname}
           onChange={(e) => setSurname(e.target.value)}
            required/>
          <small>მინიმუმ 2 სიმბოლო, ქართული ასოები</small>
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
          <label>მეილი</label>
          <input type="text" placeholder='grish666@redberry.ge' required/>
          <small>უნდა მთავრდებოდეს @redberry.ge-ით</small>
        </div>
     </div>
     <div className="flex full">
     <div>
          <label>ტელეფონის ნომერი</label>
          <input type="tel" placeholder='+995 598 00 07 01' required/>
          <small>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</small>
        </div>
     </div>
     
            
      
    </form>
    
    <img src={Redlogo} alt="reddie" className='redlogo'/>
    </div>
  )
}

export default User