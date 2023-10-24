import { useEffect, useState } from 'react';
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

function Catalog(): React.JSX.Element {

  const products = useAppSelector(getProducts);
  const promoProducts = useAppSelector(getPromoProducts);

  const [currentPage, setCurrentPage] = useState(1);

  const lastProductIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstProductIndex = lastProductIndex - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const [searchParams, setSearchParams] = useSearchParams({page: '1'});
  const pageQuery = searchParams.get('page') || '';

  const activeProduct = useAppSelector(getActiveModalProduct);


  useEffect (() => {
    setCurrentPage(+pageQuery);
  }, [pageQuery]);

  return (
    <>
      <div className="visually-hidden">
        <Icons />
      </div>
      <div className="wrapper">
        <Header />
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
                    <SortForm />
                    <div className="cards catalog__cards">
                      {currentProducts.map((product) => <ProductCard key={product.id} product={product}/>)}
                    </div>
                    <CataloguePagination
                      products={products}
                      setSearchParams={setSearchParams}
                      currentPage={currentPage}
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
