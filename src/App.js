import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Dashboard from './book-store/Dashboard';
import Header from './book-store/Header';
import Login from './book-store/Login';
import NoMatch from './book-store/NoMatch';
import Signup from './book-store/Signup';
import {useState} from 'react';
import Shop from './book-store/Shop';
function App() {
 const [isLoggedIn, setisLoggedIn] = useState(false);
  const email= localStorage.getItem('email');
  const password= localStorage.getItem('password');
        if(email==='admin@gmail.com' && password==='admin' )
        {
          setisLoggedIn(true)
        }
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='dashboard' element={ <Dashboard/>}/>
          <Route path='/shop' element={<Shop/>}/>
         
          <Route path='/' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>} />
          <Route path='*' element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
