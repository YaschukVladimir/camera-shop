import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchActiveModalProduct } from '../../store/api-actions';
import { setModalActive } from '../../store/data-process/data-process';


type BuyButtonProps = {
  id: number;
}

function BuyButton({ id }: BuyButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch();
  const handleBuyButtonClick = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(fetchActiveModalProduct(id));
    dispatch(setModalActive(true));
    evt.currentTarget.blur();
  };

  return (
    <button
      className="btn btn--purple product-card__btn"
      type="button"
      onClick={handleBuyButtonClick}
    >
      Купить
    </button>
  );
}

export default BuyButton;
