import { ChangeEvent, useState } from 'react';
import { Product } from '../../types/types';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSearchItemsFocus } from '../../hooks/use-search-items-focus';

type SearchFormProps = {
  products: Product[];
}

type FormValues = {
  search: string;
}

const SEARCH_QUERY = 3;

function SearchForm({products}: SearchFormProps): React.JSX.Element {

  const [listOpened, setListOpened] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const { register, reset } = useForm<FormValues>({mode: 'onChange'});
  const listRef = useSearchItemsFocus({listOpened});

  const onSearchClose = () => {
    setSearchValue('');
    setListOpened(false);
    reset();
  };

  const handleInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.currentTarget.value);
    if (evt.currentTarget.value.length >= SEARCH_QUERY) {
      setListOpened(true);
    }
    if (!evt.currentTarget.value.length) {
      setListOpened(false);
    }
  };

  const searchProducts = products ? products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase())) : [];

  const handleKeyPress = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onSearchClose();
    }
    if (evt.key === 'ArrowDown') {
      const firstChild = listRef.current?.childNodes[0] as HTMLElement;
      firstChild.focus();
    }
  };


  return (
    <div className={`form-search ${listOpened ? 'list-opened' : ''}`} data-testid="form-search__container">
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
            {...register('search')}
            className="form-search__input"
            type="text"
            autoComplete="off"
            placeholder="Поиск по сайту"
            onChange={handleInputChange}
            onKeyDown={() => handleKeyPress}
          />
        </label>
        <ul className="form-search__select-list" ref={listRef}>
          {searchProducts.length ? searchProducts.map((product) => (
            <li className="form-search__select-item"
              tabIndex={0} key={product.id}
              onClick={() => navigate(`/product/${product.id}/description`)}
              onKeyDown={(evt) => {
                if (evt.key === 'Escape') {
                  onSearchClose();
                }
                if (evt.key === 'Enter') {
                  navigate(`/product/${product.id}/description`);
                }
              }}
            >
              {product.name}
            </li>
          )) : ''}
        </ul>
      </form>
      <button className="form-search__reset" type="reset" onClick={onSearchClose} style={searchValue.length ? {display: 'flex'} : {display: 'none'}}>
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
        <span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default SearchForm;
