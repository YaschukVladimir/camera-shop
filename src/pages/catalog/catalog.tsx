import Banner from '../../components/banner/banner';
import BreadCrumbs from '../../components/bread-crumbs/bread-crumbs';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import Icons from '../../components/icons/icons';
import Pagination from '../../components/pagination/pagination';
import ProductCard from '../../components/product-card/product-card';
import SortForm from '../../components/sort-form/sort-form';
import FilterForm from '../../filter-form/filter-form';


function Catalog(): React.JSX.Element {
  return (
    <>
      <div className="visually-hidden">
        <Icons />
      </div>
      <div className="wrapper">
        <Header />
        <main>
          <Banner />
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
                      <ProductCard />
                    </div>
                    <Pagination />
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
