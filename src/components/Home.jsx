import React ,{ useEffect }from "react";
import '../styles/Home.css'
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import About from "../components/About";
import Services from "../components/Services";
import Myskill from "../components/Myskill";
import Portfolio from "../components/Portfolio";
import Experience from "../components/Experience";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Login from "../components/Login";
import { useNavigate } from "react-router-dom";
import ScrollToTopButton from "../components/ScrollToTopButton"; // adjust path



const Home = () => {


 const navigate = useNavigate();
// for animation effects
// for n times
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show"); // Optional: removes effect when scrolled away
        }
      });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-in, .fade-in-right, .fade-in-left, .fade-in-scale").forEach(el => observer.observe(el));

    return () => observer.disconnect(); // Clean up observer when component unmounts
  }, []);





  //for 1 times
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach(entry => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //         observer.unobserve(entry.target); // Stops observing after first animation
  //       }
  //     });
  //   }, { threshold: 0.3 });
  
  //   document.querySelectorAll(".fade-in, .fade-in-right, .fade-in-left, .fade-in-scale").forEach(el => observer.observe(el));
  
  //   return () => observer.disconnect(); // Cleanup observer when component unmounts
  // }, []);
  
  return (
    <div>
     
      <NavBar />
      <Header />
      <ScrollToTopButton />


      {/* Sections */}
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="myskill">
        <Myskill />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;

