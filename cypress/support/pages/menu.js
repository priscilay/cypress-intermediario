///reference types="Cypress"  />

import loc from '../locators/menu'

class TelaHome {
    logout(){
        cy.get(loc.menu.adm)
        .should('be.visible')
        .click({ force: true })

        cy.get(loc.menu.signout)
        // .should('be.visible')
        .click({ force: true })
    }
}

export default TelaHome