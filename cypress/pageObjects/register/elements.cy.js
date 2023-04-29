export  class Register{
    static get GetElements(){
        return {
            getEmailField: () => cy.get('[aria-label="Email address field"]'),
            getPasswordField:  () => cy.get('#passwordControl'),
            getPasswordConfirmField: () => cy.get('#repeatPasswordControl'),
            getSelectField: () => cy.get('[aria-label="Selection list for the security question"]'),
            getSelectOptionField: () => cy.get('mat-option'),
            getSecurityAnswerField: () => cy.get('#securityAnswerControl'),
            getRegisterButton: () => cy.get('#registerButton')
        };
    }
}  
