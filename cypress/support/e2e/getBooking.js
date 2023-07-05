describe('Restful booker API Get Booking Testing', () => {
    it('Get Booking', () => {

        cy.request('GET', '/booking/1').as('getBooking');
        cy.get('@getBooking').then(getBooking => {
            expect(getBooking.status).to.equal(200);
            expect(getBooking.body).to.haveOwnProperty('additionalneeds');
        })
        
    })
})