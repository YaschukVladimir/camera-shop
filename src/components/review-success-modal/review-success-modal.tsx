
import { useAppDispatch} from '../../hooks/use-app-dispatch';
import { useAppSelector } from '../../hooks/use-app-selector';
import { useModalCloseEffect } from '../../hooks/use-modal-close-effect';
import { setReviewSuccessModalActive } from '../../store/data-process/data-process';
import { getIsReviewSuccessModalActive } from '../../store/data-process/selectors';


function ReviewSuccessModal(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const isModalActive = useAppSelector(getIsReviewSuccessModalActive);

  const onCloseByKeyPress = (key: string) => {
    if (key === 'Escape') {
      dispatch(setReviewSuccessModalActive(false));
    }
  };

  useModalCloseEffect(isModalActive, onCloseByKeyPress);

  return (
    <div className={`modal ${isModalActive ? 'is-active' : ''} modal--narrow`} >
      <div className="modal__wrapper">
        <div className="modal__overlay" onClick={() => dispatch(setReviewSuccessModalActive(false))}/>
        <div className="modal__content">
          <p className="title title--h4">Спасибо за отзыв</p>
          <svg className="modal__icon" width={80} height={78} aria-hidden="true">
            <use xlinkHref="#icon-review-success" />
          </svg>
          <div className="modal__buttons">
            <button
              className="btn btn--purple modal__btn modal__btn--fit-width"
              type="button"
              onClick={() => dispatch(setReviewSuccessModalActive(false))}
            >
          Вернуться к покупкам
            </button>
          </div>
          <button className="cross-btn" type="button" aria-label="Закрыть попап" onClick={() => dispatch(setReviewSuccessModalActive(false))}>
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewSuccessModal;
