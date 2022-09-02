// mycomponent.js
import React, { useEffect, useState} from 'react';
import axios from 'axios';


const ApiPosition = () => {
  const [loading, setLoading] = useState(true);
  const [UserList, setUserList] = useState([])
    //{data.map(item => (<span>{item.name}</span>))}
    useEffect(() => {
      try { axios.get('https://pcfy.redberryinternship.ge/api/positions').then(res => {
        setUserList(res.data.data);
        
      });
    }
    catch{
      
    }
    finally{setLoading(false)}
    }, []);
    


    return (
      
      <select>
        <option value="" disabled hidden selected >პოზიცია</option>
        {!loading && (
          UserList.map(item => (<option value={item.name} key={item.id}>{item.name}</option>))
      
    )}
      </select>
    
          
    );
}

export default ApiPosition;