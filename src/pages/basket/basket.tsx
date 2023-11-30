import { useEffect, useState } from 'react';
import BasketProductCard from '../../components/basket-product-card/basket-product-card';
import Header from '../../components/header/header';
import Icons from '../../components/icons/icons';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getIsProductsLoadingStatus, getLocalStorageProducts, getProducts, getPromoCodeStatus, getPromoDiscount } from '../../store/data-process/selectors';
import { Coupon, Product } from '../../types/types';
import { LocalStorageProducts } from '../../components/buy-modal/buy-modal';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setLocalStorageProducts } from '../../store/data-process/data-process';
import Footer from '../../components/footer/footer';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postBasketProducts, postPromoCode } from '../../store/api-actions';
import DeleteFromBasketModal from '../../components/delete-from-basket-modal/delete-from-basket-modal';
import { AppRoute, PostedProducts, PromocodeStatus } from '../../const';
import { Link } from 'react-router-dom';
import OrderModal from '../../components/order-modal/order-modal';


function Basket(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const products = useAppSelector(getProducts);
  const productsfromStore = useAppSelector(getLocalStorageProducts);
  const isProductsLoading = useAppSelector(getIsProductsLoadingStatus);
  const discount = useAppSelector(getPromoDiscount);
  const [coupon, setCoupon] = useState({coupon: ''});
  const { register, handleSubmit, reset } = useForm<Coupon>({mode: 'onSubmit'});
  const promoCodeStatus = useAppSelector(getPromoCodeStatus);

  const onSubmitForm: SubmitHandler<Coupon> = (data: Coupon) => {
    dispatch(postPromoCode(data));
    reset();
  };

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

  const discountSum = countTotalProductSum() / 100 * discount;

  const ammountToPay = countTotalProductSum() - discountSum;

  const getCouponName = () => {
    switch (discount) {
      case 35:
        return 'camera-555';
      case 25:
        return 'camera-444';
      case 15:
        return 'camera-333';
      default:
        return null;
    }
  };

  const createOrderData = (): PostedProducts => {
    if (productsfromStore.length > 0) {
      const ids: number[] = [];
      productsfromStore.forEach((product) => {
        for (let i = 0; i < product.productQuantity; i++) {
          ids.push(product.productId);
        }
      });
      return {
        camerasIds: ids,
        coupon: getCouponName(),
      };
    } else {
      return {
        camerasIds: [],
        coupon: '',
      };
    }
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
                      <form action="#" onSubmit={(evt) => void handleSubmit(onSubmitForm)(evt)}>
                        <div className="custom-input">
                          <label>
                            <span className="custom-input__label">Промокод</span>
                            <input
                              {...register('coupon', {
                                required: true
                              })}
                              type="text"
                              placeholder="Введите промокод"
                              onChange={(evt) => setCoupon({...coupon, coupon: evt.currentTarget.value})}
                            />
                          </label>
                          {promoCodeStatus === PromocodeStatus.INVALID && <p className="custom-input__error" style={{opacity: 1}}>Промокод неверный</p>}
                          {promoCodeStatus === PromocodeStatus.VALID && <p className="custom-input__success" style={{opacity: 1}}>Промокод принят!</p>}
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
                        {`${discountSum} ₽`}
                      </span>
                    </p>
                    <p className="basket__summary-item">
                      <span className="basket__summary-text basket__summary-text--total">
                    К оплате:
                      </span>
                      <span className="basket__summary-value basket__summary-value--total">
                        {`${ammountToPay} ₽`}
                      </span>
                    </p>
                    <button className="btn btn--purple" type="submit"
                      onClick={() => {
                        dispatch(postBasketProducts(createOrderData()));
                        localStorage.setItem('basketProducts', JSON.stringify([]));
                      }}
                      disabled={!basketProducts.length}
                    >
                  Оформить заказ
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <DeleteFromBasketModal />
        <OrderModal />
        <Footer />
      </div>
    </>
  );
}

export default Basket;
