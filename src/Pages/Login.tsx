// import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

// type Props = {};

const Login = () => {
  // const navigate = useNavigate();

  // const navigateHandler = () => {
  //   navigate('/dashboardHome')
  // }
  return (
    <div className="login">
      <div className="container">
        <Link to="/">
          <FaArrowLeft />
        </Link>
        <div className="inner">
          <form action="">
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter username"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Password:
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter password"
              />
            </div>
            <div className="btn-w d-grid gap-2">
              <Link to="/dashboard/Home" className="button">
                <button className="btn btn-primary" type="button">
                  LOGIN
                </button>
              </Link>
            </div>
            <p>
              Don't have an account yet? <Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
