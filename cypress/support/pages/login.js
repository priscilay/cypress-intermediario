///reference types="Cypress"  />

import  loc  from "../locators/login";

class TelaLogin {
    digitarLogin(text){
        cy.get(loc.login.labelLogin)
        // .should('be.visible')
        .type(text)
    }

    digitarSenha(text){
        cy.get(loc.login.labelPassword)
        // .should('be.visible')
        .type(text, { log: false })
    }

    botaoEntrar(){
        cy.get(loc.login.botao)
        // .should('be.visible')
        .click()
    }

    signin(user, pssw){
        this.digitarLogin(user)
        this.digitarSenha(pssw)
        this.botaoEntrar()
        }
}

export default TelaLogin