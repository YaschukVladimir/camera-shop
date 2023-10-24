import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import Basket from '../../pages/basket/basket';
import Catalog from '../../pages/catalog/catalog';
import Product from '../../pages/product/product';
import NotFoundPage from '../not-found-page/not-found-page';


function MainApp(): React.JSX.Element {

  return (

    <Routes>
      <Route path={AppRoute.Root} element={<Catalog />} />
      <Route path={AppRoute.Product} element={<Product />} />
      <Route path={AppRoute.ProductAbout} element={<Product />} />
      <Route path={AppRoute.Basket} element={<Basket />} />
      <Route path={AppRoute.NotFound} element= {<NotFoundPage />} />
    </Routes>

  );
}

export default MainApp;
