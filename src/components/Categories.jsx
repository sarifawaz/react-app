import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa'
import { GiChopsticks, GiCroissant } from 'react-icons/gi'
import { BiFoodMenu } from 'react-icons/bi'

const Categories = () => {
  return (
    <List>
        <Navigate to={'/cuisine/American'}>
        <FaHamburger />
          <h5>American</h5>
        </Navigate>
        <Navigate to={'/cuisine/French'}>
        <GiCroissant />
          <h5>French</h5>
        </Navigate>
        <Navigate to={'/cuisine/Italian'}>
        <FaPizzaSlice />
          <h5>Italian</h5>
        </Navigate>
        <Navigate to={'/cuisine/Chinese'}>
        <GiChopsticks />
          <h5>Chinese</h5>
        </Navigate>
        <Navigate to={'/cuisine/Middle Eastern'}>
        <BiFoodMenu />
          <h5>MEA</h5>
        </Navigate>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`
const Navigate = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 3rem;
    transform: scale(0.8);
    border-radius: 50%;
    cursor: pointer;
    h5 {
        color: white;
        font-size: 0.8rem;
    }
    svg {
        color: white;
        font-size: 1.2rem;
    }
    &.active {
        background: linear-gradient(to right, #af9595, #ec5050);
        
        svg {
                color: white;
            }
        h5 {
            color: white;
        }
    }

`

export default Categories
