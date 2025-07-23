import React, { useState } from "react";
import { assets } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div id="About" className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="relative p-6 md:p-16">
        <div className="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
            <h2 className="text-2xl text-gray-800 font-bold sm:text-3xl">
              About Polaris Veterinary consult
            </h2>
            <p className="mt-4 text-gray-600">
              At Polaris Veterinary Consult, we’re dedicated to improving the health and
              well-being of your pets. Our team of skilled veterinarians and
              staff offers compassionate, high-quality care for pets of all
              shapes and sizes.
            </p>

            <nav className="grid gap-4 mt-5 md:mt-10">
              <button
                type="button"
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab === 1
                    ? "bg-white shadow-md border-transparent"
                    : "hover:bg-gray-200"
                } text-start focus:outline-none p-4 md:p-5 rounded-xl`}
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
                    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
                    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
                    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                      Comprehensive Care
                    </span>
                    <span className="block mt-1 text-gray-800">
                      From routine wellness exams to emergency care, we ensure
                      your pets are happy and healthy.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab(2)}
                className={`${
                  activeTab === 2
                    ? "bg-white shadow-md border-transparent"
                    : "hover:bg-gray-200"
                } text-start focus:outline-none p-4 md:p-5 rounded-xl`}
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 14 4-4" />
                    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                      Modern Facilities
                    </span>
                    <span className="block mt-1 text-gray-800">
                      Our state-of-the-art equipment ensures accurate
                      diagnostics and advanced treatments.
                    </span>
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab(3)}
                className={`${
                  activeTab === 3
                    ? "bg-white shadow-md border-transparent"
                    : "hover:bg-gray-200"
                } text-start focus:outline-none p-4 md:p-5 rounded-xl`}
              >
                <span className="flex gap-x-6">
                  <svg
                    className="shrink-0 mt-2 size-6 md:size-7 hs-tab-active:text-blue-600 text-gray-800"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                  <span className="grow">
                    <span className="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800">
                      Compassionate Team
                    </span>
                    <span className="block mt-1 text-gray-800">
                      Our experienced staff treat your pets like their own,
                      ensuring they get the best care possible.
                    </span>
                  </span>
                </span>
              </button>
            </nav>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div>
                
                  <div>
                    <img
                      className="shadow-xl shadow-gray-200 rounded-xl"
                      src={activeTab===1?assets.compre:activeTab===2?assets.aboutImage2:assets.compassionateteam}
                      alt="Features Image"
                    />
                  </div>
               
              </div>

              <div className="hidden absolute top-0 end-0 translate-x-20 md:block lg:translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width="121"
                  height="135"
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth="10"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-0 grid grid-cols-12 size-full">
          <div className="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
