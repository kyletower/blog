const Create = () => {
  return (
    <div className='create'>
      <h2>Add a New Blog</h2>
      <form>
        <label>Blog Title:</label>
        <input type='text' requried />

        <label>Blog Body:</label>
        <textarea required></textarea>

        <label>Blog Author:</label>
        <select>
          <option value='otto'>otto</option>
          <option value='kyle'>kyle</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default Create;
