beforeEach(() => {
    cy.visit('http://localhost:3000/')
})

describe('Home-Page', () => {
    it('Should be able to see home page', () => {
        cy.get('.App')
    })
})

