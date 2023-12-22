// cypress/signup_spec.js
describe('Signup Page Test', () => {
    beforeEach(() => {
      cy.visit('https://ambition.guru/');
      cy.visit('https://app.ambition.guru/register');
    });
  
    // Test Scenario 1: Verify the Signup page elements
    it('should display the signup page elements', () => {
      // Assertion: Check if the "Register to your Account" heading is visible
      cy.contains('h1', 'Register to your Account').should('be.visible');
      // Assertion: Check if the Name input field is visible
      cy.get("//input[@id='f_6758cc3d-ca7f-445d-893c-17905a9236e0']").should('be.visible');
      // Assertion: Check if the mobileno input field is visible
      cy.get("//div[@class='q-field__control relative-position row no-wrap text-negative']").should('be.visible'); 
      // Assertion: Check if the Signup button is visible
      cy.get("//span[@class='q-btn__content text-center col items-center q-anchor--skip justify-center row']").should('be.visible');
    });
  
    // Test Scenario 2: Verify successful signup with valid credentials
    it('should successfully signup with valid credentials', () => {
      // Test Data: Valid user information
      const user = {
        name: ' Sandip shrestha',
        mobileno: '9846776739',
        otpcode: '757684 '
      };
      // Action: Fill out the signup form with valid user information
      cy.get("//input[@id='f_b40b00d4-554e-45cf-823a-75372e3de3d9']").type(user.name);
      cy.get("//input[@id='f_0d6faa73-ffca-43cf-83da-ec888dd308f2']").type(user.mobileno);
      cy.get("//span[@class='q-btn__content text-center col items-center q-anchor--skip justify-center row']").click();
      cy.get("//input[@id='f_0f1caf1f-da1e-422a-b1e7-b695d2afeeed']").type(user.otpcode)
    });
  
    // Test Scenario 3: Verify error message for invalid mobileno format during signup
    it('should display an error message for invalid mobileno format', () => {
      // Test Data: Invalid mobileno format
      const invalidmobileno = '9876543210';
      // Action: Fill out the signup form with an invalid mobileno format
      cy.get("//input[@id='f_e5d4e053-13dd-46e7-b698-b03654cd0567']").type(invalidmobileno);
      cy.get("//span[@class='q-btn__content text-center col items-center q-anchor--skip justify-center row']").click();
  
      // Assertion: Check if an error message is displayed for invalid mobileno format
      cy.contains('You have entered an invalid mobile number. Please enter a valid mobile number.').should('be.visible');
    });
  });
  