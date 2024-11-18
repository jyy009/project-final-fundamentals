// Create your ‘projects’ as an array of objects. Each project object can have properties for its title, programming languages, author, tags, links, etc. Consider a "featured" tag as a boolean property on your projects,  to implement styling changes if you have many projects and want to highlight some of them with unique styling.

export function createProject(
  title,
  tech,
  author,
  gitUrl,
  liveUrl,
  description
) {
  return { title, tech, author, gitUrl, liveUrl, description };
}
