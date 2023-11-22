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

      cy.get('[data-cy="file-input-btn"]').should("exist");
      cy.get("button:contains(Get Insights)").should("exist");
      cy.get("button:contains(Get Insights)").should("be.disabled");
      cy.get('[data-cy="custom-dataset"]').should("have.length", 3);
      cy.get('[data-cy="target-name"]').should("exist");
    });
  });

  context("when form is filled and file is uploaded", () => {
    it("should submit form when Get Insights is called", () => {
      const onSubmit = cy.stub();
      mount(<DataEntryForm onSubmit={onSubmit} />);
      cy.get('[data-cy="file-input"]').selectFile(
        {
          contents: Cypress.Buffer.from("sample csv file"),
          fileName: "file.csv",
          lastModified: Date.now(),
        },
        { force: true }
      );

      cy.get('[data-cy="target-name"]').type("Target");
      cy.get("button:contains(Get Insights)").click();
      cy.wrap(onSubmit).should("be.called");
    });
  });

  context("when form is filled and custom dataset btn is clicked", () => {
    it("should submit form when Get Insights is called", () => {
      const onSubmit = cy.stub();
      mount(<DataEntryForm onSubmit={onSubmit} />);

      cy.get('[data-cy="custom-dataset"]').eq(0).click();
      cy.get("button:contains(Get Insights)").click();
      cy.wrap(onSubmit).should("be.called");
    });
  });
});
