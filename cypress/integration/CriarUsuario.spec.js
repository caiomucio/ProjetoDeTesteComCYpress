///<reference types="cypress"/>

describe('criar usuário', () => {

    beforeEach('Login no site', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
        cy.get('#txtUsername').should('be.visible').type('Admin').should('have.value','Admin')
        cy.get('#txtPassword').should('be.visible').type('admin123').should('have.value','admin123')
        cy.get('#btnLogin').should('be.visible').click()


    })

    it('Criação de usuário com sucesso', () => {

        cy.get('#menu_pim_viewPimModule').click()
        cy.get('#menu_pim_addEmployee').should('be.hidden').invoke('show').click({force:true})
        cy.get('#firstName').should('be.visible').type('julio').should('have.value', 'julio')
        cy.get('#middleName').should('be.visible').type('batista').should('have.value', 'batista')
        cy.get('#lastName').should('be.visible').type('melo').should('have.value', 'melo')
        cy.get('#chkLogin').should('be.visible').click()
        cy.get('#user_name').should('be.visible').type('@juliomelo').should('have.value', '@juliomelo')
        cy.get('#user_password').should('be.visible').type('juliomelo').should('have.value', 'juliomelo')
        cy.get('#re_password').should('be.visible').type('juliomelo').should('have.value', 'juliomelo')
        cy.get('#status').should('be.visible').should('have.value','Enabled')
        cy.get('#btnSave').should('be.visible').click()
        cy.get('#personal_txtEmpFirstName').should('be.visible').should('have.value','julio')

    })

    it('Criar usuário com campos obrigatórios vazios', () => {

        cy.get('#menu_pim_viewPimModule').click()
        cy.get('#menu_pim_addEmployee').should('be.hidden').invoke('show').click({force:true})
        cy.get('#firstName').should('be.visible').should('be.empty').get('span[for="firstName"').should('not.exist')
        cy.get('#lastName').should('be.visible').should('be.empty').get('span[for="lastName"').should('not.exist')
        cy.get('#chkLogin').should('be.visible').click()
        cy.get('#user_name').should('be.visible').should('be.empty').get('span[for="user_name"').should('not.exist')
        cy.get('#user_password').should('be.visible').should('be.empty').get('span[for="user_password"').should('not.exist')
        cy.get('#re_password').should('be.visible')
        cy.get('#status').should('be.visible').should('have.value','Enabled')
        cy.get('#btnSave').should('be.visible').click()
       
        cy.get('span[for="firstName"').should('exist')
        cy.get('span[for="lastName"').should('exist')
        cy.get('span[for="user_name"').should('exist')
        cy.get('span[for="user_password"').should('exist')

    })

    it('Criar usuário com username já existente', () => {

        cy.get('#menu_pim_viewPimModule').should('be.visible').click()
        cy.get('#menu_pim_addEmployee').should('be.hidden').invoke('show').click({force:true})
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/pim/addEmployee')
        cy.get('#firstName').should('be.visible').type('julio').should('have.value', 'julio')
        cy.get('#middleName').should('be.visible').type('batista').should('have.value', 'batista')
        cy.get('#lastName').should('be.visible').type('melo').should('have.value', 'melo')
        cy.get('#chkLogin').should('be.visible').click()
        cy.get('#user_name').should('be.visible').type('@juliomelo').should('have.value', '@juliomelo')
        cy.get('#user_password').should('be.visible').type('juliomelo').should('have.value', 'juliomelo')
        cy.get('#re_password').should('be.visible').type('juliomelo').should('have.value', 'juliomelo')
        cy.get('#status').should('be.visible').should('have.value','Enabled')
        cy.get('#btnSave').should('be.visible').click()
        cy.get('[class="message warning fadable"]').should('be.visible')
        cy.get('#firstName').should('be.visible').and('be.empty')

    })

    



})