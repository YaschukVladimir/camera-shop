import { Link } from 'react-router-dom';

type DetailsButtonProps = {
  id: number;
}

function DetailsButton({id}: DetailsButtonProps): React.JSX.Element {
  return (
    <Link className="btn btn--transparent" to={`/product/${id}`}>
                        Подробнее
    </Link>
  );
}

export default DetailsButton;
