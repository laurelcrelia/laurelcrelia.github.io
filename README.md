# Laurel's Portfolio

A portfolio website built with React, showcasing my projects, skills, and background as a Computer Science student.

[https://laurelcrelia.github.io](https://laurelcrelia.github.io)

## Tech Stack

- **Frontend**: React, JavaScript, Tailwind CSS
- **Package Manager**: npm
- **Deployment**: GitHub Pages
- **Environment**: Create React App

## How to Run Locally

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/laurelcrelia/laurelcrelia.github.io.git
cd laurelcrelia.github.io
```

2. **Install dependencies**

```bash
npm install
```

3. **Create a `.env` file**

Create a `.env` file in the project root with the following variables:

```
# ------- Personal Info -------
REACT_APP_NAME="Your Name"
REACT_APP_FULLNAME="Your Full Name"
REACT_APP_EMAIL=your.email@example.com
REACT_APP_KEYWORD1="Your Profession"
REACT_APP_KEYWORD2="Your Study Status"
REACT_APP_KEYWORD3="Your Hobby/Interest"
REACT_APP_DESCRIPTION="A brief description about you."

# ------- URLs -------
REACT_APP_CV_URL="https://example.com/your-cv.pdf"
REACT_APP_GITHUB_URL="https://github.com/yourusername"
REACT_APP_LINKEDIN_URL="https://www.linkedin.com/in/yourusername"

# ------- Skills -------
REACT_APP_TECH_OPTIONS="Technology1,Technology2,Technology3..."

```

4. **Start the development server**

```bash
npm start
```

Local portfolio will be available at [http://localhost:3000](http://localhost:3000).

## How to Deploy

### Prerequisites
- A GitHub repository named `yourusername.github.io` (replace `yourusername` with your actual GitHub username).
- The `gh-pages` package installed as a dev dependency.
```bash
npm install gh-pages --save-dev
```

### Deployment Steps

1. **Update the `homepage` field in `package.json`**

```json
"homepage": "https://yourusername.github.io"
```

2. **Build and deploy to GitHub Pages**

```bash
npm run build
npm run deploy
```
This will create a production build and push it to the `gh-pages` branch of your repository.

## Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/          # Images and project data
│   ├── components/      # Reusable components
│   ├── pages/           # Page components
│   │   └── Home/
│   │       └── components/ # Home page components
│   ├── App.js           # Main App component
│   ├── index.css        # Global styles
│   └── index.js         # Entry point
├── .env                 # Environment variables (not in git)
├── .gitignore
├── package.json
└── README.md
```

## License

This project is open source and available under the [MIT License](LICENSE).
