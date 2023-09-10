import React from "react";
import { Link } from "react-router-dom";

// type Props = {}

const Quiz: React.FC = () => {
  return (
    <div className="container-main">
      <h4>The Courses available for the quiz are:</h4>
      <div className="container-inner">
        <ul>
          <li>
            <Link to="/gameInt/C.R.S">C.R.S</Link>
          </li>
          <li>
            {" "}
            <Link to="/gameInt/Computer-Studies">COS 105</Link>
          </li>
          <li>
            {" "}
            <Link to="/gameInt/History">HISTORY</Link>
          </li>
          <li>
            <p className="disable">MTH 111</p>
          </li>
          <li>
            <p className="disable">PHY 115</p>
          </li>
          <li>
            <p className="disable">GSP 101</p>
          </li>
          <li>
            <p className="disable">GSP 111</p>
          </li>
          <li>
            <p className="disable">STA 108</p>
          </li>
          <li>
            <p className="disable">COS 105</p>
          </li>
          <li>
            <p className="disable">MTH 111</p>
          </li>
        </ul>
        <div className="rules">
          <h5>how to play the quiz?</h5>
          <li>
            Once you pick a subject by clicking on it, it takes you to the quiz
            page.
          </li>{" "}
          <br />
          <li>You have 1min to answer 10 questions,</li> <br />
          <li>
            when you time elapses, it submits by itself (as tho you clicked the
            submit button yourself!)
          </li>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
