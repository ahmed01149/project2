class ProductsPage {
  get searchInput() { return cy.get('[data-test="search-query"]'); }
  get searchBtn() { return cy.get('[data-test="search-submit"]'); }
  get productCards() { return cy.get('.card'); }
}
export default new ProductsPage();