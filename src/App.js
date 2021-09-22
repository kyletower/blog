import './App.css';

function App() {
  const title = 'Welcome to my blog!';
  const likes = 37;
  const link = 'https://duckduckgo.com';

  return (
    <div className='App'>
      <div className='content'>
        <h1>{title}</h1>
        <p>Liked {likes} times.</p>
        <p>Viewed {Math.random() * 10} times</p>
        <a href={link}>Duck Duck Go!</a>
      </div>
    </div>
  );
}

export default App;
