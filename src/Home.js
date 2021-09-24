import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [name, setName] = useState('mario');
  // const [age, setAge] = useState(25);

  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);

    fetch(`http://localhost:8000/blogs/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json()) // or res.text()
      .then((res) => console.log(res));
  };

  useEffect(() => {
    // this functions every time there's a render or rerender,
    // when data loads and when a reactive var changes state
    // this is the ideal time to fetch so that the back end
    // matches what the user sees on the front end
    console.log('depending on name; use effect ran');
    console.log(name);
    // fetch data, or communicate with authentication service
    // don't change the state inside useEffect, lest you cause an inf loop
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource.');
        }

        return res.json();
      })
      .then((data) => {
        setBlogs(data); // this won't cause an inf loop because we have an empty dependecy array
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        // console.error(err.message);
        setIsLoading(false);
        setError(err.message);
      });
  }, []);

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
