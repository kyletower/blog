import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // const [name, setName] = useState('mario');
  // const [age, setAge] = useState(25);

  const [blogs, setBlogs] = useState([
    { body: 'Come and welcome to Jesus Christ.', author: 'Doug Wilson', id: 1 },
    {
      body: 'God is most glorified in you when you are most satisfied in him.',
      author: 'John Piper',
      id: 2,
    },
    {
      body: 'You are far worse than you realize and yet more loved than you would dare hope',
      author: 'Tim Keller',
      id: 3,
    },
  ]);

  // first param is automatically receiving event
  // const handleClick = (e) => {
  //   console.log('hello, handleClick');
  //   console.log(e);
  //   setName('luigi');
  //   setAge(30);
  // };

  // const handleClickAgain = (e, name) => {
  //   console.log(`hello handleClickAgain ${name}`);
  //   console.log(e);
  // };

  return (
    <div className='home'>
      <h2>Home Page</h2>
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain(e, 'mario')}>
        Click me too!
      </button>
      <p>
        {name} is {age} years old
      </p> */}
      <BlogList blogs={blogs} />
    </div>
  );
};

export default Home;
