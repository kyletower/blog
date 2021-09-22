const Home = () => {
  // first param is automatically receiving event
  const handleClick = (e) => {
    console.log('hello, ninjas');
    console.log(e);
  };

  const handleClickAgain = (e, name) => {
    console.log(`hello ${name}`);
    console.log(e);
  };

  return (
    <div className='home'>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain(e, 'mario')}>
        Click me too!
      </button>
    </div>
  );
};

export default Home;
