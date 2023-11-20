import React from "react";
import { mount } from "@cypress/react";
import DataDisplay from "./DataDisplay";

describe("DataDisplay", () => {
  context("when is rendered", () => {
    it("should show all stats", () => {
      mount(
        <DataDisplay
          dataDisplay={{
            title: "Stock Prices Dataset",
            columns: ["Stock Number"],
            rows: [["304"]],
          }}
        />
      );
      cy.contains("The Data").should("exist");
      cy.contains("Stock Prices Dataset").should("exist");
      cy.contains("Stock Number").should("exist");
      cy.contains("304").should("exist");
    });
  });
});
