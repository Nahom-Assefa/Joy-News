import React, { useState, useEffect } from "react";
import { gnewsArticles } from "../utils/API";
import Auth from "../utils/auth";

function HomeArticles() {
  const loggedIn = Auth.loggedIn();
  // Use this to test if
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
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <main className="row justify-content-evenly">
        {/* headline article, gets it's own row */}
        {/* <div key={articles[0].title}> */}

        <h2 className="col-12 d-flex justify-content-center p-3">
          {articles[0].title}
        </h2>
        {/* left side */}
        <p className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 card no-gutters">
          {articles[0].description}{" "}
          <div className="d-flex justify-content-around m-2 mt-auto ">
            {" "}
            <button>
              <a
                className="pageLinks"
                href={articles[0].url}
                target="_blank"
              >
                Visit Site
              </a>
            </button>
          </div>
        </p>

        {/* middle image */}
        <img
          className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 card no-gutters"
          src={articles[0].image}
          alt=""
        ></img>

        {/* right section */}
        <p className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 card no-gutters">
          {articles[0].content} {/* add conditional rendering? */}
          <button>Save Article</button>
        </p>

        {/* </div> */}
        {/* <ul>
          {articles.map((articles) => (
            <li key={articles.title}>{articles.title}</li>
          ))}
        </ul> */}
        <section>
          {articles.map((articles) => (
            <div key={articles.title}>{articles.title}</div>
          ))}
        </section>
      </main>
    );
  }
}

export default HomeArticles;
