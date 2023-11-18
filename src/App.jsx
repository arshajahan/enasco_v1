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

function App() {

  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route exact path='/enasco_v1/' 
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
            <Route exact path='enasco_v1/sustainability' element={<Sustainability/>} />
            <Route exact path='enasco_v1/news' element={<News/>} />
            <Route exact path='enasco_v1/contact' element={<Contact/>} />
            <Route exact path='enasco_v1/service/:id' element={<SubServices/>} />

            <Route path='enasco_v1/*' element={<Navigate to='/enasco_v1/' />} />
          </Routes>
          <Footer/>
      </Router>
    </>
  )
}

export default App
