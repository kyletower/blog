import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const [name, setName] = useState('mario');
  // const [age, setAge] = useState(25);

  // grab data: but call it blogs.
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/blogs');

  const handleDelete = (id) => {
    // const newBlogs = blogs.filter((blog) => blog.id !== id);
    // setBlogs(newBlogs);
    // fetch(`http://localhost:8000/blogs/${id}`, {
    //   method: 'DELETE',
    // })
    //   .then((res) => res.json()) // or res.text()
    //   .then((res) => console.log(res));
  };

  useEffect(() => {
    console.log('depending on blog');
    console.log('use effect ran!');
  }, [blogs]);
  // first param is automatically receiving event
  const handleClick = (e) => {
    console.log('hello, handleClick; setting name to luigi');
    console.log(e);
    setName('luigi');
    // setAge(30);
  };

  // const handleClickAgain = (e, name) => {
  //   console.log(`hello handleClickAgain ${name}`);
  //   console.log(e);
  // };

  return (
    <div className='home'>
      <h2>Home Page</h2>
      {
        <button onClick={handleClick}>Change Name</button>

        /*<button onClick={(e) => handleClickAgain(e, 'mario')}>
        Click me too!
      </button>
      */
      }
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <p>{name}</p>
      {blogs && (
        <BlogList
          blogs={blogs}
          category='All Blogs'
          handleDelete={handleDelete}
        />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'Doug Wilson')}
          category="Doug's Blogs"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Home;
