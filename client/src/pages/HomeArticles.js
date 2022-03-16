import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";

import { gnewsArticles } from "../utils/API";
import Quotes from "../components/Quotes";
import SingleArticle from "../pages/SingleArticle";

function HomeArticles() {
  const loggedIn = Auth.loggedIn();
  // Use this to test if
  // console.log("process.env",process.env);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);

  const handleSaveArticle = async (element) => {
    console.log(element);
  };

  // iterate through next 4 articles
  const secondRow = () => {
    let secondArticles = [];

    for (let i = 1; i < 5; i++) {
      const element = articles[i];

      secondArticles.push(
        <p
          key={element.title}
          className="col-5 col-sm-5 col-md-5 col-lg-2 col-xl-2 m-2"
        >
          <strong>{element.title}</strong>
          <br />
          {element.description}
          <br />
          <button>
            <a
              key={element.url}
              className="pageLinks"
              href={element.url}
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </button>
          <button
            onClick={() => {
              handleSaveArticle(element);
            }}
          >
            Save Article
          </button>
        </p>
      );
    }

    return secondArticles;
  };

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
    // else if conditional to check if an article is selected?
    // return that article as a component, passing in the index
  } else {
    return (
      <main className="row justify-content-evenly">
        {/* headline article */}
        <h2
          key={articles[0].title}
          className="col-12 d-flex justify-content-center p-3"
        >
          {articles[0].title}
        </h2>

        {/* left side */}

        <p
          key={articles.description}
          className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 card no-gutters"
        >
          {articles[0].description}{" "}
          <button>
            <a
              key={articles[0].url}
              className="pageLinks"
              href={articles[0].url}
              target="_blank"
              rel="noreferrer"
            >
              Visit Site
            </a>
          </button>
          <button
            onClick={() => {
              handleSaveArticle(articles[0]);
            }}
          >
            Save Article
          </button>
        </p>

        {/* middle image */}
        <img
          key={articles.image}
          className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-4 mb-4 ms-1 card no-gutters"
          src={articles[0].image}
          alt=""
        ></img>

        {/* right section */}
        <Quotes />

        {/* divider */}
        <div className="col-12 d-flex justify-content-center">
          ________________________________________________________________________________________________________________
        </div>

        {/* second row */}
        {secondRow()}

        <section>{}</section>
      </main>
    );
  }
}

export default HomeArticles;
