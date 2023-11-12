import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePrediction = (features: string[] | undefined) => {
  return useQuery({
    queryKey: ["GET_PREDICTION"],
    queryFn: async (): Promise<number> => {
      const { data } = await axios.post("/predict", {
        features,
      });
      return data?.prediction;
    },
    enabled: !!features,
  });
};
