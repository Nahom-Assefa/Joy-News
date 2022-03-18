import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import dateBuilder from "../../utils/dateBuilder";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="row">
      <div className="col-2">{dateBuilder(0)}</div>
      <nav className="offset-8 col-2">
        {Auth.loggedIn() ? (
          <>
            <Link className="pageLinks" to="/profile"> Profile </Link>
            <a className="pageLinks" href="/" onClick={logout}>
              Logout 
            </a>
          </>
        ) : (
          <>
            <Link className="pageLinks" to="/login"> Login </Link>
            <Link className="pageLinks" to="/signup"> Signup </Link>
          </>
        )}
      </nav>

      <Link to="/" className="offset-4 col-4">
        <h1 className="pageLinks oldFont col-12 d-flex justify-content-center">Joy News</h1>
      </Link>
      <div className="col-12 d-flex justify-content-center">________________________________________________________________________________________________________________</div>
      <div className="col-12 d-flex justify-content-center">________________________________________________________________________________________________________________</div>
    </header>
  );
};

export default Header;
