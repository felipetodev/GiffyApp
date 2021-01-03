import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'

const Gif = ({ title, id, url }) => {
    return (
        <GifStyled>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img loading='lazy' src={url} alt={title}/>
            </Link>
        </GifStyled>
    )
}

const GifStyled = styled.div`
    margin-bottom: .5rem;
    height: 100%;
    position: relative;

    a {
        display: block;
        text-decoration: none;
        width: 100%;
        height: 100%;
    }

    h4 {
        text-transform: uppercase;
        color: lightgreen;
        position: absolute;
        bottom: 0;
        background: #1f1f1faa;
        width: 100%;
        padding: 0.3rem 0;
    }

    img {
        object-fit: cover;
        height: 100%;
    }

    &:hover {
        cursor: pointer;
        border: 2px solid rebeccapurple;

        h4 {
            background: rebeccapurple;
            color: #fff35c;
        }
    }
`

export default React.memo(Gif)