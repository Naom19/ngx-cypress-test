/// <reference types="cypress" />

describe('Our first suite', () => {

  /*  describe('This suite section', () => {
        beforeEach('code for every test', () => {
            // repetitive code
        })
    }) */

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by tag name
        cy.get('input')

        //by ID 
        cy.get('#inputEmail1')

        //by class name
        cy.get('.input-full-width')

        //by attribute name
        cy.get('[placeholder]')

        //by attribute name and value
        cy.get('[placeholder="Email"]')

        //by class value (entire value)
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by tag name and attribute with value
        cy.get('input[placeholder="Email"]')

        //by 2 different attributes
        cy.get('[placeholder="Email"][fullwidth]')

        //by  tag name, attribute with value, ID and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // most recommended way, write your own locator
        cy.get('[data-cy="inputEmail1"]')

    })

})

/*
describe('Our second suite', () => {

    it('first test', () => {

    })

    it('second test', () => {
        
    })

    it('third test', () => {
        
    })
})

// context() or describe() */
