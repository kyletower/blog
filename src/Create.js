import { useState } from 'react';
import { useHistory } from 'react-router';
import { db, createBlog } from './FirebaseConfig';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Otto');
  const [isLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    // setIsLoading(true);

    // fetch('http://localhost:8000/blogs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(blog),
    // }).then(() => {
    //   console.log('new blog added');
    //   setIsLoading(false);
    //   history.push('/');
    // });
    await createBlog(db, blog);
    history.push('/');
  };

  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value='Brandon'>Brandon</option>
          <option value='Otto'>Otto</option>
        </select>
        {!isLoading ? (
          <button>Add Blog</button>
        ) : (
          <button disabled>Adding Blog...</button>
        )}
      </form>
    </div>
  );
};

export default Create;
