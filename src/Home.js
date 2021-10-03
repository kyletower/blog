import BlogList from './BlogList';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import { getBlogs, db } from './FirebaseConfig';

const Home = ({ query, setQuery }) => {
  // grab data: but call it blogs.
  // const { data, isLoading, error } = useFetch('');

  const [category, setCategory] = useState('All Blogs');

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    async function fetchMyAPI() {
      let blogData = await getBlogs(db);
      // response = await response.json()
      setBlogs(blogData);
    }

    fetchMyAPI();
  }, []);

  return (
    <div className='home'>
      {/* {error && <div>{error}</div>} */}
      {/* {isLoading && <div>Loading...</div>} */}
      {blogs && query === '' && category === 'All Blogs' && (
        <BlogList blogs={blogs} category={category} />
      )}
      {/* use below for a search */}
      {blogs && query && (
        <BlogList
          blogs={blogs.filter(
            (blog) =>
              blog.author.includes(query) ||
              blog.body.includes(query) ||
              blog.title.includes(query)
          )}
          category='Search Results...'
        />
      )}
    </div>
  );
};

export default Home;
