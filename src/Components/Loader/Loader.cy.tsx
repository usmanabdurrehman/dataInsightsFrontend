import React from "react";
import { mount } from "@cypress/react";
import * as Loader from "./Loader";

describe("Loader", () => {
  context("when Loader.Generate is rendered", () => {
    it("should render generate loader", () => {
      mount(<Loader.Generate />);
      cy.get("img").should("exist");
    });
  });

  context("when Loader.Initial is rendered", () => {
    it("should render initial loader", () => {
      mount(<Loader.Initial />);
      cy.get("img").should("exist");
      cy.contains("Data Insights.io").should("exist");
    });
  });
});
