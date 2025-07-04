import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";


import { motion } from "framer-motion";

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {[
          {
            name: "Kanban Board",
            description: "drag-and-drop Kanban Board with task management features. Implemented performance optimizations using React's memo & useCallback",
            link: "https://kanban-board-2000.vercel.app",
            gitHubLink: "https://github.com/shubham465/kanban-board",
            techStack: ["ReactJS", "TypeScript", "JavaScript"],
          },
          {
            name: "TaskNest",
            description: "User authentication (login/register) with JWT, To-Do CRUD operations (Create, Read, Update, Delete), Secure API endpoints with token validation, MongoDB database integration, Error handling middleware",
            link: "https://node-frontend-red.vercel.app",
            gitHubLink: "https://github.com/shubham465/node-frontend",
            techStack: ["MERN Stack", "Tailwindcss"],
          },
          {
            name: "Project Admin Dashboard",
            description: "Designed and developed a fully functional admin dashboard with CRUD operations, search, and pagination. Utilized local storage for data persistence and Material-UI for UI consistency.",
            link: "https://admin-dashboard-ten-lilac-17.vercel.app",
            gitHubLink: "https://github.com/shubham465/admin-dashboard",
            techStack: ["ReactJS", "JavaScript", "Material-UI"],
          },
        ].map((project) => (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <title>{project.name}</title>
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="project-links">
                  <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    <img src={externalLink} alt="External Link" />
                  </a>
                </div>
              </header>
              <div className="body">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.techStack.map((tech) => (
                    <li>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
