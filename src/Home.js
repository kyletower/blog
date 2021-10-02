import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // grab data: but call it blogs.
  const {
    data: blogs,
    isLoading,
    error,
  } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} category='All Blogs' />}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'Doug Wilson')}
          category='Douglas Wilson Blogs'
        />
      )}
    </div>
  );
};

export default Home;
