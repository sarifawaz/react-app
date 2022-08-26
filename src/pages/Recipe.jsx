import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Recipe = () => {
    
    const [recipe, setRecipe] = useState({})
    const [activeTabs, setActiveTabs] = useState('instructions')
    let params = useParams()
    
    useEffect (() => {
        const getRecipe = async () => {
    
            const api = await fetch (`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
            const data = await api.json()
            setRecipe(data)
    
        }
        getRecipe()
    }, [params.name])

  return (
    <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
    >
        <Title>
            <h5>{recipe.title}</h5>
        </Title>
        <Container>
            <img src={recipe.image} alt={recipe.title} />
        </Container>
        <ButtonWrapper>
            <Button className= {activeTabs === 'instructions' ? 'active' : ''} onClick={() => setActiveTabs('instructions')} >Instructions</Button>
            <Button style={{ marginRight: '0rem'}} className= {activeTabs === 'ingredients' ? 'active' : ''} onClick={() => setActiveTabs ('ingredients')} >Ingredients</Button>
        </ButtonWrapper>
        <Info>
            {activeTabs === 'instructions' && (
                <div>
                    <h3 dangerouslySetInnerHTML={{__html: recipe.summary}}></h3>
                    <h3 dangerouslySetInnerHTML={{__html: recipe.instructions}}></h3>
                </div>
            )}

            {activeTabs === 'ingredients' && (
                <ul>
                    {recipe.extendedIngredients?.map((ingredient) => {
                        return (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        )
                    })}
                </ul>
            )}
            
        </Info>

    </motion.div>
  )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
    img {
        border-radius: 1rem;
        
    }
`
const Title = styled.div`
        text-align: center;
        font-size: 1.3rem;
`
const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    .active{
      background: linear-gradient(35deg, #494949, #313131);
      color: white;
    }
`
const Button = styled.button`
    padding: 0.5rem 1rem;
    color: #313131;
    background: white;
    border: none;
    border-radius: 1rem;
    margin-right: 2rem;
    font-weight: 600;

`

const Info = styled.div`
h3 {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 500;
    font-size: 1rem;
    padding: 2rem;
    border: 1px solid black;
}
ul{
    margin-top: 1rem;
    margin-bottom: 1rem;
    list-style: none;
    text-align: center;
  }
li{
    font-weight: 600;
    font-size: 1rem;
    line-height: 2.5rem;
}
`
export default Recipe
