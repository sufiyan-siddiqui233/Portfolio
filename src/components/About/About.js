import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="wobble">
            <Image
              src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171841_ek6D8jhk0oh3rwQgSkBdDHcatLaJZ4iQ.jpg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              👋 Hello there! I'm <strong>Sufiyan</strong>, a passionate
              third-year IT student and a dedicated full-stack web developer.
              Here's a sneak peek into my world:{" "}
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInLeft">
              I'm currently navigating my way through the dynamic landscape of
              information technology, entering the third year of my academic
              journey. My studies provide me with a solid foundation in various
              IT domains, enriching my understanding of the ever-evolving tech
              industry.
            </ScrollAnimation>

            <br />
            <br />

            <ScrollAnimation animateIn="fadeInRight">
              <div className="tagline2">
                I am comfortable with below Technologies ....
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
