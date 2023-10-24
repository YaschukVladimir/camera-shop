import { render, screen} from '@testing-library/react';
import { MemoryHistory, createMemoryHistory } from 'history';
import MainApp from './main-app';
import { withHistory, withStore } from '../../utils/mock-component';
import { makeFakeStore } from '../../utils/mock';
import { AppRoute } from '../../const';
import Product from '../../pages/product/product';

describe('Application Routing', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render "catalog" when user navigate to "/"', () => {
    const withHistoryComponent = withHistory(<MainApp />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    mockHistory.push(AppRoute.Root);

    render(withStoreComponent);

    expect(screen.getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });

  it('should render "Product" when user navigate to "/product/:id"', () => {
    const withHistoryComponent = withHistory(<Product />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const productSectionTestId = 'product-section';
    mockHistory.push(AppRoute.Product);

    render(withStoreComponent);

    const productSection = screen.getByTestId(productSectionTestId);
    expect(productSection).toBeInTheDocument();
  });

  it('should render "NotFoundScreen" when user navigate to non-existent route', () => {
    const withHistoryComponent = withHistory(<MainApp />, mockHistory);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());
    const unknownRoute = '/unknown-route';
    mockHistory.push(unknownRoute);

    render(withStoreComponent);

    expect(screen.getByText('Page not found')).toBeInTheDocument();
  });
});
