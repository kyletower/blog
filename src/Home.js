import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('mario');
  const [age, setAge] = useState(25);

  // first param is automatically receiving event
  const handleClick = (e) => {
    console.log('hello, handleClick');
    console.log(e);
    setName('luigi');
    setAge(30);
  };

  const handleClickAgain = (e, name) => {
    console.log(`hello handleClickAgain ${name}`);
    console.log(e);
  };

  return (
    <div className='home'>
      <h2>Home Page</h2>
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain(e, 'mario')}>
        Click me too!
      </button>
      <p>
        {name} is {age} years old
      </p>
    </div>
  );
};

export default Home;
