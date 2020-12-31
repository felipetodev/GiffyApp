import { Link } from 'wouter'

const Category = ({ name, options }) => {
    return (
        <>
            <h3>{name}</h3>
            <ul>
                {options.map(singleOption => (
                    <li key={singleOption}>
                        <Link to={`/search/${singleOption}`}>
                            {singleOption}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Category