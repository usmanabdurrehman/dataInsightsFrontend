import React, { useState } from "react";

import { Box, Button, Flex, Input, Spinner } from "@chakra-ui/react";
import { ModelInfo } from "../../../types";
import { InsightsWrapper } from "../InsightsWrapper";
import { usePrediction } from "../../../queries";

export default function MachineLearning({
  modelInfo,
}: {
  modelInfo: ModelInfo;
}) {
  const [searchText, setSearchText] = useState("");
  const [predictionFeatures, setPredictionFeatures] = useState<string[]>();

  const {
    data: prediction,
    isFetching,
    ...rest
  } = usePrediction(predictionFeatures);
  console.log({ rest });
  return (
    <InsightsWrapper
      data-cy="machine-learning"
      title="Machine Learning"
      subTitle={`We tried different Machine Learning Models for this problem and the
    best one is: ${modelInfo?.best_model_name} with test accuracy of ${modelInfo?.accuracy}`}
      content={
        <Flex mt={4}>
          <Box flex="1">
            <Input
              size="md"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="e.g [3,200,3.5,6]"
              data-cy="predict-input"
            />
          </Box>
          <Button
            size="md"
            onClick={() => {
              if (searchText?.includes("[") && searchText.includes("]"))
                setPredictionFeatures(JSON.parse(searchText));
            }}
            width="100px"
          >
            {isFetching ? <Spinner size={"xs"} /> : "Predict"}
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
