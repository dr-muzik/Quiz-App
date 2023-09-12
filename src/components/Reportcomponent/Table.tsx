import React from "react";
import Tbody from "./Tbody";
import { IReport } from "../../state management/StateContext";

interface IProp {
  CRS: IReport[];
  COS: IReport[];
  HIS: IReport[];
  active: number | null;
}
// type Props = {}

const Table: React.FC<IProp> = ({ CRS, COS, HIS, active }) => {
  const religion = CRS.map((el, i) => <Tbody report={el} key={i} />);

  const computer = COS.map((el, i) => <Tbody report={el} key={i} />);

  const history = HIS.map((el, i) => <Tbody report={el} key={i} />);

  return (
    <table>
      <thead>
        <tr>
          <th>S/N</th>
          <th>SCORE</th>
          <th>GRADE</th>
          <th>REMARK</th>
        </tr>
      </thead>
      {active === 1
        ? religion
        : active === 2
        ? computer
        : active === 3
        ? history
        : ""}
    </table>
  );
};

export default Table;
