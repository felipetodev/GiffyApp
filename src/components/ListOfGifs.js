import styled from 'styled-components'
import Gif from './Gif'

const ListOfGifs = ({ gifs }) => {
    return (
        <ListOfGifsStyled>
            {
            gifs.map(singleGif => (
                <Gif
                key={singleGif.id}
                id={singleGif.id}
                title={singleGif.title}
                url={singleGif.url}
                />
            ))
            }
        </ListOfGifsStyled>
    )
}

const ListOfGifsStyled = styled.div`
    min-height: 100vh;
`

export default ListOfGifs