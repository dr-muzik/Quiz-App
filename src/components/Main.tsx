import React, { useState } from "react";
import "../styles/main.scss";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import Newsletter from "./PageComponent/Newsletter";
import { useAppContext } from "../state management/StateContext";

interface ITestimonial {
  name: string;
  title: string;
  quotes: string;
  Image: string;
  class: string;
}

const Main: React.FC = () => {
  const [toggle, setToggle] = useState<string>("man");

  const testimonialHandler = (arg: string) => {
    setToggle(toggle === "man" ? arg : arg);
  };

  const { updateHide } = useAppContext();
  const hideClass = () => {
    updateHide(false);
  };

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
                <h4>Test yourself</h4>
                <p>are you sure about YOURSELF?</p>
              </div>
              <div className="card">
                <h4>Know more</h4>
                <p>Increase that IQ</p>
              </div>
            </div>
            <div className="inner-right">
              <div className="card">
                <h4>Confidence</h4>
                <p>Walk into exam halls with it</p>
              </div>
              <div className="card">
                <h4>Understanding</h4>
                <p>Teach yourself</p>
              </div>
            </div>
          </div>
          <div className="about-right">
            <h1>Showoff your Confidence with E-Quiz</h1>
            <p>
              Do you feel you need to heighten your knowledge or boost your
              confidence before a CBT exam? search no more
            </p>
            <br />
            <Link to="/about" onClick={hideClass}>
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
                What Our <span style={{ color: "#5C0E62" }}>Users</span> are
                saying...
              </h1>
              <p>
                We are please to share with you testimonies and feedback from
                our users!
              </p>
            </div>
            <div className="inner-right">
              {testimony.map((el, i) => (
                <div
                  className={el.class}
                  onClick={() => testimonialHandler(el.class)}
                  key={i}
                >
                  <div
                    className={`${
                      toggle === el.class ? "testimony" : "d-none"
                    }`}
                  >
                    <p>{el.quotes}</p>
                    <h5>{el.name}</h5>
                    <p>{el.title}</p>
                  </div>
                  <img
                    src={el.Image}
                    alt={el.class}
                    className={`img ${
                      toggle === el.class ? "zoom-in" : "zoom-out"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default Main;

const testimony: ITestimonial[] = [
  {
    Image: "/image/man.png",
    quotes: '"This is a great App. Now I can easily access my past questions"',
    title: "Student",
    name: "Mr. Peter",
    class: "man",
  },
  {
    Image: "/image/man-beard.png",
    quotes: '"I believe I am confident enough to write my exams..."',
    title: "Historian",
    name: "Mr. Wilson",
    class: "man-beard",
  },
  {
    Image: "/image/lady.png",
    quotes: '"E-quiz App indeed, gives me a sense of progress. keep it up!"',
    title: "Student",
    name: "Miss Chinwe",
    class: "lady",
  },
  {
    Image: "/image/y-lady.png",
    quotes: '"Wow! kudos to the creator of this app."',
    title: "Lawyer",
    name: "Mrs. Stephanie",
    class: "y-lady",
  },
  {
    Image: "/image/old-lady.png",
    quotes:
      '"I have always wanted something like, thanks for making it a reality!"',
    title: "Student",
    name: "Mrs. Adeyemi",
    class: "old-lady",
  },
];
