import {
  Box,
  chakra,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useUserDataSet } from "../../hooks/useUserDataSet";
import MediaLinks from "../MediaLinks";

const Info = () => {
  const user = useUserDataSet();
  const descWidth = useBreakpointValue({ base: "100%", md: "40%" });

  return (
    <>
      <Heading fontSize={{ base: "2xl", md: "4xl", lg: "6xl" }}>
        I'm {user.name}.
      </Heading>
      <Text
        fontSize={{ base: "md", lg: "xl" }}
        w={descWidth}
        alignSelf={"center"}
      >
        {user.description}
      </Text>
      <MediaLinks />
    </>
  );
};

export default Info;
