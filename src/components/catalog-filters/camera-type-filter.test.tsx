import { render, screen } from '@testing-library/react';
import CameraTypeFilter from './camera-type-filter';
import { withHistory } from '../../utils/mock-component';


describe('Component: CameraTypeFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Тип камеры';
    const preparedComponent = withHistory(<CameraTypeFilter />);
    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
