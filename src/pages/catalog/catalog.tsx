import { useState } from 'react';
import Banner from '../../components/banner/banner';
import BreadCrumbs from '../../components/bread-crumbs/bread-crumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Icons from '../../components/icons/icons';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/product-card/product-card';
import SortForm from '../../components/sort-form/sort-form';
import FilterForm from '../../filter-form/filter-form';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { getProducts, getPromoProducts } from '../../store/data-process/selectors';
import { PRODUCTS_PER_PAGE } from '../../const';


function Catalog(): React.JSX.Element {

  const products = useAppSelector(getProducts);
  const promoProducts = useAppSelector(getPromoProducts);

  const [currentPage, setCurrentPage] = useState(1);

  const lastProductIndex = currentPage * PRODUCTS_PER_PAGE;
  const firstProductIndex = lastProductIndex - PRODUCTS_PER_PAGE;
  const currentProducts = products.slice(firstProductIndex, lastProductIndex);

  const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);


  return (
    <>
      <div className="visually-hidden">
        <Icons />
      </div>
      <div className="wrapper">
        <Header />
        <main>
          {promoProducts.length && <Banner promoProducts={promoProducts}/>}
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
                    <Pagination
                      products={products}
                      paginate={paginate}
                      currentPage={currentPage}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default Catalog;
