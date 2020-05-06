describe('Download Blob file', () => {
    before(() => {
        cy.server()
        cy.route('GET', '**/download').as('fileDownload');
        cy.visit('http://localhost:4000')
    })

    it('should download file with no error', () => {
        cy.get('a').click()
        cy.wait('@fileDownload')
        cy.get('@fileDownload').should('have.property', 'status', 200);
        console.log(cy.state())
    })
})
