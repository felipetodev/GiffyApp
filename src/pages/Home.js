import { useState, useEffect } from 'react'
import getGifs from '../services/getGifs'
import ListOfGifs from '../components/ListOfGifs'
import { Link, useLocation } from 'wouter'
import useGifs from '../hooks/useGifs'

const POPULAR_GIFS = [
    'Attack on titan',
    'Eren',
    'Mikasa',
    'Levi',
]

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
            <h3>Última busqueda</h3>
            <ListOfGifs gifs={gifs} />
            <h3>Los gifs más populares</h3>
            <ul>
                {POPULAR_GIFS.map(popularGif => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>
                            Gifs de {popularGif}
                        </Link>
                    </li>
                ))}
            </ul>
      </>
    )
}

export default Home