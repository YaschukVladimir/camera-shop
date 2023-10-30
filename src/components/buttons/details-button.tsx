import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setModalActive } from '../../store/data-process/data-process';

type DetailsButtonProps = {
  id: number;
  buttonClass: string;
}

function DetailsButton({ id, buttonClass }: DetailsButtonProps): React.JSX.Element {

  const dispatch = useAppDispatch();

  const handleDetailsClick = () => {
    dispatch(setModalActive(false));
  };

  return (
    <Link className={`btn ${buttonClass}`} to={`/product/${id}/description`} onClick={() => {
      handleDetailsClick();
    }}
    >
      Подробнее
    </Link>
  );
}

export default DetailsButton;
