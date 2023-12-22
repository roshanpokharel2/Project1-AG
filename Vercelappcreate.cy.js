// describe('New Post Functionality', () => {
    // Define test data
    const testUser = {
      email: 'hlotest00@gmail.com',
      password: 'test',
      username: 'rptest1',
    };
  
    const testPost = {
      title: 'Test Post Title1',
      description: 'This is a test post1.',
      body: 'This is the body of the test post1.',
      tags: ['test1', 'cypress1', 'automation1'],
    };
  
    before(() => {
      //  login
      cy.visit('https://next-realworld.vercel.app/');
      cy.contains('Sign in').click();
    });
    it('Should create a new post successfully', () => {
      cy.get('input[type="email"]').type(testUser.email); 
      cy.get('input[type="password"]').type(testUser.password); 
      cy.get('button[type="submit"]').click();
      cy.contains('New Post').click();
      cy.get('input[placeholder="Article Title"]').type(testPost.title);
      cy.get('input[placeholder="What\'s this article about?"]').type(testPost.description);
      cy.get('textarea[placeholder="Write your article (in markdown)"]').type(testPost.body);
      cy.get('input[placeholder="Enter tags"]').type(testPost.tags.join(', '));
      cy.contains('Publish Article').click();
     cy.visit('https://next-realworld.vercel.app/');
    });
  // });
  