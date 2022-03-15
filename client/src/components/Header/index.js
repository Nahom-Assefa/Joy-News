import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="row">
      <nav className="offset-10 col-2">
        {Auth.loggedIn() ? (
          <>
            <Link to="/profile">Profile</Link>
            <a href="/" onClick={logout}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link className="pageLinks" to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>

      <Link to="/" className="offset-4 col-4">
        <h1 className="oldFont col-12 d-flex justify-content-center p-3">Joy News</h1>
      </Link>
    </header>
  );
};

export default Header;
