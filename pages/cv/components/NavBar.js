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
        // bg: useColorModeValue("gray.200", "gray.700"),
        textColor: "red",
        transform: "scale(1.05)",
      }}
      _focus={{
        border: "none",
        textColor: "red",
      }}
      href={children.external ? children.path : "#"}
      isExternal={children.external}
      onClick={() => {
        navChange(children.path);
      }}
      textColor={"white"}
      fontFamily="sans-serif"
      fontWeight={"600"}
    >
      {children.name}
    </Link>
  );
};

const NavBar = (navChange) => {
  const navLinks = [
    { name: "HOME", path: "/home" },
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "RESUME",
      path: "/resume",
    },
    {
      name: "PROJECTS",
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
          <Box display={useBreakpointValue({ base: "none", md: "1" })}></Box>
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
          <Box
            pb={4}
            display={{ md: "none" }}
            bg={useColorModeValue("white", "gray.800")}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <Stack as={"nav"} spacing={4}>
              {navLinks.map((link) => (
                <NavLink key={link} {...navChange}>
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
