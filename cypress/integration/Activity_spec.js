beforeEach(() => {
    cy.visit("http://localhost:3000/")
    cy.get("button").click()
        cy.visit("http://localhost:3000/Activity")
        cy.url().should("eq", "http://localhost:3000/Activity")
})

describe("Activity Page", () => {
    it("Should be able see new page after clicking lets start button", () => {
    cy.visit("http://localhost:3000/Activity")
        cy.get(".Activity-container").should("be.visible")
    })

    it("Should be able to see drop down menu and select activity type and generate activity", () => {
        cy.visit("http://localhost:3000/Activity")
        cy.get(".randomizer-container")
            .get("#dropDown").select("all")
            cy.get(".activity-container")
            .get(".generate-btn").click()
            cy.FetchData("GET","http://www.boredapi.com/api/activity/")
            .get(".favorite-btn").contain("🤍")
            .get("ul")
            cy.get("li").contains("Conquer one of your fears")
    })

    it("Should be able to favorite activity", () => {
        cy.visit("http://localhost:3000/Activity")
        cy.get(".randomizer-container")
            .get("#dropDown").select("all")
            cy.get(".activity-container")
            .get(".generate-btn").click()
            cy.FetchData("GET","http://www.boredapi.com/api/activity/")
            .get(".favorite-btn").contains("🧡")
            .get("ul")
            cy.get("li").contains("Conquer one of your fears")
    })
})