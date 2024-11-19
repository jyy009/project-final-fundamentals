import projectsJson from "./projects.json";

export const singleProject = (projectId) => {
  console.log("ProjectId received:", projectId);
  const project = projectsJson.find((proj) => proj.id === projectId);
  console.log(project);

  if (project) {
    const clickedProjectLink = document.querySelector(`.projects-link[data-id = "${projectId}"]`)
    console.log("clicked project link:", clickedProjectLink)

  
    const projectsLinkWrapper = clickedProjectLink.closest(".projects-link-wrapper")
     const nextSib = projectsLinkWrapper.nextSibling
        nextSib.textContent = ""


    const singleProjectTemplate = document.getElementById("single-project-template");
    const cloneSingleProjectTemplate =
      singleProjectTemplate.content.cloneNode(true);

    const singleDescription = cloneSingleProjectTemplate.querySelector(
      ".single-description"
    );
    singleDescription.textContent = project.description;

    const techList = cloneSingleProjectTemplate.querySelector(".single-tech");
    techList.textContent = project.tech;

    const gitLink = cloneSingleProjectTemplate.querySelector(".git-link");
    gitLink.href = project.gitUrl

    const liveLink = cloneSingleProjectTemplate.querySelector(".live-link")
    liveLink.href = project.liveUrl


    // const nextSibling = clickedProjectLink.nextElementSibling
    // console.log(nextSibling)

    // clickedProjectLink.parentNode.insertBefore(cloneSingleProjectTemplate, clickedProjectLink.nextSibling);

    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('single-project-details');
    detailsContainer.appendChild(cloneSingleProjectTemplate);

    projectsLinkWrapper.insertAdjacentElement("afterend",detailsContainer)
  }
};
