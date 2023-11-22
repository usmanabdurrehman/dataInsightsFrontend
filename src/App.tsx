import axios from "axios";
import { Application } from "./Components/Application";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrandColor } from "./constants";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 0,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: true,
      retry: 1,
    },
    mutations: {
      throwOnError: true,
      retry: 1,
    },
  },
});

const theme = extendTheme({
  colors: {
    brand: {
      bg: BrandColor.Background,
      color: BrandColor.Color,
      bgMain: BrandColor.BackgroundMain,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Application />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
