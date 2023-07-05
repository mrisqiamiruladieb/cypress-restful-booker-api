describe('Restful booker API Update Booking Testing', () => {
    it('Update Booking', () => {
        let body = {
            "firstname" : "James",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : true,
            "bookingdates" : {
                "checkin" : "2018-01-01",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        }

        cy.request('PUT', '/booking/1', body).as('updateBooking');
        cy.get('@updateBooking').then(updateBooking => {
            expect(updateBooking.status).to.equal(200);
            expect(updateBooking.body).to.haveOwnProperty('firstname');
        })

    })
})