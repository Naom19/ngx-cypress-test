
// the code is able to verify if the menu collapsed or not
export class NavigationPage{
    formLayoutsPage(){
        //cy.contains('Forms').click()

        cy.contains('a', 'Form').then( menu => {
            cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
                if(attr.includes('left')){
                    cy.wrap(menu).click()
                }
            })
        })
        cy.contains('Form Layouts').click()
    }

    
    datePickerPage(){
        //cy.contains('Forms').click()
        cy.contains('a', 'Form').then( menu => {
            cy.wrap(menu).find('.expand-state g g').invoke('attr', 'data-name').then( attr => {
                if(attr.includes('left')){
                    cy.wrap(menu).click()
                }
            })
        })
        cy.contains('Datepicker').click()
    }
}

export const navigateTo = new NavigationPage()