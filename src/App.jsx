import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Latest from './components/Latest'
import InDetail from './components/InDetail'
import Footer from './components/Footer'
import About from './components/pages/About'
import {
  BrowserRouter as Router, Routes, Route, Navigate
} from "react-router-dom";
import News from './components/pages/News'
import Contact from './components/pages/Contact'
import Sustainability from './components/pages/Sustainability'
import SubServices from './components/pages/SubServices'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='//' 
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
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/sustainability' element={<Sustainability/>} />
            <Route exact path='/news/:id' element={<News/>} />
            <Route exact path='/contact' element={<Contact/>} />
            <Route exact path='/service/:id' element={<SubServices/>} />

     
          </Routes>
          <Footer/>
      </Router>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </>
  )
}

export default App
