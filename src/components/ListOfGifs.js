import Gif from './Gif'

const ListOfGifs = ({ gifs }) => {
    return (
        <>
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
        </>
    )
}

export default ListOfGifs