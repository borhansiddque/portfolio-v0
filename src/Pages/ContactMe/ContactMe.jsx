import React from "react";
import toast from "react-hot-toast";

const ContactMe = () => {

  const handleSendMessage = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if(!name || !email || !message) {
      toast.error("Please Fill All Fields");
      return;
    }

    toast.success("Message Sent Successfully!")
    console.log({name, email, message});
    form.reset();
  }
  return (
    <div className="min-h-[80vh] max-w-7xl mx-auto mt-20">
      <div className="">
        <h3 className="text-3xl font-bold">
          Get In Touch<span className="text-purple-500">.</span>
        </h3>
        <p className="mt-2">
          Have a project, collaboration, or just want to say hi? Fill out the
          form below — I'll get back to you as soon as I can!
        </p>
      </div>

      <form onSubmit={handleSendMessage} className="space-y-6 mt-10 bg-black/20 p-5 rounded-xl">
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
