describe('index.cy.ts', () => {
  it('should visit', () => {
    cy.visit('/');
    cy.get("[data-testid='title']").should('contain.text', 'Vite App');
  });
});
