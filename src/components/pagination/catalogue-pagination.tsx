import { useEffect, useState } from 'react';
import { Direction, PAGES_TO_SHOW, PRODUCTS_PER_PAGE } from '../../const';
import { Product } from '../../types/types';
import PaginationButtonPrev from './pagination-button-prev';
import PaginationButtonNext from './pagination-button-next';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';


type PaginationProps = {
  products: Product[];
  currentPage: number;
}

function CataloguePagination({products, currentPage}: PaginationProps): React.JSX.Element {

  const pagesQuantity = Array.from({length: Math.ceil(products.length / PRODUCTS_PER_PAGE)}, (_, index) => index + 1);

  const [availablePages, setAvailablePages] = useState(pagesQuantity.slice(0, 3));

  useEffect(() => {
    if (currentPage <= PAGES_TO_SHOW) {
      setAvailablePages(pagesQuantity.slice(0, 3));
    }
    if (currentPage % PAGES_TO_SHOW === 1 && currentPage > 1) {
      setAvailablePages(pagesQuantity.slice(currentPage - 1, currentPage + 2));
    }
    if (currentPage % PAGES_TO_SHOW === 0 && currentPage > PAGES_TO_SHOW) {
      setAvailablePages(pagesQuantity.slice((currentPage - PAGES_TO_SHOW), currentPage));
    }
    if (currentPage % PAGES_TO_SHOW === 2 && currentPage > PAGES_TO_SHOW) {
      setAvailablePages(pagesQuantity.slice(currentPage - 2, currentPage + 1));
    }
  }, [products, currentPage]);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSetParams = (param: string, value: string) => {
    searchParams.set(param, value);
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="pagination">
      <ul className="pagination__list" data-testid="pagination-list">
        {currentPage > 1 ?
          <PaginationButtonPrev
            currentPage={currentPage}
            direction={Direction.Prev}
          /> : ''}
        {pagesQuantity.length && availablePages.map((index) => (
          <li className="pagination__item" key={index} onClick={() => {
            handleSetParams('page', index.toString());
          }} style={{cursor: 'pointer'}}
          >
            <Link to={`?${searchParams.toString()}`} className={`pagination__link ${currentPage === index ? 'pagination__link--active' : ''}`}>
              {index}
            </Link>
          </li>
        ))}
        {pagesQuantity.length > PAGES_TO_SHOW && pagesQuantity.length > currentPage ?
          <PaginationButtonNext
            currentPage={currentPage}
            direction={Direction.Next}
          /> : ''}
      </ul>
    </div>
  );
}

export default CataloguePagination;
