import React from "react";
import { mount } from "@cypress/react";
import FeaturesVsTarget from "./FeaturesVsTarget";
import { ProblemType } from "../../../constants";

describe("FeaturesVsTarget", () => {
  context("when is rendered", () => {
    it("should show feature importances", () => {
      mount(
        <FeaturesVsTarget
          plotData={{
            colorsPoints: [],
            problemType: ProblemType.Regression,
            x: [1],
            xy: [{ x: 1, y: 1 }],
            y: [1],
          }}
        />
      );

      cy.contains("Features* vs Target").should("exist");
      cy.contains("* Compressed using a decomposition method like PCA").should(
        "exist"
      );
    });
  });
});
