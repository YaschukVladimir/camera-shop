import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Review from '../../components/review/review';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { getActiveModalProduct, getActiveProduct, getIsActiveProductLoadingStatus, getProducts, getReviews, getSimilarProducts } from '../../store/data-process/selectors';
import { fetchActiveModalProduct, fetchActiveProduct, fetchReviews, fetchSimilarProducts } from '../../store/api-actions';
import { useEffect, useState } from 'react';
import ProductCharacters from '../../components/product-characters/product-characters';
import ProductDescription from '../../components/product-description/product-description';
import SimilarProductsSlider from '../../components/similar-products-slider/similar-products-slider';
import Footer from '../../components/footer/footer';
import BuyModal from '../../components/buy-modal/buy-modal';
import Rating from '../../components/rating/rating';
import { setModalActive, setReviewModalActive } from '../../store/data-process/data-process';
import { AppRoute } from '../../const';
import getSortedReviewsByDate from '../../utils/utils';
import ReviewModal from '../../components/comments-modal/comments-modal';
import ReviewSuccessModal from '../../components/review-success-modal/review-success-modal';
import NotFoundPage from '../../components/not-found-page/not-found-page';
import { useAppSelector } from '../../hooks/use-app-selector';
import Icons from '../../components/icons/icons';
import AddToBasketModal from '../../components/add-to-basket-modal/add-to-basket-modal';

const REVIEWS_TO_SHOW = 3;

function Product(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const {id, title} = useParams();
  useEffect(() => {
    if (id) {
      dispatch(fetchActiveProduct(+id));
      dispatch(fetchSimilarProducts(+id));
      dispatch(fetchReviews(+id));
    }
  }, [id]);

  const products = useAppSelector(getProducts);
  const activeProduct = useAppSelector(getActiveProduct);
  const activeModalProduct = useAppSelector(getActiveModalProduct);
  const similarProducts = useAppSelector(getSimilarProducts);
  const isActiveProductLoading = useAppSelector(getIsActiveProductLoadingStatus);
  const [activeTab, setActiveTab] = useState(title);
  const reviews = useAppSelector(getReviews);
  const [reviewsToShow, setRewiesToShow] = useState(reviews.slice(0, REVIEWS_TO_SHOW));

  const lastReviewIndex = reviewsToShow.length + REVIEWS_TO_SHOW;

  const sortedReviews = getSortedReviewsByDate(reviews);

  useEffect(() => {
    setRewiesToShow(sortedReviews.slice(0, 3));
  }, [reviews]);

  const showMoreReviewsHandler = () => {
    setRewiesToShow(sortedReviews.slice(0, lastReviewIndex));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const onBuyButtonClick = () => {
    dispatch(setModalActive(true));
    dispatch(fetchActiveModalProduct(activeProduct?.id));
  };

  if (isActiveProductLoading) {
    return (
      <p> Loading...</p>
    );
  }

  if (activeProduct) {
    return (
      <>
        <div className="visually-hidden">
          <Icons />
        </div>
        <div className="wrapper">
          <Header products={products}/>
          <main>
            <div className="page-content">
              <div className="breadcrumbs">
                <div className="container">
                  <ul className="breadcrumbs__list">
                    <li className="breadcrumbs__item">
                      <Link className="breadcrumbs__link" to={AppRoute.Root}>
                      Главная
                        <svg width={5} height={8} aria-hidden="true">
                          <use xlinkHref="#icon-arrow-mini" />
                        </svg>
                      </Link>
                    </li>
                    <li className="breadcrumbs__item">
                      <Link className="breadcrumbs__link" to={AppRoute.Catalogue}>
                      Каталог
                        <svg width={5} height={8} aria-hidden="true">
                          <use xlinkHref="#icon-arrow-mini" />
                        </svg>
                      </Link>
                    </li>
                    <li className="breadcrumbs__item">
                      <span className="breadcrumbs__link breadcrumbs__link--active">
                        {activeProduct?.name}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="page-content__section">
                <section className="product" data-testid="product-section">
                  <div className="container">
                    <div className="product__img">
                      <picture>
                        <source
                          type="image/webp"
                          srcSet={`/${activeProduct?.previewImgWebp}`}
                        />
                        <img
                          src={`/${activeProduct?.previewImg }`}
                          srcSet={`/${activeProduct?.previewImgWebp }`}
                          width={560}
                          height={480}
                          alt={activeProduct?.name}
                        />
                      </picture>
                    </div>
                    <div className="product__content">
                      <h1 className="title title--h3">{activeProduct?.name}</h1>
                      <Rating activeProduct={activeProduct} />
                      <p className="product__price">
                        <span className="visually-hidden">Цена:</span>{`${new Intl.NumberFormat().format(activeProduct.price)} ₽`}
                      </p>
                      <button className="btn btn--purple" type="button" onClick={onBuyButtonClick}>
                        <svg width={24} height={16} aria-hidden="true">
                          <use xlinkHref="#icon-add-basket" />
                        </svg>
                      Добавить в корзину
                      </button>
                      <div className="tabs product__tabs">
                        <div className="tabs__controls product__tabs-controls">
                          { id &&
                            <>
                              <Link to={`/product/${id}/characters`}
                                className={`tabs__control ${activeTab === 'characters' ? 'is-active' : ''}`}
                                type="button"
                                onClick={() => setActiveTab('characters')}
                              >
                                Характеристики
                              </Link>
                              <Link to={`/product/${id}/description`}
                                className={`tabs__control ${activeTab === 'description' ? 'is-active' : ''}`}
                                type="button"
                                onClick={() => setActiveTab('description')}
                              >
                                  Описание
                              </Link>
                            </>}
                        </div>
                        <div className="tabs__content">
                          {activeTab === 'characters' ?
                            <ProductCharacters activeProduct={activeProduct} activeTab={activeTab as string}/> :
                            <ProductDescription activeProduct={activeProduct} activeTab={activeTab as string} />}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="page-content__section">
                <section className="product-similar">
                  <div className="container">
                    <h2 className="title title--h3">Похожие товары</h2>
                    <SimilarProductsSlider similarProducts={similarProducts}/>
                  </div>
                </section>
              </div>
              <div className="page-content__section">
                <section className="review-block">
                  <div className="container">
                    <div className="page-content__headed">
                      <h2 className="title title--h3">Отзывы</h2>
                      <button className="btn" type="button" onClick={(evt) => {
                        dispatch(setReviewModalActive(true));
                        evt.currentTarget.blur();
                      }}
                      >
                      Оставить свой отзыв
                      </button>
                    </div>
                    <ul className="review-block__list">
                      {reviewsToShow.map((review) => <Review key={review.id} reviewProps={review} />)}
                    </ul>
                    <div className="review-block__buttons">
                      {reviews.length && reviewsToShow.length < reviews.length ?
                        <button className="btn btn--purple" type="button" onClick={showMoreReviewsHandler}>
                        Показать больше отзывов
                        </button> : ''}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <ReviewModal id={activeProduct?.id}/>
            <ReviewSuccessModal />
            <BuyModal activeProduct={activeModalProduct}/>
            <AddToBasketModal />
          </main>
          <button type="button" className="up-btn" onClick={scrollToTop}>
            <svg width={12} height={18} aria-hidden="true">
              <use xlinkHref="#icon-arrow2" />
            </svg>
          </button>
          <Footer />
        </div>
      </>
    );
  } else {
    return <NotFoundPage />;
  }
}

export default Product;
