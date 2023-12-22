import RegisPage from '../pageObjects/RegisPage';

describe('Registration Page', () => {
  const validUserData = {
    username: 'ambitiontest',
    email: 'ambitiontest@gmail.com',
    password: 'test',
  };

  beforeEach(() => {
    RegisPage.visit();
  });

  it('should display error message for existing email', () => {
    RegisPage.fillUsername(validUserData.username);
    RegisPage.fillEmail(validUserData.email);
    RegisPage.fillPassword(validUserData.password);
    RegisPage.submitRegistrationForm();
    RegisPage.verifyErrorMessage('email has already been taken');
  });

  it('should display error message for Blank Password', () => {
    RegisPage.fillUsername(validUserData.username);
    RegisPage.fillEmail(validUserData.email);
    RegisPage.submitRegistrationForm();
    RegisPage.verifyErrorMessage("password can't be blank");
  });
  it('should display error message for Blank Username ', () => {
    RegisPage.fillEmail("hey123@gmail.com");
    RegisPage.fillPassword('test');
    RegisPage.submitRegistrationForm();
    RegisPage.verifyErrorMessage("username can't be blank");
  });
  it('should display error message for Blank email', () => {
    RegisPage.fillUsername(validUserData.username);
    RegisPage.fillPassword(validUserData.password);
    RegisPage.submitRegistrationForm();
    RegisPage.verifyErrorMessage("email can't be blank");
  });
  it('should successfully register with valid credentials', () => {
    RegisPage.fillUsername(validUserData.username);
    RegisPage.fillEmail(validUserData.email);
    RegisPage.fillPassword(validUserData.password);
    RegisPage.submitRegistrationForm();
    
  });
});
