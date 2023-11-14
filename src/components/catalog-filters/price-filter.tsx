
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Product } from '../../types/types';


type PriceFilterProps = {
  products: Product[];
}

function PriceFilter({ products}: PriceFilterProps): React.JSX.Element {

  const navigate = useNavigate();
  const productMinPrice = products.length && products.reduce((min, product) => (product.price < min.price ? product : min), products[0]).price;
  const productMaxPrice = products.length && products.reduce((max, product) => (product.price > max.price ? product : max), products[0]).price;

  const [searchParams] = useSearchParams();
  const handleSetParams = (param: string, value: string) => {
    searchParams.set(param, value);
    navigate(`?${searchParams.toString()}`);
  };

  const _gte = searchParams.get('_gte');
  const _lte = searchParams.get('_lte');

  const autoChangePrice = (param: string, value: string) => {
    if (param === '_gte') {
      if (Number(value) < productMinPrice) {
        searchParams.set(param, productMinPrice.toString());
        navigate(`?${searchParams.toString()}`);
      }
    }
    if (param === '_lte') {
      if (Number(value) > productMaxPrice) {
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
              placeholder={`от ${productMinPrice}`}
              value={Number(_gte) ? Number(_gte) : ''}
              onChange={(evt) => {
                handleSetParams('_gte', evt.currentTarget.value);
              }}
              onBlur={(evt) => autoChangePrice('_gte', evt.currentTarget.value)}
            />
          </label>
        </div>
        <div className="custom-input">
          <label>
            <input style={{padding: '8px 10px'}}
              type="number"
              name="priceUp"
              placeholder={`до ${productMaxPrice}`}
              value={Number(_lte) ? Number(_lte) : ''}
              onChange={(evt) => {
                handleSetParams('_lte', evt.currentTarget.value);
              }}
              onBlur={(evt) => autoChangePrice('_lte', evt.currentTarget.value)}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
}

export default PriceFilter;
