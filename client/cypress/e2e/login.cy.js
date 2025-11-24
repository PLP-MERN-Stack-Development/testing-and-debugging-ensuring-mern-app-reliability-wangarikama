describe('User Authentication Flow', () => {
  
  beforeEach(() => {
    cy.visit('/login'); 
  });

  it('should allow a user to log in successfully and redirect', () => {
    // 1. Fill credentials
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    
    // 2. Click submit button
    cy.get('button[type="submit"]').click();

    // 3. Assert redirection and successful element (e.g., dashboard link)
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
    // Store the token or session if subsequent tests require authentication
  });

  it('should display an error for invalid credentials (Error Handling)', () => {
    // 1. Fill incorrect credentials
    cy.get('input[name="email"]').type('bad@example.com');
    cy.get('input[name="password"]').type('wrongpass');
    
    // 2. Click submit
    cy.get('button[type="submit"]').click();

    // 3. Assert error message visibility
    cy.contains(/invalid credentials|login failed/i).should('be.visible');
    cy.url().should('include', '/login'); 
  });
});