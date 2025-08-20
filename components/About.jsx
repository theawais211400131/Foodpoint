import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>We think food is not for our tummy it is for our heart</p>
            </div>
            <p className="mid">
              This is Guujarz burger point we are here to maintain it for you 
              if you are willing to approach us you can we have the taste you
              deserve. We have the prices you love to pay. We have the setting 
              place you will sit for just comfort. We have the staff you love to 
              have a conservation with them.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
