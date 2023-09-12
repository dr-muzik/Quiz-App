import React from "react";
import { IReport } from "../../state management/StateContext";

// type Props = {}

const Tbody: React.FC<{ report: IReport }> = ({ report }) => {
  return (
    <>
      <tbody>
        <tr>
          <td>{1}</td>
          <td>{report?.score}</td>
          <td>{report?.grade}</td>
          <td>{report?.remark}</td>
        </tr>
      </tbody>
    </>
  );
};

export default Tbody;
