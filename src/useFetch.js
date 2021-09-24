import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // changed from blogs, setBlogs, to data, setData
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    (url) => {
      // this functions every time there's a render or rerender,
      // when data loads and when a reactive var changes state
      // this is the ideal time to fetch so that the back end
      // matches what the user sees on the front end
      // fetch data, or communicate with authentication service
      // don't change the state inside useEffect, lest you cause an inf loop
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource.');
          }

          return res.json();
        })
        .then((data) => {
          setData(data); // this won't cause an inf loop because we have an empty dependecy array
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          // console.error(err.message);
          setIsLoading(false);
          setError(err.message);
        });
    },
    [url]
  );

  return { data, isLoading, error };
};

export default useFetch;
