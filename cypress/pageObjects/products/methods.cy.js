import { Product } from '../products/elements.cy';

export default class ProductMethods{    
    addProductToShoppingCart = (searchQuery) => {
        Product.GetProduct.getSearchBox().click();
        Product.GetProduct.getSearchBoxType().type(searchQuery).type('{enter}');
        Product.GetProduct.getShoppingCartQuantity().should('have.text', '0');
        Product.GetProduct.getShoppingCart().click();
        Product.GetProduct.getShoppingCartQuantity().should('have.text', '1');
    }
    deleteProductFromShoppingCart = () => {
        Product.GetProduct.getShoppingCartQuantity().should('have.text', '1');
        Product.GetProduct.getShoppingCartGlobal().click();
        Product.GetProduct.getDeleteButton().click();
        Product.GetProduct.getShoppingCartQuantity().should('have.text', '0');
    }
    addItemOutOfStockInShoppingCart = () => {
        Product.GetProduct.getBody().then((body) => {
            while(body.find('.ribbon-sold').length <= 0){
                    Product.GetProduct.getNextPageButton()
                        .click();
            }

                if(body.find('.ribbon-sold')){
                    Product.GetProduct.getOutOfStockLabel()
                        .eq(0)
                        .parent()
                        .children()
                        .eq(2)
                        .click()
                        .get('.mat-simple-snack-bar-content')
                        .should('have.text', 'We are out of stock! Sorry for the inconvenience.')
                }
        })
    }
    closeDialog = () => {
        Product.GetProduct.getCloseDialogButton().click();
    }
}