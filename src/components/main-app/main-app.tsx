import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Basket from '../../pages/basket/basket';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import NotFoundPage from '../not-found-page/not-found-page';


function MainApp(): React.JSX.Element {

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Root} element={<Catalog />} />
        <Route path={AppRoute.Product} element={<Product />} />
        <Route path={AppRoute.ProductAbout} element={<Product />} />
        <Route path={AppRoute.Basket} element={<Basket />} />
        <Route path={AppRoute.NotFound} element= {<NotFoundPage />} />
      </Routes>
    </HistoryRouter>
  );
}

export default MainApp;
