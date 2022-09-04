import React from 'react'
 import { useState } from 'react'

import {Link} from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import Redlogo from '../images/redlogo.png'
import ApiBrand from './ApiCalls/ApiBrand'
import ApiCpu from './ApiCalls/ApiCpu'
import AcceptMaxFiles from './AcceptMaxFiles'





function LaptopInfo() {
  /* validations */
  const [laptopName , setLaptopName] = useState('')
  const [cpuCores, setCpuCores] = useState('')
  const [cpuThreads,setCpuThreads] = useState('')
  const [ram, setRam] = useState('')
  const [buyDate, setBuyDate] = useState('')
  const [laptopPrice, setLaptopPrice] = useState('')
  const [memory, setMemory] = useState('')
  const [laptopState , setLaptopState] = useState('')

  const [laptopNameErr , setLaptopNameErr] = useState(false)
  const [cpuCoresErr, setCpuCoresErr] = useState(false)
  const [cpuThreadsErr, setCpuThreadsErr] = useState(false)
  const [ramErr, setRamErr] = useState(false)
  const [buyDateErr, setBuyDateErr] = useState(false)
  const [laptopPriceErr, setLaptopPriceErr] = useState(false)
  const [memoryErr, setMemoryErr] = useState(false)
  const [laptopStateErr, setLaptopStateErr] = useState(false)

  const validLaptopName = new RegExp('(^[a-zA-Z0-9])')
  const validCpuCores = new RegExp('([0-9])')
  const validCpuThreads = new RegExp('^[0-9]')
  const validRam = new RegExp('[0-9]')
  const validBuyDate = new RegExp('')
  const validLaptopPrice = new RegExp('[0-9]')


  const validate = (e) =>{
   
      //validating inputs and saving to session storage
    if (!validLaptopName.test(laptopName)) {
    setLaptopNameErr(true);} 
      else{setLaptopNameErr(false)
         if(laptopName){ sessionStorage.setItem('laptopName', JSON.stringify(laptopName));}
                  setLaptopName(JSON.parse(sessionStorage.getItem('laptopName')));}

    if (!validCpuCores.test(cpuCores)) {
            setCpuCoresErr(true);} 
                else{setCpuCoresErr(false)
                  if(cpuCores){ sessionStorage.setItem('cpuCores', JSON.stringify(cpuCores));}
                  setCpuCores(JSON.parse(sessionStorage.getItem('cpuCores')))}

    if (!validCpuThreads.test(cpuThreads)) {
      setCpuThreadsErr(true);} 
          else{setCpuThreadsErr(false)
            if(cpuThreads){ sessionStorage.setItem('cpuThreads', JSON.stringify(cpuThreads));}
            setCpuThreads(JSON.parse(sessionStorage.getItem('cpuThreads')))}

    if (!validRam.test(ram)) {
      setRamErr(true);} 
        else{setRamErr(false)
          if(ram){ sessionStorage.setItem('ram', JSON.stringify(ram));}
          setRam(JSON.parse(sessionStorage.getItem('ram')))}



    if (!validLaptopPrice.test(laptopPrice)) {
      setLaptopPriceErr(true); } 
        else  {setLaptopPriceErr(false)
          if(laptopPrice){ sessionStorage.setItem('laptopPrice', JSON.stringify(laptopPrice));}
                  setLaptopPrice(JSON.parse(sessionStorage.getItem('laptopPrice')))}

   
      if(!memory)   {setMemoryErr(true)}
        else {(setMemoryErr(false))
            if(memory){ sessionStorage.setItem('memory', JSON.stringify(memory));}
              setMemory(JSON.parse(sessionStorage.getItem('memory')))}

      if(!laptopState)   {setLaptopStateErr(true)}
          else {(setLaptopStateErr(false))
               if(laptopState){ sessionStorage.setItem('laptopState', JSON.stringify(laptopState));}
                    setLaptopState(JSON.parse(sessionStorage.getItem('laptopState')))}
            console.log(window.FileList)

  }

  


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
                  <label style={laptopNameErr ? {color: "#E52F2F"}: {color: "black"}}>ლეპტოპის სახელი</label>
                  <input type="text" placeholder='HP' required 
                  value={laptopName}
                  onChange={(e) => setLaptopName(e.target.value)}
                  style={ laptopNameErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"} }
                  />
                  <small style={laptopNameErr ? {color: "#E52F2F"}: {color: "black"}}>ლათინური ასოები, სიმბოლოები , !@#$%^+=</small>
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
                  <label style={cpuCoresErr ? {color: "#E52F2F"}: {color: "black"}}>CPU-ს ბირთვი</label>
                  <input type="text" placeholder='14' required
                   value={cpuCores}
                   onChange={(e) => setCpuCores(e.target.value)}
                  style={cpuCoresErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}}
                  />
                  <small>მხოლოდ ციფრები</small>
              </div>
              <div className="">
                  <label style={cpuThreadsErr ? {color: "#E52F2F"}: {color: "black"}}>CPU-ს ნაკადი</label>
                  <input type="text" placeholder='385' required
                  value={cpuThreads}
                  onChange={(e) => setCpuThreads(e.target.value)}
                  style={ cpuThreadsErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}}
                  />
                  <small style={cpuThreadsErr ? {color: "#E52F2F"}: {color: "black"}}>მხოლოდ ციფრები</small>
              </div>
              
            </div>
            <div className="flex-items withoutbg">
            
            <div className="laptopflex">
                <div>
                  <label style={ramErr ? {color: "#E52F2F"}: {color: "black"}}>ლეპტოპის RAM(GB)</label>
                  <input type="text" placeholder='16' required
            
                    value={ram}
                    onChange={(e) => setRam(e.target.value)}
                    style={ ramErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}}
                  />
                  <small style={ramErr ? {color: "#E52F2F"}: {color: "black"}}>მხოლოდ ციფრები</small>
                </div>
                
                <div className='radiobuttons'>
                    <legend>მეხსიერების ტიპი</legend>
                  <div className='justflex'>
                    <input type="radio" id="SSD" name="memory" value="SSD" 
                    
                    onChange={(e) => setMemory(e.target.value)}/>
                    <label htmlFor="SSD">SSD</label>
                    <input type="radio" id="HDD" name="memory" value="HDD"  onChange={(e) => setMemory(e.target.value)}/>
                    <label htmlFor="HDD">HDD</label>
                    </div>
                    <div className=""></div>
                </div>
            </div>
            </div>
            <div className="flex-items withoutbg laptopflex line">
            
            <div>
                  <label>შეძენის რიცხვი(არჩევითი)</label>
                  <input type="date" placeholder='დდ/თთ/წწწწ' required
                   onChange={(e) => console.log(e.target.value)}
                   />
                  
                </div>
                <div className='input-icon input-icon-right'>
                  <label style={laptopPriceErr ? {color: "#E52F2F"}: {color: "black"}}>ლეპტოპის ფასი</label>
                  <input type="text" placeholder='0000' required
                   value={laptopPrice}
                   onChange={(e) => setLaptopPrice(e.target.value)}
                  style={ laptopPriceErr ? {borderColor: "#E52F2F"}: {borderColor: "#8AC0E2"}}
                  />
                  <i>₾</i>
                  <small style={laptopPriceErr ? {color: "#E52F2F"}: {color: "black"}}>მხოლოდ ციფრები</small>
                </div>
            </div>
            <div className="flex-items withoutbg">
            <h3 className='withoutbg'>ლეპტოპის მდგომარეობა</h3>
                  <div className='justflex withoutbg'>
                    <input type="radio" id="new" name="laptopState" value="ახალი" onChange={(e) => setLaptopState(e.target.value)}/>
                    <label htmlFor="old">მეორადი</label>
                    <input type="radio" id="old" name="laptopState" value="მეორადი" onChange={(e) => setLaptopState(e.target.value)}/>
                    <label htmlFor="new">ახალი</label>
                    </div>
            </div>
            <div className="flex-items withoutbg finalbuttons">
            <div className="toback"><Link to="/add">უკან </Link></div>
             <div className="save" onClick={ (e) =>validate(e) }>დამახსოვრება </div>
            </div>
          </div>
        </form>
      </div>




      <img src={Redlogo} alt="reddie" className='redlogo'/>
    </>
  )
}

export default LaptopInfo