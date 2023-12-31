import React from "react";
import { mount } from "@cypress/react";
import DataInsights from "./DataInsights";
import { ProblemType } from "../../constants";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("DataInsights", () => {
  context("when is rendered ", () => {
    it("should show particular tabs content when clicked on tabs", () => {
      mount(
        <QueryClientProvider client={new QueryClient({})}>
          <DataInsights
            dataInsights={{
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
              modelInfo: {
                accuracy: 99.38,
                bestModelName: "GradientBoostingRegressor",
              },
              plotData: {
                colorsPoints: [],
                problemType: ProblemType.Regression,
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
            }}
          />
        </QueryClientProvider>
      );
      cy.contains("The Dataset").click();
      cy.get("[data-cy=data-display]").should("exist");

      cy.contains("Data Stats").click();
      cy.get("[data-cy=data-stats]").should("exist");

      cy.contains("Features vs Targets").click();
      cy.get("[data-cy=features-vs-target]").should("exist");

      cy.contains("Feature Importances").click();
      cy.get("[data-cy=feature-importances]").should("exist");

      cy.contains("Machine Learning").click();
      cy.get("[data-cy=machine-learning]").should("exist");
    });
  });
});
