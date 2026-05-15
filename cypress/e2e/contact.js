import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ContactPage from "../pages/ContactPage";

Given("I open the Contact page", () => {
  cy.visit("https://practicesoftwaretesting.com/contact", {
    failOnStatusCode: false
  });
});

When("I fill the contact form with valid data", () => {
  ContactPage.firstName.type("Mohamed");
  ContactPage.lastName.type("Amda");
  ContactPage.email.type("test@test.com");
  ContactPage.subject.select("Webmaster");
  ContactPage.message.type("This is a test message for the projectuouohuouhouuohouihuiohihoo.");
  ContactPage.submitBtn.click();
});

When("I enter an invalid email {string}", (badEmail) => {
  ContactPage.email.clear().type(badEmail);
  ContactPage.submitBtn.click();
});

When("I click the submit button", () => {
  ContactPage.submitBtn.click();
});

When("I fill the form without selecting a subject", () => {
  ContactPage.firstName.type("Amda");
  ContactPage.email.type("test@test.com");
  ContactPage.message.type("No subject here");
  ContactPage.submitBtn.click();
});

Then("I should see a success message {string}", () => {
  cy.get(".alert-success", { timeout: 15000 })
    .should("be.visible");
});

Then("I should see an error message {string}", () => {
  cy.get(".alert-danger, .invalid-feedback", { timeout: 15000 })
    .should("be.visible");
});

Then("I should see multiple validation errors", () => {
  cy.get(".alert-danger, .invalid-feedback")
    .should("have.length.gte", 1);
});

Then("I should see an upload field for attachments", () => {
  cy.get("#attachment").should("exist");
});