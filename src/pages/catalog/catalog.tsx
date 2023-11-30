
import BreadCrumbs from '../../components/bread-crumbs/bread-crumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Icons from '../../components/icons/icons';
import CataloguePagination from '../../components/pagination/catalogue-pagination';
import ProductCard from '../../components/product-card/product-card';
import SortForm from '../../components/sort-form/sort-form';
import FilterForm from '../../filter-form/filter-form';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getActiveModalProduct, getIsProductsLoadingStatus, getIsProductsRequestError, getLocalStorageProducts, getProducts, getPromoProducts } from '../../store/data-process/selectors';
import { PRODUCTS_PER_PAGE } from '../../const';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BuyModal, { LocalStorageProducts } from '../../components/buy-modal/buy-modal';
import 'swiper/swiper-bundle.css';
import PromoSlider from '../../components/promo-slider/promo-slider';
import { filterProductsByCategory, filterProductsByLevels, filterProductsByPrice, filterProductsByTypes, sortProducts } from '../../utils/utils';
import ErrorScreen from '../../components/error-screen/error-screen';
import { useEffect, useState } from 'react';
import AddToBasketModal from '../../components/add-to-basket-modal/add-to-basket-modal';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setLocalStorageProducts } from '../../store/data-process/data-process';

function Catalog(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const isProductsRequestError = useAppSelector(getIsProductsRequestError);
  const isProductsLoading = useAppSelector(getIsProductsLoadingStatus);
  const promoProducts = useAppSelector(getPromoProducts);
  const activeProduct = useAppSelector(getActiveModalProduct);

  const [searchParams] = useSearchParams({page: '', sortType: '', sortDirection: ''});
  const currentPage = searchParams.get('page') || '1';
  const sortType = searchParams.get('sortType') || '';
  const sortDirection = searchParams.get('sortDirection') || '';
  const _gte = searchParams.get('_gte') || '';
  const _lte = searchParams.get('_lte') || '';
  const category = searchParams.get('category') || '';
  const cameraTypes = searchParams.get('type')?.split(',') || [];
  const cameraLevels = searchParams.get('level')?.split(',') || [];

  const filteredProductsByCategory = filterProductsByCategory(products, category);
  const filtereredProductsByType = filterProductsByTypes(filteredProductsByCategory, cameraTypes);
  const filteredProductsByLevel = filterProductsByLevels(filtereredProductsByType, cameraLevels);

  const filteredProducts = filterProductsByPrice(filteredProductsByLevel, Number(_gte), Number(_lte));
  const sortedProducts = sortProducts(filteredProducts, sortType, sortDirection);
  const lastProductIndex = Number(currentPage) * PRODUCTS_PER_PAGE;
  const firstProductIndex = lastProductIndex - PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(firstProductIndex, lastProductIndex);

  const productMinPrice = filteredProductsByLevel.length && filteredProductsByLevel.reduce((min, product) =>
    (product.price < min.price ? product : min), products[0]).price;
  const productMaxPrice = filteredProductsByLevel.length && filteredProductsByLevel.reduce((max, product) =>
    (product.price > max.price ? product : max), products[0]).price;

  const [productsFromStorage] = useState(JSON.parse(localStorage.getItem('basketProducts') as string) as LocalStorageProducts[]);

  useEffect(() => {
    if (productsFromStorage !== null) {
      dispatch(setLocalStorageProducts(JSON.parse(localStorage.getItem('basketProducts') as string) as LocalStorageProducts[]));
    }
  }, [productsFromStorage]);

  const localStorageProducts = useAppSelector(getLocalStorageProducts);

  const navigate = useNavigate();

  useEffect(() => {
    if (_gte.length && Number(_gte) < productMinPrice) {
      searchParams.set('_gte', productMinPrice.toString());
      navigate(`?${searchParams.toString()}`);
    }
    if (_lte.length && Number(_lte) > productMaxPrice) {
      searchParams.set('_lte', productMaxPrice.toString());
      navigate(`?${searchParams.toString()}`);
    }
    return () => searchParams.delete('_gte');
  }, [cameraTypes.length, cameraLevels.length, category]);

  return (
    <>
      <div className="visually-hidden">
        <Icons />
      </div>
      <div className="wrapper">
        <Header products={products}/>
        {isProductsRequestError ? <ErrorScreen /> :
          <main>
            <PromoSlider promoProducts={promoProducts} />
            <div className="page-content">
              <div className="breadcrumbs">
                <BreadCrumbs />
              </div>
              <section className="catalog">
                <div className="container">
                  <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
                  <div className="page-content__columns">
                    <div className="catalog__aside">
                      <FilterForm productMinPrice={productMinPrice} productMaxPrice={productMaxPrice}/>
                    </div>
                    <div className="catalog__content">
                      <SortForm />
                      {isProductsLoading ? <p> Loading...</p> :
                        <div className="cards catalog__cards">
                          {currentProducts.length ?
                            currentProducts.map((product) =>
                              <ProductCard key={product.id} product={product} productsFromStorage={localStorageProducts}/>) :
                            <p> По заданным параметрам, товаров не найдено</p>}
                        </div>}
                      <CataloguePagination
                        products={filteredProductsByLevel}
                        currentPage={Number(currentPage)}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <BuyModal activeProduct={activeProduct}/>
            <AddToBasketModal />
          </main>}
        <Footer />
      </div>
    </>
  );
}

export default Catalog;
