import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({setPlayState}) => {
  
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" onClick={() => setPlayState(true)} />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Embark on a transformative journey through our university’s
          comprehensive education programs—where tradition meets innovation. Our
          cutting-edge curriculum is thoughtfully crafted to empower students
          with the knowledge, skills, and real-world experiences essential to
          thrive in the ever-evolving field of education.
        </p>

        <p>
          With a steadfast focus on innovation, experiential learning, and
          personalized mentorship, our programs prepare aspiring educators to
          leave a lasting impact—in classrooms, schools, and communities alike.
        </p>

        <p>
          Whether your calling is to teach, lead, counsel, or inspire, our
          diverse array of programs offers a purposeful pathway to achieve your
          aspirations and unlock your fullest potential in shaping the future of
          education.
        </p>
      </div>
    </div>
  );
};

export default About;
