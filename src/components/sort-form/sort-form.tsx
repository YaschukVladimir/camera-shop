
import { SortDirection, SortType } from '../../const';
import { useNavigate, useSearchParams } from 'react-router-dom';


function SortForm(): React.JSX.Element {

  const [searchParams] = useSearchParams();
  const sortType = searchParams.get('sortType') || '';
  const sortDirection = searchParams.get('sortDirection') || '';
  const navigate = useNavigate();

  const handleSetParams = (param: string, value: string) => {
    searchParams.set(param, value);
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPrice"
                name="sort"
                checked={sortType === 'Price'}
                onChange={() => handleSetParams('sortType', SortType.byPrice)}
              />
              <label htmlFor="sortPrice">по цене</label>
            </div>
            <div className="catalog-sort__btn-text">
              <input
                type="radio"
                id="sortPopular"
                name="sort"
                checked={sortType === 'Popular'}
                onChange={() => handleSetParams('sortType', SortType.byPopular)}
              />
              <label htmlFor="sortPopular">по популярности</label>
            </div>
          </div>
          <div className="catalog-sort__order">
            <div className="catalog-sort__btn catalog-sort__btn--up">
              <input
                type="radio"
                id="up"
                name="sort-icon"
                aria-label="По возрастанию"
                checked={sortDirection === 'asc'}
                onChange={() => handleSetParams('sortDirection', SortDirection.ascending)}
              />
              <label htmlFor="up">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="down"
                name="sort-icon"
                aria-label="По убыванию"
                checked={sortDirection === 'desc'}
                onChange={() => handleSetParams('sortDirection', SortDirection.descending)}
              />
              <label htmlFor="down">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SortForm;
