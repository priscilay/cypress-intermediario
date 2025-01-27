import login from "../support/pages/login"
import logout from "../support/pages/menu"
import "../support/gui_commands"
const Login = new login
const Logout = new logout
const user = Cypress.env("user_name")
const password = Cypress.env("user_password")

describe('Testes Login', () => {
    beforeEach(() => {
      cy.visit('/users/sign_in')
    });

  it('Login com sucesso', () => {
    cy.login(user, password)
    // Login.signin(user, password)
    cy.get('.blank-state-welcome-title')
    .should('have.text', '\nWelcome to GitLab\n')
  })

  it('Logout com sucesso', () => {
    Login.signin(user, password)
    Logout.logout()
    cy.get('.col-sm-12 > .mb-3')
    .should('have.text', '\nGitLab Community Edition\n')
  });
})