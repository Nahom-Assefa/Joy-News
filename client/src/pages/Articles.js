import React, { useState, useEffect } from "react";
import { gnewsArticles, gnewsTechnology, gnewsScience } from "../utils/API";

function FetchNews() {
  // console.log("process.env",process.env);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    gnewsArticles().then(
      (result) => {
        // setArticles(result);
        // console.log(result);
        setArticles(result);
        setIsLoaded(true);
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        // wait till last one for set is loaded true
        setIsLoaded(true);
        setError(error);
      }
    ); ///////////////;

    // gnewsScience().then(
    //   (result) => {
    //     // setArticles(result);
    //     console.log(result);
    //     totalArticles.push(result);
    //     console.log("totalArticles:", totalArticles);
    //     // set total articles to articles
    //     setArticles(totalArticles)
    //     console.log("Articles state:", articles)
    //     setIsLoaded(true);
    //   },
    //   // Note: it's important to handle errors here
    //   // instead of a catch() block so that we don't swallow
    //   // exceptions from actual bugs in components.
    //   (error) => {
    //     // wait till last one for set is loaded true
    //     setIsLoaded(true);
    //     setError(error);
    //   }
    // );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <h1>ARTICLES</h1>
        <p>read console for data</p>
        {/* <ul>
          {articles.map((articles) => (
            <li key={articles.title}>{articles.title}</li>
          ))}
        </ul> */}
      </>
    );
  }
}

export default FetchNews;
