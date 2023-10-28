import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchActiveModalProduct } from '../../store/api-actions';
import { setModalActive } from '../../store/data-process/data-process';


type BuyButtonProps = {
  id: number;
}

function BuyButton({ id }: BuyButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch();
  return (
    <button
      className="btn btn--purple product-card__btn"
      type="button"
      onClick={(evt) => {
        dispatch(fetchActiveModalProduct(id));
        dispatch(setModalActive(true));
        evt.currentTarget.blur();
      }}
    >
      Купить
    </button>
  );
}

export default BuyButton;
