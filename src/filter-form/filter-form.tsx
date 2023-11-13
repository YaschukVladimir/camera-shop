// import { useForm } from 'react-hook-form';
import CameraLevelFilter from '../components/catalog-filters/camera-level-filter';
import CameraTypeFilter from '../components/catalog-filters/camera-type-filter';
import CategoryFilter from '../components/catalog-filters/category-filter';
import PriceFilter from '../components/catalog-filters/price-filter';
import { Product } from '../types/types';
import { useNavigate, useSearchParams } from 'react-router-dom';

// type FormValues = {
//   price: number;
//   priceUp: number;
// }

type FilterFormProps = {
  products: Product[];
}

function FilterForm({ products }: FilterFormProps): React.JSX.Element {
  // const { register } = useForm<FormValues>({ mode: 'onChange' });
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleFilterReset = () => {
    searchParams.delete('_gte');
    searchParams.delete('_lte');
    searchParams.delete('category');
    searchParams.delete('type');
    navigate(`?${searchParams.toString()}`);
  };

  return (
    <div className="catalog-filter">
      <form action="#">
        <h2 className="visually-hidden">Фильтр</h2>
        <PriceFilter products={products} />
        <CategoryFilter />
        <CameraTypeFilter />
        <CameraLevelFilter />
      </form>
      <button
        className="btn catalog-filter__reset-btn"
        // type="reset"
        onClick={(evt) => {
          evt.preventDefault();
          handleFilterReset();
          // reset();
        }}
      >
        Сбросить фильтры
      </button>
    </div>
  );
}

export default FilterForm;
