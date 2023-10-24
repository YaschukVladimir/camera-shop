import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function Logo(): React.JSX.Element {
  return (
    <Link
      className="header__logo"
      to={AppRoute.Root}
      aria-label="Переход на главную"
    >
      <svg width={100} height={36} aria-hidden="true" data-testid="logo-svg">
        <use xlinkHref="#icon-logo" />
      </svg>
    </Link>
  );
}

export default Logo;
