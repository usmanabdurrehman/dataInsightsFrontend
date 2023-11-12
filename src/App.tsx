import { Box, Flex } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { DataEntryForm } from "./Components/DataEntryForm";
import { DataInsights } from "./Components/DataInsights";
import { DataInsights as DataInsightsType } from "./types";
import axios from "axios";
import { useGenerateDataInsights } from "./mutations";
import * as Loader from "./Components/Loader";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

import { motion, AnimatePresence } from "framer-motion";
import Background from "./Components/Background/Background";

function App() {
  const [dataInsights, setDataInsights] = useState<DataInsightsType>();
  const { mutateAsync: generateDataInsights, isPending } =
    useGenerateDataInsights();

  const [isInitialLoaded, setIsInitialLoaded] = useState(true);
  const [isFetchingInitialData, setIsFetchingInitialData] = useState(false);

  const onSubmit = useCallback(
    async (formData: FormData) => {
      setIsFetchingInitialData(true);
      const data = await generateDataInsights(formData);
      setDataInsights(data);
    },
    [generateDataInsights]
  );

  useEffect(() => {
    setTimeout(() => {
      setIsInitialLoaded(false);
    }, 1000);
  }, []);

  if (isInitialLoaded) return <Loader.Initial />;
  if (isPending) return <Loader.Generate />;

  return (
    <>
      {/* {isPending && <Loader.Generate />} */}
      <Flex height="100vh" alignItems={"center"} justifyContent="center">
        <Background />
        <Flex height="600px" width={isFetchingInitialData ? "1280px" : "auto"}>
          <AnimatePresence>
            <motion.div
              style={{ height: "100%" }}
              initial={{ x: isFetchingInitialData ? 500 : 0, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isFetchingInitialData ? -500 : 0, opacity: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.25 }}
            >
              <DataEntryForm onSubmit={onSubmit} />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              style={{ overflow: "auto", flex: "1", height: "100%" }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
            >
              {isFetchingInitialData && (
                <Box flex="1" bg="white" p={2} overflow="auto" height="100%">
                  {dataInsights && <DataInsights dataInsights={dataInsights} />}
                </Box>
              )}
            </motion.div>
          </AnimatePresence>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
