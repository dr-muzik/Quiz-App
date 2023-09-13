import React from "react";
import "../styles/main.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

// type Props = {}

const Main: React.FC = () => {
  return (
    <div className="main-section">
      <div className="container">
        <section className="hero">
          <div className="inner-left">
            <h1>An Online Quiz Platform</h1>
            <p style={{ fontStyle: "italic" }}>
              A platform to help boost your confidence in preparation for your
              upcoming exams, by checking your progressive stats on the go...
            </p>
            <Link to="/signup">
              <button className="btn-start">Start Now!</button>
            </Link>
          </div>
          <div className="inner-right">
            <img src="/image/desktop.png" alt="" />
            <img src="/image/laptop.png" alt="" />
          </div>
        </section>
        <section className="about">
          <div className="about-left">
            <div className="inner-left">
              <div className="card">
                <h4>Lorem Ipsum</h4>
                <p>Now track all you transaction easily</p>
              </div>
              <div className="card">
                <h4>Lorem Ipsum</h4>
                <p>Now track all you transaction easily</p>
              </div>
            </div>
            <div className="inner-right">
              <div className="card">
                <h4>Lorem Ipsum</h4>
                <p>Now track all you transaction easily</p>
              </div>
              <div className="card">
                <h4>Lorem Ipsum</h4>
                <p>Now track all you transaction easily</p>
              </div>
            </div>
          </div>
          <div className="about-right">
            <h1>Make & Share Payments With Community</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
              nihil ea adipisci cumque iusto?
            </p>
            <br />
            <Link to="#">
              <p className="link-to-about">
                Learn more <FaArrowRight />
              </p>
            </Link>
          </div>
        </section>
      </div>
      <section className="testimonial">
        <img src="/image/Rectangle.png" alt="rectangle" className="rectangle" />
        <img src="/image/left-half.png" alt="left-half" className="left-half" />
        <div className="container">
          <div className="container-inner">
            <div className="inner-left">
              <h1>
                What Our <span style={{ color: "#5C0E62" }}>Clients</span> are
                saying...
              </h1>
              <p>
                Hac sem ut eget tellus diam convallis lacus a, interdum nulla
                sem lacus a, interdum nulla sem adipiscing inw
              </p>
            </div>
            <div className="inner-right">
              <img src="/image/man.png" alt="man" className="man" />
              <img src="/image/man-beard.png" alt="man" className="man-beard" />
              <img src="/image/lady.png" alt="man" className="lady" />
              <img src="/image/y-lady.png" alt="man" className="y-lady" />
              <img src="/image/old-lady.png" alt="man" className="old-lady" />
            </div>
          </div>
          <div className="newsletter">
            <h1 className="heading">
              {" "}
              <span style={{ color: "#5C515C" }}>What are you</span>{" "}
              <span style={{ color: "#591567" }}>waiting for?</span>
            </h1>
            <Link to="/login">
              <button className="btn-e-quiz">Try E-Quiz</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
