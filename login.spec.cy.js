import LoginPage from '../pageObjects/LoginPage';

describe('Login Page', () => {
  const validUserData = {
    email: 'hlotest00@gmail.com',
    password: 'test',
    username: 'rptest1',
  };

  beforeEach(() => {
    LoginPage.visit();
  });
//test1
  it('should display error message for invalid login', () => {
    LoginPage.fillEmail('invalid@gmail.com');
    LoginPage.fillPassword('wrongpassword');
    LoginPage.submitLoginForm();
    LoginPage.verifyErrorMessage('email or password is invalid');
  });
//test2
  it('should display error message for empty fields', () => {
    LoginPage.submitLoginForm();
    LoginPage.verifyErrorMessages("email can't be blank");
  });
//test3
  it('should successfully log in with valid credentials', () => {
    LoginPage.fillEmail(validUserData.email);
    LoginPage.fillPassword(validUserData.password);
    LoginPage.submitLoginForm();
    LoginPage.verifySuccessfulLogin(validUserData.username);
  });
   //test4
   it('should display error message for empty emails', () => {
    LoginPage.fillPassword('wrongpassword');
    LoginPage.submitLoginForm();
    LoginPage.verifyErrorMessages("email can't be blank");
  });
  //test5
  it('should display error message for empty password ', () => {
    LoginPage.fillEmail('invalid@gmail.com');
    LoginPage.submitLoginForm();
    LoginPage.verifyErrorMessagess("password can't be blank");
  });
});
