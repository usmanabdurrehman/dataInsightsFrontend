import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { FeatureImportances as FeatureImportancesType } from "../../types";

export default function FeatureImportances({
  featureImportances,
}: {
  featureImportances: FeatureImportancesType[];
}) {
  return (
    <Box>
      <Heading fontSize="5xl">Feature Importances</Heading>
      <Text mt={4}>
        This table shows the features as ranked by the respective method
      </Text>
      <TableContainer mt={8}>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Feature Name</Th>
              <Th isNumeric>Tree</Th>
              <Th isNumeric>Statistical</Th>
            </Tr>
          </Thead>
          <Tbody>
            {featureImportances?.map(({ featureName, statistical, tree }) => (
              <Tr>
                <Td>{featureName}</Td>
                <Td isNumeric>{statistical}</Td>
                <Td isNumeric>{tree}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
