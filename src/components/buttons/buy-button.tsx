import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { fetchActiveProduct } from '../../store/api-actions';


type BuyButtonProps = {
  id: number;
}

function BuyButton({id}: BuyButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch();
  return (
    <button
      className="btn btn--purple product-card__btn"
      type="button"
      onClick={() => {
        dispatch(fetchActiveProduct(id));
      }}
    >
                        Купить
    </button>
  );
}

export default BuyButton;
