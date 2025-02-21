import React from "react";
import Card from "../components/Card.jsx"

const Projects = () => {
  return (
    <div
      className="py-28 text-white max-w-[1200px] mx-auto "id="projects"
    >
      <div className="px-4 mb-4 items-center gap-12 md:flex-col-reverse md:gap-6">
        <div className="flex flex-col">
          <h2 className="title-large ml-3">
            My <span>Projects</span>
          </h2>

          <div className="my-3 grid w-full grid-cols-1 gap-14 lg:grid-cols-2">
            <Card
              title="Traininghub"
              description={
                <>
                <p className="mb-4">
                  Our software team developed a fullstack application for Eficode Oy&apos;s internal training purposes.
                </p>
                <p>
                  We followed <strong>Scrum</strong> principles and used technologies such as <strong>Typescript</strong>, 
                  <strong>React</strong>, <strong>Next.js</strong>, <strong>PostgreSQL</strong> and <strong>Cypress</strong>.
                </p>
                </>
              }
              link="https://youtu.be/AxFC3-6Vzls"
              linkDescription="Demo Video"
              link2="https://drive.google.com/file/d/1DcCkOTZ1NqCzyu6HnxKFL2GbmXq4Lec-/view?usp=sharing"
              linkDescription2="Certificate"
            />
            <Card
              title="HCI Project"
              description={
                <>
                <p className="mb-4">
                A project for the Human-Computer Interaction course at the University of Helsinki. 
                Through this project, I gained hands-on experience in user-centered design by iterating on a mobile app prototype and conducting user research. 
                </p>
                <p>
                I used <strong>Canva</strong> for prototyping.
                </p>
                </>
              }
              link="https://youtu.be/eAsj6y5yYl8"
              linkDescription="Prototype"
              link2="https://docs.google.com/document/d/1TRG1CH2AAgGD048RMWQSMaglW61VR-R9qKf9OvJBv6Q/edit?usp=sharing"
              linkDescription2="Report"
            />
            <Card
              title="Work in progress..."
              description={
                <>
                <p className="mb-4">
                This is a placeholder for my other projects that I will be adding soon.
                </p>
                <p>
                Most of my coding projects are on my repositories on GitHub so feel free to check them out:
                </p>
                </>
              }
              link="https://github.com/laurelcrelia?tab=repositories"
              linkDescription="Github"
            />
          </div>
        </div>
      </div>
    </div>

  );
};

export default Projects;