import React from "react";
import { Link } from "react-router-dom";

const FriendList = ({ username, friends }) => {
  if (!friends || !friends.length) {
    return <p className="">{username}, you have 0 friends. </p>;
  }

  return (
    <div>
      <h5>{username}'s friends</h5>
      {friends.map((friend) => (
        <div key={friend._id}>
          <button className="pageLinks m-1" key={friend._id}>
            <Link to={`/profile/${friend._id}`} className="pageLinks">
              {friend.username}
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
};

export default FriendList;
