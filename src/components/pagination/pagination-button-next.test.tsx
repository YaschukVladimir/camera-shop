import { render, screen } from '@testing-library/react';
import PaginationButtonNext from './pagination-button-next';


describe('Component: PaginationButtonNext', () => {
  it('should render correct', () => {

    const buttonTestId = 'pagination-button';
    render(<PaginationButtonNext setSearchParams={() => ({page: '1'})} currentPage={1} direction='next'/>);
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
  });
});
