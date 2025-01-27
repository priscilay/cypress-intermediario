import login from '../support/pages/login'
const Login = new login

Cypress.Commands.add('login', (user, pssw) => {
    Login.signin(user, pssw)
  })
  
Cypress.Commands.add('logout', () => {
  cy.get('.qa-user-avatar').click()
  cy.contains('Sign out').click()
})