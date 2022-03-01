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
import { motion } from "framer-motion";

const Info = () => {
  const user = useUserDataSet();
  const descWidth = useBreakpointValue({ base: "100%", md: "40%" });

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            // scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
      >
        <Flex justify={"center"} direction="column">
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
        </Flex>
      </motion.div>
    </>
  );
};

export default Info;
