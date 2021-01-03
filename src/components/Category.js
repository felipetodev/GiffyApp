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
    h3 {
        color: white;
        font-weight: bold;
        margin: 0.7rem 0;
    }

    ul {
        list-style-position: inside;
        display: flex;
        flex-wrap: wrap;
    }

    li {
        list-style: none;
        padding: 0.3rem;
        margin: 0.2rem;
        font-size: 1.2rem;
        font-weight: bold;
    }

    a {
        color: inherit;
        font-size: 1rem;
        text-decoration: none;
        font-size: 1rem;
        transition: color ease-in 0.1s;
    }

    li:nth-child(5n + 1) {
        background: #ff6666;
    }

    li:nth-child(5n + 2) {
        background: #53cdf2;
    }

    li:nth-child(5n + 3) {
        background: #fff35c;
        color: #9933ff;
    }

    li:nth-child(5n + 4) {
        background: #00ff99;
    }

    li:nth-child(5n + 5) {
        background: #9933ff;
    }
`

export default Category