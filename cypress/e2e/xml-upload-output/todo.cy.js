/// <reference types="cypress" />

describe('example xml output', () => {
    let PORT = 3005

    it('check output of xml with namespace GMD', () => {
        // load the file
        cy.fixture('example.xml').then(doc => {
            // check the doc pre-request
            console.log(doc);
            // request to server that returns error
            return cy
                .request({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/xml'
                    },
                    url: `http://localhost:${PORT}`,
                    body: doc
                })
                .then(response => {
                    return response;
                });
        });
    })

    it('check output of xml with namespace RDF', () => {
        // load the file
        cy.fixture('rdf.xml').then(doc => {
            // check the doc pre-request
            console.log(doc);
            // request to server that returns error
            return cy
                .request({
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/xml'
                    },
                    url: `http://localhost:${PORT}`,
                    body: doc
                })
                .then(response => {
                    return response;
                });
        });
    })

})
