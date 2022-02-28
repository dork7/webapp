import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import { useUserDataSet } from "../hooks/useUserDataSet";
import ProjectCard from "./Cards/ProjectCard";
const Projects = () => {
  const user = useUserDataSet();

  return (
    <>
      <Box pt={{ base: 4, md: 14, lg: 16 }} px={{ base: 4, md: 14, lg: 16 }}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <Heading as="u" fontSize={"2xl"}>
            Projects
          </Heading>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          {user?.projects.map((project, idx) => (
            <HStack key={idx} align={"top"}>
              <ProjectCard {...{ project }} />
            </HStack>
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default Projects;
