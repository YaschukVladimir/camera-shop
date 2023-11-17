
import CameraLevelFilter from '../components/catalog-filters/camera-level-filter';
import CameraTypeFilter from '../components/catalog-filters/camera-type-filter';
import CategoryFilter from '../components/catalog-filters/category-filter';
import PriceFilter from '../components/catalog-filters/price-filter';
import { useNavigate, useSearchParams } from 'react-router-dom';


type FilterFormProps = {
  productMinPrice: number;
  productMaxPrice: number;
}

function FilterForm({productMinPrice, productMaxPrice}: FilterFormProps): React.JSX.Element {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleFilterReset = () => {
    searchParams.delete('_gte');
    searchParams.delete('_lte');
    searchParams.delete('category');
    searchParams.delete('type');
    searchParams.delete('level');
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <PriceFilter productMinPrice={productMinPrice} productMaxPrice={productMaxPrice} />
        <CategoryFilter />
        <CameraTypeFilter />
        <CameraLevelFilter />
      </form>
      <button
        className="btn catalog-filter__reset-btn"
        onClick={(evt) => {
          evt.preventDefault();
          handleFilterReset();
        }}
      >
        Сбросить фильтры
      </button>
    </div>
  );
}

export default FilterForm;
