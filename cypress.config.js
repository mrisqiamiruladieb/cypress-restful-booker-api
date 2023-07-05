const { defineConfig } = require('cypress')

module.exports = defineConfig({
    e2e: {
        baseUrl : 'https://restful-booker.herokuapp.com',
        specPattern : 'cypress/support/e2e',
        supportFile : false
    },
    env: {
        username : 'admin',
        password : 'password123'
    }
})