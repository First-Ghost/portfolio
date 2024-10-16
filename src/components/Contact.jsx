import { useState } from "react";
import emailjs from "emailjs-com";
import rings from "../images/pattern-rings.svg";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Sorry, invalid format here";
    }
    if (!formData.message) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      emailjs
        .send(
          "service_djc4ld9",
          "template_wgdbsgi",
          formData,
          "OLE0XCt6kXZ8r6aF4"
        )
        .then((result) => {
          console.log("Form submitted successfully!", result.text);
        })
        .catch((error) => {
          console.error("Error submitting form:", error.text);
        });
    }
  };

  return (
    <div className="relative w-full lg:h-[675px] mx-auto bg-[#242424] p-8 text-white flex flex-col justify-center items-center">
      <h1 className="font-bold text-[40px] lg:text-[88px] tracking-tight mb-8">
        Contact
      </h1>
      <form className="w-full lg:w-1/2" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-xs uppercase mb-2">Name</label>
          <input
            type="text"
            name="name"
            className="w-full p-2 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-[#4EE1A0] duration-500"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">{errors.name}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-xs uppercase mb-2">Email</label>
          <input
            type="email"
            name="email"
            className="w-full p-2 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-[#4EE1A0] duration-500"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-xs uppercase mb-2">Message</label>
          <textarea
            name="message"
            className="w-full p-2 bg-transparent border-b-2 border-gray-500 focus:outline-none focus:border-[#4EE1A0] duration-500"
            rows="4"
            placeholder="Your Message Here"
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">{errors.message}</p>
          )}
        </div>
        <div className="mt-5">
          <button
            className="text-white border-b-2 border-[#4EE1A0] hover:text-[#4EE1A0] px-4 py-2 uppercase hover:tracking-wide duration-300"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
      <img className="absolute top-20 left-[-15%]" src={rings} alt="rings" />
    </div>
  );
};
