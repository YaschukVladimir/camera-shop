import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';

function Header(): React.JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo />
        <Navigation />
        <div className="form-search" data-testid="form-search__container">
          <form>
            <label>
              <svg
                className="form-search__icon"
                width={16}
                height={16}
                aria-hidden="true"
              >
                <use xlinkHref="#icon-lens" />
              </svg>
              <input
                className="form-search__input"
                type="text"
                autoComplete="off"
                placeholder="Поиск по сайту"
              />
            </label>
            <ul className="form-search__select-list">
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 8i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 7i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 6i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 5i
              </li>
              <li className="form-search__select-item" tabIndex={0}>
                Cannonball Pro MX 4i
              </li>
            </ul>
          </form>
          <button className="form-search__reset" type="reset">
            <svg width={10} height={10} aria-hidden="true">
              <use xlinkHref="#icon-close" />
            </svg>
            <span className="visually-hidden">Сбросить поиск</span>
          </button>
        </div>
        <Link className="header__basket-link" to="#">
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
