import { useState, useEffect } from 'react';
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

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    // this functions every time there's a render or rerender,
    // when data loads and when a reactive var changes state
    console.log('use effect ran');
    // fetch data, or communicate with authentication service
    // don't change the state inside useEffect, lest you cause an inf loop
  });
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
      <BlogList
        blogs={blogs}
        category='All Blogs'
        handleDelete={handleDelete}
      />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'Doug Wilson')}
        category="Doug's Blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
