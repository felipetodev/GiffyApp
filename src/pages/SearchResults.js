import { useCallback, useRef, useEffect } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import styled from 'styled-components'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

const SearchResults = ({ params }) => {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading ? null : externalRef,
        once: false,
    })

    // const handleNextPage = () => {
    //     setPage(prevPage => prevPage + 1)
    // }
    // const handleNextPage = () => console.log('next page')
        
        const debounceHandleNextPage = useCallback(debounce(
            () => setPage(prevPage => prevPage + 1), 500
        ), [setPage])

    useEffect(() => {
        // console.log(isNearScreen)
        if(isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])
    
    return (
        <>
            {loading
                ? <Spinner />
                : <>
                    <h3>{decodeURI(keyword)}</h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                </>
            }
            {/* <ButtonStyled onClick={handleNextPage}>Siguiente página</ButtonStyled> */}
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