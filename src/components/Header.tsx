import React from "react";
import { Link, useNavigate } from "react-router-dom";

// type Props = {};

const Header: React.FC = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  return (
    <nav>
      <h1>logo</h1>

      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">
            Features
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>

      <div className="login">
        <button
          className="btn btn-primary"
          onClick={loginHandler}
          type="button"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Header;
