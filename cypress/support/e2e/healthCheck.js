describe('Restful booker API Ping - Health Check Testing', () => {
    it('Ping - Health Check', () => {

        cy.request('GET', '/ping').as('ping');
        cy.get('@ping').then(ping => {
            expect(ping.status).to.equal(201);
        })
        
    })
})