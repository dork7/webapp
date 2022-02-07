import { Box, Button, Flex, HStack, Stack } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Web Site",
      path: "/website",
    },
  ];
  return (
    <>
      <Flex
        p={4}
        alignContent="center"
        alignItems={"center"}
        justify={"flex-end"}
      >
        <HStack>
          {navLinks.map((link, index) => {
            return (
              <Button as="a" href={link.path}>
                {link.name}
              </Button>
            );
          })}
        </HStack>
      </Flex>
    </>
  );
};

export default NavBar;
