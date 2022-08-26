import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Cuisine = () => {

    const [cuisine, setCuisine] = useState([])
    let params = useParams()

    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const data = await api.json()
        setCuisine(data.results)
    }
    useEffect( ()=> {
        getCuisine(params.type)
    }, [params.type])
  return (
    <Grid
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    exit={{ opacity: 0 }}
    >
      {cuisine.map((item) => {
        return (
        
            <Card key={item.id}>
                <Link to={'/recipe/' + item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4>{item.title}</h4>
                </Link>
            </Card>
        
        )
      })}
    </Grid>
  )
}

const Grid = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
    grid-gap: 2rem;
`
const Card = styled.div`
    img {
        width: 100%;
        border-radius: 1rem;
    }
    a {
        text-decoration: none;
    }
    h4 {
        text-align: center;
        padding: 1rem;
    }
`
export default Cuisine
