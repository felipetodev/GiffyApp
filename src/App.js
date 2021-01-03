import GlobalStyles from 'components/GlobalStyles'
import Detail from 'pages/Detail'
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults'
import { Link, Route } from 'wouter'
import StaticContext from 'context/StaticContext'
import { GifsContextProvider } from 'context/GifsContext'
import styled from 'styled-components'

function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'felipetodev',
        blablabla: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <LogoStyled>Giffy<span>APP 🔥</span></LogoStyled>
          </Link>
          <GlobalStyles />
          <GifsContextProvider>
            <Route 
              component={Home}
              path='/'
            />
            <Route 
              component={SearchResults}
              path='/search/:keyword'
            />
            <Route 
              component={Detail}
              path='/gif/:id'
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

const LogoStyled = styled.h1`
  display: block;
  padding: 1rem 0;
  font-size: 3rem;
  color: rebeccapurple;
  text-align: center;
  cursor: pointer;

  span {
    color: white;
    font-size: 1rem;
  }

  &:hover {
    color: #52e2ca;
  }
`

export default App;
