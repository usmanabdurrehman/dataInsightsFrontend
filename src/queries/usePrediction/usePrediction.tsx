import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePrediction = () => {
  return useQuery({
    queryKey: ["GET_PREDICTION"],
    queryFn: async (features: string[]): Promise<number> => {
      const { data } = await axios.post("/predict", {
        features,
      });
      return data;
    },
  });
};
