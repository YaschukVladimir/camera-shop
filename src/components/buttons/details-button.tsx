import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setModalActive } from '../../store/data-process/data-process';

type DetailsButtonProps = {
  id: number;
}

function DetailsButton({id}: DetailsButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch();

  const handleDetailsClick = () => {
    dispatch(setModalActive(false));
  };

  return (
    <Link className="btn btn--transparent" to={`/product/${id}/description`} onClick={() => {
      handleDetailsClick();
    }}
    >
                        Подробнее
    </Link>
  );
}

export default DetailsButton;
