import React from "react";
import { mount } from "@cypress/react";
import DataEntryForm from "./DataEntryForm";

describe("DataEntryForm", () => {
  context("when is rendered", () => {
    it("should show all fields", () => {
      mount(<DataEntryForm onSubmit={() => {}} />);
      cy.contains("Data Insights.io").should("exist");
      cy.contains("Allowed Format .csv").should("exist");
      cy.contains("Select among these example datasets").should("exist");
    });
  });
});
