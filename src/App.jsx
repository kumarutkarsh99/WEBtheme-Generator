import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from 'react'
import Navbar from './Navbar.jsx'
import Search from './Search.jsx'
import Themes from './Themes.jsx'
import Footer from './Footer.jsx'
import Contact from "./Contact.jsx"
import About from './About.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<><Search/><Themes/></>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App
