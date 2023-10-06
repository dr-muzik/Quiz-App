import React from "react";
// import { Link } from "react-router-dom";
import { useAppContext } from "../state management/StateContext";
import Pagination from "./detailComponent/Pagination";

const Details: React.FC = () => {
  // const arrObj = Object.entries(selectedAnswers).map((el) =>
  //   Object.fromEntries([el])

  const { selectedAnswers } = useAppContext();

  return (
    <div className="details">
      <div className="container">
        <Pagination items={selectedAnswers} />
      </div>
    </div>
  );
};

export default Details;
