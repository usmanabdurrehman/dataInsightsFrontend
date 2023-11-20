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
  Text,
} from "@chakra-ui/react";
import { DataDisplay as DataDisplayType } from "../../../types";
import { InsightsWrapper } from "../InsightsWrapper";

export default function DataDisplay({
  dataDisplay,
}: {
  dataDisplay: DataDisplayType;
}) {
  return (
    <InsightsWrapper
      data-cy="data-display"
      title="The Data"
      content={
        <Box>
          {dataDisplay?.title && (
            <Text fontSize="2xl">{dataDisplay?.title}</Text>
          )}
          <TableContainer mt={8}>
            <Table variant="striped">
              <Thead>
                <Tr>
                  {dataDisplay?.columns?.map((column) => (
                    <Th>{column}</Th>
                  ))}
                </Tr>
              </Thead>
              <Tbody>
                {dataDisplay?.rows?.map((row) => (
                  <Tr>
                    {row?.map((rowValue) => (
                      <Td>{rowValue}</Td>
                    ))}
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      }
    />
  );
}
