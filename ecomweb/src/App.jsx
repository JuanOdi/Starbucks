import { useState, useEffect } from 'react'
import './style.scss'
import Rootlayout from "./components/navbar/Rootlayout";
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Authenticated/HomePage'
import Tabs from './components/ui/Tabs';
import Cart from './pages/Authenticated/Cart';
import Menu from './pages/Authenticated/Menu';

function App() {
  useEffect(()=>{
    
    if(location.pathname === "/"){
      document.body.classList.add("home");
    }
    else{
      document.body.classList.add("page");

    }

  },[location.pathname]);
  return (
    <>
      <Routes>
        <Route element={<Rootlayout/>} >
        <Route path="/" element={<HomePage />} />
        <Route path='/cart' element = {<Cart/>} />
        <Route path='/menu' element = {<Menu/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
