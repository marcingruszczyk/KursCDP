describe('Homework of modeule 5', () => {
    it('Visit main page and click ', () => {
        cy.visit('https://fabrykatestow.pl/');
        cy.get('span').contains('POKAŻ CZEGO SIĘ NAUCZĘ').first().click();
        cy.get('.elementor-element-856ea8c').scrollIntoView().screenshot("screenshot", { capture: "viewport" })
    });
});