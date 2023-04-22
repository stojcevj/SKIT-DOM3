export class Login{
    static get GetElements(){
        return {
            getEmailField: () => cy.get('#email'),
            getPasswordField:  () => cy.get('#password'),
            getLoginSubmitButton: () => cy.get('#loginButton'),
            getCloseDialog: () => cy.get('.close-dialog')
        };
    }
}   