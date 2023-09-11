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
import {
  FaCaretDown,
  FaDeskpro,
  FaFacebook,
  FaFirefoxBrowser,
  FaHouse,
  FaMizuni,
} from "react-icons/fa6";
import { IconType } from "react-icons";

// type Props = {};
interface IComp {
  nav: string;
  link: string;
  icon: IconType;
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
  const [show, setShow] = useState(false);

  console.log(active);
  const activeHandler = (arg: string) => {
    setActive(arg);
  };

  const showHandler = () => {
    setShow(!show);
  };
  return (
    <div className="wrapper">
      <nav>
        <h1>E-Quiz</h1>
        <div className="center">
          <h5>Dashboard</h5>
          <FaHouse />
        </div>
        <div className="inner-left">
          <div className="circle-small"></div>
          <p>Michael Peters</p>
          <FaCaretDown onClick={showHandler} />
          <div className={`dropdown ${!show ? "hidden" : ""}`}>
            <Link to="/login">
              <p>Logout</p>
            </Link>
          </div>
        </div>
      </nav>
      <main>
        <aside>
          {Component.map((el, i) => (
            <Link to={el.link} key={i}>
              <p
                className={`size ${active === el.nav ? "active" : "component"}`}
                onClick={() => activeHandler(el.nav)}
              >
                {el.nav} {<el.icon />}
              </p>{" "}
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
    icon: FaFacebook,
  },
  {
    nav: "Quiz",
    link: "/dashboard/Quiz",
    icon: FaDeskpro,
  },
  {
    nav: "Report",
    link: "/dashboard/Report",
    icon: FaFirefoxBrowser,
  },
  { nav: "Profile", link: "/dashboard/Profile", icon: FaMizuni },
];
