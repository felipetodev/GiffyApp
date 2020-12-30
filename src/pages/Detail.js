import { useContext } from 'react'
import StaticContext from '../context/StaticContext'

const Detail = ({ params }) => {
    const context = useContext(StaticContext)
    console.log(context)

    const { id } = params
    return (
        <h4>Pagina Detail - Consultaste ID: <br/> {id} </h4>
    )
}

export default Detail