import GlobalStyles from 'components/GlobalStyles'
import Detail from 'pages/Detail'
import Home from 'pages/Home'
import SearchResults from 'pages/SearchResults'
import { Link, Route } from 'wouter'
import StaticContext from 'context/StaticContext'
import { GifsContextProvider } from 'context/GifsContext'

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
            <h1>Giffy<span>APP 🔥</span></h1>
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
            <Route 
              component={() => <h1><strong>ERROR 404:</strong> ELL4 N0 T3 4M4 :/ 💔</h1>}
              path='/404'
            />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
