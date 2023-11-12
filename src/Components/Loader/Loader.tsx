import { Flex, Heading } from "@chakra-ui/react";
import React from "react";

export function Generate() {
  return (
    <Flex
      height="100vh"
      pos="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      alignItems={"center"}
      justifyContent="center"
      bg="#42033d"
      zIndex={10000}
    >
      <img height="96px" width="96px" src={"./Loader.gif"} />
    </Flex>
  );
}

export function Initial() {
  return (
    <Flex
      height="100vh"
      pos="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
      alignItems={"center"}
      justifyContent="center"
      bg="#42033d"
      zIndex={10000}
    >
      <Flex gap={3} alignItems="center">
        <Heading fontSize="5xl" color="#bce7fd">
          Data Insights.io
        </Heading>
        <img height="96px" width="96px" src={"./Loader.gif"} />
      </Flex>
    </Flex>
  );
}
