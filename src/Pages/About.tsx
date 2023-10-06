import React from "react";
import Newsletter from "../components/PageComponent/Newsletter";

// type Props = {}

const About: React.FC = () => {
  return (
    <div className="About">
      <section className="hero">
        <div className="container">
          <div className="inner-left">
            <h1>What is E-Quiz?</h1>
            <p>
              As the name implies{" "}
              <span style={{ fontSize: "30px", fontWeight: "bolder" }}>
                "E-Quiz"
              </span>
              , it is just what it is! An online Platform, created with YOU in
              mind. Its sole purpose is to enable our users to be; fully
              CONFIDENT about their upcoming examination, broaden their
              knowledge about diverse subject, become familiar with CBT-based
              Exams,{" "}
              <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
                help keep track of their progress!
              </span>{" "}
              etc.
            </p>
          </div>
          <div className="inner-right">
            <img src="/image/laptop.png" alt="laptop" className="Laptop" />
          </div>
        </div>
      </section>
      <section className="why">
        <img src="/image/white.png" alt="white" className="white" />
        <div className="container">
          <div className="container-top">
            <div className="cards">
              <h1>Why Choose E-Quiz?</h1>
              <p>
                Statistics has shown that 30% of people who has not taken a
                CBT-based test do encounter nervousity, anxiousness etc due to
                unfamiliarity to that type of exam. That is where E-Quiz comes
                in to the picture. It helps grooms that familiarity with
                CBT-based type of test/Quiz.
              </p>
            </div>
            <div className="cards">
              <h1>Who needs E-Quiz</h1>
              <p>
                E-Quiz is primarily for STUDENTS, but due to the aphorism that
                goes by "Learning never ends", we can say that any field can
                utility the capacities of this App. We are looking forward to
                expand the capacity of this app to include as many disciplines
                as possible.
              </p>
            </div>
          </div>
          <div className="container-down">
            <div className="cards">
              <h1>Where to get E-Quiz?</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                expedita eaque perspiciatis repellat et, maiores deleniti
                laborum quo corporis debitis eveniet velit ut culpa, aliquid
                alias sit magnam doloribus animi non. Voluptatibus modi
                quibusdam, exercitationem recusandae tenetur aspernatur dolorum
                quam.
              </p>
            </div>
            <div className="cards">
              <h1>How to use E-Quiz?</h1>
              <p>
                This App is very simple and easy to use (layman-friendly). All
                that is needed is for you to register if you don't have an
                account, then Login with your registered account into your
                dashboard. From there you can access your registered Courses and
                track (see) your progress. Enjoy!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="access">
        <div className="container">
          <div className="container-inner">
            <div className="inner-left">
              <h1>Accessibility</h1>
              <p>
                You can easily access this App from any device that has an
                internet connection and is convinient enough for you!
              </p>
            </div>
            <div className="inner-right">
              <img src="/image/tab.png" alt="tab" />
            </div>
          </div>
          <Newsletter />
        </div>
      </section>
    </div>
  );
};

export default About;
