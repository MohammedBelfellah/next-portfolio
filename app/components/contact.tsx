"use client";

import React, { MutableRefObject, useRef } from "react";
import SectionHeading from "./sectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from "react-icons/fa";
import toast from 'react-hot-toast';

export default function Contact() {
const { ref } = useSectionInView("Contact");
const form: MutableRefObject<HTMLFormElement | null>  = useRef<HTMLFormElement | null>(null);

const TEMPLATE_ID="template_uezm9u9"
const SERVICE_ID="service_y9t9o8n"
const PUBLIC_KEY="G1cIG1DKdQKNFCcPt"

const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
        emailjs.sendForm(SERVICE_ID  , TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                
                console.log(result.text);
                toast.success("Email Successfully sended!");
            }, (error) => {
                toast.error('This is an error!');
                console.log(error.text);
            });
    } else {
        console.error("Form reference is null.");
    }
};
return (
    <motion.section
    id="contact"
    ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-[7rem]"
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,
    }}
    viewport={{
        once: true,
    }}
    >
    <SectionHeading>Contact me</SectionHeading>

    <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:mohammedbelfellah2@gmail.com">
        mohammedbelfellah2@gmail.com
        </a>{" "}
        or through this form.
    </p>

    <form
        className="mt-10 flex flex-col dark:text-black"
        ref={form} onSubmit={sendEmail}
    >
        <input
        className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="email"
        type="email"
        required
        maxLength={500}
        placeholder="Your email"
        />
        <textarea
        className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
        name="message"
        placeholder="Your message"
        required
        maxLength={5000}
        />
        <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
        >
            Submit
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
    </form>
    </motion.section>
);
}