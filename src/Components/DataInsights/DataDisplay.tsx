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
} from "@chakra-ui/react";
import { DataDisplay as DataDisplayType } from "../../types";

export default function DataDisplay({
  dataDisplay,
}: {
  dataDisplay: DataDisplayType;
}) {
  return (
    <Box>
      <Heading fontSize="5xl">The Data</Heading>
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
  );
}
