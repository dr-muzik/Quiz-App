import React from "react";

// type Props = {}

const About: React.FC = () => {
  return (
    <div className="About">
      <section className="hero">
        <div className="container">
          <div className="inner-left">
            <h1>What is E-Quiz all About</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              maxime libero error sapiente suscipit facere iusto sed, deleniti
              ducimus inventore, quod fuga neque maiores. Aspernatur placeat
              corporis similique dignissimos, dolor eos pariatur nisi
              consequuntur quas omnis itaque rem velit eveniet!
            </p>
          </div>
          <div className="inner-right">
            <img src="/image/laptop.png" alt="laptop" className="Laptop" />
          </div>
        </div>
      </section>
      <section className="why">
        <div className="container">
          <div className="cards">
            <h1>Why Choose E-Quiz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              expedita eaque perspiciatis repellat et, maiores deleniti laborum
              quo corporis debitis eveniet velit ut culpa, aliquid alias sit
              magnam doloribus animi non. Voluptatibus modi quibusdam,
              exercitationem recusandae tenetur aspernatur dolorum quam.
            </p>
          </div>
          <div className="cards">
            <h1>Who needs E-Quiz</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              expedita eaque perspiciatis repellat et, maiores deleniti laborum
              quo corporis debitis eveniet velit ut culpa, aliquid alias sit
              magnam doloribus animi non. Voluptatibus modi quibusdam,
              exercitationem recusandae tenetur aspernatur dolorum quam.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
