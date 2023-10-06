import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../state management/StateContext";
import { SignupUserInput } from "../authStore/authInterface/auth.interface";

// type Props = {};

const Registration: React.FC = () => {
  const { updateHide, loading, signup } = useAppContext();

  const [input, setInput] = useState<SignupUserInput>({
    username: "",
    courses: [],
    confirmPassword: "",
    password: "",
    phone: "",
    occupation: "",
    email: "",
    fullName: "",
  });

  const hideHandler = () => {
    updateHide(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const checkboxHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInput({ ...input, courses: [value] });
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(input);
  };

  return (
    <div className="reg">
      <div className="reg-container">
        <div className="inner-left">
          <Link to="/" onClick={hideHandler}>
            <h1>E-Quiz</h1>
          </Link>
          <img src="/image/sign-in.svg" alt="" />
        </div>
        <div className="inner-right">
          <form className="form-floating row g-3" onSubmit={submitHandler}>
            <div className="intro">
              <h1>Welcome!</h1>
              <p>Select and enter correct data to get registered</p>
            </div>
            <section className="form-floating col-md-6">
              <input
                type="text"
                name="username"
                className="form-control"
                id="floatingInput1"
                placeholder="username"
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingInput2">Username</label>
            </section>
            <section className="form-floating col-md-6">
              <input
                type="text"
                name="fullName"
                className="form-control"
                id="floatingInput3"
                placeholder="Full Name"
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">FullName</label>
            </section>
            <section className="form-floating col-md-6">
              <input
                type="email"
                name="email"
                className="form-control"
                id="floatingInput4"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Email</label>
            </section>
            <section className="form-floating col-md-6">
              <input
                type="number"
                name="phone"
                min={11}
                max={11}
                className="form-control"
                id="floatingInput5"
                placeholder="Phone"
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Phone Number</label>
            </section>
            <section className="form-floating col-md-6">
              <input
                type="password"
                name="password"
                className="form-control"
                id="floatingInput6"
                placeholder="Password"
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Password</label>
            </section>
            <section className="form-floating col-md-6">
              <input
                type="Password"
                name="confirmPassword"
                className="form-control"
                id="floatingInput7"
                placeholder="Confirm Password"
                required
                onChange={handleChange}
              />
              <label htmlFor="floatingInput">Confirm Password</label>
            </section>

            {/* <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div> */}
            <div className="col-md-12">
              <label htmlFor="inputState" className="form-label">
                Occupation
              </label>
              <select
                id="inputState"
                name="occupation"
                className="form-select"
                required
                onChange={handleSelectChange}
              >
                <option defaultValue="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Lawyer">Lawyer</option>
                <option value="Engr">Engr</option>
                <option value="Lecturer">Lecturer</option>
                <option value="Historian">Historian</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="inputState" className="form-label">
                Courses (
                <span style={{ fontStyle: "italic" }}> Pick only 3 </span>):
              </label>
              <br />
              <input
                type="checkbox"
                name="Computer"
                id="Computer"
                onChange={checkboxHandler}
              />{" "}
              Computer
              <input
                type="checkbox"
                name="C.R.S"
                id="C.R.S"
                style={{ marginInlineStart: "20px" }}
                onChange={checkboxHandler}
              />{" "}
              C.R.S
              <input
                type="checkbox"
                name="History"
                id="History"
                onChange={checkboxHandler}
                style={{ marginInlineStart: "20px" }}
              />{" "}
              History
              <input
                type="checkbox"
                name="English"
                id="English"
                onChange={checkboxHandler}
                style={{ marginInlineStart: "20px" }}
              />{" "}
              English
            </div>

            {/* <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="gridCheck"
            />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div> */}
            <div className="col-12">
              <button type="submit" className="btn btn-primary">
                {loading ? "processing" : "Register"}
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Sign in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
