import { render, screen } from '@testing-library/react';
import PaginationButtonPrev from './pagination-button-prev';


describe('Component: PaginationButtonPrev', () => {
  it('should render correct', () => {

    const buttonTestId = 'pagination-button';
    render(<PaginationButtonPrev setSearchParams={() => ({page: '1'})} currentPage={1} direction='prev'/>);
    const button = screen.getByTestId(buttonTestId);
    expect(button).toBeInTheDocument();
  });
});
