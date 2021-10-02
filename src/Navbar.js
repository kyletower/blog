import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';

const Navbar = ({ query, setQuery }) => {
  const style = {
    color: 'white',
    backgroundColor: '#2cb34c',
    borderRadius: '8px',
  };

  // const [query, setQuery] = useState('');

  // useEffect(() => {
  //   console.log('useEff in Navbar.js');
  // }, [query]);

  return (
    <nav className='navbar'>
      <h1>The Metanoia Blog</h1>
      <div className='search'>
        {/* <label>Search:</label> */}
        <input
          type='text'
          required
          placeholder='Search...'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/create' style={style}>
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
