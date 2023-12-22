import LoginPage1 from '../pageObjects/LoginPage1';

describe('verify login with valid and invalid data', () => {
    beforeEach(() => {
        cy.visit("https://next-realworld.vercel.app/user/login");
    });

    it('should verify login with invalid signin users', () => {
        cy.fixture('invalidlogin.json').then(logins => {
            logins.forEach(login => {
                const ln = new LoginPage1();
                ln.setUserName(login.username);
                ln.setPassword(login.password);
                ln.clickSubmit();
                ln.verifyInvalidLogin();
            });
        });
    });
});
