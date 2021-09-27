beforeEach(() => {
    cy.visit("http://localhost:3000/")
        .get("button").click()
        cy.visit("http://localhost:3000/Activity")
        cy.url().should("eq", "http://localhost:3000/Activity")
        cy.visit("http://localhost:3000/Activity/")
        cy.get(".nav-bar")
            .get(".favorites-btn").click()
            cy.url().should("eq", "http://localhost:3000/Activity/Favorites")
})

describe("Favorites Page", () => {
it("Should be able to see favorites page", () => {
    cy.visit("http://localhost:3000/Activity/Favorites")
})

it("Should not be able to see favorites", () => {
    cy.get(".favorites-section")
    cy.get(".favorites-message").contains("You have not favorites yet ....")
})

it("Should be able yo see favorite activity and home button", () => {
    cy.visit("http://localhost:3000/Activity")
        cy.get(".randomizer-container")
            .get("#dropDown").select("all")
            cy.get(".activity-container")
            .get(".generate-btn").click()
            cy.FetchData("GET","http://www.boredapi.com/api/Activity/")
            .get(".favorite-btn").click().contains("🧡")
            cy.get('.favorites-btn').click()
        cy.visit("http://localhost:3000/Activity/Favorites")
    //  cy.get("favorites-section")
    // cy.get("favorites-card")
    .get("ul")
    .get("li").contains("Conquer one of your fears")

})
})