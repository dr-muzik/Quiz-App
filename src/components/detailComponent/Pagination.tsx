import React, { useState } from "react";
import { IReport, useAppContext } from "../../state management/StateContext";
import { ICollation } from "../../App";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Pagination: React.FC<{ items: ICollation[] }> = ({ items }) => {
  const {
    data,
    updateData,
    updateSelectedAnswers,
    updateObject,
    updateReport,
    report,
    selectedAnswers,
    course,
  } = useAppContext();

  const resetState = () => {
    updateData([]);
    updateObject([]);
    updateSelectedAnswers([]);
  };

  const correctAnsNum = selectedAnswers.filter(
    (el) => data[el.id - 1].correctAnswer === el.Answer
  ).length;

  // console.log(correctAnsNum);
  const totalScore: number = selectedAnswers.length * 10;

  const userScore: number = correctAnsNum * 10;
  let grade: string[];

  switch (true) {
    case userScore > 80:
      grade = ["Excellent", "A"];
      break;
    case userScore > 60:
      grade = ["Good", "B"];
      break;
    case userScore > 40:
      grade = ["Credit", "C"];
      break;
    case userScore > 20:
      grade = ["Pass", "D"];
      break;

    default:
      grade = ["Fail", "F"];
  }

  const singleGrade: string = grade[1];
  const singleRemark: string = grade[0];

  selectedAnswers.sort((a, b) => {
    // const idA = parseInt(a.id);
    // const idB = parseInt(b.id);

    if (a.id < b.id) {
      return -1;
    }
    if (a.id > b.id) {
      return 1;
    }
    return -1;
  });

  const newReport: IReport = {
    grade: singleGrade,
    score: userScore,
    subject: course,
    remark: singleRemark,
  };

  const updateHandler = () => {
    updateReport([...report, newReport]);
    updateData([]);
    updateObject([]);
    updateSelectedAnswers([]);
  };

  const itemsPerPage: number = 5;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [toggle, setToggle] = useState(false);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItem = items.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < items.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (startIndex > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  console.log(toggle);

  return (
    <>
      <div className="answers">
        <div className="top">
          <FaArrowRotateLeft onClick={toggleHandler} className="arrow" />
          <div className={`${!toggle ? "d-none" : "route"}`}>
            <Link onClick={resetState} to="/dashboard/Quiz">
              <h5>Play Again</h5>
            </Link>
            <Link to="/dashboard/Report" onClick={updateHandler}>
              <h5>End</h5>
            </Link>
          </div>
          <h4>Answers</h4>
          <div className="remark">
            <h1>{grade[1]}</h1>

            {/*  */}
            <p>
              {userScore}/{totalScore}{" "}
              {/* <span style={{ fontSize: "16px" }}>(100%)</span> */}
            </p>
          </div>
        </div>
        <section className="solution">
          {currentItem.map((userdetails, i) => (
            <div className="question" key={i}>
              <h5 style={{ marginBottom: "2px" }} className="question-h3">
                Question {userdetails.id}:{" "}
              </h5>
              <p className="ques">{userdetails.question}</p>
              <p className="correct-wrong">
                <span
                  className={`${
                    userdetails.Answer !==
                    data[userdetails.id - 1].correctAnswer
                      ? "WA"
                      : "CA"
                  }`}
                >
                  Your answer:
                </span>{" "}
                <span
                  className={`${
                    userdetails.Answer !==
                    data[userdetails.id - 1].correctAnswer
                      ? "WA ansW"
                      : "CA ansC"
                  }`}
                >
                  {userdetails.Answer}
                </span>
              </p>
              {data.every((el) => el.correctAnswer !== userdetails.Answer) && (
                <p className="correct-wrong">
                  <span className="CA">Correct Answer:</span>{" "}
                  <span className="CA ansC">
                    {data[userdetails.id - 1].correctAnswer}
                  </span>
                </p>
              )}
            </div>
          ))}
        </section>
        <nav aria-label="...">
          <ul className="pagination">
            <li className="page-item" onClick={prevPage}>
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item">
              <button className="page-link">1</button>
            </li>
            <li className="page-item active" aria-current="page">
              <button className="page-link">2</button>
            </li>
            <li className="page-item" onClick={nextPage}>
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
