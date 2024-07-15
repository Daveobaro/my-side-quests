describe('visiting bark.com', () => {
	it('visits the site and creates a request', () => {
		cy.visit('https://qa-6.d.bark.com');
        cy.get('#onetrust-accept-btn-handler').click()

        cy.get('.text-xs-14 > [data-caid="1505"]').click()
        cy.get(':nth-child(2) > .label-container').click()
        cy.get('[data-cy="continue"]').click()

	});
});
