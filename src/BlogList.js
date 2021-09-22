const BlogList = ({ blogs, category }) => {
  return (
    <div className='blog-list'>
      <h3>{category}</h3>
      {blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.author}</h2>
          <p>{blog.body}</p>
          <p>— {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
