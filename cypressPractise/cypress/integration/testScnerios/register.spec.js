import { registration } from "../services/registration.js";
import {baseservice} from "../services/baseservice.js";

describe('register a patient', () => {
    let register;
    let base;
    let patientName;
    let contact;
    let d;

    before(() => {
        cy.viewport(1600, 900);
        base=new baseservice();
        register = new registration();
        cy.fixture('example').then(function (data) {
            d = data
        })
        patientName=base.patientName(8);
        contact=base.contactNumber(10);
    });

    beforeEach(() => {
        cy.loggin(d.username_dev, d.password_dev, d.accountURL_dev)
    });

    it('patient registratin', { browser: 'chrome' }, () => {

        Cypress.config('defaultCommandTimeout', 10000)
        register.patient(d.pincode,patientName,contact,d.year,d.month,d.date);
    })
})

