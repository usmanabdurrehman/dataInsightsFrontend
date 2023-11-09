import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { DataInsights } from "../../types";

export const useGenerateDataInsights = () => {
  return useMutation({
    mutationFn: async (formData: FormData): Promise<DataInsights> => {
      const { data } = await axios.post("/getData", formData);
      return data;
    },
  });
};
