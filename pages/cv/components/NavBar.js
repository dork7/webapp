import { CloseIcon, HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";

const NavLink = ({ children, navChange }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={children.external ? children.path : "#"}
      isExternal={children.external}
      onClick={() => {
        navChange(children.path);
      }}
    >
      {children.name}
    </Link>
  );
};

const NavBar = (navChange) => {
  const navLinks = [
    { name: "Home", path: "/home" },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Resume",
      path: "/resume",
    },
    {
      name: "Projects",
      path: "/projects",
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
  const boxDisplayHack = useBreakpointValue({ base: "none", md: "1" });

  return (
    <>
      <Box
        // bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        w="100%"
        position={"fixed"}
        zIndex={999}
      >
        <Flex justifyContent={"space-between"}>
          <Box display={boxDisplayHack}></Box>
          <Flex h={16} alignItems={"center"} justifyContent={"center"}>
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
                  <NavLink key={link} {...navChange}>
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
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {navLinks.map((link) => (
                <NavLink key={link} {...{ navChange }}>
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
