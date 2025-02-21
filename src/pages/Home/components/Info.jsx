import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiMailSendFill } from "react-icons/ri"
import profilepic from "../../../assets/Picture.png"
import { TypeAnimation } from "react-type-animation"

const Info = () => {
  return (
    <div
      className="max-w-[1200px] min-h-screen mx-auto px-6 sm:px-6 flex items-center"
      id="home"
    >
      <div className="my-auto flex flex-col-reverse sm:flex-row justify-between w-full">
        <div className="ml-4 flex flex-col justify-center">
          <h2 className="title-large">
            Hi, I&apos;m Laurel
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            <TypeAnimation
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
            />
          </h3>
          <div className="my-7 flex justify-start gap-5 text-3xl sm:text-3xl md:text-4xl text-accent">
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
        <div className="mb-8">
          <img className="w-[350px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px] mx-auto h-auto rounded-full brightness-95" src={profilepic} alt="profile pic" />
        </div>
        </div>
      </div>
  )
}

export default Info