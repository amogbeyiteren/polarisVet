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
  const [fullDescriptionIndex, setFullDescriptionIndex] = React.useState(null); // State to track full description visibility

  React.useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
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
    setFullDescriptionIndex(null); // Reset full description to 20 characters after closing the modal
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
                    fill-rule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clip-rule="evenodd"
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
          // Limit the description to 20 characters if it's not the full description
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
                <p className="text-gray-500 text-sm min-h-[50px] md:min-h-[30px]">
                  {description}
                </p>
                <p className="mt-5 text-gray-600 text-xs">
                  <div className="bg-white h-[50px] flex items-start justify-start">
                    <button
                      onClick={() => {
                        setFullDescriptionIndex(index); // Set the service to show full description
                        setModalIndex(index); // Open the modal when the user clicks "See More"
                      }}
                      className="relative inline-flex items-center px-12 py-3 overflow-hidden font-medium text-green-900 border-2 border-green-900 rounded-full hover:text-white group hover:bg-gray-50"
                    >
                      <span className="absolute left-0 block w-full h-0 transition-all bg-green-900 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
                      <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          ></path>
                        </svg>
                      </span>
                      <span className="relative">See More</span>
                    </button>
                    {index === modalIndex &&
                      createPortal(
                        <div className="fixed z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                          <div className="bg-white p-6 rounded-lg w-full max-w-md max-h-[calc(100vh-20px)] overflow-auto">
                            <div className="w-full flex justify-end">
                              <button
                                className="mt-4 text-red-500 hover:underline"
                                onClick={closeModal} // Close the modal and reset the description
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  viewBox="0 0 32 32"
                                >
                                  <rect width="32" height="32" fill="none" />
                                  <path
                                    fill="currentColor"
                                    d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
                                  />
                                  <path
                                    fill="currentColor"
                                    d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                                  />
                                </svg>
                              </button>
                            </div>
                            <h2 className="text-2xl mb-4">Full Description</h2>
                            <p className="mb-4">{service.description}</p>
                            <form onSubmit={onSubmit}>
                              {/* Your appointment form fields */}
                              <button className="relative inline-flex items-center px-12 py-3 overflow-hidden font-medium text-green-900 border-2 border-green-900 rounded-full hover:text-white group hover:bg-gray-50">
                                <span className="relative">Book Appointment</span>
                              </button>
                            </form>
                          </div>
                        </div>,
                        document.getElementById("modal-root")
                      )}
                  </div>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Service;
