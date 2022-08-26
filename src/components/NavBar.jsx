import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {GiForkKnifeSpoon} from 'react-icons/gi'

const NavBar = () => {
  return (
    <Nav>
        <GiForkKnifeSpoon />
        <Logo to={'/'}>foodie</Logo>
    </Nav>
  )
}

const Nav = styled.div`
    padding: 1rem 0rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;

svg {
    font-size: 2rem;
}
`

const Logo = styled(Link)`
color: black;
text-decoration: none;
font-size: 1rem;
font-weight: 400;
font-family: "lobster Two",cursive;
`
export default NavBar
