import React from 'react';
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <div className="left__about">
        <p className="about__text">Image</p>
      </div>
      <div className="right__about">
        <div className="right__text">
          <h3 className = "about__name">Valerie M.</h3>
          <p className="about__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt saepe molestiae officiis atque quaerat nam dicta ad numquam, perspiciatis blanditiis non doloribus quod repellendus ea dolorum placeat, minus incidunt vel.</p>
        </div>
      </div>
    </div>
  );
}

export default About;