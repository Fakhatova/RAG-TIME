beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.get("button").click()
        cy.visit("http://localhost:3000/Activity")
        cy.url().should("eq", "http://localhost:3000/Activity/Favorites")
        cy.visit("http://localhost:3000/Activity/Favorites")
        cy.get(".nav-bar")
            .get(".favorites-btn").click()
})

describe('Favorites Page', () => {
    
})