import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
  const title = 'Welcome to my blog!';
  const likes = 37;
  const link = 'https://duckduckgo.com';

  return (
    <Router>
      <div className='App'>
        {/* This Navbar will show on all routes */}
        <Navbar />
        <div className='content'>
          {/* switch guarantees only 1 route at a time is viewed */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
          <p>--Inside App.js--</p>
          <h1>{title}</h1>
          <p>Liked {likes} times.</p>
          <p>Viewed {Math.random() * 10} times</p>
          <a href={link}>Duck Duck Go!</a>
        </div>
      </div>
    </Router>
  );
}

export default App;
