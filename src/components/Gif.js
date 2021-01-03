import React from 'react'
import styled from 'styled-components'
import { Link } from 'wouter'

const Gif = ({ title, id, url }) => {
    return (
        <div>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <GifStyled>
                    <h4>{title}</h4>
                    <img loading='lazy' src={url} alt={title}/>
                </GifStyled>
            </Link>
        </div>
    )
}

const GifStyled = styled.div`
    position: relative;

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
        width: 100%;
        display: block;
    }

    &:hover {
        cursor: pointer;
        border: 2px solid rebeccapurple;

        h4 {
            background: rebeccapurple;
            color: #fff;
        }
    }
`

export default React.memo(Gif)