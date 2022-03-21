import React, { useState, useEffect } from "react";
import Auth from "../utils/auth";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { SAVE_ARTICLE } from "../utils/mutations";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { newsArticles } from "../utils/API";
import Quotes from "../components/Quotes";

function HomeArticles() {
  // Check if logged in true or false with Auth.loggedIn();
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // Use this to test if .env works console.log("process.env",process.env);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [articles, setArticles] = useState([]);
  const [saveArticle] = useMutation(SAVE_ARTICLE);

  const handleSaveArticle = async (element) => {
    // console.log(element);
    // console.log("user.username:", user.username);
    // console.log("user.email:", user.email);
    // console.log("user._id:", user._id);
    // console.log("user.articles:", user.articles);
    // console.log("user.friends:", user.friends);

    saveArticle({
      variables: {
        title: element.title,
        content: element.content,
        description: element.description,
        image: element.image,
        url: element.url,
      },
    });
  };

  // Return next 4 articles
  const secondRow = () => {
    let secondArticles = [];

    for (let i = 1; i < 5; i++) {
      const element = articles[i];

      secondArticles.push(
        <p
          key={element.title}
          className="col-8 col-sm-8 col-md-6 col-lg-2 col-xl-2 m-2 m-3"
        >
          <strong>{element.title}</strong>
          <br />
          {element.description}
          <br />
          <button className="m-1 pageLinks">
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
           className="m-1 pageLinks"
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

  // Return the rest of the articles
  const thirdRow = () => {
    let thirdArticles = [];

    for (let i = 5; i < articles.length; i++) {
      const element = articles[i];

      thirdArticles.push(
        <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 mb-4 ms-1 no-gutters">
          <h2 key={element.title} className="col-12">
            <strong>{element.title}</strong>
          </h2>

          <img
            key={element.image}
            className="col-12 d-flex justify-content-center p-3"
            src={element.image}
            alt=""
          ></img>

          <p
            key={element.description}
            className="col-12 justify-content-center p-3"
          >
            {element.description}

            <br />
            <button className="pageLinks m-1">
              <a
                key={element.url}
                className="pageLinks m-1"
                href={element.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </button>
            <button
              className="pageLinks"
              onClick={() => {
                handleSaveArticle(element);
              }}
            >
              Save Article
            </button>
          </p>
        </div>
      );
    }

    return thirdArticles;
  };

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    newsArticles().then(
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
          className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mb-4 ms-1 no-gutters"
        >
          {articles[0].description}
          <br />
          <button className="m-1 pageLinks">
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
            className="m-1 pageLinks"
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
          className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-4 mb-4 ms-1 no-gutters"
          src={articles[0].image}
          alt=""
        ></img>

        {/* right section */}
        <Quotes />

        {/* divider */}
        <div className="col-12 d-flex justify-content-center">
          ________________________________________________________________________________________________________________
        </div>

        {/* Second row */}
        {secondRow()}

        {/* divider */}
        <div className="col-12 d-flex justify-content-center">
          ________________________________________________________________________________________________________________
        </div>

        {/* Third row */}
        {thirdRow()}

        {/* <section>{}</section> */}
      </main>
    );
  }
}

export default HomeArticles;
