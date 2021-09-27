import { useParams } from 'react-router';
import useFetch from './useFetch';
// import the above from react-router-dom?

const BlogDetails = () => {
  const { id } = useParams();
  // 'http://localhost:8000/blogs' + id
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className='blog-details'>
      {isLoading && <div>Loading...</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.author}</h2>
          <div>
            {blog.body} — {blog.author}
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
