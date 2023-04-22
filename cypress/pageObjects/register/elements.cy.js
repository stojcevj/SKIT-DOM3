export  class Register{
    static get GetElements(){
        return {
            getEmailField: () => cy.get('[aria-label="Email address field"]'),
            getPasswordField:  () => cy.get('#passwordControl'),
            getPasswordConfirmField: () => cy.get('#repeatPasswordControl'),
            getSelectField: () => cy.get('#mat-select-2'),
            getSelectOptionField: () => cy.get('mat-option'),
            getSecurityAnswerField: () => cy.get('#securityAnswerControl'),
            getRegisterButton: () => cy.get('#registerButton')
        };
    }
}  