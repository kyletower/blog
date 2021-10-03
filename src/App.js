import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { useState, useEffect } from 'react';
import './FirebaseConfig';

function App() {
  const [query, setQuery] = useState('');

  useEffect(() => {
    console.log('useEff in App.js');
  }, [query]);

  return (
    <Router>
      <div className='App'>
        {/* This Navbar will show on all routes */}
        <Navbar query={query} setQuery={setQuery} />
        <div className='content'>
          {/* switch guarantees only 1 route is viewed at a time */}
          <Switch>
            <Route exact path='/'>
              <Home query={query} setQuery={setQuery} />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/blogs/:id'>
              <BlogDetails />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
