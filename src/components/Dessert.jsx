import React, {useState, useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Dessert = () => {

    const [dessert, setDessert] = useState([])

    const getDessert = async () => {
        const check = localStorage.getItem("dessert")
        if(check){
            setDessert(JSON.parse(check))
        }else{
            const api = await fetch (`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=dessert`)
            const data = await api.json()
            localStorage.setItem("dessert", JSON.stringify(data.recipes))
            setDessert(data.recipes)

        }
    }

    useEffect(()=> {
        getDessert()
    }, [])
    return (
        <div>
            <Wrapper>
                <h4>Our Dessert Picks</h4>
                <Splide
                    options={{
                        perPage: 3,
                        breakpoints: {
                            640 :{
                                perPage: 2,
                            }
                        },
                        drag: 'free',
                        arrows: false,
                        pagination: false,
                        gap: '3rem'
                    }}>
                {
                    dessert.map((item) => {
                        return (
                            <SplideSlide key={item.id}>
                                    <Card>
                                        <Link to={'/recipe/' + item.id}>
                                            <p>{item.title}</p>
                                            <img src={item.image} alt={item.title}/>
                                            <Gradient />
                                        </Link>
                                    </Card>
                            </SplideSlide>
                        )
                    })
            
                }
                </Splide>
            </Wrapper>
        </div>
      )
}

const Wrapper = styled.div`
    margin: 3rem 0rem;
    border-radius: 2rem;
`
const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
        border-radius: 2rem;
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    p{
        position: absolute;
        z-index: 1;
        bottom: 0%;
        color: white;
        width: 100%;
        text-align: center;
        font-weight: 600;
        font-size: 1rem;
        height: 40%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Gradient = styled.div`
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    width: 100%;
    height: 100%;
`

export default Dessert
