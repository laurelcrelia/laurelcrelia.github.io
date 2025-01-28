import React from "react"
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai"
import { RiMailSendFill } from "react-icons/ri"

const Info = () => {
  return (
    <div>
      <div
        className="mx-auto flex h-screen max-w-[1100px] flex-row items-center justify-center md:flex-col-reverse"
        id="home"
      >
        <div className="mx-8 my-auto flex-col">
          <p className="pt-3 text-4xl font-bold text-gray-200 md:text-6xl">
            Hi, I&apos;m <span className="text-accent">Laurel Matt</span>
          </p>
          <div className="flex items-center justify-center">
            <p className="text-xl font-bold text-gray-300 md:text-2xl">
              I&apos;m a fourth-year computer science student at the University of Helsinki, 
              currently pursuing my master&apos;s degree. 
              I am open to all possibilities in the tech field.
            </p>
          </div>
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
        
      </div>
    </div>
  )
}

export default Info