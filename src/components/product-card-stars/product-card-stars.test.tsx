import { render, screen } from '@testing-library/react';
import ProductCardStars from './product-card-stars';


describe('Component: ProductCardStars', () => {
  it('should render correct', () => {
    const starTestId = 'star';
    render(<ProductCardStars rating={1} reviewCount={5}/>);
    const stars = screen.getAllByTestId(starTestId);

    expect(stars.length).toEqual(5);
  });
});

