///<reference types="cypress"/>

describe('Editar informções de um usuário', () => {

    before('Criar novo usuário e fazer login', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
       cy.get('#txtUsername').should('be.visible').clear().type('Admin').should('have.value','Admin')
       cy.get('#txtPassword').should('be.visible').clear().type('admin123').should('have.value','admin123')
       cy.get('#btnLogin').should('be.visible').click()
       cy.get('#menu_pim_viewPimModule').click()
       cy.get('#menu_pim_addEmployee').should('be.hidden').invoke('show').click({force:true})
       cy.get('#firstName').should('be.visible').clear().type('fernando').should('have.value', 'fernando')
       cy.get('#middleName').should('be.visible').clear().type('batista').should('have.value', 'batista')
       cy.get('#lastName').should('be.visible').clear().type('melo').should('have.value', 'melo')
       cy.get('#chkLogin').should('be.visible').click()
       cy.get('#user_name').should('be.visible').clear().type('@fernando').should('have.value', '@fernando')
       cy.get('#user_password').should('be.visible').clear().type('fernandomelo').should('have.value', 'fernandomelo')
       cy.get('#re_password').should('be.visible').clear().type('fernandomelo').should('have.value', 'fernandomelo')
       cy.get('#status').should('be.visible').should('have.value','Enabled')
       cy.get('#btnSave').should('be.visible').click()
       cy.get('#personal_txtEmpFirstName').should('be.visible').should('have.value','fernando')


   }) 
   
   beforeEach('Fazer login e acessar My info', () => {
       cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
       cy.get('#txtUsername').should('be.visible').clear().type('@fernando').should('have.value','@fernando')
       cy.get('#txtPassword').should('be.visible').clear().type('fernandomelo').should('have.value','fernandomelo')
       cy.get('#btnLogin').should('be.visible').click()
       cy.get('#menu_pim_viewMyDetails').should('be.visible').click()

   })

   it('Editar Personal Details', () => {
       cy.get('#btnSave').should('have.value', 'Edit').click()
       cy.get('#personal_txtEmpFirstName').click().clear().type('Fernando').should('have.value','Fernando')
       cy.get('#personal_txtEmpMiddleName').click().clear().type('Melo').should('have.value','Melo')
       cy.get('#personal_txtEmpLastName').click().clear().type('Batista').should('have.value','Batista')
       cy.get('#personal_txtEmployeeId').should('be.visible').should('be.disabled')
       cy.get('#personal_txtLicenNo').should('be.visible').should('be.disabled')
       //cy.get('#personal_txtNICNo').should('be.visible').should('be.disabled')
       cy.get('#personal_txtOtherID').should('be.visible').clear().type('5848488').should('have.value','5848488')
       cy.get('input[id="personal_txtLicExpDate"]').should('be.visible').clear().type('1988-07-01').should('have.value', "1988-07-01")
       //cy.get('#personal_txtSINNo').should('be.visible').should('be.disabled')
       cy.get('#personal_optGender_1').should('be.visible').check().should('be.checked')
       cy.get('#personal_optGender_2').should('be.visible').should('not.be.checked')
       cy.get('select[id="personal_cmbNation"]').should('be.visible').select('15').should('have.value','15')
       cy.get('select[id="personal_cmbMarital"]').should('be.visible').select('Single').should('have.value','Single')
       cy.get('#personal_txtEmpNickName').clear().type('FernandoMelo').should('have.value','FernandoMelo')
       cy.get('#personal_txtMilitarySer').clear().type('Yes').should('have.value','Yes')
       cy.get('#personal_chkSmokeFlag').check().should('be.checked')
       cy.get('#personal_DOB').should('be.visible').should('be.disabled')
       cy.get('#btnSave').should('have.value', 'Save').click()
       cy.get('#personal_txtEmpFirstName').should('have.value','Fernando').and('be.visible')
       
       cy.get('#btnEditCustom').should('have.value', 'Edit').click()
       cy.get('select[name="custom1"]').select('AB+').should('have.value','AB+')
       cy.get('#btnEditCustom').should('have.value', 'Save').click()
   })

   it('Criar Contact Details', () => {
       cy.get('ul[id="sidenav"]>li').eq(1).click()
       cy.get('[class="head"]>h1').should('be.visible').should('contain','Contact Details')
       cy.get('#btnSave').should('have.value','Edit').click()
       cy.get('#contact_street1').should('be.visible').clear().type('rua das gaivotas').should('have.value', 'rua das gaivotas')
       cy.get('#contact_street2').should('be.visible').clear().type('rua das gaivotas').should('have.value', 'rua das gaivotas')
       cy.get('#contact_city').should('be.visible').clear().type('rua das gaivotas').should('have.value', 'rua das gaivotas')
       cy.get('#contact_province').should('be.visible').clear().type('são paulo').should('have.value', 'são paulo')
       cy.get('#contact_emp_zipcode').should('be.visible').clear().type('04538-132').should('have.value', '04538-132')
       cy.get('select#contact_country').select('BR').should('have.value', 'BR')
       cy.get('#contact_emp_hm_telephone').should('be.visible').clear().type('11988547102').should('have.value', '11988547102')
       cy.get('#contact_emp_mobile').should('be.visible').clear().type('04538-132').should('have.value', '04538-132')
       cy.get('#contact_emp_work_telephone').should('be.visible').clear().type('11988547102').should('have.value', '11988547102')
       cy.get('#contact_emp_work_email').should('be.visible').clear().type('fernadomelo@test.com.br').should('have.value', 'fernadomelo@test.com.br')
       cy.get('#contact_emp_oth_email').should('be.visible').clear().type('fernadomelos@test.com.br').should('have.value', 'fernadomelos@test.com.br')
       cy.get('#btnSave').should('have.value','Save').click()
       cy.get('#contact_street1').should('have.value', 'rua das gaivotas').and('be.visible')

   })

   it('Criar Emergency Contacts', () => {
       cy.get('ul[id="sidenav"]>li').eq(2).click()
       cy.get('[class="head"]>h1').should('be.visible').should('contain','Assigned Emergency Contacts')
       cy.get('#btnAddContact').should('be.visible').click()
       cy.get('#emgcontacts_name').should('be.visible').type('Fernanda Batista Melo').should('have.value','Fernanda Batista Melo')
       cy.get('#emgcontacts_relationship').should('be.visible').type('Mother').should('have.value','Mother')
       cy.get('#emgcontacts_homePhone').should('be.visible').type('5599854744').should('have.value','5599854744')
       cy.get('#emgcontacts_mobilePhone').should('be.visible').type('5599854746').should('have.value','5599854746')
       cy.get('#emgcontacts_workPhone').should('be.visible').type('5599854748').should('have.value','5599854748')
       cy.get('#btnSaveEContact').should('be.visible').click()
       cy.get('[class="emgContactName"]').should('contain', 'Fernanda Batista Melo').and('be.visible')
       
   })




})