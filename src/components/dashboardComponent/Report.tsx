import React, { useState } from "react";
import { useAppContext } from "../../state management/StateContext";

// type Props = {}
interface IReport {
  score: number;
  grade: string;
  remark: string;
}

const Report: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const activeHandler = (arg: number) => {
    setActive(active == null ? arg : arg);
  };

  const { report } = useAppContext();
  console.log(report);
  return (
    <div className="Report">
      <h1>Your Report, MICHEAL</h1>
      <div className="container">
        <div className="title">
          <h4>COURSES</h4>
        </div>
        <div className="courses">
          <div
            className={`${active === 1 ? "diff" : "courses-each"}`}
            onClick={() => activeHandler(1)}
          >
            <h5 className="c.r.s">C.R.S</h5>
          </div>
          <div
            className={`${active === 2 ? "diff" : "courses-each"}`}
            onClick={() => activeHandler(2)}
          >
            <h5 className="computer">Computer Sci.</h5>
          </div>
          <div
            className={`${active === 3 ? "diff" : "courses-each"}`}
            onClick={() => activeHandler(3)}
          >
            <h5 className="history">History</h5>
          </div>
        </div>
        <div className="report">
          <div className={`${active === null ? "default" : "d-none"}`}>
            <p>Click on any course to view your report!</p>
          </div>
          <div className={`${active !== 1 ? "d-none" : "table-rep"}`}>
            {CRS.map((el, i) => (
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>SCORE</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{el.score}</td>
                    <td>{el.grade}</td>
                    <td>{el.remark}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          <div className={`${active !== 2 ? "d-none" : "table-rep"}`}>
            {Computerdata.map((el, i) => (
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>SCORE</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{el.score}</td>
                    <td>{el.grade}</td>
                    <td>{el.remark}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
          <div className={`${active !== 3 ? "d-none" : "table-rep"}`}>
            {Historydata.map((el, i) => (
              <table>
                <thead>
                  <tr>
                    <th>S/N</th>
                    <th>SCORE</th>
                    <th>GRADE</th>
                    <th>REMARK</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{i + 1}</td>
                    <td>{el.score}</td>
                    <td>{el.grade}</td>
                    <td>{el.remark}</td>
                  </tr>
                </tbody>
              </table>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;

const Historydata: IReport[] = [
  {
    score: 50,
    grade: "C",
    remark: "credit",
  },
];
const Computerdata: IReport[] = [
  {
    score: 80,
    grade: "A",
    remark: "Excellent",
  },
];
const CRS: IReport[] = [
  {
    score: 70,
    grade: "B",
    remark: "Better",
  },
];
