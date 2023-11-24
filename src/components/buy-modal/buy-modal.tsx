
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setLocalStorageProducts, setModalActive, setSuccesAddTobasketModalActive } from '../../store/data-process/data-process';
import { getIsModalActive, getLocalStorageProducts } from '../../store/data-process/selectors';
import { ActiveProduct } from '../../types/types';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useModalCloseEffect } from '../../hooks/use-modal-close-effect';
import { useEffect, useRef } from 'react';
import { useFocusTrap } from '../../hooks/use-focus-trap';

type BuyModalProps = {
  activeProduct: ActiveProduct;
}

export type LocalStorageProducts = {
  productId: number;
  productQuantity: number;
}


function BuyModal({ activeProduct }: BuyModalProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const isModalActive = useAppSelector(getIsModalActive);
  const productsfromStore = useAppSelector(getLocalStorageProducts);
  const handleModalClose = () => {
    dispatch(setModalActive(false));
  };

  const onCloseByKeyPress = (key: string) => {
    if (key === 'Escape') {
      handleModalClose();
    }
  };

  useModalCloseEffect(isModalActive, onCloseByKeyPress);

  const purpleButtonRef = useRef<HTMLButtonElement | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isModalActive && purpleButtonRef.current) {
      setTimeout(() => {
        purpleButtonRef.current?.focus();
      }, 300);
    }
  }, [isModalActive]);

  const modalRef = useFocusTrap({isModalActive});

  // const productsFromStorage = JSON.parse(localStorage.getItem('basketProducts') as string) as LocalStorageProducts[];

  // const [basketProductsIds, setBasketProductsIds] = useState<LocalStorageProducts[]>(productsFromStorage || []);

  const handleAddToBasket = () => {
    if (productsfromStore.some(({productId}) => productId === activeProduct.id)) {
      dispatch(setLocalStorageProducts(([...productsfromStore.map((basketProduct) => {
        if (basketProduct.productId === activeProduct.id) {
          return {
            productId: basketProduct.productId,
            productQuantity: basketProduct.productQuantity + 1,
          };
        }
        return basketProduct;
      })])));
    } else {
      dispatch(setLocalStorageProducts(([...productsfromStore, {productId: activeProduct.id, productQuantity: 1}])));
    }
    dispatch(setModalActive(false));
    dispatch(setSuccesAddTobasketModalActive(true));
  };

  useEffect(() => {
    if (productsfromStore.length) {
      localStorage.setItem('basketProducts', JSON.stringify(productsfromStore));
    }
    // dispatch(setLocalStorageProducts(basketProductsIds));
  }, [productsfromStore]);

  useEffect(() => {
    if (productsfromStore.length === 0) {
      const productsFromStorage = JSON.parse(localStorage.getItem('basketProducts') as string) as LocalStorageProducts[];
      if (productsFromStorage) {
        dispatch(setLocalStorageProducts(productsFromStorage));
      }
    }
  }, []);

  //  console.log(basketProductsIds, 'ttt')
  return (
    <div className={`modal ${isModalActive ? 'is-active' : ''}`} role="dialog" aria-modal="true" ref={modalRef}>
      <div className="modal__wrapper" data-testid="modal-wrapper" >
        <div className="modal__overlay" onClick={handleModalClose} />
        <div className="modal__content">
          <p className="title title--h4">Добавить товар в корзину</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`/${activeProduct?.previewImgWebp}`}
                />
                <img
                  src={`/${activeProduct?.previewImg}`}
                  srcSet={activeProduct?.previewImg2x}
                  width={140}
                  height={120}
                  alt={activeProduct?.name}
                />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{activeProduct?.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>{' '}
                  <span className="basket-item__number">{activeProduct?.vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{activeProduct?.type}</li>
                <li className="basket-item__list-item">{activeProduct?.level}</li>
              </ul>
              <p className="basket-item__price">
                <span className="visually-hidden">Цена:</span>{`${new Intl.NumberFormat().format(activeProduct.price)} ₽`}
              </p>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              ref={purpleButtonRef}
              onClick={handleAddToBasket}
            >
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>
              Добавить в корзину
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleModalClose} ref={closeButtonRef}>
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuyModal;

