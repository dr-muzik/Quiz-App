import React from "react";
import { Link } from "react-router-dom";

// type Props = {}

const Newsletter: React.FC = () => {
  return (
    <div>
      <div className="newsletter">
        <h1 className="heading">
          {" "}
          <span style={{ color: "#5C515C" }}>What are you</span>{" "}
          <span style={{ color: "#591567" }}>waiting for?</span>
        </h1>
        <Link to="/login">
          <button className="btn-e-quiz">Try E-Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default Newsletter;
