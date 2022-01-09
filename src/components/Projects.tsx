import React from "react";
import colors from "../Colors";
import Card from "./Card";
const my_projects = [
  {
    heading: "PlatformX",
    text: "The main objective of PlatformX is to facilitate the students and the organizations, with a platform where they work with each other on projects. PlatformX will provide a solution for students in saving their time, effort and enhancing their learning. It will also facilitate the organizations in achieving maximum throughput in minimum time and in cost efficient way. PlatformX will consist of major functionalities such as student’s assessment, interest-based project, and Hackathon recommendations. It will provide an easy and efficient way for organizations and students in assisting each other. ",
    video: "asd",
    built_with: [
      "React Native",
      "Django",
      "Typescript",
      "Stripe",
      "Zoom API",
      "PPOstgreSQL",
    ],
    links: [
      {
        github: "https://github.com/AsnanAshfaq/PlatformX-Mobile",
      },
    ],
  },
];
function Projects() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <h4 style={{ color: colors.PINK, fontSize: 25 }}>Projects</h4>
        </div>
      </div>

      {my_projects.map((project, index) => (
        <div className="row">
          <Card {...project} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
