import { login } from "../services/login"
describe("count", () => {
    let loginn;
    let total;
    before(() => {

        loginn = new login;
    })
    beforeEach(() => {
        cy.viewport(1600, 1600)
        loginn.login();
        cy.intercept({
            method: 'GET',
            //url : "https://karexpert.epc01.kxaction.com/patient-registration/patient_tab/list"
            url: "https://karexpert.epc01.kxaction.com/patient-registration/api/v1/patient?queryId=GET_PATIENTS_BY_FACILITY_ID&args=facility_id:47cf7fb0-6f71-11ea-9682-be528eb39f27-15,noCount:1&filter=facility_id%3A47cf7fb0-6f71-11ea-9682-be528eb39f27-15%2CFROMTOKEY%3Ag_creation_time&page_size=10&page_no=0&query_id=GET_PATIENTS_BY_FACILITY_ID&application=patient-registration"
        },
            {
                //statusCode: '200 OK',
                body: {
                    "id": "597afe01-af28-11ef-a06b-4e9c8a97e886-27",
                    "g_created_by_id": "cdb922a0-bbc0-11ec-8782-7e8c27ee3414-47",
                    "g_created_by_name": "Bl Admin",
                    "g_created_by_loginId": "Divyansh_9811231148",
                    "g_modified_by_id": "cdb922a0-bbc0-11ec-8782-7e8c27ee3414-47",
                    "g_modified_by_loginId": "Divyansh_9811231148",
                    "g_modified_by_name": "Bl Admin",
                    "account_time_zone": "Asia/Kolkata",
                    "g_creation_time": 1732977332288,
                    "g_modify_time": 1732977332550,
                    "g_created_by_role": "Facility Admin",
                    "g_created_by_role_type": "Admin",
                    "g_modified_by_role": "Facility Admin",
                    "g_modified_by_role_type": "Admin",
                    "archival_required": false,
                    "g_migration_status": false,
                    "g_migration_billing": false,
                    "selfReg_id": "",
                    "login_id": "",
                    "account_id": "6ad4e820-ffcc-11e9-a0e6-96e83143993f-37",
                    "active": true,
                    "registrationType": "Registered",
                    "uhId": "p1sHG/htwn49ue3lEk+Spg==",
                    "preRegistrationNo": "8c0FKF7rYefnBCho3XRc7w==",
                    "facility_name": "BL Hisariya's Super Specialist Hospital",
                    "facility_id": "47cf7fb0-6f71-11ea-9682-be528eb39f27-15",
                    "name_": {
                        "text": "MzOHt8j7QhWkqNVh4G5y+w==",
                        "family": "8c0FKF7rYefnBCho3XRc7w==",
                        "given": "8c0FKF7rYefnBCho3XRc7w==",
                        "prefix": "Mr"
                    },
                    "telecom": "hEGFsBwmfc7GNl/63jgPaA==",
                    "emailAddress": "8c0FKF7rYefnBCho3XRc7w==",
                    "secondary_emailAddress": "8c0FKF7rYefnBCho3XRc7w==",
                    "emergencyNumber": "8c0FKF7rYefnBCho3XRc7w==",
                    "selected": "dob",
                    "birthDate": "01/11/2024",
                    "patient_age": "1 M",
                    "blood_group_name": "",
                    "blood_group_id": "",
                    "vip": false,
                    "handleWithCare": false,
                    "isTemp": false,
                    "nameMasking": false,
                    "uhId_status": true,
                    "patient_name": "FnlShm53ZPSJVRrFq+alTA==",
                    "gender_id": "male",
                    "patient_gender": "Male",
                    "payer_selection_code": "single_payer",
                    "payer_selection_display": "Single Payer",
                    "maritalStatus_id": "SIN",
                    "maritalStatus": "Single",
                    "motherName": "",
                    "fatherName": "",
                    "spouseName": "",
                    "payer_type": "cash",
                    "payer_type_name": "Cash",
                    "payer_group": "Cash",
                    "payer_sub_group": "Cash",
                    "payer_group_id": "7fc188d0-6f78-11ea-9682-be528eb39f27-15",
                    "payer_sub_group_id": "ace94cb0-7062-11ed-8620-5e3adcd4ad0a-58",
                    "payer_name": "Cash Payer",
                    "payer_id": "10584e10-6f79-11ea-9682-be528eb39f27-99",
                    "payment_typeId": "cash",
                    "sponsorName": "",
                    "sponsorCode": "",
                    "scheme_name": "",
                    "scheme_id": "",
                    "address": {
                        "street1": "9DEBKPHK5Fe8PAMh5KYU3A==",
                        "street2": "9OSgxSM87NLogImdSicDy8ajFBZ5EW2Ox3Zj+tQe+s0=",
                        "street3": "",
                        "city": "faridabad",
                        "state": "haryana",
                        "pincode": "121006",
                        "country": "india",
                        "cityDisplayName": "Faridabad",
                        "stateDisplayName": "Haryana",
                        "pincodeDisplayName": "",
                        "countryDisplayName": "India"
                    },
                    "identity": {
                        "nationality": "Indian",
                        "nationality_code": "indian",
                        "frroNo": "",
                        "patient_identification_details": []
                    },
                    "otherDetails": {
                        "language": [],
                        "religion": "",
                        "occupation": "",
                        "disabilityType": "",
                        "raceCategory": "",
                        "foodPreferenceModifier": "",
                        "foodPreferenceModifierName": "",
                        "identification_marks": "",
                        "familyIncome": ""
                    },
                    "contact": {
                        "name_": "8c0FKF7rYefnBCho3XRc7w==",
                        "kin_id": "",
                        "title": "",
                        "title_name": "",
                        "telecom": "8c0FKF7rYefnBCho3XRc7w==",
                        "same_as_above": true,
                        "secondary_address": {
                            "street1": "9DEBKPHK5Fe8PAMh5KYU3A==",
                            "street2": "9OSgxSM87NLogImdSicDy8ajFBZ5EW2Ox3Zj+tQe+s0=",
                            "street3": "",
                            "city": "faridabad",
                            "state": "haryana",
                            "pincode": "121006",
                            "country": "india",
                            "cityDisplayName": "Faridabad",
                            "stateDisplayName": "Haryana",
                            "pincodeDisplayName": "",
                            "countryDisplayName": "India"
                        },
                        "kin_uhId": ""
                    },
                    "organDetails": {
                        "donateOrgan": false
                    },
                    "patient_referral_information": {
                        "leadSource_id": "Camp",
                        "leadSource": "Camp",
                        "leadSourceName": "",
                        "referType": "other",
                        "refer_name_value": "",
                        "refer_name_textbox": "abs",
                        "referral_comment": "",
                        "lead_source_comment": "",
                        "referType_display": "Other",
                        "referType_other": "Other"
                    },
                    "remarks": "",
                    "profile_id": "",
                    "external_uhId": false,
                    "registration_fee": 2,
                    "is_DND": false,
                    "patient_age_in_milli": 1730419200000,
                    "employerDetails": {
                        "employee_id": "",
                        "employee_name": "",
                        "relationship": "",
                        "relationship_name": "",
                        "employer_name": "",
                        "employer_id": "",
                        "employer_email": "",
                        "employer_mobileNo": "",
                        "employee_email": "",
                        "employee_mobileNo": "",
                        "employer_address": "",
                        "department_name": "",
                        "subDepartment_name": "",
                        "designaion": "",
                        "reason_for_leaving": "",
                        "cadre": ""
                    },
                    "abdm_number": "",
                    "healthId": "",
                    "healthIdNumber": "",
                    "creation_time": 1,
                    "per_address": {
                        "cityDisplayName": "",
                        "stateDisplayName": "",
                        "pincodeDisplayName": "",
                        "countryDisplayName": "",
                        "same_as_above": true
                    },
                    "qr_text": "",
                    "qr_family": "",
                    "qr_given": "",
                    "qr_gender_id": "",
                    "qr_telecom": "",
                    "qr_birthDate": "",
                    "current_facility_name": "BL Hisariya's Super Specialist Hospital",
                    "current_facility_id": "47cf7fb0-6f71-11ea-9682-be528eb39f27-15",
                    "donor_id": "",
                    "new_registration": true,
                    "provisional": false,
                    "override_mandatory": false,
                    "extra_data": {
                        "employeeDetails": {
                            "employee_id": "",
                            "employee_name": "",
                            "relationship": "",
                            "relationship_name": "",
                            "employer_name": "",
                            "employer_id": "",
                            "employer_email": "",
                            "employer_mobileNo": "",
                            "employee_email": "",
                            "employee_mobileNo": "",
                            "employer_address": "",
                            "department_name": "",
                            "subDepartment_name": "",
                            "designaion": "",
                            "reason_for_leaving": "",
                            "cadre": ""
                        },
                        "himsAuth": "kx"
                    }
                }

            }).as('rr')
    })

    it("count", () => {
        cy.get('a[href="/patient-registration/patient_tab"]').click({ force: true });
        cy.url().should('include', 'patient-registration/patient_tab/list')
        cy.wait('@rr')
        // .then(({request,response})=>{
        //     cy.log(response.body.length)
        //     cy.get('tr').should('have.length',response.body.length+1)
        // })
        cy.get('.btn-with-img-icon-label').click().wait(3000).then(() => {
            cy.get(".result-per-page").then(function ($elem) {
                cy.log($elem.text())
            })
        })


    })
})