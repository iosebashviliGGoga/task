import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import AddUser from './components/addUser';
import List from './components/List';

import LaptopInfo from './components/LaptopInfo';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/list' element={<List/>} />
      <Route path='/add/laptopinfo' element={<LaptopInfo/>}/>
      
    </Routes>
  );
}

export default App;
