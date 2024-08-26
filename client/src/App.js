import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Personal from './pages/Personal'
import Home from './pages/Home';
import Address from './pages/Address';
import Devices from './pages/Devices';
import Complete from './pages/Complete';

const App = () => {
  return (
    <>
      <Router>
        <div className='container'>
          <Routes>
            <Route exact path="/" element={ <Home/>} />
            <Route exact path="/personal" element={<Personal/>} />
            <Route exact path="/address" element={<Address/>} />
            <Route exact path="/devices" element={<Devices/>} />
            <Route exact path="/complete" element={<Complete/>} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
