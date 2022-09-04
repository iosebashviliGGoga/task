import './App.css';
import { Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import AddUser from './components/addUser';
import Laptops from './components/ApiCalls/laptops';
import LaptopInfo from './components/LaptopInfo';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/add' element={<AddUser/>}/>
      <Route path='/add/laptopinfo' element={<LaptopInfo/>}/>
      <Route path='/laptops' element={<Laptops/>}/>
    </Routes>
  );
}

export default App;
