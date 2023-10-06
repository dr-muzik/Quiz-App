// import React from "react";
// import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useAppContext } from "../state management/StateContext";
import { useState } from "react";
// import { useMutation } from "@apollo/client";
// import { LOGIN } from "../apollo/queries/auth.query";
// import Cookies from "js-cookie";
// import { apollo } from "../apollo";
import { LoginUserInput } from "../authStore/authInterface/auth.interface";
// import { TOKEN_NAME } from "../utils/constants";
// import { useAuthContext } from "../authStore/authInterface/Auth.context";

const Login = () => {
  const { hide, updateHide, login, loading, singleUser } = useAppContext();
  // const { login, loading } = useAuthContext();

  const [input, setInput] = useState<LoginUserInput>({
    username: "",
    password: "",
  });

  const hideHandler = () => {
    updateHide(true);
  };

  const showPasswordHandler = () => {
    updateHide(!hide);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(input);

    console.log(input);
    console.log(singleUser);
  };

  return (
    <div className="login">
      <div className="containers">
        <div className="inner-left">
          <Link to="/" onClick={hideHandler}>
            <h1>E-Quiz</h1>
          </Link>
          <img src="/image/sign-in.svg" alt="" />
        </div>
        <div className="inner-right">
          <div className="intro">
            <h1>Welcome!</h1>
            <p>Enter details to login</p>
          </div>
          <form onSubmit={submitHandler}>
            <div className="mb-3">
              <label htmlFor="formGroupExampleInput" className="form-label">
                Username:
              </label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Enter username"
                onChange={handleChange}
              />
            </div>
            <div className="password mb-3">
              <label htmlFor="formGroupExampleInput2" className="form-label">
                Password:
              </label>
              <input
                type={`${!hide ? "text" : "password"}`}
                name="password"
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter password"
                onChange={handleChange}
              />
              {!hide ? (
                <p className="pass" onClick={showPasswordHandler}>
                  hide
                </p>
              ) : (
                <p className="pass" onClick={showPasswordHandler}>
                  show
                </p>
              )}
            </div>
            <div className="btn-w d-grid gap-2">
              <button className="btn btn-primary" type="submit">
                {loading ? "processing" : "LOGIN"}
              </button>
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
