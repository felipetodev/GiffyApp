import Gif from 'components/Gif'
import Spinner from 'components/Spinner'
import useSingleGif from 'hooks/useSingleGif'
import { Redirect } from 'wouter'
import { Helmet } from 'react-helmet'

const Detail = ({ params }) => {
    const { gif, isLoading, isError } = useSingleGif({ id: params.id })
    // console.log(gif)
    const title = gif ? gif.title : ''

    if(isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner />
            </>
        )
    }

    if(isError) return <Redirect to='/404' />
    if(!gif) return null

    return (
        <>
            <Helmet>
                <title>{title} | Giffy</title>
                <meta name="description" content={title} />
            </Helmet>
            <h3>{gif.title}</h3>
            <Gif { ...gif } />
        </>
    )
}

export default Detail