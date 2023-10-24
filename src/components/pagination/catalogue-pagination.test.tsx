import { screen, render } from '@testing-library/react';
import { withHistory } from '../../utils/mock-component';
import CataloguePagination from './catalogue-pagination';

describe('Component: CataloguePagination', () => {
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

    const expectedProps = {
      products: [mockProduct],
      setSearchParams: () => ({page: '1'}),
      currentPage: 1,
    };
    const cataloguePaginationTestId = 'pagination-list';
    const preparedComponent = withHistory(
      <CataloguePagination
        products={expectedProps.products}
        setSearchParams={expectedProps.setSearchParams}
        currentPage={expectedProps.currentPage}
      />);
    render(preparedComponent);
    const cataloguePaginationList = screen.getByTestId(cataloguePaginationTestId);
    expect(cataloguePaginationList).toBeInTheDocument();
  });
});
