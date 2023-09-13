import React, { useState } from "react";
import { useAppContext } from "../../state management/StateContext";
// import Tbody from "../Reportcomponent/Tbody";
import Table from "../Reportcomponent/Table";

const Report: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);

  const activeHandler = (arg: number) => {
    setActive(active == null ? arg : arg);
  };

  const { report } = useAppContext();
  console.log(report);

  //getting only one particular subject from the report Array
  const CRS = report.filter((el) => el.subject === "C.R.S");
  const COS = report.filter((el) => el.subject === "Computer-Studies");
  const HIS = report.filter((el) => el.subject === "History");

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
            <h5 className="computer">COS 105</h5>
          </div>
          <div
            className={`${active === 3 ? "diff" : "courses-each"}`}
            onClick={() => activeHandler(3)}
          >
            <h5 className="history">History</h5>
          </div>
        </div>
        <div className="report">
          {/* DEFAULT report */}
          <div className={`${active === null ? "default" : "d-none"}`}>
            <p>Click on any course to view your report!</p>
          </div>

          {/* C.R.S report */}
          <div className={`${active !== 1 ? "d-none" : "table-rep"}`}>
            {CRS.length === 0 ? (
              <h3>Take C.R.S quiz to see your report!</h3>
            ) : (
              <Table CRS={CRS} COS={COS} HIS={HIS} active={active} />
            )}
          </div>

          {/* COMPUTER report */}
          <div className={`${active !== 2 ? "d-none" : "table-rep"}`}>
            {COS.length === 0 ? (
              <h3>Take Computer Sci. quiz to see your report!</h3>
            ) : (
              <Table CRS={CRS} COS={COS} HIS={HIS} active={active} />
            )}
          </div>

          {/* HISTORY report */}
          <div className={`${active !== 3 ? "d-none" : "table-rep"}`}>
            {HIS.length === 0 ? (
              <h3>Take a quiz to see your report!</h3>
            ) : (
              <Table CRS={CRS} COS={COS} HIS={HIS} active={active} />
            )}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
