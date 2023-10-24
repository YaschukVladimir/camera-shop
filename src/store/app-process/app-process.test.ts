import { appProcess, clearError, setError } from './app-process';

describe('app process slice', () => {
  const expectedState = {
    error: null,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = appProcess.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });
  it('should set error to state', () => {
    const result = appProcess.reducer(expectedState, setError('error'));
    expect(result.error).toBe('error');
  });
  it('should clear state error to delay', () => {
    const result = appProcess.reducer(expectedState, clearError({message:'error', delay: 100}));
    expect(result.error).toBe('error');
  });
});
