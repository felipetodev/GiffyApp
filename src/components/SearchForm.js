import React, { useState } from 'react'
import styled from 'styled-components'

const SearchForm = ({ onSubmit }) => {
    const [ keyword, setKeyword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(keyword)
        onSubmit({ keyword })
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <FormStyled onSubmit={handleSubmit}>
                    <input onChange={handleChange} type='text' value={keyword} placeholder='Busca un GIF ⚡'/>
            </FormStyled>
        </>
    )
}

const FormStyled = styled.form`
    text-align: center;
    
    input {
        padding: 0.5rem;
        width: 300px;
        text-transform: uppercase;
    }
`

export default React.memo(SearchForm)