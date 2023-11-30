import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { setDeleteBasketModalActive, setLocalStorageProducts, setProductToDeleteFromBasket } from '../../store/data-process/data-process';
import { getDeleteFromBasketModalStatus, getLocalStorageProducts, getProductToDelete } from '../../store/data-process/selectors';
import { AppRoute } from '../../const';
import { useModalCloseEffect } from '../../hooks/use-modal-close-effect';
import { useFocusTrap } from '../../hooks/use-focus-trap';
import { Product } from '../../types/types';

function DeleteFromBasketModal(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const productsfromStore = useAppSelector(getLocalStorageProducts);
  const isModalActive = useAppSelector(getDeleteFromBasketModalStatus);
  const productToDelete = useAppSelector(getProductToDelete);

  const handleDeleteProduct = () => {
    dispatch(setLocalStorageProducts([...productsfromStore.filter(({productId}) => productId !== productToDelete.id)]));
    localStorage.setItem('basketProducts',
      JSON.stringify([...productsfromStore.filter(({productId}) => productId !== productToDelete.id)]));
    dispatch(setProductToDeleteFromBasket({} as Product));
  };

  const onModalClose = () => {
    dispatch(setDeleteBasketModalActive(false));
  };

  const onCloseByKeyPress = (key: string) => {
    if (key === 'Escape') {
      onModalClose();
    }
  };

  useModalCloseEffect(isModalActive, onCloseByKeyPress);

  const modalRef = useFocusTrap({isModalActive});
  const navigate = useNavigate();


  return (
    <div className={`modal ${isModalActive ? 'is-active' : ''}`} ref={modalRef}>
      <div className="modal__wrapper" data-testid="modal-wrapper">
        <div className="modal__overlay" onClick={onModalClose}/>
        <div className="modal__content">
          <p className="title title--h4">Удалить этот товар?</p>
          <div className="basket-item basket-item--short">
            <div className="basket-item__img">
              <picture>
                <source
                  type="image/webp"
                  srcSet={`${productToDelete.previewImgWebp}, ${productToDelete.previewImgWebp2x}`}
                />
                <img
                  src={productToDelete.previewImg}
                  srcSet={productToDelete.previewImg2x}
                  width={140}
                  height={120}
                  alt={`${productToDelete.type} «${productToDelete.name}»`}
                />
              </picture>
            </div>
            <div className="basket-item__description">
              <p className="basket-item__title">{productToDelete.name}</p>
              <ul className="basket-item__list">
                <li className="basket-item__list-item">
                  <span className="basket-item__article">Артикул:</span>
                  <span className="basket-item__number">{productToDelete.vendorCode}</span>
                </li>
                <li className="basket-item__list-item">{`${productToDelete.category} ${productToDelete.type}`}</li>
                <li className="basket-item__list-item">{`${productToDelete.level} уровень`}</li>
              </ul>
            </div>
          </div>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--half-width"
              type="button"
              onClick={() => {
                handleDeleteProduct();
                onModalClose();
              } }
            >
              Удалить
            </button>
            <button
              className="btn btn--transparent modal__btn modal__btn--half-width"
              onClick={() => {
                navigate(AppRoute.Catalogue);
                onModalClose();
              }}
            >
              Продолжить покупки
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  );
}

export default DeleteFromBasketModal;
