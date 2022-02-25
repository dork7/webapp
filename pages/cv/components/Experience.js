import {
  Badge,
  Box,
  Button,
  chakra,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { useUserDataSet } from "../hooks/useUserDataSet";

const Experience = () => {
  const user = useUserDataSet();
  const imageLocationX = useBreakpointValue({ base: "center", lg: "flex-end" });
  const imageLocationY = useBreakpointValue({ base: "flex-end", md: "center" });

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2 }}
      spacing={0}
      _after={{
        bg: "brand.500",
        opacity: 0.25,
        pos: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: -1,
        content: '" "',
      }}
    >
      {" "}
      <Box
        d="flex"
        justifyContent={{ base: "center", lg: "flex-end" }}
        // alignItems={{ base: "flex-end", lg: "center" }}
        px={16}
      >
        <Text as="u" fontSize={{ base: "md", md: "lg", lg: "xl" }}>
          Experience
        </Text>
      </Box>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        pr={{ base: 4, lg: 12 }}
        // py={16}

        // w="full"
      >
        {user.experience.map((exp) => {
          return (
            <>
              <Badge
                color={useColorModeValue("brand.600", "gray.300")}
                bgColor={useColorModeValue("gray.300", "brand.600")}
                px={3}
                py={1}
                mb={3}
                variant="solid"
                colorScheme="brand"
                rounded="full"
              >
                {exp.designation}
              </Badge>
              <Text
                // mb={6}
                p={2}
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
                //   fontWeight="bold"
                color={useColorModeValue("brand.600", "gray.300")}
                lineHeight="shorter"
                w="75%"
              >
                {exp.company}
              </Text>
              <Text
                // mb={6}
                pl={2}
                fontSize={{ base: "sm", md: "sm", lg: "sm" }}
                //   fontWeight="bold"
                color={useColorModeValue("brand.600", "gray.300")}
                lineHeight="shorter"
              >
                {exp.year}
              </Text>
              <Text
                mb={6}
                p={2}
                fontSize={{ base: "sm", md: "md", lg: "md" }}
                //   fontWeight="bold"
                color={useColorModeValue("brand.600", "gray.300")}
                lineHeight="shorter"
                w="75%"
              >
                {exp.place}{" "}
              </Text>
            </>
          );
        })}
      </Flex>
    </SimpleGrid>
  );
};

export default Experience;
