class ContactPage {
  get firstName() { return cy.get('#first_name'); }
  get lastName() { return cy.get('#last_name'); }
  get email() { return cy.get('#email'); }
  get subject() { return cy.get('#subject'); }
  get message() { return cy.get('#message'); }
  get submitBtn() { return cy.get('.btnSubmit'); }
  get alert() { return cy.get('.alert'); }
}
export default new ContactPage();