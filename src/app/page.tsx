"use client"

import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import About from "./components/About";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect (() => {
    AOS.init({
      easing: "ease",
      duration: 700,
      delay: 100,
      mirror: true,
      anchorPlacement: "bottom-bottom",
      offset: 150,
    })
    AOS.refresh()
  }, []);
  return (
   <main>
    <Hero/>
    <Skills/>
    <About/>
    <Contact/>
   </main>
  );
}
