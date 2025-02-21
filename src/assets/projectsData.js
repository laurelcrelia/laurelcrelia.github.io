const projects = [
    {
      title: "Traininghub",
      description: (
        <>
          <p className="mb-4">
            On a Software Engineering Lab course, our software team developed a fullstack application for Eficode Oy's internal training purposes.
          </p>
          <p>
            We followed <strong>Scrum</strong> principles and used technologies such as <strong>Typescript</strong>, 
            <strong>React</strong>, <strong>Next.js</strong>, <strong>PostgreSQL</strong> and <strong>Cypress</strong>.
          </p>
        </>
      ),
      link: "https://youtu.be/AxFC3-6Vzls",
      linkDescription: "Demo Video",
      link2: "https://drive.google.com/file/d/1DcCkOTZ1NqCzyu6HnxKFL2GbmXq4Lec-/view?usp=sharing",
      linkDescription2: "Certificate",
      filter: ["Typescript", "React", "Next.js", "PostgreSQL", "Cypress"],
    },
    {
      title: "HCI Project",
      description: (
        <>
          <p className="mb-4">
            A project for the Human-Computer Interaction course at the University of Helsinki.
            Through this project, I gained hands-on experience in user-centered design by iterating on a mobile app prototype and conducting user research.
          </p>
          <p>
            I used <strong>Canva</strong> for prototyping.
          </p>
        </>
      ),
      link: "https://youtu.be/eAsj6y5yYl8",
      linkDescription: "Prototype",
      link2: "https://docs.google.com/document/d/1TRG1CH2AAgGD048RMWQSMaglW61VR-R9qKf9OvJBv6Q/edit?usp=sharing",
      linkDescription2: "Report",
      filter: ["Canva"],
    },
    {
      title: "Maze Generator",
      description: (
        <>
          <p className="mb-4">
            A project for the 2023 Data Structures Lab at the University of Helsinki, implementing and visualizing Kruskal's and Depth-First Search algorithms for maze generation.
          </p>
          <p>
            I built the algorithms with <strong>Python</strong>, visualized them with <strong>Pygame</strong> and did unit testing with <strong>Pytest</strong>.
          </p>
        </>
      ),
      link: "https://github.com/laurelcrelia/data-structures-lab",
      linkDescription: "Repository",
      filter: ["Python", "Pygame", "Pytest"],
    },
    {
      title: "Cyber Security Project",
      description: (
        <>
          <p className="mb-4">
            A web application with five intentional OWASP Top Ten security vulnerabilities, developed as part of the Cyber Security Base course. The app functions as an event countdown timer, emphasizing security flaw exploration over UI design.
          </p>
          <p>
            I developed it using <strong>Python</strong>, <strong>Django</strong> and <strong>HTML</strong>.
          </p>
        </>
      ),
      link: "https://github.com/laurelcrelia/csb-project1",
      linkDescription: "Repository",
      filter: ["Python", "Django", "HTML"],
    },
    {
        title: "Work in progress...",
        description: (
          <>
            <p className="mb-4">
            This is a placeholder for my other projects that I will be adding soon.
            </p>
            <p>
            Most of my coding projects are on my repositories on GitHub so feel free to check them out:
            </p>
          </>
        ),
        link: "https://github.com/laurelcrelia?tab=repositories",
        linkDescription: "Github",
        filter: [],
      },
  ];

export default projects;