class RegisterPage {

  get firstName() { return cy.get('#first_name'); }
  get lastName() { return cy.get('#last_name'); }
  get dob() { return cy.get('#dob'); }
  get address() { return cy.get('#address'); }
  get postcode() { return cy.get('#postcode'); }
  get city() { return cy.get('#city'); }
  get state() { return cy.get('#state'); }
  get country() { return cy.get('#country'); }
  get phone() { return cy.get('#phone'); }
  get email() { return cy.get('#email'); }
  get password() { return cy.get('#password'); }
  get registerBtn() { return cy.get('.btnSubmit'); }

  
  register(user) {
    if (user.firstName) this.firstName.type(user.firstName);
    if (user.lastName) this.lastName.type(user.lastName);
    if (user.dob) this.dob.type(user.dob);
    if (user.address) this.address.type(user.address);
    if (user.postcode) this.postcode.type(user.postcode);
    if (user.city) this.city.type(user.city);
    if (user.state) this.state.type(user.state);
    if (user.country) this.country.select(user.country);
    if (user.phone) this.phone.type(user.phone);
    if (user.email) this.email.type(user.email);
    if (user.password) this.password.type(user.password);
    
    this.registerBtn.click();
  }
}

export default new RegisterPage();