import { Box, Button } from "@chakra-ui/react";
import NavBar from "../src/components/NavBar";
import Footer from "../src/components/Footer";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { useEffect } from "react";
import { Splash } from "./splash";
const HomePage = () => {
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

  return (
    <>
      <NavBar {...{ navChange }} />
      <Box>
        {/* <Button onClick={scrollTo}>go to 3</Button>
        <Button onClick={scrollToWithContainer}>multi</Button> */}
        <Element name="home" className="element">
          <Box h="100vh" bg="gray">
            <Splash />
          </Box>
        </Element>

        <Element name="generate-app" className="element">
          <Box h="100vh">generate-app</Box>
        </Element>
        <Element name="about" className="element">
          <Box h="100vh">About</Box>
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

      <Footer />
    </>
  );
};

export default HomePage;
