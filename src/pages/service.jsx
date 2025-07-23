import React from "react";
import { assets } from "../assets";
import { services } from "../assets";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";

const Service = () => {
  const [modalIndex, setModalIndex] = React.useState(null);
  const [minDate, setMinDate] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [fullDescriptionIndex, setFullDescriptionIndex] = React.useState(null);

  React.useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; 
    setMinDate(today);
  }, []);

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

      toast.success("Appointment booked successfully!");
      setModalIndex(null);
      event.target.reset();
    } catch (error) {
      console.error("Error", error);
      toast.error("Failed to send appointment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    setModalIndex(null);
    setFullDescriptionIndex(null);
  };

  return (
    <section className="overflow-hidden">
      <div className="flex bg-yellow-50 flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
        <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-7/12">
          <div className="absolute bottom-0 right-0 hidden lg:block">
            <img
              className="object-contain w-auto h-48"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
              alt=""
            />
          </div>

          <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
            <h1 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
              See All
              <br />
              Our Services.
            </h1>
            <p className="mt-8 text-xl text-black">
              We provide a variety of Professional veterinary services to your
              pets.
            </p>

            <p className="mt-5 text-base text-black">
              Book an{" "}
              <button
                onClick={() => setModalIndex(0)}
                className="text-green-700 font-bold"
              >
                Appointment
              </button>{" "}
              now!
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
          <div className="absolute inset-0">
            <img
              className="object-contain w-full h-full scale-150"
              src={assets.hero2}
              alt=""
            />
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

          <div className="absolute bottom-0 left-0">
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex items-center">
                <svg
                  className="w-10 h-10 text-green-900"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                <h2 className="font-bold text-white text-7xl ml-2.5">1000+</h2>
              </div>
              <p className="max-w-xs mt-1.5 text-xl text-white">
                Pets attended to.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center bg-green-50 pt-12 text-4xl font-bold text-black">
        Our Services
      </h2>
      <div className="grid py-12 px-6 bg-green-50 lg:px-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[85rem] mx-auto">
        {services.map((service, index) => {
          const isFullDescription = fullDescriptionIndex === index;
          const description = isFullDescription
            ? service.description
            : service.description.slice(0, 20) + "...";

          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden flex flex-col max-w-xl mx-auto"
            >
              <img
                className="w-full rounded-xl h-[250px] object-cover"
                src={service.img}
              />

              <div className="relative rounded-xl -mt-16 px-10 py-5 flex flex-col items-start justify-between bg-white h-full m-10">
                <button className="font-semibold text-lg h-[50px] hover:text-green-900 transition duration-500 ease-in-out inline-block mb-2">
                  {service.title}
                </button>

                {/* Rendering the HTML description properly */}
                <p
                  className="text-gray-500 text-sm min-h-[50px] md:min-h-[30px]"
                  dangerouslySetInnerHTML={{ __html: description }}
                ></p>

                <button
                  onClick={() => {
                    setFullDescriptionIndex(index);
                    setModalIndex(index);
                  }}
                  className="relative inline-flex items-center px-12 py-3 overflow-hidden font-medium text-green-900 border-2 border-green-900 rounded-full hover:text-white group hover:bg-gray-50"
                >
                  <span className="relative">See More</span>
                </button>

                {index === modalIndex &&
                  createPortal(
                    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[calc(100vh-20px)] overflow-auto">
                        <div className="w-full flex justify-end">
                          <button
                            className="mt-4 text-red-500 hover:underline"
                            onClick={closeModal}
                          >
                            ❌
                          </button>
                        </div>
                        <h2 className="text-2xl mb-4">Full Description</h2>
                        <p dangerouslySetInnerHTML={{ __html: service.description }}></p>
                        <form onSubmit={onSubmit}>
                          <button className="relative inline-flex items-center px-12 py-3 overflow-hidden font-medium text-green-900 border-2 border-green-900 rounded-full hover:text-white group hover:bg-gray-50">
                            <span className="relative">Book Appointment</span>
                          </button>
                        </form>
                      </div>
                    </div>,
                    document.getElementById("modal-root")
                  )}
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer position="top-center" autoClose={5000} />
    </section>
  );
};

export default Service;

