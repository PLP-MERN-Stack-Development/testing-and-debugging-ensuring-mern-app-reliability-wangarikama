describe('User Authentication Flow', () => {
  it('should allow a user to login successfully', () => {
    cy.visit('/login'); 
    
    // Test for critical user flow (login)
    cy.get('input[name="email"]').type('testuser@example.com');
    cy.get('input[name="password"]').type('password123');
    
    cy.get('button[type="submit"]').click();

    // Assert redirection to the dashboard
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome').should('be.visible');
  });

  it('should show error for invalid credentials (Error Handling)', () => {
    cy.visit('/login'); 
    
    cy.get('input[name="email"]').type('bad@example.com');
    cy.get('input[name="password"]').type('wrongpass');
    
    cy.get('button[type="submit"]').click();

    // Assert error message
    cy.contains('Invalid credentials or an error occurred').should('be.visible');
  });
});