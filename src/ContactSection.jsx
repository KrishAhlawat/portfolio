import Spline from "@splinetool/react-spline";
import { useState } from "react";
import React, { useRef } from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <>
      <div
        className="text-white p-10 text-3xl mt-36 lg:mt-0 underline md:text-6xl text-center w-full font-bold bg-transparent z-10"
        id="Contact"
      >
        Get in Touch
      </div>
      <div className="lg:flex">
        <div className="text-white lg:w-1/2">
          {/* <section> */}
          <div class="py-8 mt-10 lg:py-16 px-4 mx-5 lg:mx-16 max-w-screen-md">
            <div className="flex justify-left align-middle">
              <div className="mr-5 mb-5 font-bold text-center mt-1">
                SOCIALS :
              </div>
              <div className="flex">
                <a
                  href="https://github.com/KrishAhlawat"
                  className="mr-5 opacity-60 hover:opacity-100 bg-transparent"
                  target="_blank"
                >
                  <img src="/github.png" alt="github"></img>
                </a>
                <a
                  href="https://www.linkedin.com/in/krishahlawat/"
                  className="mr-5 opacity-60 hover:opacity-100 bg-transparent"
                  target="_blank"
                >
                  <img
                    src="/linkedin-app-white-icon.webp"
                    alt="linkedin"
                    className="w-8 h-auto"
                  ></img>
                </a>
                <a
                  href="https://x.com/KrishAhlawatt"
                  className="mr-5 opacity-60 hover:opacity-100 bg-transparent"
                  target="_blank"
                >
                  <img
                    src="/X_logo_2023_(white).png"
                    alt="x logo"
                    className="w-8 h-auto bg-transparent"
                  ></img>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
          {/* </section> */}
        </div>
        <div className="lg:w-1/2">
          <Spline scene="https://prod.spline.design/AME5I0YfetL6wIKn/scene.splinecode" />
        </div>
      </div>
    </>
  );
}
