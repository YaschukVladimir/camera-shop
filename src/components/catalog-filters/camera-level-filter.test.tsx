import { render, screen } from '@testing-library/react';
import CameraLevelFilter from './camera-level-filter';
import { withHistory } from '../../utils/mock-component';


describe('Component: CameraLevelFilter', () => {
  it('should render correct', () => {
    const expectedText = 'Уровень';
    const preparedComponent = withHistory(<CameraLevelFilter />);
    render(preparedComponent);
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
