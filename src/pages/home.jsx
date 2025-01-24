import React from 'react'
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import RoadMap from "../components/RoadMap";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="w-full  overflow-hidden">
    <Hero />
      <Features />
      <About />
      {/* <RoadMap /> */}
      <Testimonials />
      <Faq />
      <Contact />
    </div>
  )
}

export default Home



