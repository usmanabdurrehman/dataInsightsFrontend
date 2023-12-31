import axios from "axios";
import { Application } from "./Components/Application";
import { ChakraProvider, extendTheme, Flex } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DarkBrandColor, LightBrandColor } from "./constants";
import { Audio } from "./Components";
import React, { useMemo } from "react";
import { useDarkMode } from "./store";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: true,
      retry: false,
    },
    mutations: {
      throwOnError: true,
      retry: false,
    },
  },
});

const ActionButtons = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex pos="absolute" top={2} right={2} gap={2}>
      {children}
    </Flex>
  );
};

function App() {
  const isDarkMode = useDarkMode((store) => store.isDarkMode);

  const theme = useMemo(
    () =>
      extendTheme({
        colors: {
          brand: {
            bg: isDarkMode
              ? DarkBrandColor.Background
              : LightBrandColor.Background,
            color: isDarkMode ? DarkBrandColor.Color : LightBrandColor.Color,
            bgMain: isDarkMode
              ? DarkBrandColor.BackgroundMain
              : LightBrandColor.BackgroundMain,
          },
        },
      }),
    [isDarkMode]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <ActionButtons>
          {/*TODO: Implement DarkMode Action */}
          {/* <LightDarkMode /> */}
          <Audio />
        </ActionButtons>
        <Application />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
