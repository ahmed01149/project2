import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import RegisterPage from "../pages/RegisterPage";

const fillAllFields = (overrides = {}) => {
  cy.fixture('user').then((fixtureUser) => {

    const defaultEmail = `amda_${Date.now()}@example.com`;
    const user = { ...fixtureUser, email: defaultEmail, ...overrides };

    RegisterPage.firstName.clear().type(user.firstName);
    RegisterPage.lastName.clear().type(user.lastName);
    RegisterPage.dob.clear().type(user.dob);
    RegisterPage.country.select(user.country);
    
    cy.get('input[placeholder*="Postcode"], #postcode, [formcontrolname="postal_code"]').clear().type(user.postcode);
    cy.get('input[placeholder*="42"], #house_number').clear().type(user.houseNumber || "10");
    cy.get('input[placeholder*="Street"], #street').clear().type(user.street || "Alex St");
    cy.get('input[placeholder*="City"], #city').clear().type(user.city);
    cy.get('input[placeholder*="State"], #state').clear().type(user.state);
    
    RegisterPage.phone.clear().type(user.phone);

    RegisterPage.email.clear().type(user.email);
    RegisterPage.password.clear().type(user.password);
  });
};

Given("I open the registration page", () => {
  cy.visit("/auth/register");
});

When("I fill all valid customer data", () => {
  fillAllFields();
  cy.get('button[type="submit"]').click();
});

When("I use an email that is already registered", () => {
  fillAllFields({ email: 'customer@practicesoftwaretesting.com' });
  cy.get('button[type="submit"]').click();
});

When("I enter a password less than 8 characters", () => {
  
  fillAllFields({ password: '123' });
  cy.get('button[type="submit"]').click();
});

When("I click register without filling data", () => {
  cy.get('button[type="submit"]').click();
});

When("I enter an invalid phone number", () => {
 
  fillAllFields({ phone: 'abc' });
  cy.get('button[type="submit"]').click();
});

// --- Assertions ---
Then("I should be redirected to the login page", () => {
  cy.url({ timeout: 10000 }).should('include', '/auth/login');
});

Then("I should see an email already exists error", () => {
  cy.contains(/already exists|required/i).should('be.visible');
});

Then("I should see a password strength warning", () => {
  cy.contains(/at least 8 characters/i).should('be.visible');
});

Then("I should see validation errors on required fields", () => {
  cy.contains('is required').should('be.visible');
});

Then("I should see a phone format error", () => {
  cy.contains(/Only numbers|required/i).should('be.visible');
});