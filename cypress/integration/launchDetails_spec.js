describe('launch_details', () => {
    it('user can read launch details', () => {
        cy.visit('http://localhost:3000/launches/past-launches/105');
    })
})