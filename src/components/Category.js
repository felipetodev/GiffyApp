import { Link } from 'wouter'
import styled from 'styled-components'

const Category = ({ name, options }) => {
    return (
        <CategoryStyled>
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
        </CategoryStyled>
    )
}

const CategoryStyled = styled.div`

    ul {
        display: grid;
        gap: 2rem;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        list-style: none;
    }

    a {
        background: rebeccapurple;
        padding: 0.5rem;
        color: #fff;
    }
`

export default Category