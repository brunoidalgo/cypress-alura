describe('', () => {

    it('CT: Deve visualizar a Página de Login', () => {
        cy.visit(pages.loginpage)
        cy.get('h3').should("be.visible")
    })

    it('CT: Visite a página de principal do AdoPet e clique no botão ‘Ver pets disponíveis para adoção', () => {
        cy.visit(pages.loginpage)
        cy.get('.button').click()
        cy.get('.home > :nth-child(1)').contains('Veja os amigos disponíveis para adoção!')
    });

    it('CT: Visite a página de /home do AdoPet e clique no botão “Falar com o responsável', () => {
        cy.visit(pages.homepage)
        cy.get(':nth-child(1) > .card__contact').contains('Falar com responsável')
    });
})