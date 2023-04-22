/// <reference types="cypress" />

const login = () => {
    cy.get('#email')
        .type('joci2@hotmail.com');

    cy.get('#password')
        .type('joci123');
    
    cy.get('#loginButton')
        .click();
};

const register = () => {
        cy.get('#newCustomerLink')
            .children(0)
            .click();

        cy.get('[aria-label="Email address field"]')
            .type('joci2@hotmail.com');
        
        cy.get('#passwordControl')
            .type('joci123');
        
        cy.get('#repeatPasswordControl')
            .type('joci123');
        
        cy.get('#mat-select-2')
            .click();

        cy.get('mat-option')
            .eq(0)
            .click();

        cy.get('#securityAnswerControl')
            .type('dzevdet');

        cy.get('#registerButton')
            .click();
};

context('Actions', () => {
   beforeEach(() => {
    cy.visit("https://juice-shop.herokuapp.com/#/");

    cy.get('.close-dialog')
        .click();

    cy.get('#navbarAccount')
        .click();
    
    cy.get('#navbarLoginButton')
        .click();

    login();
        
    cy.wait(1000);

    cy.get('body').then((body) => {
        if (body.find('.error.ng-star-inserted').length > 0) {
           register();
           login();
        }
    });

    cy.get('.cc-btn.cc-dismiss')
        .click();
   });

   it('Add product to Shopping Cart', () => {
    cy.get('#searchQuery')
        .click();

    cy.get('#mat-input-0')
        .type('Banana Juice')
        .type('{enter}');

    cy.get('.fa-layers-counter.warn-notification')
        .should('have.text', '0');

    cy.get('.btn-basket')
        .click();
    
    cy.get('.fa-layers-counter.warn-notification')
        .should('have.text', '1');
  });

  it('Delete product from Shopping Cart', () => {
    cy.get('.fa-layers-counter.warn-notification')
        .should('have.text', '1');

    cy.get('.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted')
        .click();

    cy.get('.cdk-column-remove>.mat-icon-button')
        .click();

    cy.get('.fa-layers-counter.warn-notification')
        .should('have.text', '0');
  }); 

  it('Find element that cannot be added to Shopping Cart', () => {
    
    cy.get('body').then((body) => {
        while(body.find('.ribbon-sold').length <= 0){
            cy.get('[aria-label="Next page"]')
                .click();
        }

        if(body.find('.ribbon-sold')){
            cy.get('.ribbon-sold').eq(0)
                .parent()
                .children()
                .eq(2)
                .click()
                .get('.mat-simple-snack-bar-content')
                .should('have.text', 'We are out of stock! Sorry for the inconvenience.')
        }
        
    });
   
  });
});