beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.App')
    .should('be.visible')
    cy.get('.popup-inner')
        .get('p').contains('Hi there!')
        .get('button').click()
})