import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Search = () => {

    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('searched/' + search)
    }

  return (
    <FormStyle onSubmit={handleSubmit}>

        <FaSearch></FaSearch>
            <input
                type='text'
                onChange={ (e) => setSearch(e.target.value)}
                value={search}
            />

    </FormStyle>
  )
}
const FormStyle = styled.form`
    margin: 1rem 0;
    text-align: center;
    position: relative;

    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        color: white;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
        width: 50%;
    }
    svg {
        position: absolute;
        top: 50%;
        transform: translate(100%, -50%);
        color: white;
    }
`
export default Search
