import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import SearchForm from '../search/search';
import { Product } from '../../types/types';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getLocalStorageProducts } from '../../store/data-process/selectors';

type HeaderProps = {
  products: Product[];
}

function Header({products}: HeaderProps): React.JSX.Element {

  const productsFromStore = useAppSelector(getLocalStorageProducts);
  const countStoreProducts = () => {
    const basketProductsQuantity = productsFromStore.map(({productQuantity}) => productQuantity);
    const total = basketProductsQuantity.reduce((prev, next) => prev + next, 0);
    return total;
  };

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
          {productsFromStore && productsFromStore.length ? <span className="header__basket-count">{countStoreProducts()}</span> : ''}
        </Link>
      </div>
    </header>
  );
}

export default Header;
