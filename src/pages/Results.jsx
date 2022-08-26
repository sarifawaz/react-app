import React, { useState, useEffect } from 'react'
import {Link, useParams} from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Results = () => {
    const [results, setResults] = useState([])
    let params = useParams()

    const getResults = async (name) => {
        const api = await fetch (`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const data = await api.json()
        setResults(data.results)
    }
    useEffect(() => {
        getResults(params.search)
    }, [params.search])

  return (
    <Grid
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
    >
      {results.map((item) => {
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

export default Results
