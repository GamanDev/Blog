import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsPending(false);
        setData(data);
        setError(null);
      })
      .catch((error) => {
        setIsPending(false);
        setError('Woops. Error. Sorry');
      });

    return () => console.log('clean UP');
  }, [url]);
  return { data, isPending, error };
};
export default useFetch;
