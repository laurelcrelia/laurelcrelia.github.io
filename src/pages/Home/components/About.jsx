import React from "react"
import { TbFileCv } from "react-icons/tb";

const About= () => {
    return (
        <div className="text-white bg-[#090909] min-h-screen items-center flex sm:flex-row px-10 justify-between"id="about">
            <div className="max-w-[1200px] mx-auto sm:px-10  text-gray-300">
                <h2 className="title-large pb-8">
                About
                </h2>
                <p className="items-center justify-center mb-4 text-xl md:text-2xl">
                    I&apos;m a fourth-year computer science student at the University of Helsinki,
                    currently pursuing my master&apos;s degree. 
                    I am open to all possibilities in the tech field, but currently my expertise lies in agile and user-centered software development.
                </p>
                <p className="items-center justify-start text-xl md:text-2xl">
                More about my experience in my CV:
                </p>
                <div className="my-7 sm:justify-center md:justify-start flex flex-col gap-5 text-5xl text-primary sm:flex-row">
                <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://drive.google.com/file/d/1rszwL5F5OuKhJV3-JxG8Ge6mbUCCTIsA/view?usp=sharing"
                        className="button-hover flex items-center justify-center rounded-lg border vibrant-border px-4 py-2 text-lg vibrant-text"
                        >
                        <TbFileCv className="mr-2 icon-primary" /> CV
                    </a>
                </div>
            </div>
        </div>
    )
  }

export default About;