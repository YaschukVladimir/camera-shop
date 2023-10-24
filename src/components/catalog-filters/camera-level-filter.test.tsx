import { render, screen } from '@testing-library/react';
import CameraLevelFilter from './camera-level-filter';


describe('Component: CameraLevelFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Уровень';
    render(<CameraLevelFilter />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
