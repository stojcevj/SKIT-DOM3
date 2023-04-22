export class Product{
    static get GetProduct(){
        return {
            getSearchBox: () => cy.get('#searchQuery'),
            getSearchBoxType: () => cy.get('#mat-input-0'),
            getShoppingCartQuantity: () => cy.get('.fa-layers-counter.warn-notification'),
            getShoppingCart: () => cy.get('.btn-basket'),
            getShoppingCartGlobal: () => cy.get('.mat-focus-indicator.buttons.mat-button.mat-button-base.ng-star-inserted'),
            getDeleteButton: () => cy.get('.cdk-column-remove>.mat-icon-button'),
            getCloseDialogButton: () => cy.get('.cc-btn.cc-dismiss'),
            getNextPageButton: () => cy.get('[aria-label="Next page"]'),
            getOutOfStockLabel: () => cy.get('.ribbon-sold'),
            getBody: () => cy.get('body')
        };
    }
}