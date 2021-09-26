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
//
//
// -- This is a child command --
Cypress.Commands.add('FetchData', (method, url) => {
    cy.intercept(`${method}`,`${url}`, {
        statusCode: 200,
        body: {
            "activity":"Conquer one of your fears",
            "type":"recreational",
            "participants":1,
            "price":0.1,
            "link":"",
            "key":"8344539",
            "accessibility":0.1
        }
})
})
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
