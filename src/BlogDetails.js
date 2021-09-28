import { useHistory, useParams } from 'react-router';
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

  const history = useHistory();

  const handleClick = () => {
    console.log('handleClick inside BlogDetails.js');
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/');
    });
  };

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
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
