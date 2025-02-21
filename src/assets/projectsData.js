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
      filter: ["Typescript", "React", "Next.js", "PostgreSQL", "Cypress", "SQL", "Jest"],
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
        title: "Alepa City Bikes Data Analysis",
        description: (
          <>
            <p className="mb-4">
            As my first data science project, I analyzed HSL's open-source Origin-Destination data and station network data.
            </p>
            <p>
            For data processing and visualization I used <strong>Python</strong> and libraries such as <strong>pandas</strong>, <strong>numpy</strong>, and <strong>matplotlib</strong>
            </p>
          </>
        ),
        link: "https://drive.google.com/file/d/1EP7yst1CdBUBfto_g10PuHLILnmTD-C8/view?usp=sharing",
        linkDescription: "Report",
        filter: ["Python"],
    },
    {
    title: "Todo App",
    description: (
        <>
        <p className="mb-4">
        A simple todo application where you can create, view, edit and delete todos. This project was created within a time limit of 12 hours and it was my very first time developing a fullstack project. 
        </p>
        <p>
        I used PERN stack (<strong>PostgreSQL</strong>, <strong>Express</strong>, <strong>React</strong> & <strong>Node</strong>).
        </p>
        </>
    ),
    link: "https://github.com/laurelcrelia/todo-app",
    linkDescription: "Github",
    filter: ["Javascript", "React", "Node.js", "PostgreSQL", "SQL"],
    },
    {
    title: "Workout Diary App",
    description: (
        <>
        <p className="mb-4">
        A simple workout diary app that was developed for the Databases and Web Programming course. Featuring authentication, workout tracking, and social interaction.
        </p>
        <p>
        I used <strong>Python</strong> (Flask), <strong>PostgreSQL</strong>, <strong>HTML</strong> and <strong>CSS</strong>.
        </p>
        </>
    ),
    link: "https://github.com/laurelcrelia/workout-diary-app",
    linkDescription: "Github",
    filter: ["Python", "PostgreSQL", "HTML", "CSS", "SQL"],
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