import React from "react";
import { Link } from "react-router-dom";

// type Props = {}

const Quiz: React.FC = () => {
  return (
    <div className="container">
      <Link to="/">Back</Link>
      <br />
      <br />
      <ul>
        <li>
          {" "}
          <Link to="/gameInt/C.R.S">
            <h3>Christian Religious Knowledge</h3>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/gameInt/Computer-Studies">
            <h3>Computer Science</h3>
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/gameInt/History">
            <h3>History</h3>
          </Link>
        </li>
      </ul>

      <br />

      <br />
    </div>
  );
};

export default Quiz;
