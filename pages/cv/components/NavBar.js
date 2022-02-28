import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  // Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-scroll";

const NavLink = ({ children, active, handleSetActive }) => {
  return (
    <Link
      activeClass="active"
      to={children.path}
      spy={true}
      smooth={true}
      // offset={10}
      duration={500}
      onSetActive={handleSetActive}
    >
      <Text
        px={2}
        py={1}
        textColor={
          active === children.path
            ? "red"
            : active !== "home"
            ? useColorModeValue("black.100", "white.900")
            : "white"
        }
        fontFamily="sans-serif"
        fontWeight={"600"}
        cursor="pointer"
      >
        {children.name}
      </Text>
    </Link>
  );
};

const NavBar = (navChange) => {
  const navLinks = [
    { name: "HOME", path: "home" },
    {
      name: "ABOUT",
      path: "about",
    },
    {
      name: "RESUME",
      path: "resume",
    },
    {
      name: "PROJECTS",
      path: "projects",
      //   external: true,
    },
    // {
    //   name: "Contact",
    //   path: "/contact",
    //   //   external: true,
    // },
  ];
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [active, setActive] = useState("home");
  const handleSetActive = (e) => {
    console.log("chanr e", e);
    setActive(e);
  };

  return (
    <>
      <Box
        // bg={useColorModeValue("gray.100", "gray.900")}
        bg={active !== "home" && useColorModeValue("gray.100", "gray.900")}
        px={4}
        w="100%"
        position={"fixed"}
        zIndex={999}
      >
        <Flex justifyContent={"space-between"}>
          <Box display={useBreakpointValue({ base: "none", md: "1" })}></Box>
          <Flex h={12} alignItems={"center"} justifyContent={"center"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              {/* <Box>Logo</Box> */}
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {navLinks.map((link) => (
                  <NavLink key={link} {...{ active, handleSetActive }}>
                    {link}
                  </NavLink>
                ))}
              </HStack>
            </HStack>
          </Flex>
          <Flex alignItems={"center"}>
            <Button onClick={toggleColorMode} mx={4}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            bg={useColorModeValue("gray:100", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <Stack as={"nav"} spacing={4}>
              {navLinks.map((link) => (
                <NavLink key={link} {...{ active, handleSetActive }}>
                  {link}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      {/* <Box p={4}>Main Content Here</Box> */}
    </>
  );
};

export default NavBar;
