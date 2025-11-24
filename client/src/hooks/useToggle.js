import { useState, useCallback } from 'react';

/**
 * Custom hook to manage a boolean state with a toggle function.
 * @param {boolean} initialState - The initial state (default is false).
 * @returns {[boolean, function]} - Returns the current state and the toggle function.
 */
const useToggle = (initialState = false) => {
  // Initialize the state
  const [state, setState] = useState(initialState);

  // Memoize the toggle function using useCallback for stability
  const toggle = useCallback(() => setState(s => !s), []);

  return [state, toggle];
};

module.exports = useToggle;