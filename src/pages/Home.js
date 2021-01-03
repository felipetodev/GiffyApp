import { useCallback } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import { useLocation } from 'wouter'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/LazyTrending'
import SearchForm from 'components/SearchForm'

const Home = () => {
    const [ path, pushLocation ] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = useCallback(({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
            <div className='app-results'>
                <h3>Última busqueda</h3>
                <ListOfGifs gifs={gifs} />
            </div>
            <h3>Los gifs más populares</h3>
            <div className='app-category'>
                <TrendingSearches />
            </div>
      </>
    )
}

export default Home