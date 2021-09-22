const Navbar = () => {
  const style = {
    color: 'white',
    backgroundColor: '#f1356d',
    borderRadius: '8px',
  };

  return (
    <nav className='navbar'>
      <h1>The Metanoia Blog</h1>
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/create' style={style}>
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
