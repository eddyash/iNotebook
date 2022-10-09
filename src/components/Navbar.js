import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
  }, [location]);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="navbar-brand" to="/">
          &#9998; iNotebook
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li
              className={`nav-item ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
          </ul>
          <Link
            className="btn btn-primary my-2 my-sm-0 mx-1"
            role="button"
            type="submit"
            to="/signup"
          >
            <i className="fa-solid fa-user-plus"></i> Sign-Up
          </Link>
          <Link
            className="btn btn-success my-2 my-sm-0 mx-2"
            role="button"
            type="submit"
            to="/login"
          >
            <i className="fa-solid fa-right-to-bracket"></i> Login
          </Link>
          <Link
            className="btn btn-danger my-2 my-sm-0 mx-1"
            role="button"
            type="submit"
            to="/"
          >
            <i className="fa-solid fa-right-from-bracket"></i> Log-Out
          </Link>
          <form className="form-inline my-2 my-lg-0 mx-2">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
