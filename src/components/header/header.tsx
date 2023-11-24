import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import SearchForm from '../search/search';
import { Product } from '../../types/types';
import { AppRoute } from '../../const';

type HeaderProps = {
  products: Product[];
}

function Header({products}: HeaderProps): React.JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container">
        <Logo />
        <Navigation />
        <SearchForm products={products}/>
        <Link className="header__basket-link" to={AppRoute.Basket}>
          <svg width={16} height={16} aria-hidden="true">
            <use xlinkHref="#icon-basket" />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
