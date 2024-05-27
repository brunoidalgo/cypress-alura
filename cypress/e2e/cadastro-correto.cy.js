import pages from "../fixtures/pages.json"

describe('Testes com Cypress', () => {

  it('CT: Deve Visualizar a Página de Cadastro',() => {
    cy.visit(pages.registerPage)
    cy.get('.register > p').should('be.visible')
  })

  it('CT: Realizar um cadastro no site com sucesso', () => {
    cy.cadastro()
  });
})