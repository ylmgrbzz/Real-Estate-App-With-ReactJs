import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <Heading
            title="Bir Sonraki Evinizi Bulun"
            subtitle="Yerel şehrinizde bulunan yeni ve öne çıkan emlakları bulun."
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
