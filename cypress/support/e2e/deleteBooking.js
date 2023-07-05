describe('Restful booker API Delete Booking Testing', () => {
    it('Delete Booking', () => {

        cy.request('DELETE', '/booking/1').as('deleteBooking');
        cy.get('@deleteBooking').then(deleteBooking => {
            expect(deleteBooking.status).to.equal(201);
        })
        
    })
})