import CameraLevelFilter from '../components/catalog-filters/camera-level-filter';
import CameraTypeFilter from '../components/catalog-filters/camera-type-filter';
import CategoryFilter from '../components/catalog-filters/category-filter';
import PriceFilter from '../components/catalog-filters/price-filter';

function FilterForm(): React.JSX.Element {
  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <PriceFilter />
        <CategoryFilter />
        <CameraTypeFilter />
        <CameraLevelFilter />
        <button
          className="btn catalog-filter__reset-btn"
          type="reset"
        >
                      Сбросить фильтры
        </button>
      </form>
    </div>
  );
}

export default FilterForm;
