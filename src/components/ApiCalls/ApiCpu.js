// mycomponent.js
import React, { useEffect, useState} from 'react';
import axios from 'axios';


const ApiCpu = () => {
  const [loading, setLoading] = useState(true);
  const [UserList, setUserList] = useState([])

  const [cpu, setCpu] = useState('')
    //{data.map(item => (<span>{item.name}</span>))}
    useEffect(() => {
      try { axios.get('https://pcfy.redberryinternship.ge/api/cpus').then(res => {
        setUserList(res.data.data);
        
      });
    }
    catch{
      
    }
    finally{setLoading(false)}
    }, []);
    
      //saving data to sessionstorage
      const handleChange = event => {
        setCpu(event.target.value);
        
        
      };


      useEffect(() => {
        if(cpu){ sessionStorage.setItem('cpu', JSON.stringify(cpu));}
        setCpu(JSON.parse(sessionStorage.getItem('cpu')));
       
      }, [cpu]);

    return (
      
      <select onChange={handleChange}>
        <option value="" disabled hidden selected >{ cpu ? cpu : "CPU"}</option>
        {!loading && (
          UserList.map(item => (<option value={item.name} key={item.id}>{item.name}</option>))
      
    )}
      </select>
    
          
    );
}

export default ApiCpu;