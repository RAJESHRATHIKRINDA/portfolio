import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5wpyart",
        "template_q6031gt",
        form.current,
        "qk59yReFDJt-MDf6T"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div name="contact" className="flex items-center justify-center min-h-screen bg-black">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="bg-black p-6 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-red-800">
          Contact Us
        </h2>
        <div className="mb-4">
          <label className="block text-red-700">Name</label>
          <input
            type="text"
            name="user_name"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-700">Email</label>
          <input
            type="email"
            name="user_email"
            className="mt-1 p-2 w-full border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-red-700">Message</label>
          <textarea
            name="message"
            className="mt-1 p-2 w-full border rounded"
            required
          ></textarea>
        </div>
        <div className="text-center">
        <div className="text-center">
          <input type="submit" value="Send" className="bg-blue-500 text-white py-3 px-6 rounded w-full hover:bg-blue-600 cursor-pointer text-lg" />
        </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
