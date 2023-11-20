import React from "react";
import { mount } from "@cypress/react";
import InsightsWrapper from "./InsightsWrapper";

describe("InsightsWrapper", () => {
  context("when is rendered with title, subTitle and content", () => {
    it("should show render all of these", () => {
      mount(
        <InsightsWrapper
          title="Predictions"
          subTitle="This is a good machine learning model"
          content={<div data-cy="content"></div>}
        />
      );
      cy.contains("Predictions").should("exist");
      cy.contains("This is a good machine learning model").should("exist");
      cy.get("[data-cy=content]").should("exist");
    });
  });
});
