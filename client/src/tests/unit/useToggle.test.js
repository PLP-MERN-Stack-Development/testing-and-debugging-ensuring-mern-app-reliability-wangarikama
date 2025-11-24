const { renderHook, act } = require('@testing-library/react');
const useToggle = require('../../hooks/useToggle');

describe('useToggle Hook', () => {
  
  // Test case 1: Check default initialization
  it('should initialize with false if no argument is provided', () => {
    const { result } = renderHook(() => useToggle());
    // result.current[0] is the state value
    expect(result.current[0]).toBe(false); 
  });

  // Test case 2: Check initialization with true
  it('should initialize with the provided initial state (true)', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current[0]).toBe(true);
  });

  // Test case 3: Check the toggle functionality
  it('should toggle the state from false to true and back to false', () => {
    const { result } = renderHook(() => useToggle(false));
    
    // Toggle from false to true
    act(() => {
      // result.current[1] is the toggle function
      result.current[1](); 
    });
    expect(result.current[0]).toBe(true);
    
    // Toggle from true back to false
    act(() => {
      result.current[1](); 
    });
    expect(result.current[0]).toBe(false);
  });
});