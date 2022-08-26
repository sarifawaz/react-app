import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import { Routes, Route, useLocation } from 'react-router-dom'
import Recipe from './Recipe'
import Results from './Results'
import  { AnimatePresence } from 'framer-motion'

const Pages = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/searched/:search' element={<Results />} />
          <Route path='/recipe/:name' element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages
