import React from "react";
import colors from "../Colors";
import { GiCakeSlice } from "react-icons/gi";

const technologies = [
  "Javascript (ES6+)",
  "Java",
  "HTML/CSS",
  "Python",
  "React",
  "React Native",
  "Express.js",
  "Git",
  "Django",
  "Node.js",
  "Firebase",
  "Typescript",
];
function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h4 style={{ color: colors.PINK, fontSize: 25 }}>About Me</h4>
          <p style={{ color: colors.GREY }}>
            I’m a junior developer who is growing and learning everyday in the
            world of software development. I have a hands on experience with
            various technologies. Design and development has become my new
            hobby. Besides being a geek, i love making desserts {"  "}
            <GiCakeSlice color={colors.PINK} size={18} />
          </p>
          <br />
          <br />
          <p style={{ color: colors.GREY }}>
            Following are the technologies i have worked with
          </p>
          <div className="d-flex">
            {technologies.map((tech, index) => {
              return (
                <div className="col">
                  <div className="d-flex flex-row" style={{ marginRight: 10 }}>
                    <div
                      className="d-flex justify-content-center"
                      style={{ marginRight: 4 }}
                    >
                      <div
                        style={{
                          width: 6,
                          height: 6,
                          marginTop: 10,
                          backgroundColor: colors.PINK,
                          borderRadius: 10,
                        }}
                      />
                    </div>
                    <p style={{ color: colors.GREY }}>{tech}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

const styles = {};
