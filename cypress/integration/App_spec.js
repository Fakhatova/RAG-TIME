beforeEach(() => {
    cy.visit('http://localhost:3000/')
})

describe('Home-Page', () => {
   
    it('Should be able to see home page', () => {
        cy.visit('http://localhost:3000/')
        cy.get('.App')
        .should('be.visible')
    })

    it('Should be able to see pop up activity with instructions and click start', () => {
        cy.get('.popup-inner')
        .get('p').contains('Hi there!')
        .get('button').click()
    })
})

