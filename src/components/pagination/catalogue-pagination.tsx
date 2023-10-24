import { useEffect, useState } from 'react';
import { Direction, PAGES_TO_SHOW, PRODUCTS_PER_PAGE } from '../../const';
import { Product } from '../../types/types';
import PaginationButtonPrev from './pagination-button-prev';
import PaginationButtonNext from './pagination-button-next';
import { Link, SetURLSearchParams } from 'react-router-dom';


type PaginationProps = {
  products: Product[];
  setSearchParams: SetURLSearchParams;
  currentPage: number;
}

function CataloguePagination({products, setSearchParams, currentPage}: PaginationProps): React.JSX.Element {

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

  return (
    <div className="pagination">
      <ul className="pagination__list" data-testid="pagination-list">
        {currentPage > 1 ?
          <PaginationButtonPrev
            setSearchParams={setSearchParams}
            currentPage={currentPage}
            direction={Direction.Prev}
          /> : ''}
        {pagesQuantity.length && availablePages.map((index) => (
          <li className="pagination__item" key={index} onClick={() => {
            setSearchParams({page: index.toString()});
          }} style={{cursor: 'pointer'}}
          >
            <Link to={`/?page=${index}`}
              className={`pagination__link ${currentPage === index ? 'pagination__link--active' : ''}`}
            >
              {index}
            </Link>
          </li>
        ))}
        {pagesQuantity.length > PAGES_TO_SHOW && pagesQuantity.length > currentPage ?
          <PaginationButtonNext
            setSearchParams={setSearchParams}
            currentPage={currentPage}
            direction={Direction.Next}
          /> : ''}
      </ul>
    </div>
  );
}

export default CataloguePagination;
