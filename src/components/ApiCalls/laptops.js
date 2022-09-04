import React from 'react'
import {useState , useEffect} from 'react'
import axios from 'axios';
function Laptops() {
    const [loading, setLoading] = useState(true);
    const [UserList, setUserList] = useState([])
  //getting data from api
  useEffect(() => {
    try { axios.get('https://pcfy.redberryinternship.ge/api/laptops',
                    {params: {token : 'ac0bc3ebe127cebb7fd8fd03cfad3a29' } }).then(res => {
      setUserList(res.data.data);
      console.log(res.data)
      
    });
  }
  catch{
    
  }
  finally{setLoading(false) && console.log(UserList)}
  }, []);
  










  return (
    <div>laptops</div>
  )
}

export default Laptops