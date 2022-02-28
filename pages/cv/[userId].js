import { Box, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import {
  animateScroll as scroll,
  Element,
  Events,
  scroller,
} from "react-scroll";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Splash from "./components/Splash";
const CV = () => {
  useEffect(() => {
    // scroll.scrollToTop();
  }, []);

  const navChange = (navLink) => {
    console.log("navLink", navLink);
    scroller.scrollTo(navLink.split("/")[1], {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollTo = () => {
    scroller.scrollTo("test3", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  const scrollToWithContainer = () => {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  };
  const downButtonClicked = () => {
    scroller.scrollTo("about", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <NavBar {...{ navChange }} />
      <Box>
        {/* <Button onClick={scrollTo}>go to 3</Button>
        <Button onClick={scrollToWithContainer}>multi</Button> */}
        <Element name="home" className="element">
          <Splash {...{ downButtonClicked }} />
        </Element>

        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="resume" className="element">
          <Resume />
          <Experience />
          <Skills />
        </Element>
        <Element name="projects" className="element">
          <Projects />
        </Element>
        {/* <Button onClick={scrollToTop}>top</Button> */}
        <Footer />
      </Box>
    </>
  );
};

export default CV;
