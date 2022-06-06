///<reference types="cypress"/>

describe('validação de login', () => { 


    it('Fazer Login com sucesso', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#logInPanelHeading').should('be.visible')
        cy.get('#txtUsername').should('be.visible').type('Admin').should('have.value','Admin')
        cy.get('#txtPassword').should('be.visible').type('admin123').should('have.value','admin123')
        cy.get('#btnLogin').should('be.visible').click()

    })

    it('Login com senha errada', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#logInPanelHeading').should('be.visible')
        cy.get('#txtUsername').should('be.visible').type('Admin').should('have.value','Admin')
        cy.get('#txtPassword').should('be.visible').type('admin').should('have.value','admin')
        cy.get('#btnLogin').should('be.visible').click()
        cy.get('#spanMessage').should('be.visible').should('have.text', 'Invalid credentials')
    
    })

    it('Login sem senha', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#logInPanelHeading').should('be.visible')
        cy.get('#txtUsername').should('be.visible').type('Admin').should('have.value','Admin')
        cy.get('#txtPassword').should('be.visible')
        cy.get('#btnLogin').should('be.visible').click()
        cy.get('#spanMessage').should('be.visible').should('have.text', 'Password cannot be empty')
    
    })

    
})
    

