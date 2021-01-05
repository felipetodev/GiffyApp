import ListOfGifs from 'components/ListOfGifs'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/LazyTrending'
import SearchForm from 'components/SearchForm'
import { Helmet } from 'react-helmet'

const Home = () => {
    const { gifs } = useGifs()

    return (
        <>
            <Helmet>
                <title>Home | Giffy</title>
            </Helmet>
            <header>
                <SearchForm />
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