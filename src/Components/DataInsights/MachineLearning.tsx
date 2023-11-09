import React from "react";

import { Box, Heading, Text } from "@chakra-ui/react";
import { ModelInfo } from "../../types";

export default function MachineLearning({
  modelInfo,
}: {
  modelInfo: ModelInfo;
}) {
  return (
    <Box>
      <Heading fontSize="5xl">Machine Learning</Heading>
      <Text mt={4}>
        We tried different Machinne Learning Models for this problem and the
        best one is: {modelInfo?.best_model_name} with test accuracy of{" "}
        {modelInfo?.accuracy}
      </Text>
    </Box>
  );
}
