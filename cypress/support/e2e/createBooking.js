describe('Restful booker API Create Booking Testing', () => {
    it('Create Booking', () => {
        let body = {
            "firstname" : "Jim",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }

        cy.request('POST', '/booking', body).as('createBooking');
        cy.get('@createBooking').then(createBooking => {
            expect(createBooking.status).to.equal(200);
            expect(createBooking.body).to.haveOwnProperty('bookingid');
        })

    })
})