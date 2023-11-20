import React from "react";
import { mount } from "@cypress/react";
import FeatureImportances from "./FeatureImportances";

describe("FeatureImportances", () => {
  context("when is rendered", () => {
    it("should show feature importances", () => {
      mount(
        <FeatureImportances
          featureImportances={[
            {
              featureName: "Revenue Growth",
              statistical: 19,
              tree: 21,
            },
          ]}
        />
      );
      cy.contains("Feature Importances").should("exist");
      cy.contains(
        "This table shows the features as ranked by the respective method"
      ).should("exist");

      cy.contains("Revenue Growth").should("exist");
      cy.contains("19").should("exist");
      cy.contains("21").should("exist");
      cy.contains("Feature Name").should("exist");
      cy.contains("Tree").should("exist");
      cy.contains("Statistical").should("exist");
    });
  });
});
