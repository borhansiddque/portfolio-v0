import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const ContactMe = () => {
  const form = useRef();

  const handleSendMessage = (e) => {
    e.preventDefault();
    const formEl = e.target;
    const name = formEl.name.value;
    const email = formEl.email.value;
    const message = formEl.message.value;

    if (!name || !email || !message) {
      toast.error("Please Fill All Fields");
      return;
    }

    if (!email.includes("@")) {
      toast.error("Please Enter a Valid Email");
      return;
    }

    emailjs
      .sendForm(
        "service_trodf05",
        "template_6viruie",
        form.current,
        "qnYvmyfqxGQjb_eYI"
      )
      .then(() => {
        toast.success("Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again later.");
        console.log(error.message);
      });
  };
  return (
    <div className="min-h-[70vh] max-w-7xl mx-auto my-14 sm:mt-20 flex flex-col">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Get In Touch<span className="text-orange-500">.</span>
        </h2>
        <p className="mt-2 md:w-1/2 mx-auto">
          Have a project, collaboration, or just want to say hi? Fill out the
          form below — I'll get back to you as soon as I can!
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-5 mt-12">
        <div className="flex-1 p-5 sm:p-8 bg-orange-700/20 ring ring-orange-300 rounded-2xl">
          <h3 className="text-3xl text-center sm:text-left">Contact Information</h3>
          <div className="space-y-2 mt-7">
            <div className="flex items-center gap-3 text-base">
              <CiPhone size={25} className="text-orange-200"></CiPhone>
              +8801627323206
            </div>
            <div className="flex items-center gap-3 text-base">
              <CiMail size={25} className="text-orange-200"></CiMail>
              borhansiddque19@gmail.com
            </div>
            <div className="flex items-center gap-3 text-base">
              <CiLocationOn size={25} className="text-orange-200"></CiLocationOn>
              Chattogram, Bangladesh
            </div>
          </div>
        </div>
        <form
          ref={form}
          onSubmit={handleSendMessage}
          className="flex-1 space-y-6 sm:space-y-10 bg-black/20 p-5 sm:p-8 rounded-xl w-full ring ring-orange-300"
        >
          <div className="flex flex-col xl:flex-row gap-4">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="w-full bg-gray-900 p-3 rounded border border-gray-700 outline-none shadow-md shadow-orange-500 transition-all duration-300 text-orange-200"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              className="w-full bg-gray-900 p-3 rounded border border-gray-700 outline-none shadow-md shadow-orange-500 transition-all duration-300 text-orange-200"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full bg-gray-900 p-3 rounded border border-gray-700 outline-none shadow-md shadow-orange-500 transition-all duration-300 text-orange-200"
          ></textarea>

          <button
            type="submit"
            className="inline-block rounded-full px-5 py-3 font-bold bg-orange-700 hover:bg-orange-600 text-orange-200 shadow-none hover:shadow-md hover:shadow-orange-500 hover:scale-95 transition-all duration-300 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
