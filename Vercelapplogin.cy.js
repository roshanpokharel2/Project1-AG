describe('Verify Login with valid and invalid credencials', () => {
  
    beforeEach(()=>{
        cy.visit('https://next-realworld.vercel.app/user/login')
        
      })
      
  
  //TESTCASE:1
              it('Should verify login with valid signin users', () => {
                // cy.visit('https://next-realworld.vercel.app/user/login')
  
                cy.get(':nth-child(1) > .form-control').type("hlotest00@gmail.com");
                cy.get(':nth-child(2) > .form-control').type("test");
                cy.get('.btn').click()
                cy.get(':nth-child(3) > .nav-link').contains('Settings').click()
                cy.wait(2000)
                cy.get('.btn-outline-danger').contains('click here to logout.').click()
                cy.wait(2000)
                
              })
  
       
  //TESTCASE:2
              it('Should verify login with invalid signin users', () => {
                // cy.visit('https://next-realworld.vercel.app/user/login')
                
              cy.get(':nth-child(1) > .form-control').type(" yyy@gmail.com")
              cy.get(':nth-child(2) > .form-control').type("password")
              cy.get('.btn').click()
              cy.get('.error-messages > li').should('be.visible')
              cy.wait(2000)
              // }) 
              })
  //TESTCASE:3
            it('Should validate with empty email', () => {
              // cy.visit('https://next-realworld.vercel.app/user/login')
          
              cy.get(':nth-child(1) > .form-control')
              cy.get(':nth-child(2) > .form-control').type("test")
              cy.get('.btn').click()
              cy.get('.error-messages > li').should('be.visible')
              cy.wait(2000)
             
        
            })
  //TESTCASE:4
            it('Should verify with empty password', () => {
              // cy.visit('https://next-realworld.vercel.app/user/login')
          
              cy.get(':nth-child(1) > .form-control').type("hlotest00@gmail.com")
              cy.get(':nth-child(2) > .form-control')
              cy.get('.btn').click()
              cy.get('.error-messages > li').should('be.visible')
             
      
            })   
        })