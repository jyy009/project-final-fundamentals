import projectsJson from "./projects.json";
import "./projects.css";
import { singleProject } from "./singleProject";

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

      const projectsLinkWrapper = cloneProjectsLinkTemplate.querySelector(
        ".projects-link-wrapper"
      );

      // const singleProjWrapper = cloneProjectsLinkTemplate.querySelector(
      //   ".single-project-wrapper"
      // );
      // singleProjWrapper.innerHTML = "";
      const projectLink =
        cloneProjectsLinkTemplate.querySelector(".projects-link");
      projectLink.dataset.id = proj.id;

      const projectTitle =
        cloneProjectsLinkTemplate.querySelector(".projs-title");
      projectTitle.textContent = proj.title;

      const projectAuthor =
        cloneProjectsLinkTemplate.querySelector(".projs-author");
      projectAuthor.textContent = `- ${proj.author}`;

      projectsLinkWrapper.addEventListener("click", (event) => {
        event.preventDefault();

        const link = event.target.closest(".projects-link");
        console.log("link from click", link);

        if (link) {
          const projectId = link.dataset.id;
          console.log("id from link dataset", projectId);
          console.log(typeof projectId);
          singleProject(projectId);
        }
      });
      projectsSection.appendChild(cloneProjectsLinkTemplate);
    });
  };

  renderProject();
};
