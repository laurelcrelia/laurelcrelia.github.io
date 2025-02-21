import React from "react";
import Card from "../components/Card.jsx";
import useFilter from "../../../components/Filter.jsx";
import projects from "../../../assets/projectsData";

const techOptions = ["Python", "Javascript", "Typescript", "React", "SQL", "R", "Django", "HTML", "CSS", "Next.js", "Node.js", "PostgreSQL", "Cypress", "Jest", "Robot Framework", "Pygame", "Pytest"];

const Projects = () => {
  const { filteredItems: filteredProjects, selectedCriteria: selectedTech, toggleCriteria: toggleTech } = useFilter(projects);

  return (
    <div className="pt-28 text-white max-w-[1200px] min-h-screen mx-auto px-10" id="projects">
      <h2 className="title-large pb-6">Projects</h2>

      <div className="flex flex-wrap gap-2 mb-16">
        {techOptions.map((tech) => (
          <button
            key={tech}
            onClick={() => toggleTech(tech)}
            className={`px-3 py-1 rounded-full border transition ${
              selectedTech.includes(tech) ? "border-yellow-500 text-yellow-500" : "border-white text-white"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      <div className="grid w-full grid-cols-1 gap-14 lg:grid-cols-2">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => <Card key={index} {...project} />)
        ) : (
          <p className="text-center col-span-2 mt-12">No projects match the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
