Cypress.Commands.add('gotoSimulator', () => {
    cy.visit('http://localhost:3000/');
});

Cypress.Commands.add('setFirstName', (firstName) => {
    cy.get('#firstName').type(firstName).should("have.value", firstName);
});

Cypress.Commands.add('setLastName', (lastName) => {
    cy.get('#lastName').type(lastName).should("have.value", lastName);
});

Cypress.Commands.add('setUserName', (userName) => {
    cy.get('#username').type(userName).should("have.value", userName);
});

Cypress.Commands.add('setPassword', (password) => {
    cy.get('#password').type(password).should("have.value", password);
});

Cypress.Commands.add('setconfirmPassword', (confirmPassword) => {
    cy.get('#confirmPassword').type(confirmPassword).should("have.value", confirmPassword);
});

Cypress.Commands.add('checkSubmitButtonDisabled', () => {
    cy.get('button[type="submit"]').should("be.disabled");
});

Cypress.Commands.add('clickSubmitButton', () => {
    cy.get('button[type="submit]').click();
});

Cypress.Commands.add('clickLinkAlreadyAccount', () => {
    cy.get('a[href="/signin"]').click();
});

Cypress.Commands.add('clickLinkDontHaveAccount', () => {
    cy.get('a[href="/signup"]').click();
});