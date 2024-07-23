import { faker, clone, crudStorage } from "../support/e2e";
describe("", () => {
  afterEach(() => {
    cy.crudScreenshot();
  });
  it("get clientes", () => {
    cy.crud("crud");
  });
  it("get clientes", () => {
    cy.crud("example_json");
  });
});
