import LoginMethods from '../../pageObjects/login/methods.cy';
import RegisterMethods from '../../pageObjects/register/methods.cy';
import ProductMethods from '../../pageObjects/products/methods.cy'

context('Testing' , () => {
    const login = new LoginMethods();
    const register = new RegisterMethods();
    const product = new ProductMethods();

    const doLogin = (email, password) => {
        login.navigateToLogin('https://juice-shop.herokuapp.com/#/login');
        login.login(email, password);
    }

    const doRegister = (email, password, security) => {
        register.navigateToRegister('https://juice-shop.herokuapp.com/#/login');
        register.register(email, password, security);
    }

    beforeEach(() => {
        doLogin('joci2@hotmail.com', 'joci123');
        cy.wait(1000);
        cy.get('body').then((body) => {
            if (body.find('.error.ng-star-inserted').length > 0) {
                doRegister('joci2@hotmail.com', 'joci123', 'dzevdet');
                doLogin('joci2@hotmail.com', 'joci123');
            }
        });
        product.closeDialog();
    })

    it('Add product to Shopping Cart', () => {
        product.addProductToShoppingCart('Banana Juice');      
    })

    it('Delete product from Shopping Cart', () => {
        product.deleteProductFromShoppingCart();
    })

    it('Find element that cannot be added to Shopping Cart', () => {
        product.addItemOutOfStockInShoppingCart();
    })
});