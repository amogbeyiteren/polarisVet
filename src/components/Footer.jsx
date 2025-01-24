import React from "react";
import { assets } from "../assets";
import { HashLink } from "react-router-hash-link";
import { Icon } from '@iconify-icon/react';

const Footer = () => {
  return (
    <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
  <div class="mx-auto max-w-screen-xl text-center">
      <HashLink smooth to="/#" class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
          <img src={assets.logoWhite} alt="logo" className="w-28" />
          
      </HashLink>
      <p class="my-6 text-gray-500 dark:text-gray-400">PolarisVet is dedicated to providing compassionate, expert veterinary care, offering comprehensive services to keep pets healthy and happy.</p>
      <ul class="flex flex-wrap justify-center items-center mb-2 text-gray-900 dark:text-white">
          <li>
              <HashLink smooth to="/#Home" class="mr-4 hover:underline md:mr-6 ">Home</HashLink>
          </li>
          <li>
              <HashLink smooth to="/About#" class="mr-4 hover:underline md:mr-6">About</HashLink>
          </li>
          <li>
              <HashLink smooth to="/Services#" class="mr-4 hover:underline md:mr-6 ">Services</HashLink>
          </li>
          <li>
              <HashLink smooth to="/#Contact" class="mr-4 hover:underline md:mr-6">Contact</HashLink>
          </li>


      </ul>
      <ul class="flex flex-wrap justify-center items-center mb-3 text-gray-900 dark:text-white">
          <li>
              <HashLink target="_blank" smooth to="https://www.instagram.com/polarisveterinary?igsh=emZrZ2hva3lrMmow" class="mr-4 hover:underline md:mr-6 "><Icon icon="ri:instagram-fill" width="24" height="24"  style={{color: '#b9b2ad'}} /></HashLink>
          </li>
          <li>
              <HashLink target="_blank" smooth to="https://www.facebook.com/share/19ni3ZZhRH/" class="mr-4 hover:underline md:mr-6"><Icon icon="ph:facebook-logo-fill" width="24" height="24"  style={{color: '#b9b2ad'}} /></HashLink>
          </li>
          <li>
              <HashLink target="_blank" smooth to="https://x.com/PolarisVet?t=rmuLQddfjiaeqaO8Q8lM3g&s=09" class="mr-4 hover:underline md:mr-6 "><Icon icon="prime:twitter" width="24" height="24"  style={{color: '#b9b2ad'}} /></HashLink>
          </li>
          


      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <HashLink smooth to="/#" class="hover:underline">PolarisVet </HashLink>. All Rights Reserved.</span>
  </div>
</footer>
  );
};

export default Footer;
