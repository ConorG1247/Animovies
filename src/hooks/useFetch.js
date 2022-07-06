import { useEffect, useState } from "react";

function useFetch(url, method, body) {
  const [data, setData] = useState(null);
  const [error, setErorr] = useState(null);

  useEffect(() => {
    if (url) {
      fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: body,
      })
        .then((res) => res.json())
        .then((data) => setData(data))
        .then(() => setErorr(false))
        .catch((err) => setErorr(err));
    }
  }, [url, method, body]);

  if (error) {
    console.log(error);
    console.log(data);
    return <p>Error!</p>;
  }
    return { data };
}

export default useFetch;
