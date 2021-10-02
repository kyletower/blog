import { useHistory, useParams } from 'react-router';
// import the above from react-router-dom? What's the diff?
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isLoading,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  const history = useHistory();

  const handleClickDelete = () => {
    fetch(`http://localhost:8000/blogs/${blog.id}`, {
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
          <h2>{blog.title}</h2>
          <div>{blog.body}</div>
          <p>— {blog.author}</p>
          <button onClick={handleClickDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
