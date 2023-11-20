import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

export default function InsightsWrapper({
  title,
  subTitle,
  content,
  ...rest
}: {
  title: string;
  subTitle?: string;
  content: JSX.Element;
  "data-cy"?: string;
}) {
  return (
    <Flex height="100%" overflow={"auto"} direction="column" gap={2} {...rest}>
      <Box>
        <Heading fontSize="5xl">{title}</Heading>
        {subTitle && (
          <Text fontSize="sm" mt={2}>
            {subTitle}
          </Text>
        )}
      </Box>
      <Box flex="1" overflow={"auto"}>
        {content}
      </Box>
    </Flex>
  );
}
