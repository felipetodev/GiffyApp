import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import styled from 'styled-components'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })

    const handleNextPage = (e) => {
        setPage(prevPage => prevPage + 1)
    }
    
    return (
        <>
            {loading
                ? <Spinner />
                : <>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                </>
            }
            <ButtonStyled onClick={handleNextPage}>Siguiente página</ButtonStyled>
        </>
    )
}

const ButtonStyled = styled.button`
    background: #1f1f1f;
    color: white;
    font-size: 1.05rem;
    padding: 1rem 3rem;
`

export default SearchResults