import { useState, useEffect } from 'react'
import './App.css'
import {Route, Routes} from "react-router-dom"
import Nav from './components/Nav';
import About from './pages/About';
import Catering from './pages/Catering';
import Home from './pages/Home';
import Login from './pages/Login';
import Order from './pages/Order';
import ImageAndDes from './components/ImageAndDes';
import Footer from './components/Footer';
function App() {
  
  
  return (
    <div className='App'>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/catering" element={<Catering/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
