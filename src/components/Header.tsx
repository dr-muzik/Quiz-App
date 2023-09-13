import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../state management/StateContext";

// type Props = {};

const Header: React.FC = () => {
  const { updateHide } = useAppContext();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };

  const hideClass = () => {
    updateHide(false);
  };
  const showClass = () => {
    updateHide(true);
  };

  return (
    <header>
      <div className="container">
        <div className="link">
          <Link to="/" onClick={showClass}>
            <h1>logo</h1>
          </Link>
        </div>
        <nav>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={showClass}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={hideClass}>
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li> */}
          </ul>

          <div className="login">
            <button className="btn" onClick={loginHandler} type="button">
              Login
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
