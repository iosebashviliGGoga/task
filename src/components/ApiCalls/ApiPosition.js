// mycomponent.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiPosition = () => {
  const [loading, setLoading] = useState(true);
  const [UserList, setUserList] = useState([])

  const [position,setPosition] = useState('')
  
    //{data.map(item => (<span>{item.name}</span>))}
    useEffect(() => {
    try { axios.get('https://pcfy.redberryinternship.ge/api/positions').then(res => {
        setUserList(res.data.data);
        
      });

    }catch{console.log(Error)}


    finally{setLoading(false)}
    }, []);
 
      //saving input to sessionstorage
      const handleChange = event => {
        setPosition(event.target.value);
        
        
      };


      useEffect(() => {
        if(position){ sessionStorage.setItem('position', JSON.stringify(position));}
        setPosition(JSON.parse(sessionStorage.getItem('position')));
       
      }, [position]);
  


    return (




      <select onChange={handleChange}>
        
        <option value="" disabled hidden selected >{ position ? position : "პოზიცია"}</option>
        {!loading && (
          UserList.map(item => 
            (  <option value={item.name} key={item.id} id={item.id} >{item.name}</option> ))
              
      )}
    
      </select>
            
          
    );
}

export default ApiPosition;