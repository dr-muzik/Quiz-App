import React, { useState } from "react";
import "../styles/index.scss";
import { Link, Outlet } from "react-router-dom";
// import Welcome from "../components/dashboardComponent/Welcome";
// import Quiz from "../components/dashboardComponent/Quiz";
// import MainLayout from "../layouts/MainLayout";

// type Props = {};
interface IComp {
  nav: string;
  link: string;
}

const Dashboard: React.FC = () => {
  const [active, setActive] = useState("Home");

  const activeHandler = (arg: string) => {
    setActive(arg);
  };
  return (
    <div className="wrapper">
      <nav>
        <h1>NAV BAR</h1>
      </nav>
      <main>
        <aside>
          {Component.map((el, i) => (
            <Link to={el.link}>
              <p
                key={i}
                className={` ${active === el.nav ? "active" : "component"}`}
                onClick={() => activeHandler(el.nav)}
              >
                {el.nav}
              </p>
            </Link>
          ))}
        </aside>
        <section>
          {/* <h1>WELCOME USER</h1> */}
          {/* <Router> */}
          <Outlet />
          {/* </Router> */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;

const Component: IComp[] = [
  {
    nav: "Home",
    link: "/dashboard/home",
  },
  {
    nav: "Quiz",
    link: "/dashboard/quiz",
  },
  {
    nav: "Report",
    link: "/dashboard/report",
  },
  { nav: "Profile", link: "/dashboard/profile" },
];
