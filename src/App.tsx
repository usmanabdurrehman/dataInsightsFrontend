import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { DataEntryForm } from "./Components/DataEntryForm";
import { DataInsights } from "./Components/DataInsights";
import { DataInsights as DataInsightsType } from "./types";
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

function App() {
  const [dataInsights, setDataInsights] = useState<DataInsightsType>();

  return (
    <Flex
      height="100vh"
      alignItems={"center"}
      justifyContent="center"
      bg="#42033d"
    >
      <Flex height="600px" width="1280px">
        <DataEntryForm onSuccess={setDataInsights} />
        {dataInsights && (
          <Box flex="1" bg="white" p={2}>
            <DataInsights dataInsights={dataInsights} />
          </Box>
        )}
      </Flex>
    </Flex>
  );
}

export default App;
