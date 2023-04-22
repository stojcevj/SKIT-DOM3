import { Login } from './elements.cy';

export default class LoginMethods{
    login = (email, password) => {
        Login.GetElements.getEmailField().type(email);
        Login.GetElements.getPasswordField().type(password);
        Login.GetElements.getLoginSubmitButton().click();
    }

    navigateToLogin = (page) => {
        cy.visit(page);  
        Login.GetElements.getCloseDialog().click(); 
    }
}