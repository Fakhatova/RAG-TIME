describe("Activity Page",() => {
describe("Error Page", () => {
    it("Should display message for 404 status code", () => {
        cy.intercept('http://www.boredapi.com/api/activity/', {
            status:404
        }) 
        cy.visit('http://localhost:3000/Activity/ErrorPage')
        .contains('404 ERROR. SERVER ERROR... PLEASE TRY AGAIN LATER')
        cy.get('.homee-btn').click()
        cy.url().should("eq", "http://localhost:3000/")
        
    })
    
})
})