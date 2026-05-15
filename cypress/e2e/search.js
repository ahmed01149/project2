import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ProductsPage from "../pages/ProductsPage";

Given("I am on the home page", () => {
  cy.visit("/");
});

When("I search for {string}", (productName) => {
  if(productName !== "") {
    ProductsPage.searchInput.clear().type(productName);
  } else {
    ProductsPage.searchInput.clear();
  }
  ProductsPage.searchBtn.click();
});

Then("I should see results related to {string}", (productName) => {

  ProductsPage.productCards.should('have.length.be.at.least', 1);
  ProductsPage.productCards.first().should('contain', productName);
});

Then("I should see no results message", () => {

  ProductsPage.productCards.should('have.length', 0);
});

Then("I should see all products", () => {
  
  ProductsPage.productCards.should('have.length.be.at.least', 5);
});

Then("the results count should be at least 1", () => {
 
  ProductsPage.productCards.should('have.length.be.at.least', 1);
});