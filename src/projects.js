import projectsJson from "./projects.json";
import "./projects.css";

export const projects = () => {
  const projectsSection = document.getElementById("projects-section");

  const renderProject = () => {
    const projectsTemplate = document.getElementById("projects-template");
    const cloneProjectsTemplate = projectsTemplate.content.cloneNode(true);
    projectsSection.appendChild(cloneProjectsTemplate);
  };

  renderProject();
};
