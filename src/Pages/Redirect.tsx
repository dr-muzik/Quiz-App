import React from "react";
import { Link } from "react-router-dom";

// type Props = {}

const Redirect: React.FC = () => {
  return (
    <div>
      <h1>You have successfully registered</h1>
      <Link to="/login">
        <p>Click to log in</p>
      </Link>
    </div>
  );
};

export default Redirect;
