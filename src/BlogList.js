import { Link } from 'react-router-dom';

const BlogList = ({ blogs, category, handleDelete }) => {
  return (
    <div className='blog-list'>
      <h3>{category}</h3>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.author}</h2>
            <p>{blog.body}</p>
            <p>— {blog.author}</p>
          </Link>

          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
