// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loggin',(username,password,url)=>{
    cy.intercept('GET', 'https://karexpert.epc01.kxaction.com/account-management/api/v1/application_master?queryId=GET_MY_CONFIG&args=dummy:dummy&application=account-management&filter=').as('in');
    cy.visit('https://karexpert.epc01.kxaction.com/account-management/login');
    cy.get('input[formcontrolname="login_id"]').type(username);
    cy.get('input[formcontrolname="password"]').type(password);
    cy.get('input[formcontrolname="account_url"]').type(url);
    cy.get('button').type('{enter}');
    cy.wait('@in')
})