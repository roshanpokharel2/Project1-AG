// cypress/integration/login_spec.js
describe('Login Page Test', () => {
    beforeEach(() => {
      cy.visit('https://ambition.guru/');
      cy.visit('https://app.ambition.guru/login');
    });
  
    // Test Scenario 1: Verify the Login page elements
    it('should display the login page elements', () => {
      // Assertion: Check if the "Login to your account." heading is visible
      cy.contains('h1', 'Login to your account.').should('be.visible');
      // Assertion: Check if the mobileno input field is visible
      cy.get("//form[@class='q-form']//div[@class='form-group col-12']").should('be.visible');
      // Assertion: Check if the Login button is visible
      cy.get("//span[@class='q-btn__content text-center col items-center q-anchor--skip justify-center row']").should('be.visible');
    });
  
    // Test Scenario 2: Verify error message for invalid login
    it('should show error message for invalid login', () => {
      // Test Data: Invalid email and password
      const invalidmobileno = '1234567890';
      // Action: Fill out the login form with invalid credentials
      cy.get("//input[@id='f_641f273a-aab7-4c84-b0ba-db7127cb329a']").type(invalidmobileno);
      cy.get("//span[@class='q-btn__content text-center col items-center q-anchor--skip justify-center row']").click();
      // Assertion: Check if an error message is displayed for invalid login
      cy.contains('You have entered an invalid mobile number. Please enter a valid mobile number.').should('be.visible');
    });
  
    // Test Scenario 3: Verify successful login with valid credentials
    it('should successfully login with valid credentials', () => {
      // Test Data: Valid user information
      const user = {
        mobileno: '9861389660',
        otpcode: '716902'
      };
      // Action: Fill out the login form with valid credentials
      cy.get("//input[@id='f_641f273a-aab7-4c84-b0ba-db7127cb329a']").type(user.mobileno);
      cy.get("//input[@id='f_cc1b3808-8350-49cf-8ca0-c1face9a7410']").type(user.otpcode);
      cy.get("//span[@class='q-btn__content text-center col items-center q-anchor--skip justify-center row']").click();
   
    });
  });
  