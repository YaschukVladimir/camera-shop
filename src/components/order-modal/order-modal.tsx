import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useFocusTrap } from '../../hooks/use-focus-trap';
import { useModalCloseEffect } from '../../hooks/use-modal-close-effect';
import { setIsOrderModalActive } from '../../store/data-process/data-process';
import { getIsOrderModalActive, getPostProductsStatus } from '../../store/data-process/selectors';
import { AppRoute } from '../../const';

function OrderModal(): React.JSX.Element {
  const dispatch = useAppDispatch();
  const orderStatus = useAppSelector(getPostProductsStatus);
  const isModalActive = useAppSelector(getIsOrderModalActive);
  const navigate = useNavigate();

  const onModalClose = (route: string) => {
    dispatch(setIsOrderModalActive(false));
    navigate(route);
  };

  const onCloseByKeyPress = (key: string) => {
    if (key === 'Escape') {
      onModalClose('');
    }
  };

  useModalCloseEffect(isModalActive, onCloseByKeyPress);

  const modalRef = useFocusTrap({isModalActive});

  return (
    <div className={`modal ${isModalActive ? 'is-active' : ''}`} ref={modalRef}>
      <div className="modal__wrapper" data-testid="modal-wrapper">
        <div className="modal__overlay" onClick={() => onModalClose('')}/>
        {orderStatus ?
          <div className="modal__content">
            <p className="title title--h4">Спасибо за покупку</p>
            <svg className="modal__icon" width={80} height={78} aria-hidden="true">
              <use xlinkHref="#icon-review-success" />
            </svg>
            <div className="modal__buttons">
              <button
                className="btn btn--purple modal__btn modal__btn--fit-width"
                type="button"
                onClick={() => {
                  // navigate(AppRoute.Catalogue);
                  onModalClose(AppRoute.Catalogue);
                }}
              >
              Вернуться к покупкам
              </button>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => onModalClose('')}>
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>
          :
          <div className="modal__content">
            <p className="title title--h4">Произошла ошибка, попробуйте снова</p>
            <svg className="modal__icon" width={80} height={78} color='red' aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
            <div className="modal__buttons">
              <button
                className="btn btn--purple modal__btn modal__btn--fit-width"
                type="button"
                onClick={() => onModalClose('')}
              >
              Вернуться к покупкам
              </button>
            </div>
            <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => onModalClose('')}>
              <svg width={10} height={10} aria-hidden="true">
                <use xlinkHref="#icon-close" />
              </svg>
            </button>
          </div>}
      </div>
    </div>
  );
}

export default OrderModal;
