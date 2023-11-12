import React, { useState } from "react";

import { Box, Button, Flex, Input } from "@chakra-ui/react";
import { ModelInfo } from "../../types";
import { InsightsWrapper } from "./InsightsWrapper";
import { usePrediction } from "../../queries";

export default function MachineLearning({
  modelInfo,
}: {
  modelInfo: ModelInfo;
}) {
  const [searchText, setSearchText] = useState("");
  const [predictionFeatures, setPredictionFeatures] = useState<string[]>();

  const { data: prediction } = usePrediction(predictionFeatures);

  return (
    <InsightsWrapper
      title="Machine Learning"
      subTitle={`We tried different Machinne Learning Models for this problem and the
    best one is: ${modelInfo?.best_model_name} with test accuracy of{" "}
    ${modelInfo?.accuracy}`}
      content={
        <Flex mt={4}>
          <Box flex="1">
            <Input
              size="md"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="e.g [3,200,3.5,6]"
            />
          </Box>
          <Button
            size="md"
            onClick={() => {
              if (searchText?.includes("[") && searchText.includes("]"))
                setPredictionFeatures(JSON.parse(searchText));
            }}
          >
            Predict
          </Button>
          <Flex
            alignItems={"center"}
            justifyContent="center"
            width="50px"
            border="1px solid gray"
            borderRadius={"lg"}
          >
            {prediction}
          </Flex>
        </Flex>
      }
    />
  );
}
