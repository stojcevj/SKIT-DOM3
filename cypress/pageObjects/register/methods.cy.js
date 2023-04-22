import { Register } from './elements.cy';

export default class RegisterMethods{
    constructor(){
        
    }

    register = (email, password, security) => {
        Register.GetElements.getEmailField().type(email);
        Register.GetElements.getPasswordField().type(password);
        Register.GetElements.getPasswordConfirmField().type(password);
        Register.GetElements.getSelectField().click();
        Register.GetElements.getSelectOptionField().eq(0).click();
        Register.GetElements.getSecurityAnswerField().type(security);
        Register.GetElements.getRegisterButton().click();
    }

    navigateToRegister = (page) => {
        cy.visit(page);  
    }
}