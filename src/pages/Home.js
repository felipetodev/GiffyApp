import { useState } from 'react'
import ListOfGifs from 'components/ListOfGifs'
import { useLocation } from 'wouter'
import useGifs from 'hooks/useGifs'
import TrendingSearches from 'components/LazyTrending'

const Home = () => {
    const [ keyword, setKeyword ] = useState('')
    const [ path, pushLocation ] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(keyword)
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = (e) => {
        setKeyword(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type='text' value={keyword} />
            </form>
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