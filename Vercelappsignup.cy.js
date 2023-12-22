describe('Verify sign up with valid and invalid credentials', () => {
    beforeEach(()=>{
      cy.visit('https://next-realworld.vercel.app/user/register')
      // cy.session('test', () =>{
    })
//TESTCASE:1
            it('Should validate with empty username', () => {
               
                
            cy.get(':nth-child(1) > .form-control').clear();
            cy.get(':nth-child(2) > .form-control').type("ambtest@gmail.com")
            cy.get(':nth-child(3) > .form-control').type("test")
            cy.get('.btn').click()
            cy.get('.error-messages > li').should('be.visible')
            cy.wait(2000)

            })
//TESTCASE:2
            it('Should validate with empty email', () => {
                cy.get(':nth-child(1) > .form-control').type("ambition")
                cy.get(':nth-child(2) > .form-control')
                cy.get(':nth-child(3) > .form-control').type("password")
                cy.get('.btn').click()
                cy.get('.error-messages > li').should('be.visible')
                cy.wait(2000)
            })    
//TESTCASE:3
              it('Should verify with empty password', () => {
            // cy.visit('https://next-realworld.vercel.app/user/register')
            cy.get(':nth-child(1) > .form-control').type("ambition")
            cy.get(':nth-child(2) > .form-control').type("ambtest@gmail.com")
            cy.get(':nth-child(3) > .form-control')
            cy.get('.btn').click()
            cy.get('.error-messages > li').should('be.visible')
            cy.wait(2000) 
          })   
         
//TESTCASE:4
it('Should verify signup with valid signup users', () => {
    // cy.visit('https://next-realworld.vercel.app/user/register')
    cy.get(':nth-child(1) > .form-control').type("ambition1")
    cy.get(':nth-child(2) > .form-control').type("ambtest1@gmail.com")
    cy.get(':nth-child(3) > .form-control').type("test")
    cy.get('.btn').click()
    // cy.get(':nth-child(3) > .nav-link').contains('signup').click()
    cy.wait(2000)
})
})