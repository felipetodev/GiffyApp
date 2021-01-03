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
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-auto-rows: 250px;
    grid-template-rows: masonry;
    grid-auto-flow: row dense;
    gap: 6px;
    align-items: center;
    margin-top: 3rem;
`

export default ListOfGifs