import { render, screen } from '@testing-library/react';
import ProductDescription from './product-description';


describe('Component: ProductDescription', () => {
  it('should render correct', () => {
    const expectedProps = {
      activeProduct: {
        id: 0,
        name: 'dsvsdvds',
        vendorCode: 'dvdsv',
        type: 'sdvs',
        category: 'svsvs',
        description: 'fnhhn',
        level: 'nhnfnh',
        price: 444,
        rating: 110,
        reviewCount: 220,
        previewImg: 'bbgbg',
        previewImg2x: 'ffffff',
        previewImgWebp: 'gggg',
        previewImgWebp2x: 'gggg',
      },
      activeTab: 'description',
    };
    const {activeProduct} = expectedProps;
    const {activeTab} = expectedProps;
    const expectedText = activeProduct.description;
    const descriptionContainerTestId = 'description-container';

    render(<ProductDescription activeProduct={activeProduct} activeTab={activeTab} />);

    const descriptionContainer = screen.getByTestId(descriptionContainerTestId);
    expect(descriptionContainer).toBeInTheDocument();
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
