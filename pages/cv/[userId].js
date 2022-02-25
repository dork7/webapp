import React from "react";
import NavBar from "./components/NavBar";
import { useEffect } from "react";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Box, Button } from "@chakra-ui/react";
import Splash from "./components/Splash";
const CV = () => {
  useEffect(() => {
    scroll.scrollToTop();
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
          <Box h="100vh" bg="gray">
            <Splash {...{ downButtonClicked }} />
          </Box>
        </Element>

        <Element name="about" className="element">
          <Box h="100vh">about</Box>
        </Element>
        <Element name="resume" className="element">
          <Box h="100vh">resume</Box>
        </Element>
        <Element name="works" className="element">
          <Box h="100vh">works</Box>
        </Element>
        <Element name="contact" className="element">
          <Box h="100vh">contact</Box>
        </Element>
        <Element
          className="element"
          id="scroll-container"
          style={{
            position: "relative",
            height: "200px",
            overflow: "scroll",
            scrollbarWidth: "none",
            marginBottom: "100px",
          }}
        >
          <Element
            name="scroll-container-first-element"
            style={{
              marginBottom: "200px",
            }}
          >
            first element inside container
          </Element>

          <Element
            name="scroll-container-second-element"
            style={{
              marginBottom: "200px",
            }}
          >
            second element inside container
          </Element>
        </Element>
        <Button onClick={scrollToTop}>top</Button>
      </Box>
    </>
  );
};

export default CV;
