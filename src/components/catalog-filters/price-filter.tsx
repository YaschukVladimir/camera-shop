
import { useNavigate, useSearchParams } from 'react-router-dom';

type PriceFilterProps = {
  productMinPrice: number;
  productMaxPrice: number;
}

function PriceFilter({productMinPrice, productMaxPrice}: PriceFilterProps): React.JSX.Element {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const handleSetParams = (param: string, value: string) => {
    searchParams.set(param, value);
    navigate(`?${searchParams.toString()}`);
  };

  const _gte = searchParams.get('_gte');
  const _lte = searchParams.get('_lte');

  const handleChangePrice = (param: string, value: string) => {
    if (param === '_gte') {
      if (Number(value) < productMinPrice && Number(value) !== 0) {
        searchParams.set(param, productMinPrice.toString());
        navigate(`?${searchParams.toString()}`);
      }
      if (_lte?.length && Number(_gte) > Number(_lte)) {
        searchParams.set(param, _lte);
        navigate(`?${searchParams.toString()}`);
      }
    }
    if (param === '_lte') {
      if (Number(value) > productMaxPrice && Number(value) !== 0) {
        searchParams.set(param, productMaxPrice.toString());
        navigate(`?${searchParams.toString()}`);
      }
      if (_gte?.length && Number(value) < Number(_gte)) {
        searchParams.set(param, _gte);
        navigate(`?${searchParams.toString()}`);
      }
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="title title--h5">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="custom-input">
          <label>
            <input style={{padding: '8px 10px'}}
              type="number"
              name="price"
              placeholder={productMinPrice.toString()}
              value={Number(_gte) ? Number(_gte) : ''}
              onChange={(evt) => {
                handleSetParams('_gte', evt.currentTarget.value);
              }}
              onBlur={(evt) => handleChangePrice('_gte', evt.currentTarget.value)}
              onKeyDown={(evt) => {
                if (evt.key === 'Enter') {
                  handleChangePrice('_gte', evt.currentTarget.value);
                }
              }}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input style={{padding: '8px 10px'}}
              type="number"
              name="priceUp"
              placeholder={productMaxPrice.toString()}
              value={Number(_lte) ? Number(_lte) : ''}
              onChange={(evt) => {
                handleSetParams('_lte', evt.currentTarget.value);
              }}
              onBlur={(evt) => handleChangePrice('_lte', evt.currentTarget.value)}
              onKeyDown={(evt) => {
                if (evt.key === 'Enter') {
                  handleChangePrice('_lte', evt.currentTarget.value);
                }
              }}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
