import React from "react";
import { mount } from "@cypress/react";
import MachineLearning from "./MachineLearning";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

describe("MachineLearning", () => {
  context("when is rendered", () => {
    it("should show model info", () => {
      mount(
        <QueryClientProvider client={new QueryClient({})}>
          <MachineLearning
            modelInfo={{
              accuracy: 99.38,
              best_model_name: "GradientBoostingRegressor",
            }}
          />
        </QueryClientProvider>
      );
      cy.contains("GradientBoostingRegressor").should("exist");
      cy.contains("99.38").should("exist");
    });
  });

  context("when text is entered and predict button is clicked", () => {
    it("should show prediction", () => {
      cy.intercept(
        {
          method: "POST",
          url: "/predict*",
        },
        { prediction: 3 }
      ).as("getPrediction");
      mount(
        <QueryClientProvider client={new QueryClient({})}>
          <MachineLearning
            modelInfo={{
              accuracy: 99.38,
              best_model_name: "GradientBoostingRegressor",
            }}
          />
        </QueryClientProvider>
      );
      cy.get('[data-cy="predict-input"]').type("[1,2]");
      cy.get("button:contains(Predict)").click();
      cy.wait("@getPrediction");
      cy.contains("3").should("exist");
    });
  });
});
