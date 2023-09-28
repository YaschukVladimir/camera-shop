import { Link } from 'react-router-dom';

function DetailsButton(): React.JSX.Element {
  return (
    <Link className="btn btn--transparent" to="#">
                        Подробнее
    </Link>
  );
}

export default DetailsButton;
