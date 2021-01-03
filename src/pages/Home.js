import ListOfGifs from 'components/ListOfGifs'
import { useLocation } from 'wouter'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/LazyTrending'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

const Home = () => {
    const [ path, pushLocation ] = useLocation()
    const { gifs } = useGifs()

    const handleSubmit = ({ keyword }) => {
        pushLocation(`/search/${keyword}`)
    }

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <header>
                <SearchForm onSubmit={handleSubmit} />
            </header>
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