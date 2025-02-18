import React from "react";
import { assets } from "../assets";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    toast.info("Sending your appointment request...");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        event.target,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      toast.success("Form submitted successfully!");
      event.target.reset();
    } catch (error) {
      console.error("Error", error);
      toast.error("Failed to submit form. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="w-full max-w-[85rem] mx-auto overflow-hidden py-10 px-6 lg:px-8 flex justify-center flex-col md:flex-row items-start md:items-center"
      id="Contact"
    >
      <div className="text-[#676767] basis-[48%] ">
        <h3 className="flex items-center mb-[20px] text-[25px] text-[#000f38] font-semibold">
          Send us a message{" "}
          <img
            src={assets.msg}
            width={35}
            className="ml-[10px]"
            alt="message"
          />
        </h3>
        <p className=" ">
          How may we help you today
        </p>
        <ul>
          <li className="flex items-center my-[20px]">
            <img
              src={assets.mailIcon}
              alt="mail"
              className="w-[25px] mr-[10px]"
            />
            polarisvet@gmail.com
          </li>
          <li className="flex items-center my-[20px]">
            <img
              src={assets.phone}
              alt="phone"
              className="w-[25px] mr-[10px]"
            />{" "}
            +234 806-595-8123
          </li>
          <li className="flex items-center my-[20px]">
            <img
              src={assets.locationIcon}
              alt="location"
              className="w-[25px] mr-[10px]"
            />
            103 Ibusa Road, Umuonaje, Asaba, Delta
          </li>
        </ul>
      </div>
      <div className=" w-full md:w-1/2">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mt-[5px] resize-none"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
            className="block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mt-[5px] resize-none"
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="block w-full bg-[#ebecfe] p-[15px] border-0 outline-0 mt-[5px] resize-none"
          />
          <label>Write your messages here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your Message"
            required
            className="block w-[100%] bg-[#ebecfe] p-[15px] border-0 outline-0 mt-[5px] resize-none"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#000f38] flex items-center justify-center text-white rounded-xl mt-6 font-semibold text-lg p-4 w-full"
          >
            {isLoading ? "Sending..." : "Submit"}
            {!isLoading && (
              <img
                src={assets.whiteArrow}
                alt=""
                className="w-[35px] ml-[10px]"
              />
            )}
          </button>
        </form>

      </div>
    </div>
  );
};

export default Contact;
