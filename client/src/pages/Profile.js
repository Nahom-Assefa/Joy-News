import { Redirect, useParams } from "react-router-dom";
import { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { ADD_COMMENT, DELETE_ARTICLE } from "../utils/mutations";
import Auth from "../utils/auth";
import FriendList from "../components/FriendList";

const Profile = () => {
  const [commentText, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);
const [addComment] = useMutation(ADD_COMMENT)
  const { _id: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { _id: userParam },
    // Get data with a new fetch each time, not the cache
    fetchPolicy: "network-only",
  });

  const user = data?.me || data?.user || {};
  const [deleteArticle] = useMutation(DELETE_ARTICLE);

  // redirect to personal profile page if username is the logged-in user's
  if (Auth.loggedIn() && Auth.getProfile().data._id === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this page. Use the navigation links
        above to sign up or log in!
      </h4>
    );
  }
  const handleChange = event => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };
  
  const handleFormSubmit = async (articleId) => {
    // event.preventDefault();
    try {
      await addComment({
        variables: { commentText, articleId},
      });
      // clear form value
      setBody('');
      setCharacterCount(0);

      
    } catch (error) {
      console.log(error)
    }

  };



  const handleDeleteArticle = async (articleId) => {
    console.log("Delete article with ID:", articleId);
    await deleteArticle({
      variables: { articleId },
    });
    window.location.reload();
  };

  return (
    <main className="row justify-content-evenly">
      <h2 className="col-12 d-flex justify-content-center p-3">
        Viewing {userParam ? `${user.username}'s` : "your"} profile.
        {console.log(user.username, "username")}
      </h2>

      <div className="col-12 col-lg-3  d-flex justify-content-center mb-3">
        <FriendList username={user.username} friends={user.friends} />
      </div>

      <h2 className="col-12 d-flex justify-content-center p-3">
        Your saved articles:
      </h2>
      {console.log(user, "this is userrr")}
      {user.articles.map((articles) => (
        <div
          className="col-12 col-sm-12 col-md-7 col-lg-7 col-xl-7 mb-4 ms-1 no-gutters"
          key={articles._id}
        >
          <h2 key={articles.title} className="col-12">
            {articles.title}
          </h2>

          <img
            key={articles.image}
            className="col-12 d-flex justify-content-center p-3"
            src={articles.image}
            alt=""
          ></img>

          <p
            key={articles.description}
            className="col-12 justify-content-center p-3"
          >
            {articles.description}
            <br />
            <button className="m-1 pageLinks">
              <a
                key={articles.url}
                className="pageLinks"
                href={articles.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit Site
              </a>
            </button>
            <button
              className="m-1 pageLinks"
              onClick={() => {
                handleDeleteArticle(articles._id);
              }}
            >
              Delete Article
            </button>
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-stretch"
            // onSubmit={handleFormSubmit}
            onSubmit={()=>{
              handleFormSubmit(articles._id, commentText)
            }}
          >
            <textarea
              placeholder="Here's a new comment..."
              value={commentText}
              className="form-input col-12 col-md-9"
              onChange={handleChange}
            ></textarea>
            <button className="btn col-12 col-md-3" type="submit">
              Submit
            </button>
          </form>
        </div>
      ))}
    </main>
  );
};

export default Profile;
