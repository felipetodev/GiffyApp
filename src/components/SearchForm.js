import React from 'react'
import styled from 'styled-components'
import { useLocation } from 'wouter'
import useForm from 'reducer'

const RATINGS = ['g', 'pg', 'pg-13', 'r']

const SearchForm = ({ initialRating = 'g', initialKeyword = '' }) => {
    const { keyword, rating, times, updateKeyword, updateRating } = useForm({ initialKeyword, initialRating })

    const [ _, pushLocation ] = useLocation()

    const handleChange = (e) => {
        updateKeyword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(keyword)
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChangeRating = (e) => {
        updateRating(e.target.value)
    }

    return (
        <>
            <FormStyled onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input onChange={handleChange} type='text' value={keyword} placeholder='Busca un GIF ⚡'/>
                <select onChange={handleChangeRating} value={rating}>
                    <option disabled>Rating</option>
                    {RATINGS.map(rating => (
                        <option key={rating}>{rating}</option>
                    ))}
                </select>
                <small>{times}</small>
            </FormStyled>
        </>
    )
}

const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;

    button {
        background: rebeccapurple;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 16px;
        cursor: pointer;
    }
    
    input {
        padding: 0.5rem;
        width: 300px;
        text-transform: uppercase;
    }
`

export default React.memo(SearchForm)