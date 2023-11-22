import React from "react";
import { mount } from "@cypress/react";
import Application from "./Application";
import { ProblemType } from "../../constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Application", () => {
  context("when form is submitted", () => {
    it("should show data insights", () => {
      cy.intercept(
        {
          method: "POST",
          url: "/getData*",
        },
        {
          dataDisplay: {
            columns: ["Revenue Growth"],
            rows: [[0]],
            title: "Stock Prices dataset",
          },
          featureImportances: [
            {
              featureName: "Unnamed: 0",
              statistical: 9,
              tree: 1,
            },
          ],
          model_info: {
            accuracy: 99.38,
            best_model_name: "GradientBoostingRegressor",
          },
          plotData: {
            colors_points: [],
            problem_type: ProblemType.Regression,
            x: [1],
            xy: [{ x: 1, y: 1 }],
            y: [1],
          },
          stats: {
            featureStats: [],
            numFeatures: 22,
            numSamples: 73,
            numTarget: 1,
            problemType: ProblemType.Regression,
          },
        }
      ).as("generateInsights");

      mount(
        <QueryClientProvider client={new QueryClient({})}>
          <Application />
        </QueryClientProvider>
      );
      cy.get("[data-cy=data-entry-form]").should("exist");

      cy.get('[data-cy="custom-dataset"]').eq(0).click();
      cy.get("button:contains(Get Insights)").click();

      cy.wait("@generateInsights");

      cy.get('[data-cy="data-insights"]').should("exist");
    });
  });
});
