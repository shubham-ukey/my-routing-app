
import React from 'react'
import Kids from './Kids'
import {Routes, Route } from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Mobile from './Mobile'

const App = () => {
  return (
  
      <div>
        <center>
          <h1>My Routing App</h1>
<NavBar/>
          <Routes>
              <Route path="/" element={<Home />} />
            <Route path="/kids" element={<Kids />} />
              <Route path="/mobile" element={<Mobile />} />
          </Routes>
        </center>
      </div>
  
  )
}

export default App
