import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getSuccesAddToBasketModalStatus } from '../../store/data-process/selectors';
import { AppRoute } from '../../const';
import { useModalCloseEffect } from '../../hooks/use-modal-close-effect';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setSuccesAddTobasketModalActive } from '../../store/data-process/data-process';
import { useFocusTrap } from '../../hooks/use-focus-trap';


function AddToBasketModal(): React.JSX.Element {

  const isModalActive = useAppSelector(getSuccesAddToBasketModalStatus);
  const dispatch = useAppDispatch();
  const handleModalClose = () => {
    dispatch(setSuccesAddTobasketModalActive(false));
  };
  const onCloseByKeyPress = (key: string) => {
    if (key === 'Escape') {
      handleModalClose();
    }
  };
  const navigate = useNavigate();
  const modalRef = useFocusTrap({isModalActive});

  useModalCloseEffect(isModalActive, onCloseByKeyPress);

  return (
    <div className={`modal ${isModalActive ? 'is-active' : ''} modal--narrow`} ref={modalRef}>
      <div className="modal__wrapper" data-testid="modal-wrapper">
        <div className="modal__overlay" onClick={handleModalClose}/>
        <div className="modal__content">
          <p className="title title--h4">Товар успешно добавлен в корзину</p>
          <svg className="modal__icon" width={86} height={80} aria-hidden="true">
            <use xlinkHref="#icon-success" />
          </svg>
          <div className="modal__buttons">
            <button className="btn btn--transparent modal__btn" onClick={() => {
              navigate(AppRoute.Catalogue);
              handleModalClose();
            }}
            >
              Продолжить покупки
            </button>
            <button className="btn btn--purple modal__btn modal__btn--fit-width"
              onClick={() => {
                handleModalClose();
                navigate(AppRoute.Basket);
              }}
            >
              Перейти в корзину
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={handleModalClose}>
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>

  );
}

export default AddToBasketModal;
