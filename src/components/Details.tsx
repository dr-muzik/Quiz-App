import React from "react";
import { Link } from "react-router-dom";
import { IReport, useAppContext } from "../state management/StateContext";

const Details: React.FC = () => {
  // const arrObj = Object.entries(selectedAnswers).map((el) =>
  //   Object.fromEntries([el])

  const {
    selectedAnswers,
    data,
    report,
    updateData,
    updateObject,
    updateSelectedAnswers,
    updateReport,
  } = useAppContext();

  const resetState = () => {
    updateData([]);
    updateObject([]);
    updateSelectedAnswers([]);
  };

  /*  filter throught the array to get only the correct answer
  then get the lenght of the array */
  const correctAnsNum = selectedAnswers.filter(
    (el) => data[el.id - 1].correctAnswer === el.Answer
  ).length;

  console.log(correctAnsNum);
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

  console.log(grade);
  console.log(totalScore);

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
  console.log(selectedAnswers);

  const singleGrade: string = grade[1];
  const singleRemark: string = grade[0];

  const newReport: IReport = {
    grade: singleGrade,
    score: totalScore,
    remark: singleRemark,
  };
  updateReport([...report, newReport]);

  return (
    <div className="details">
      <div className="container">
        <div className="route">
          <Link onClick={resetState} to="/dashboard/Quiz">
            <h3>Play Again</h3>
          </Link>
          <Link to="/dashboard/Report">
            <h3>End</h3>
          </Link>
        </div>
        <div className="remark">
          <h1>{grade[1]}</h1>

          {/*  */}
          <p>
            You scored: {userScore}/{totalScore}{" "}
            <span style={{ fontSize: "16px" }}>(100%)</span>
          </p>
        </div>
        <div className="answers">
          {selectedAnswers.map((userdetails, i) => (
            <div className="question" key={i}>
              <h3 style={{ marginBottom: "2px" }} className="question-h3">
                Question {userdetails.id}:{" "}
              </h3>
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
        </div>
      </div>
    </div>
  );
};

export default Details;
