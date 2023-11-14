import { render, screen } from '@testing-library/react';
import PaginationButtonPrev from './pagination-button-prev';
import { withHistory } from '../../utils/mock-component';


describe('Component: PaginationButtonPrev', () => {
  it('should render correct', () => {

    const buttonTestId = 'pagination-button';
    const preparedComponent = withHistory(<PaginationButtonPrev currentPage={1} direction='prev'/>);
    render(preparedComponent);
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
  });
});
