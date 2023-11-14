import { render, screen } from '@testing-library/react';
import PaginationButtonNext from './pagination-button-next';
import { withHistory } from '../../utils/mock-component';


describe('Component: PaginationButtonNext', () => {
  it('should render correct', () => {

    const buttonTestId = 'pagination-button';
    const preparedComponent = withHistory(<PaginationButtonNext currentPage={1} direction='next'/>);
    render(preparedComponent);
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
  });
});
