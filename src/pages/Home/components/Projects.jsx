import React from "react";
import Card from "../components/Card.jsx"

const Projects = () => {
  return (
    <div
      className="py-28 text-white max-w-[1200px] mx-auto "id="projects"
    >
      <div className="px-4 mb-4 items-center gap-12 md:flex-col-reverse md:gap-6">
        <div className="flex flex-col">
          <h2 className="title-large">
            My <span>Projects</span>
          </h2>

          <div className="my-3 grid w-full grid-cols-1 gap-14 lg:grid-cols-2">
            <Card
              title="Traininghub"
              description={
                <>
                  Our software team developed a fullstack application for Eficode Oy&apos;s internal training purposes.
                  We followed <strong>Scrum</strong> principles and used technologies such as <strong>Typescript</strong>, 
                  <strong>React</strong>, <strong>Next.js</strong>, <strong>PostgreSQL</strong> and <strong>Cypress</strong>.
                </>
              }
              link="https://youtu.be/AxFC3-6Vzls"
              linkDescription="Demo Video"
              link2="https://drive.google.com/file/d/1DcCkOTZ1NqCzyu6HnxKFL2GbmXq4Lec-/view?usp=sharing"
              linkDescription2="Certificate"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Projects;