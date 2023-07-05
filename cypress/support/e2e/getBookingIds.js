describe('Restful booker API Get Booking Ids Testing', () => {
    // const bookingIds = {
    //     method : 'GET',
    //     url : '/booking',
    //     qs : {
    //         firstname : Cypress.env('firstname'),
    //         lastname : Cypress.env('lastname')
    //     }
    // }
    
    it('Get Booking Ids', () => {

        // cy.request(bookingIds).as('bookingIds');
        cy.request('GET', '/booking').as('bookingIds');
        cy.get('@bookingIds').then(bookingIds => {
            expect(bookingIds.status).to.equal(200);
        })

    })
})