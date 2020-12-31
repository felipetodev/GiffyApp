import styled from 'styled-components'
import { Link } from 'wouter'

const Gifs = ({ title, id, url }) => {
    return (
        <GifStyled>
            <Link to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                {/* <small>{id}</small> */}
                <img loading='lazy' src={url} alt={title}/>
            </Link>
        </GifStyled>
    )
}

const GifStyled = styled.div`
    text-decoration: none;

    h4 {
        text-transform: uppercase;
        color: #1f1f1f;
    }
`

export default Gifs