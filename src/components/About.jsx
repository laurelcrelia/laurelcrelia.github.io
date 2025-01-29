import React from "react"
import { TbFileCv } from "react-icons/tb";

const About= () => {
    return (
      <div className="py-10 text-white bg-[#1e1e1ef5] h-auto "id="about">
        <div className="flex sm:flex-row items-center px-10 max-w-6xl mx-auto">
            <div>
                <div className="p-2">
                    <div className="text-gray-300 my-3">
                        <h3 className="text-4xl font-semibold mb-5">About</h3>
                        <p className="flex items-center justify-center mb-4 text-xl md:text-2xl">
                            I&apos;m a fourth-year computer science student at the University of Helsinki,
                            currently pursuing my master&apos;s degree. 
                            I am open to all possibilities in the tech field, but currently my expertise lies in agile and user-centered software development.
                        </p>
                        <p className="flex items-center justify-start text-xl md:text-2xl">
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
            </div>
        </div>
      </div>
    )
  }

export default About;