import axios from "axios";
import { Application } from "./Components/Application";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASE_URL;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 0,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      throwOnError: true,
    },
    mutations: {
      throwOnError: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Application />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
