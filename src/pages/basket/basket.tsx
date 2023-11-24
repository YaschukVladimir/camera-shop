import { useEffect } from 'react';
import BasketProductCard from '../../components/basket-product-card/basket-product-card';
import Header from '../../components/header/header';
import Icons from '../../components/icons/icons';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getIsProductsLoadingStatus, getLocalStorageProducts, getProducts } from '../../store/data-process/selectors';
import { Product } from '../../types/types';
import { LocalStorageProducts } from '../../components/buy-modal/buy-modal';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setLocalStorageProducts } from '../../store/data-process/data-process';
import Footer from '../../components/footer/footer';


function Basket(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const productsfromStore = useAppSelector(getLocalStorageProducts);
  const isProductsLoading = useAppSelector(getIsProductsLoadingStatus);

  useEffect(() => {
    if (productsfromStore.length === 0) {
      const productsFromStorage = JSON.parse(localStorage.getItem('basketProducts') as string) as LocalStorageProducts[];
      if (productsFromStorage) {
        dispatch(setLocalStorageProducts(productsFromStorage));
      }
    }
  }, []);

  useEffect(() => {
    if (productsfromStore.length) {
      localStorage.setItem('basketProducts', JSON.stringify(productsfromStore));
    }
  }, [productsfromStore]);

  const basketProducts: Product[] = [];

  productsfromStore.forEach(({productId}) => {
    const productInBasket = products.find((product) => product.id === Number(productId));
    if (productInBasket) {
      basketProducts.push(productInBasket);
    }
  });

  const countTotalProductSum = () => {
    const productsPrices = productsfromStore.map((product) => {
      const currentProduct = products.find(({id}) => id === product.productId);
      const currentProductSum = currentProduct ? currentProduct.price * product.productQuantity : 0;
      return currentProductSum;
    });
    return productsPrices.reduce((prev, next) => prev + next, 0);
  };

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
                    <a className="breadcrumbs__link" href="index.html">
                  Главная
                      <svg width={5} height={8} aria-hidden="true">
                        <use xlinkHref="#icon-arrow-mini" />
                      </svg>
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link" href="catalog.html">
                  Каталог
                      <svg width={5} height={8} aria-hidden="true">
                        <use xlinkHref="#icon-arrow-mini" />
                      </svg>
                    </a>
                  </li>
                  <li className="breadcrumbs__item">
                    <span className="breadcrumbs__link breadcrumbs__link--active">
                  Корзина
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <section className="basket">
              <div className="container">
                <h1 className="title title--h2">Корзина</h1>
                {isProductsLoading ? <p>...Loading</p> :
                  <ul className="basket__list">
                    {basketProducts.map((product) =>
                      (
                        <BasketProductCard
                          product={product}
                          key={product.id}
                        />
                      ))}
                  </ul>}
                <div className="basket__summary">
                  <div className="basket__promo">
                    <p className="title title--h4">
                  Если у вас есть промокод на скидку, примените его в этом поле
                    </p>
                    <div className="basket-form">
                      <form action="#">
                        <div className="custom-input">
                          <label>
                            <span className="custom-input__label">Промокод</span>
                            <input
                              type="text"
                              name="promo"
                              placeholder="Введите промокод"
                            />
                          </label>
                          <p className="custom-input__error">Промокод неверный</p>
                          <p className="custom-input__success">Промокод принят!</p>
                        </div>
                        <button className="btn" type="submit">
                      Применить
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="basket__summary-order">
                    <p className="basket__summary-item">
                      <span className="basket__summary-text">Всего:</span>
                      <span className="basket__summary-value">{`${countTotalProductSum()} ₽`}</span>
                    </p>
                    <p className="basket__summary-item">
                      <span className="basket__summary-text">Скидка:</span>
                      <span className="basket__summary-value basket__summary-value--bonus">
                    0 ₽
                      </span>
                    </p>
                    <p className="basket__summary-item">
                      <span className="basket__summary-text basket__summary-text--total">
                    К оплате:
                      </span>
                      <span className="basket__summary-value basket__summary-value--total">
                    111 390 ₽
                      </span>
                    </p>
                    <button className="btn btn--purple" type="submit" onClick={() => {
                      // localStorage.clear();
                      dispatch(setLocalStorageProducts([]));
                    }}
                    >
                  Оформить заказ
                    </button>
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

export default Basket;
