
describe("Home-Page", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })
    it("Should be able to see home page", () => {
        cy.get(".App")
        .should("be.visible")
    })

    it("Should be able to see pop up activity with instructions and click start", () => {
        cy.get(".popup-inner")
        cy.get("p").contains("Hi there!")
        cy.get("button").click()
        .contains("Lets get started")
    })
})

