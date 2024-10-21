import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user }) {
  const alwaysOption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
    </>
  );

  const authorizedOptions = (
    <>
      <li>
        <Link to="">Sign Out</Link>
      </li>
    </>
  );

  const unauthorizedOptions = (
    <>
      <li>
        <Link to="/signin">Sign In</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </>
  );

  return (
    <>
      <nav>
        <ul>
          {alwaysOption}
          {user ? authorizedOptions : unauthorizedOptions}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;