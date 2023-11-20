import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { DataStats as DataStatsType } from "../../../types";
import { InsightsWrapper } from "../InsightsWrapper";

const CountCard = ({ count, label }: { count: number; label: string }) => {
  return (
    <Box
      bg="rgb(8, 76, 97)"
      color="rgb(188, 231, 253)"
      p={4}
      rounded="lg"
      flex="1"
    >
      <Text fontSize="4xl">{count}</Text>
      <Text fontSize="md" mt={2}>
        {label}
      </Text>
    </Box>
  );
};

export default function DataStats({ stats }: { stats: DataStatsType }) {
  return (
    <InsightsWrapper
      data-cy="data-stats"
      title={`${stats?.problemType?.toUpperCase()} Problem`}
      content={
        <Flex gap={8} mt={8}>
          <CountCard count={stats?.numSamples} label="Samples" />
          <CountCard count={stats?.numFeatures} label="Features" />
          <CountCard count={stats?.numTarget} label="Targets" />
        </Flex>
      }
    />
  );
}
