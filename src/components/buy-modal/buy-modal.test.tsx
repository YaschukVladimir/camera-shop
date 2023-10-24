import { render, screen } from '@testing-library/react';
import { withStore } from '../../utils/mock-component';
import BuyModal from './buy-modal';
import { makeFakeStore } from '../../utils/mock';

describe('Component: BuyModal', () => {
  it('should render correct', () => {
    const mockProduct = {
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
    };

    const modalWrapperTestId = 'modal-wrapper';
    const { withStoreComponent } = withStore(<BuyModal activeProduct={mockProduct} />, makeFakeStore());
    render(withStoreComponent);
    const modalWrapper = screen.getByTestId(modalWrapperTestId);
    expect(modalWrapper).toBeInTheDocument();
  });
});
