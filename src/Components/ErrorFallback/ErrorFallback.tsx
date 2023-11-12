import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { EmojiNeutral } from "react-bootstrap-icons";

export default function ErrorFallback({
  resetErrorBoundary,
}: {
  resetErrorBoundary: () => void;
}) {
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
      color="#bce7fd"
    >
      <Box fontSize="4xl">
        <Flex gap={3} alignItems="center">
          <EmojiNeutral />
          <Text fontSize="2xl" flex="1">
            Something unexpected has happen.
          </Text>
        </Flex>
        <Flex mt={4} justifyContent="center">
          <Button onClick={resetErrorBoundary}>Try Again</Button>
        </Flex>
      </Box>
    </Flex>
  );
}
