import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { mount } from "@cypress/react";
import { usePrediction } from "./usePrediction";

describe("usePrediction", () => {
  const queryClient = new QueryClient();

  context("when the hook is used inside a component", () => {
    it("should return", () => {
      const instance: { data: number | undefined } = {
        data: undefined,
      };
      function HookWrapper() {
        const { data } = usePrediction(["123", "3"]);
        instance.data = data;

        return null;
      }

      cy.intercept(
        {
          method: "POST",
          url: "/predict*",
        },
        { prediction: 3 }
      ).as("getPrediction");

      mount(
        <QueryClientProvider client={queryClient}>
          <HookWrapper />
        </QueryClientProvider>
      );

      cy.wait("@getPrediction");
      cy.wrap(instance).should("have.property", "data").should("deep.equal", 3);
    });
  });
});
