
import React, { useEffect, useState} from 'react';
import axios from 'axios';


const ApiTeam = () => {
  const [loading, setLoading] = useState(true);
  const [UserList, setUserList] = useState([])

  const [teams, setTeams] = useState('')
  const [teamsId, setTeamsId] = useState('')

 
  const handleChange = event => {
    setTeams(event.target.value);
    setTeamsId(event.target.selectedIndex)
    
  };
  //saving input to localstorage
  useEffect(() => {
    if(teams){ sessionStorage.setItem('teams', JSON.stringify(teams));}

    setTeams(JSON.parse(sessionStorage.getItem('teams')));
  },[teams]);

  useEffect(() => {
    if(teamsId){ sessionStorage.setItem('teamsId', JSON.stringify(teamsId)); }
    setTeamsId(JSON.parse(sessionStorage.getItem('teamsid')));
  }, [teamsId]);



    //getting data from api
    useEffect(() => {
      try { axios.get('https://pcfy.redberryinternship.ge/api/teams').then(res => {
        setUserList(res.data.data);
        
      });
    }
    catch{
      
    }
    finally{setLoading(false)}
    }, []);

   


    return (
      <>
      <select onChange={handleChange}>
       
        <option value="" disabled hidden selected id="">{teams ? teams : "თიმი"}</option>
        {!loading && (
          UserList.map(item => 
            (<option value={item.name} key={item.id} id={item.id}>{item.name} </option>))
              
    )}
      </select>
      
      </>
    
          
    );
}

export default ApiTeam;