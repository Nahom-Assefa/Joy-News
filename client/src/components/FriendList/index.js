import React from 'react';
import { Link } from 'react-router-dom';

// const FriendList = ({ friendCount, username, friends }) => {
  const FriendList = ({ username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="">{username}, you have 0 friends. </p>;
  }

  return (
    <div>
      <h5>
        {username}'s friends
      </h5>
      {friends.map(friend => (
        <div key={friend._id}>
          <p key={friend.username}>{friend.username}</p>
        <button className="pageLinks" key={friend._id}>
          {/* <Link to={`/profile/${friend.username}`}>{friend.username}</Link> */}
          <Link to={`/profile/${friend._id}`} className="pageLinks">Friend ID: {friend._id}</Link>
        </button>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
