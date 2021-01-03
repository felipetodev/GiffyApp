import styled from 'styled-components'
import Gif from './Gif'

const ListOfGifs = ({ gifs }) => {
    return (
        <ListOfGifsStyled className='grid-wrap'>
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
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`

export default ListOfGifs