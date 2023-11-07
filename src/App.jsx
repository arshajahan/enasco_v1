import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Latest from './components/Latest'
import InDetail from './components/InDetail'
import Footer from './components/Footer'
import About from './components/pages/About'
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";
import News from './components/pages/News'
import Contact from './components/pages/Contact'

function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/enasco_v1' 
              element={
                <>
                  <Banner/>
                  <Latest/>
                  <InDetail/>
                </>
            } />
            <Route path='/' 
              element={
                <>
                  <Banner/>
                  <Latest/>
                  <InDetail/>
                </>
            } />
            <Route exact path='enasco_v1/about' element={<About/>} />
            <Route exact path='enasco_v1/news' element={<News/>} />
            <Route exact path='enasco_v1/contact' element={<Contact/>} />
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
