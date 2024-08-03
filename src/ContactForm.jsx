import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import { toast, Toaster } from "sonner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_hwjpr0q", "template_qtypiwa", form.current, {
        publicKey: "aZOpnywuh22_lsW5j",
      })
      .then(
        (result) => {
          // toast.success("Message sent!");
          toast.success("Message sent!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log("SUCCESS!", result.text);
          form.current.reset();
          window.location.href = "#Contact";
        },
        (error) => {
          // toast.error("Message failed to send.");
          toast.error("Failed to sent the message!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      {/* <Toaster richColors /> */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form action="#Contact" class="space-y-6" ref={form} onSubmit={sendEmail}>
        <div>
          <label
            htmlFor="fullname"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your Name
          </label>
          <input
            type="text"
            id="fullname"
            name="user_name"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="krish@gmail.com"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            htmlFor="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            name="message"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="text-green-700 hover:text-white border border-blue-700 bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-10 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
        >
          Send message
        </button>
      </form>
    </>
  );
}
