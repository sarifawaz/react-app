import React from 'react'
import Popular from '../components/Popular'
import Dessert from '../components/Dessert'
import { motion } from 'framer-motion'


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0 }}
    >
        <Popular />
        <Dessert />
    </motion.div>
  )
}

export default Home
