
import BreadCrumbs from '../../components/bread-crumbs/bread-crumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Icons from '../../components/icons/icons';
import CataloguePagination from '../../components/pagination/catalogue-pagination';
import ProductCard from '../../components/product-card/product-card';
import SortForm from '../../components/sort-form/sort-form';
import FilterForm from '../../filter-form/filter-form';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getActiveModalProduct, getProducts, getPromoProducts } from '../../store/data-process/selectors';
import { PRODUCTS_PER_PAGE } from '../../const';
import { useSearchParams } from 'react-router-dom';
import BuyModal from '../../components/buy-modal/buy-modal';
import 'swiper/swiper-bundle.css';
import PromoSlider from '../../components/promo-slider/promo-slider';
import { sortProducts } from '../../utils/utils';

function Catalog(): React.JSX.Element {

  const products = useAppSelector(getProducts);
  const promoProducts = useAppSelector(getPromoProducts);
  const [searchParams, setSearchParams] = useSearchParams({page: '', sortType: '', sortDirection: ''});
  const currentPage = searchParams.get('page') || '1';
  const sortType = searchParams.get('sortType') || '';
  const sortDirection = searchParams.get('sortDirection') || '';
  const sortedProducts = sortProducts(products, sortType, sortDirection);
  const lastProductIndex = Number(currentPage) * PRODUCTS_PER_PAGE;
  const firstProductIndex = lastProductIndex - PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(firstProductIndex, lastProductIndex);

  const activeProduct = useAppSelector(getActiveModalProduct);

  return (
    <>
      <div className="visually-hidden">
        <Icons />
      </div>
      <div className="wrapper">
        <Header products={products}/>
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
                    <FilterForm />
                  </div>
                  <div className="catalog__content">
                    <SortForm setSearchParams={setSearchParams} />
                    <div className="cards catalog__cards">
                      {currentProducts.map((product) => <ProductCard key={product.id} product={product}/>)}
                    </div>
                    <CataloguePagination
                      products={products}
                      setSearchParams={setSearchParams}
                      currentPage={Number(currentPage)}
                      sortType={sortType}
                      sortDirection={sortDirection}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
          <BuyModal activeProduct={activeProduct}/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Catalog;
