import React from 'react'
import { Routes, Route } from "react-router-dom"
import All from './All'
import CSS from './Css'
import Javascript from './Javascript'
import HTML from './Html'
import Home from './Home'
function AllRoutes() {
  return (
    <div>
 <Routes>
 <Route path="/" element={ <Home/> } />
        <Route path="/html" element={ <HTML/> } />
        <Route path="/all" element={ <All/> } />
        <Route path="/css" element={ <CSS/> } />
        <Route path="/javascript" element={ <Javascript/> } />
      </Routes>




    </div>
  )
}

export default AllRoutes