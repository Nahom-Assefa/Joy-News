import React, { useState, useEffect } from "react";

function FetchNews() {
  // console.log("process.env",process.env);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch(
      `https://gnews.io/api/v4/search?q=technology&token=${process.env.REACT_APP_GNEWSAPI}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setArticles(result);
          setIsLoaded(true);
          console.log(result);
          console.log(process.env);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>

        {/* <ul>
          {articles.articles.map((articles) => (
            <li key={articles.title}>{articles.title}</li>
          ))}
        </ul> */}

      </>
    );
  }
}

export default FetchNews;
