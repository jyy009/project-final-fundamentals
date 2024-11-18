import projectsJson from "./projects.json";
import "./projects.css";

export const projects = () => {
  const projectsSection = document.getElementById("projects-section");

  const projectsInfoTemplate = document.getElementById(
    "projects-info-template"
  );
  const cloneProjectsInfoTemplate =
    projectsInfoTemplate.content.cloneNode(true);
  projectsSection.appendChild(cloneProjectsInfoTemplate);

  const renderProject = () => {
    const projectsLinkTemplate = document.getElementById(
      "projects-link-template"
    );

    projectsJson.forEach((proj) => {
      const cloneProjectsLinkTemplate =
        projectsLinkTemplate.content.cloneNode(true);

      const projectTitle =
        cloneProjectsLinkTemplate.querySelector(".proj-title");
      projectTitle.textContent = proj.title;

      const projectAuthor =
        cloneProjectsLinkTemplate.querySelector(".proj-author");
      projectAuthor.textContent = `- ${proj.author}`;

      projectsSection.appendChild(cloneProjectsLinkTemplate);
    });
  };

  renderProject();
};
