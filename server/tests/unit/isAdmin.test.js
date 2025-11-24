const isAdmin = require('../../src/middleware/isAdmin');
describe('isAdmin Middleware Unit Test', () => {
  
  // Helper function to create mock Express response object
  const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res); 
    res.json = jest.fn().mockReturnValue(res); 
    return res;
  };
  
  const mockNext = jest.fn(); 

  beforeEach(() => {
    // Clear mock calls before each test to ensure isolation
    jest.clearAllMocks();
  });

  it('should call next() if the authenticated user is an admin', () => {
    const req = { user: { role: 'admin', id: 1 } };
    const res = mockResponse();
    
    isAdmin(req, res, mockNext);
    
    // Assert that 'next' was called, allowing the request to proceed
    expect(mockNext).toHaveBeenCalledTimes(1);
    expect(res.status).not.toHaveBeenCalled(); // Should not send an error response
  });

  it('should return 403 Forbidden if the authenticated user is a regular user', () => {
    const req = { user: { role: 'user', id: 2 } };
    const res = mockResponse();
    
    isAdmin(req, res, mockNext);
    
    // Assert that 'next' was NOT called
    expect(mockNext).not.toHaveBeenCalled();
    // Assert that a 403 Forbidden error response was sent
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ 
        message: 'Access denied. Administrator privileges required.' 
    });
  });

  it('should return 403 Forbidden if there is no authenticated user (req.user is undefined)', () => {
    const req = {}; // No user attached
    const res = mockResponse();
    
    isAdmin(req, res, mockNext);
    
    expect(mockNext).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(403);
  });
});