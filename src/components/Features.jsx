import React from "react";
import { assets } from "../assets";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";

const Features = () => {
  return (
    <div
      className="w-full max-w-[85rem] mx-auto overflow-hidden py-10 px-6 lg:px-8 bg-green-100"
      id="Features"
    >
      <div className="flex flex-col md:flex-row items-center w-full justify-between gap-8 md:items-start md:gap-20">
        <div className="w-full">
          <h5 className="text-lg font-semibold text-green-600">
            Our Core Services
          </h5>
          <h2 className="text-2xl font-semibold sm:text-4xl">
            What Makes Polaris Veterinary Consult Unique?
          </h2>
        </div>
        <p className="max-w-lg sm:my-10 text-gray-600">
          We are dedicated to providing comprehensive care with compassion and
          expertise for every pet. Here's a glimpse of what we offer.
        </p>
      </div>

      <div className="py-10 lg:py-14 ">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="grid grid-cols-12 gap-2 sm:gap-6 items-center lg:-translate-x-10"
            >
              <div className="col-span-4 ">
                <img
                  className="rounded-xl aspect-square w-full object-cover"
                  src={assets.serviceImage3}
                  alt="Veterinary Care"
                />
              </div>
              <div className="col-span-3 h-3/4">
                <img
                  className="rounded-xl h-full  w-full object-cover"
                  src={assets.serviceImage2}
                  alt="Pet Surgery"
                />
              </div>
              <div className="col-span-5">
                <img
                  className="rounded-xl aspect-auto w-full object-cover"
                  src={assets.serviceImage1}
                  alt="Pet Consultation"
                />
              </div>
            </motion.div>
          </div>

          <div className="mt-5 sm:mt-10 lg:mt-0 lg:col-span-5">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                  Compassionate Care for Every Pet
                </h2>
                <p className="text-gray-500">
                  At Polaris Veterinary Consult, we provide a wide range of services designed to
                  ensure the health and happiness of your pets.
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-4">
                <li className="flex gap-x-3">
                  <span className="mt-0.5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-base text-gray-500">
                      <span className="font-bold">
                        Comprehensive Wellness Exams
                      </span>{" "}
                      for early disease detection and prevention.
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-base text-gray-500">
                      <span className="font-bold">
                        Emergency Veterinary Care
                      </span>{" "}
                      available 12 hours a day.
                    </span>
                  </div>
                </li>

                <li className="flex gap-x-3">
                  <span className="mt-0.5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      className="w-6 h-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <div>
                    <span className="text-base text-gray-500">
                      <span className="font-bold">Dental Care</span> for
                      maintaining your pet’s oral health.
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <HashLink
                  smooth
                  to="/Services#"
                  className="inline-block px-6 py-3 text-lg font-medium text-white bg-green-600 rounded-lg hover:bg-green-700"
                >
                  View All Services
                </HashLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
