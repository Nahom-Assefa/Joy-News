import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";
// import ThoughtList from "../components/ThoughtList";
// import FriendList from "../components/FriendList";
// import ThoughtForm from '../components/ThoughtForm';
import Auth from "../utils/auth";
// import FetchNews from "../components/FetchNews";
import HomeArticles from "./HomeArticles.js"

const Home = () => {
  // use useQuery hook to make query request
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  // const { data: userData } = useQuery(QUERY_ME_BASIC);
  // // optional chaining
  // const thoughts = data?.thoughts || [];
  // console.log(thoughts);
  const loggedIn = Auth.loggedIn();

  return (
    <>
      {/* Leave off to avoid extra API calls */}
      {/* <FetchNews /> */}
      <HomeArticles />

    </>
  );
};

export default Home;
