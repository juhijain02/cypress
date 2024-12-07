export class registration {
    patient(pin, name, contact, year, month, date) {

        cy.intercept('GET', 'https://karexpert.epc01.kxaction.com//patient-registration/api/v1/patient?queryId=GET_PATIENTS_BY_FACILITY_ID&args=facility_id:47cf7fb0-6f71-11ea-9682-be528eb39f27-15,noCount:1&page_size=25&filter=facility_id%3A47cf7fb0-6f71-11ea-9682-be528eb39f27-15%2CFROMTOKEY%3Ag_creation_time&page_no=0&query_id=GET_PATIENTS_BY_FACILITY_ID&application=patient-registration').as('reg')
        cy.visit("https://karexpert.epc01.kxaction.com/patient-registration/patient_tab/list");
        cy.wait('@reg', { timeout: 60000 })
        cy.get('button.primary-btn span', { timeout: 60000 }).click({ force: true });
        cy.get("[id='name_\.prefix']").should('have.value', '14: Mr');
        cy.get('input[placeholder="Enter First Name"]', { timeout: 60000 }).type(name);
        cy.get('#telecom').type(contact);
        cy.get('#maritalStatus_id').select('Married');
        cy.get('input[placeholder="Choose date"]').eq(0).click()
        cy.get('.yearselect').eq(0).select(year)
        cy.get('.monthselect').eq(0).select(month);
        cy.get('.drp-animate:visible').find('tr').each(($ell, index, $list) => {
            cy.wrap($ell).find('td').each(($el, index, $list) => {
                if ($el.text() == date)
                   cy. wrap($el).click({ force: true })

            })
        })
        cy.get('[id="address\.search_key1"]> [placement="right"] > .dropdown-btn').click({ force: true });
        cy.get('[id="address\.search_key1"]> .dropdown-list > .item1 > .filter-textbox').type(pin);
        cy.get('[id="address\.search_key1"] > .dropdown-list > .item2').find('li.multiselect-item-checkbox').each(($el, index, $list) => {
            if ($el.text().includes("Dadri")) {
                cy.wrap($el).click();
            }
        });
        cy.get("[id='address\.street1']").type("AAA");
    }
}