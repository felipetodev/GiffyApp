import Detail from './pages/Detail'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import { Link, Route } from 'wouter'
import StaticContext from './context/StaticContext'

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
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
