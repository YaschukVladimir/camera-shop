import { Link } from 'react-router-dom';
import { navigationList } from '../../const';

function Navigation(): React.JSX.Element {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        {Object.entries(navigationList).map(([key, value]) => (
          <li className="main-nav__item" key={key}>
            <Link className="main-nav__link" to={'/'}>
              {value}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
