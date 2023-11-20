import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mount } from "@cypress/react";
import { useGenerateDataInsights } from "./useGenerateDataInsights";
import { DataInsights } from "../../types";

describe("useUploadImage", () => {
  const queryClient = new QueryClient();

  context("when the hook is used inside a component", () => {
    it("should return", () => {
      const mutationData: { data: DataInsights | undefined } = {
        data: undefined,
      };
      function HookWrapper() {
        const { mutate: generateInsights, data } = useGenerateDataInsights();
        mutationData.data = data;
        useEffect(() => {
          generateInsights(new FormData());
        }, [generateInsights]);
        return null;
      }

      cy.intercept(
        {
          method: "POST",
          url: "/getData*",
        },
        { id: 1 }
      ).as("getGenerateInsights");

      mount(
        <QueryClientProvider client={queryClient}>
          <HookWrapper />
        </QueryClientProvider>
      );

      cy.wait("@getGenerateInsights");
      cy.wrap(mutationData)
        .should("have.property", "data")
        .should("deep.equal", { id: 1 });
    });
  });
});
