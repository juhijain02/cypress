export class login {
    login() {
        cy.intercept('GET', 'https://karexpert.epc01.kxaction.com/account-management/api/v1/application_master?queryId=GET_MY_CONFIG&args=dummy:dummy&application=account-management&filter=').as('in');
        cy.visit('https://karexpert.epc01.kxaction.com/account-management/login');
        cy.get('input[formcontrolname="login_id"]').type('{shift}divyansh_9811231148');
        cy.get('input[formcontrolname="password"]').type('Karexpert@1234');
        cy.get('input[formcontrolname="account_url"]').type('ganesha.kxaction.com');
        cy.get('button').type('{enter}');
        //cy.url().should('include',"https://karexpert.epc01.kxaction.com/emr/patientlist_format");
        cy.wait('@in');
    }
}
