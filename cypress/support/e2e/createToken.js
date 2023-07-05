describe('Restful booker API Create Token Testing', () => {
    it('Create Token', () => {
        let body = {
            "username" : Cypress.env('username'),
            "password" : Cypress.env('password')
        }

        cy.request('POST', '/auth', body).as('createToken');
        cy.get('@createToken').then(createToken => {
            expect(createToken.status).to.equal(200);
            expect(createToken.body).to.haveOwnProperty('token');
        })

    })
})