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
            <img src='' alt='Giffy-Logo' />
          </Link>
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

export default App;
