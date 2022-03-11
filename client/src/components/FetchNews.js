import React, { useState, useEffect } from 'react';

function FetchNews() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      // fetch(`https://api.openweathermap.org/data/2.5/forecast?q=minneapolis&appid=cdda6b75856c86ce1bea221c999009fa&units=imperial`)
      fetch("https://gnews.io/api/v4/search?q=technology&token=9919faf414853020ba5e5853ccf8ce53")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            ///////////
            console.log(result);
            ////////
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        // <ul>
        //   {articles.map(article => (
        //     <li key={article.title}>
        //       {article.title}
        //     </li>
        //   ))}
        // </ul>
        <h1></h1>
      );
    }
  }

  export default FetchNews;