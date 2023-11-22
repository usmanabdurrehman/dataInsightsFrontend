import React from "react";
import { mount } from "@cypress/react";
import DataStats from "./DataStats";
import { ProblemType } from "../../../constants";

describe("DataStats", () => {
  context("when is rendered", () => {
    it("should show all stats", () => {
      mount(
        <DataStats
          stats={{
            featureStats: [],
            numFeatures: 22,
            numSamples: 73,
            numTarget: 1,
            problemType: ProblemType.Regression,
          }}
        />
      );
      cy.contains("22").should("exist");
      cy.contains("73").should("exist");
      cy.contains("1").should("exist");
      cy.contains("Samples").should("exist");
      cy.contains("Features").should("exist");
      cy.contains("Targets").should("exist");
      cy.contains("REGRESSION Problem").should("exist");
    });
  });
});
