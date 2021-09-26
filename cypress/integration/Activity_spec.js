beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('button').click()
        cy.url().should('eq', 'http://localhost:3000/Activity')
        cy.visit('http://localhost:3000/Activity')
})

describe('Activity Page', () => {
    it('Should be able see new page after clicking lets start button', () => {
    cy.visit('http://localhost:3000/Activity')
        cy.get('.Activity-container').should('be.visible')
    })
})