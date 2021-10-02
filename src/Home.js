import BlogList from './BlogList';
import { useState } from 'react';
import useFetch from './useFetch';

const Home = ({ query, setQuery }) => {
  // grab data: but call it blogs.
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/blogs');

  const [category, setCategory] = useState('All Blogs');

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
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
