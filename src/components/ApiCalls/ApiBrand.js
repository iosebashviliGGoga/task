// mycomponent.js
import React, { useEffect, useState} from 'react';
import axios from 'axios';


const ApiBrand = () => {
  const [loading, setLoading] = useState(true);
  const [UserList, setUserList] = useState([])

  const [brand, setBrand] = useState('')
    //{data.map(item => (<span>{item.name}</span>))}
    useEffect(() => {
      try { axios.get('https://pcfy.redberryinternship.ge/api/brands').then(res => {
        setUserList(res.data.data);
        
      });
    }
    catch{
      
    }
    finally{setLoading(false)}
    }, []);
    //saving data to localstorage

    const handleChange = event => {
      setBrand(event.target.value);
      
      
    };


    useEffect(() => {
      if(brand){ sessionStorage.setItem('brand', JSON.stringify(brand));}
      setBrand(JSON.parse(sessionStorage.getItem('brand')));
     
    }, [brand]);


    return (
      
      <select onChange={handleChange}>
        <option value="" disabled hidden selected >{brand ? brand : "ლეპტოპის ბრენდი"}</option>
        {!loading && (
          UserList.map(item => (<option value={item.name} key={item.id}>{item.name}</option>))
      
    )}
      </select>
    
          
    );
}

export default ApiBrand;