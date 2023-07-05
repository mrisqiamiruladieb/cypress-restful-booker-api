describe('Restful booker API Partial Update Booking Testing', () => {
    it('Partial Update Booking', () => {
        let body = {
            "firstname" : "James",
            "lastname" : "Brown"
        }

        cy.request('PATCH', '/booking/1', body).as('partialUpdate');
        cy.get('@partialUpdate').then(partialUpdate => {
            expect(partialUpdate.status).to.equal(200);
            expect(partialUpdate.body).to.haveOwnProperty('firstname');
        })

    })
})