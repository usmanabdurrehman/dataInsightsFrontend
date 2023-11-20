import React from "react";
import { mount } from "@cypress/react";
import ErrorFallback from "./ErrorFallback";

describe("ErrorFallback", () => {
  context("when is rendered", () => {
    it("should show error fallback component", () => {
      mount(<ErrorFallback resetErrorBoundary={() => {}} />);
      cy.contains("Something unexpected has happen").should("exist");
      cy.get("button:contains(Try again)").should("exist");
    });
  });

  context("when try again button is clicked", () => {
    it("should call resetErrorBoundary component", () => {
      const resetErrorBoundary = cy.stub();
      mount(<ErrorFallback resetErrorBoundary={resetErrorBoundary} />);

      cy.get("button:contains(Try again)").click();
      cy.wrap(resetErrorBoundary).should("be.called");
    });
  });
});
