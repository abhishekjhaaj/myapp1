import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) =>{
        setData(data)
        console.log(data);
    });
  }, [url]);

  return [data];
};

export default useFetch;
