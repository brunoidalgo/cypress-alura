import { faker } from '@faker-js/faker';
import pages from "../fixtures/pages.json"

const password = faker.internet.password().substring(8).concat('1');

Cypress.Commands.add('cadastro',() => {
    cy.visit(pages.loginpage)
    cy.contains('a', 'Cadastrar').click()
    cy.get('[for="name"]').should('be.visible')
    cy.get('[data-test="input-name"]').type(faker.internet.userName())
    cy.get('[for="email"]').should('be.visible')
    cy.get('[data-test="input-email"]').type(faker.internet.email())
    cy.get('[for="pass-create"]').should('be.visible')
    cy.get('[data-test="input-password"]').type(password)
    cy.get('[for="pass-confirm"]').should('be.visible')
    cy.get('[data-test="input-confirm-password"]').type(password)
    cy.contains('button', 'Cadastrar').click()
})