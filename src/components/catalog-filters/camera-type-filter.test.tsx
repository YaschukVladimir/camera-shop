import { render, screen } from '@testing-library/react';
import CameraTypeFilter from './camera-type-filter';


describe('Component: CameraTypeFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Тип камеры';
    render(<CameraTypeFilter />);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
