import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiMailSendFill } from "react-icons/ri"
import profilepic from "../../../assets/Picture.png"
import { TypeAnimation } from "react-type-animation"

const Info = () => {
  return (
    <div>
      <div
        className="max-w-[1300px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row align-center justify-between"
        id="home"
      >
        <div className="mx-8 my-auto flex-col">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-300">
            Hi, I&apos;m Laurel
          </p>
          <h1 className="md:text-7xl sm-text-4xl text-3xl font-bold md:py-6"><TypeAnimation
            sequence={[
              "Master's Student", 
              1000,
              "Software Developer", 
              1000,
              "UX Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          /></h1>
          <div className="my-7 flex justify-start gap-5 text-3xl text-accent md:text-5xl">
            <a
              href="https://github.com/laurelcrelia"
              className="button-hover text-accent"
            >
              <AiFillGithub className="icon-primary" />
            </a>
            <a
              href="https://www.linkedin.com/in/laurel-matt-71a4bb227"
              className="button-hover text-accent"
            >
              <AiFillLinkedin className="icon-primary" />
            </a>
            <a
              href="mailto:laurel.matt@gmail.com"
              className="button-hover text-accent"
            >
              <RiMailSendFill className="icon-primary" />
            </a>
          </div>
        </div>
        <div className="my-auto">
          <img className="w-[400px] sm:w-[500px] mx-auto h-auto rounded-full" src={profilepic} alt="profile pic" />
        </div>
      </div>
    </div>
  )
}

export default Info