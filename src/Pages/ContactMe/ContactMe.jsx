import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

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
    <div className="min-h-[70vh] max-w-7xl mx-auto mt-20 mb-10 sm:mb-0 flex flex-col">
      <div className="">
        <h3 className="text-3xl font-bold">
          Get In Touch<span className="text-purple-500">.</span>
        </h3>
        <p className="mt-2 md:w-3/4">
          Have a project, collaboration, or just want to say hi? Fill out the
          form below — I'll get back to you as soon as I can!
        </p>
      </div>

      <form
        ref={form}
        onSubmit={handleSendMessage}
        className="space-y-6 mt-8 bg-black/20 p-5 rounded-xl md:w-3/4"
      >
        <div className="flex flex-col sm:flex-row gap-6">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-900 p-3 rounded border border-gray-700 outline-none"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-900 p-3 rounded border border-gray-700 outline-none"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full bg-gray-900 p-3 rounded border border-gray-700 outline-none"
        ></textarea>

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded font-semibold transition-colors cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
