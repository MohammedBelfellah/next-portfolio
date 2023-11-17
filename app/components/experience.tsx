// Import necessary libraries and components
"use client";
import React from "react";
import SectionHeading from "./sectionHeading";
import { useSectionInView } from "../lib/hooks";
import Image from "next/image";

// Experience component
export default function Experience() {
  const { ref } = useSectionInView("Education");

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <div className=" mx-5">
        <SectionHeading>My education</SectionHeading>
        <div className="relative px-6 flex flex-col space-y-8">
          <div
            className="absolute z-0 w-2 h-full bg-white shadow-md inset-0 left-17 md:mx-auto md:right-0 md:left-0"
          ></div>
          <div className="relative z-10">
            <Image
              width={200}
              height={200}
              src="/school.jpg"
              alt=""
              className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
            />
          <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-auto md:pl-16">
                    <div
                        // className="absolute inset-0 right-10 h-4 w-4 transform -rotate-45 bg-white xs:top-11 xs:right-26 md:right-14 md:left-auto md:left-14"
                        aria-hidden="true"
                    ></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            > Jan 2022</span>
                        <h1 className="text-2xl font-bold pt-1">Bac degree (high school degree)</h1>
                        <p className="pt-1">
                          In 2022, I successfully completed my baccalaureate diploma in Morocco, specializing in physics. 
                          This achievement has equipped me with a solid foundation in <span className="font-bold"> Math & physics</span>
                        </p>
                    </div>
                </div>
            </div>

          <div className="relative z-10">
            <Image
              width={200}
              height={200}
              src="/cap.jpg"
              alt=""
              className="h-24 w-24 object-cover rounded-full shadow-md border-4 border-white xs:absolute md:mx-auto md:left-0 md:right-0"
            />

            <div className="relative pt-2 xs:pl-28 xs:pt-0 md:w-1/2 md:ml-0 md:mr-auto md:pl-0 md:pr-16">
                    <div
                        aria-hidden="true"
                    ></div>
                    <div className="bg-white p-6 rounded-md shadow-md">
                        <span
                            className="font-bold text-indigo-600 text-sm tracking-wide"
                            > september 2022 - present</span>
                        <h1 className="text-2xl font-bold pt-1">Higher School of Education and Training In Mathematics</h1>
                        <p className="pt-1">
                            Immersed in applied math, specializing in matrix algebra and complex analysis, exploring
                            their diverse applications in  
                            <span className="italic"> the technological landscape</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
