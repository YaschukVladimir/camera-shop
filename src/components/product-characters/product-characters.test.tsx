import { render, screen } from '@testing-library/react';
import ProductCharacters from './product-characters';

describe('Componen: ProductCharacters', () => {
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
      activeTab: 'characters',
    };
    const {activeProduct} = expectedProps;
    const {activeTab} = expectedProps;
    const expectedText = 'nhnfnh';
    const charactersContainerTestId = 'characters-list__container';
    render(<ProductCharacters activeProduct={activeProduct} activeTab={activeTab}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
    const charactersContainer = screen.getByTestId(charactersContainerTestId);
    expect(charactersContainer).toBeInTheDocument();

  });
});
