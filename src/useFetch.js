import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // changed from blogs, setBlogs, to data, setData
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log('url inside useFetch: ', url);

  useEffect(() => {
    const abortCont = new AbortController();
    // this functions every time there's a render or rerender,
    // when data loads and when a reactive var changes state
    // this is the ideal time to fetch so that the back end
    // matches what the user sees on the front end
    // fetch data, or communicate with authentication service
    // don't change the state inside useEffect, lest you cause an inf loop
    console.log('url inside useEffect: ', url);

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource.');
        }
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setData(data); // this won't cause an inf loop because we have an empty dependecy array
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted');
        } else {
          console.error(err.message);
          setIsLoading(false);
          setError(err.message);
        }
      });

    return () => {
      console.log('cleanup');
      abortCont.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
