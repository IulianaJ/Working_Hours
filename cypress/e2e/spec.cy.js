describe("test login functionality", function () {
  beforeEach(function () {
    cy.visit("//localhost:3000/")
      .get('[data-cy="email"]')
      .type("iuliana.jaba@thinslices.com")
      .get('[data-cy="password"]')
      .type("WorkingHours!")
      .get('[data-cy="loginButton"]')
      .click();
  });
  it("should be logged in the app", function () {});
  it("should display a table and a button", function () {});
  it("should contain an week label", function () {});
  it("should display a modal when the day cell is clicked", function () {});
  it("should close the modal when the button is clicked", function () {});
  it("should calculate the average weekly hours when the button is clicked", function () {});
});
