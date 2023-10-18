describe("vehicles page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.contains("WB5244").click();

    cy.url().should("include", "/vehicle/WB5244");

    cy.contains("Parking[stopped]");
    cy.contains("Order details...");
    cy.get(".vehicle-title").contains("Vehicle WB5244");
  });
});

describe("orders page", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000");

    cy.contains("Orders").click();

    cy.url().should("include", "/orders");

    cy.get("table tr:nth-child(3)").within(() => {
      // all searches are automatically rooted to the found tr element
      cy.get("td").eq(0).contains("WB5244");
      cy.get("td").eq(1).contains("stopped");
      cy.get("td").eq(3).contains("18 / 23");
    });

    cy.get("input").type("WB5244");

    cy.get("tbody tr").should("have.length", 1);
  });
});
