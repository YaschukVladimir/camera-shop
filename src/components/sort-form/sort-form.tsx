import { useEffect, useState } from 'react';
import { SortDirection, SortType } from '../../const';
import { SetURLSearchParams, useNavigate, useSearchParams } from 'react-router-dom';

type SortFormProps = {
  setSearchParams: SetURLSearchParams;
}

function SortForm({setSearchParams}: SortFormProps): React.JSX.Element {

  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const sortType = searchParams.get('sortType') || '';
  const sortDirection = searchParams.get('sortDirection') || '';
  // const [params, setParams] = useState({page: currentPage , sortType: sortType, sortDirection: sortDirection});
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (searchParams.size === 0) {
  //     setParams({page: '1', sortType: '', sortDirection: ''});
  //   }
  //   setSearchParams(params);
  // }, [params, searchParams.size]);

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
                // onChange={() => {
                //   const updatedParams = {...params, page: searchParams.get('page') || '1', sortType: SortType.byPrice};
                //   setParams(updatedParams);
                // }}
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
                // onChange={() => {
                //   const updatedParams = {...params, page:searchParams.get('page') || '1', sortType: SortType.byPopular};
                //   setParams(updatedParams);
                // }}
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
                // onChange={() => {
                //   const updatedParams = {...params, page:searchParams.get('page') || '1', sortDirection: SortDirection.ascending};
                //   setParams(updatedParams);
                // }}
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
                // onChange={() => {
                //   const updatedParams = {...params, page:searchParams.get('page') || '1', sortDirection: SortDirection.descending};
                //   setParams(updatedParams);
                // }}
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
