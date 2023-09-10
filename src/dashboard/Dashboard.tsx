import React, { ReactNode, useState } from "react";
import "../styles/index.scss";
import { Link, useParams } from "react-router-dom";
import Quiz from "../components/dashboardComponent/Quiz";
import Profile from "../components/dashboardComponent/Profile";
import Welcome from "../components/dashboardComponent/Welcome";
import Report from "../components/dashboardComponent/Report";
// import Welcome from "../components/dashboardComponent/Welcome";
// import Quiz from "../components/dashboardComponent/Quiz";
// import MainLayout from "../layouts/MainLayout";

// type Props = {};
interface IComp {
  nav: string;
  link: string;
}

const Dashboard: React.FC = () => {
  let { page } = useParams();
  // console.log(page);

  let componentToRender: ReactNode;

  switch (page) {
    case (page = "Quiz"):
      componentToRender = <Quiz />;
      break;
    case (page = "Report"):
      componentToRender = <Report />;
      break;
    case (page = "Profile"):
      componentToRender = <Profile />;
      break;
    default:
      componentToRender = <Welcome />;
      break;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [active, setActive] = useState(page);
  console.log(active);
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
            <Link to={el.link} key={i}>
              <p
                className={`size ${active === el.nav ? "active" : "component"}`}
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
          {/* <Outlet /> */}
          {componentToRender}
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
    link: "/dashboard/Home",
  },
  {
    nav: "Quiz",
    link: "/dashboard/Quiz",
  },
  {
    nav: "Report",
    link: "/dashboard/Report",
  },
  { nav: "Profile", link: "/dashboard/Profile" },
];
