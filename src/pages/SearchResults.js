import { useCallback, useRef, useEffect } from 'react'
import Spinner from 'components/Spinner'
import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import styled from 'styled-components'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

const SearchResults = ({ params }) => {
    const { keyword, rating = 'g' } = params
    const { loading, gifs, setPage } = useGifs({ keyword, rating })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({ 
        externalRef: loading ? null : externalRef,
        once: false,
    })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

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
                    <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={title} />
                    </Helmet>
                    <header>
                        <SearchForm 
                            initialKeyword={keyword} 
                            initialRating={rating}
                        />
                    </header>
                    <TitleStyled>tu búsqueda: <span>{decodeURI(keyword)}</span> 👈</TitleStyled>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={externalRef}></div>
                </>
            }
            {/* <ButtonStyled onClick={handleNextPage}>Siguiente página</ButtonStyled> */}
        </>
    )
}

const TitleStyled = styled.h3`
    padding: 2rem 0;
    text-transform: uppercase;
    color: #52e2ca;

    span {
        color: rebeccapurple;
    }
`

// const ButtonStyled = styled.button`
//     background: #1f1f1f;
//     color: white;
//     font-size: 1.05rem;
//     padding: 1rem 3rem;
// `

export default SearchResults